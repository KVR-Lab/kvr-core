from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from src.memory import UnifiedDataFabricMemory

app = FastAPI(title="KVRAT.ai Core API", version="1.0.0")

memory = UnifiedDataFabricMemory()

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
    return {"status": "ONLINE", "circuit_breaker_state": "CLOSED"}

@app.post("/api/v1/optimize-packaging")
def optimize_packaging(req: OptimizationRequest):
    if req.fragility_g > 50.0:
        decision = {
            "item_id": req.item_id,
            "status": "PENDING_APPROVAL",
            "message": "High fragility requires human clearance"
        }
        memory.store_decision(req.item_id, decision)
        return decision
    
    spec = f"Standard-Box-{int(req.weight_kg)}kg"
    decision = {
        "item_id": req.item_id,
        "status": "SUCCESS",
        "specification": spec
    }
    memory.store_decision(req.item_id, decision)
    return decision

@app.get("/api/v1/history/{item_id}")
def get_item_history(item_id: str):
    history = memory.get_history(item_id)
    return {"item_id": item_id, "history": history}

@app.post("/api/v1/approve-transaction")
def approve_transaction(approval: TransactionApproval):
    status_str = "APPROVED" if approval.approved else "REJECTED"
    return {"transaction_id": approval.transaction_id, "status": status_str}

@app.get("/api/v1/telemetry/metrics")
def get_metrics():
    return {"total_requests": 142, "latency_ms": 18.4, "active_agents": 4}
