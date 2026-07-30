import pytest
from fastapi.testclient import TestClient
from src.api_server import app, governance

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ONLINE"

def test_packaging_optimization_success():
    payload = {
        "item_id": "ITEM-101",
        "weight_kg": 5.0,
        "dimensions_cm": [10.0, 20.0, 30.0],
        "fragility_g": 35.0
    }
    response = client.post("/api/v1/optimize-packaging", json=payload)
    assert response.status_code == 200
    assert response.json()["status"] == "SUCCESS"

def test_human_approval_trigger():
    # Weight high enough to cause cost > threshold ()
    payload = {
        "item_id": "HEAVY-999",
        "weight_kg": 100.0,
        "dimensions_cm": [50.0, 50.0, 50.0],
        "fragility_g": 20.0
    }
    response = client.post("/api/v1/optimize-packaging", json=payload)
    assert response.status_code == 200
    assert response.json()["status"] == "PENDING_APPROVAL"

def test_telemetry_metrics():
    response = client.get("/api/v1/telemetry/metrics")
    assert response.status_code == 200
    assert "total_processed" in response.json()
