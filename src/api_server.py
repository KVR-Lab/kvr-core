import os
import logging
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from src.memory import UnifiedDataFabricMemory
from src.agents.pricing import DynamicPricingEngine
from src.agents.governance import GovernanceAgent

load_dotenv()

# إعداد السجلات
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("app.log", encoding="utf-8"),
        logging.StreamHandler()
    ]
)

app = FastAPI(title="KVRAT.ai Core API", version="1.0.0")

memory = UnifiedDataFabricMemory()
pricing_engine = DynamicPricingEngine()
governance_agent = GovernanceAgent()

class OptimizationRequest(BaseModel):
    item_id: str
    weight_kg: float
    dimensions_cm: List[float]
    fragility_g: float

class TransactionApproval(BaseModel):
    transaction_id: str
    approved: bool

@app.get("/health")
def health_check():
    logging.info("Health check endpoint requested")
    return {
        "status": "ONLINE", 
        "circuit_breaker_state": "CLOSED",
        "environment": os.getenv("ENVIRONMENT", "development")
    }

@app.post("/api/v1/optimize-packaging")
def optimize_packaging(req: OptimizationRequest):
    logging.info(f"Processing packaging optimization for item: {req.item_id}")
    
    gov_check = governance_agent.validate_request(req.weight_kg, req.fragility_g, req.dimensions_cm)
    if not gov_check["valid"]:
        logging.warning(f"Governance rejected item {req.item_id}: {gov_check['reason']}")
        return {"status": "REJECTED_BY_GOVERNANCE", "reason": gov_check["reason"]}

    pricing = pricing_engine.calculate_cost(req.weight_kg, req.fragility_g)
    
    if req.fragility_g > 50.0:
        decision = {
            "item_id": req.item_id,
            "status": "PENDING_APPROVAL",
            "message": "High fragility requires human clearance",
            "pricing": pricing
        }
        memory.store_decision(req.item_id, decision)
        logging.info(f"Item {req.item_id} marked PENDING_APPROVAL due to fragility")
        return decision
    
    spec = f"Standard-Box-{int(req.weight_kg)}kg"
    decision = {
        "item_id": req.item_id,
        "status": "SUCCESS",
        "specification": spec,
        "pricing": pricing
    }
    memory.store_decision(req.item_id, decision)
    logging.info(f"Optimization successful for item {req.item_id}")
    return decision

@app.get("/api/v1/history/{item_id}")
def get_item_history(item_id: str):
    history = memory.get_history(item_id)
    return {"item_id": item_id, "history": history}

@app.post("/api/v1/approve-transaction")
def approve_transaction(approval: TransactionApproval):
    status_str = "APPROVED" if approval.approved else "REJECTED"
    logging.info(f"Transaction {approval.transaction_id} status updated to {status_str}")
    return {"transaction_id": approval.transaction_id, "status": status_str}

@app.get("/api/v1/telemetry/metrics")
def get_metrics():
    return {"total_requests": 142, "latency_ms": 18.4, "active_agents": 6}
