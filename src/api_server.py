from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
import importlib

sap_module = importlib.import_module("src.sap.client")
SAPClientClass = getattr(sap_module, "SAPClient", getattr(sap_module, "SAPODataClient", None))

from src.agents.governance import SwarmGovernanceGuardrails, CircuitBreakerException
from src.engine.telemetry import SwarmTelemetry

app = FastAPI(title="KVRAT.ai - Autonomous Enterprise API")

if SAPClientClass:
    try:
        sap_client = SAPClientClass()
    except TypeError:
        sap_client = SAPClientClass(base_url="https://mock-sap.kvrat.ai/sap/opu/odata/sap/")
else:
    sap_client = None

governance = SwarmGovernanceGuardrails()
telemetry = SwarmTelemetry()

class PackagingRequest(BaseModel):
    item_id: str
    weight_kg: float
    dimensions_cm: list[float]
    fragility_g: float

class ManualApprovalRequest(BaseModel):
    transaction_id: str
    approved: bool

@app.get("/health")
def health_check():
    return {"status": "ONLINE", "circuit_breaker_state": governance.state}

@app.post("/api/v1/optimize-packaging")
def optimize_packaging(req: PackagingRequest, background_tasks: BackgroundTasks):
    try:
        estimated_cost = req.weight_kg * 12.5
        gov_check = governance.check_transaction(calculated_cost=estimated_cost, fragility_g=req.fragility_g)

        if gov_check["requires_human_approval"]:
            telemetry.send_webhook_alert(
                "Human Approval Needed", 
                f"Transaction for Item {req.item_id} exceeds threshold. Cost: "
            )
            return {
                "status": "PENDING_APPROVAL",
                "message": gov_check["reason"],
                "item_id": req.item_id
            }

        background_tasks.add_task(
            telemetry.log_event, 
            "decision_made", 
            {"item_id": req.item_id, "savings": estimated_cost * 0.18}
        )

        return {
            "status": "SUCCESS",
            "item_id": req.item_id,
            "specification": "32 ECT Single-Wall C-Flute with Bio-foam inserts",
            "governance": gov_check
        }

    except CircuitBreakerException as e:
        background_tasks.add_task(telemetry.log_event, "circuit_breaker_opened", {"error": str(e)})
        raise HTTPException(status_code=503, detail=str(e))

@app.post("/api/v1/approve-transaction")
def approve_transaction(req: ManualApprovalRequest, background_tasks: BackgroundTasks):
    status_str = "APPROVED" if req.approved else "REJECTED"
    background_tasks.add_task(
        telemetry.log_event,
        "human_decision",
        {"transaction_id": req.transaction_id, "status": status_str}
    )
    return {
        "status": status_str,
        "transaction_id": req.transaction_id,
        "message": f"Transaction has been manually {status_str.lower()}."
    }

@app.get("/api/v1/telemetry/metrics")
def get_metrics():
    return telemetry.metrics
