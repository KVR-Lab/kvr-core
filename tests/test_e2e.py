import pytest
from fastapi.testclient import TestClient
from src.api_server import app

client = TestClient(app)

def test_health_endpoint():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ONLINE"

def test_swarm_execution_flow():
    payload_query = "?order_id=PO-2026-PROD-TEST&weight_kg=25.0&fragility_g=15.0"
    response = client.post(f"/api/swarm/execute{payload_query}")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "SUCCESS"
    assert "sap_document_id" in data
    assert "final_price" in data

def test_history_retrieval():
    response = client.get("/api/history")
    assert response.status_code == 200
    assert "history" in response.json()
