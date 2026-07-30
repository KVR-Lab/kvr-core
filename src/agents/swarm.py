from src.sap.client import SAPODataClient
from src.engine.packaging import PackagingDecisionEngine
from src.agents.pricing import DynamicPricingAgent
from src.agents.governance import AIgovernanceGuardrails
from src.engine.data_fabric import UnifiedDataFabric

class AgenticSwarmOrchestrator:
    def __init__(self):
        self.sap_client = SAPODataClient(base_url="https://sap-s4hana.kvrat.ai/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV")
        self.packaging_engine = PackagingDecisionEngine()
        self.pricing_agent = DynamicPricingAgent()
        self.governance = AIgovernanceGuardrails()
        self.data_fabric = UnifiedDataFabric()

    def run_swarm_pipeline(self, order_id: str, weight_kg: float, fragility_limit_g: float):
        print(f"\n==========================================")
        print(f" 🛸 KVRATT.ai Agentic Swarm Execution: {order_id}")
        print(f"==========================================")

        # 1. Packaging Decision Engine
        specs = self.packaging_engine.evaluate_packaging_requirements(weight_kg, fragility_limit_g)
        print(f"[Packaging Agent]: {specs}")

        # 2. Dynamic Pricing Agent
        pricing = self.pricing_agent.calculate_cost(specs)
        print(f"[Pricing Agent]: {pricing}")

        # 3. Governance Guardrails Validation
        is_safe = self.governance.validate_decision(order_id, specs, pricing)
        if not is_safe:
            print("[Swarm Aborted]: Governance check failed.")
            return {"status": "REJECTED"}

        # 4. Unified Data Fabric Storage
        self.data_fabric.store_decision(order_id, specs, pricing)

        # 5. SAP OData Execution
        payload = {
            "po_id": order_id,
            "material_spec": specs["recommended_flute"],
            "reinforcement": specs["reinforcement_strategy"],
            "cushioning_volume": specs["bio_foam_volume_cm3"],
            "calculated_price": pricing["unit_cost_usd"]
        }
        
        sap_response = self.sap_client.send_procurement_payload(payload)
        print(f"[SAP Execution Result]: {sap_response}")
        print(f"==========================================\n")
        return sap_response

if __name__ == "__main__":
    swarm = AgenticSwarmOrchestrator()
    swarm.run_swarm_pipeline(order_id="PO-SWARM-1003", weight_kg=8.5, fragility_limit_g=20.0)
