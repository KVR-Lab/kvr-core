import pytest
from src.agents.governance import GovernanceAgent
from src.agents.pricing import DynamicPricingEngine

def test_governance_valid():
    gov = GovernanceAgent()
    res = gov.validate_request(weight_kg=15.0, fragility_g=20.0, dimensions_cm=[10, 20, 30])
    assert res["valid"] is True

def test_governance_overweight():
    gov = GovernanceAgent()
    res = gov.validate_request(weight_kg=150.0, fragility_g=20.0, dimensions_cm=[10, 20, 30])
    assert res["valid"] is False

def test_pricing_calculation():
    pricing = DynamicPricingEngine()
    cost = pricing.calculate_cost(weight_kg=10.0, fragility_g=20.0)
    assert cost["base_cost"] == 25.0
    assert cost["total_price_usd"] == 28.0
