class CircuitBreakerException(Exception):
    pass

class SwarmGovernanceGuardrails:
    def __init__(self):
        self.failure_count = 0
        self.max_failures = 3
        self.state = "CLOSED"  # CLOSED, OPEN, HALF-OPEN
        self.cost_approval_threshold = 1000.0  # USD

    def check_transaction(self, calculated_cost: float, fragility_g: float) -> dict:
        if self.state == "OPEN":
            raise CircuitBreakerException("🚨 Circuit Breaker is OPEN! SAP transactions halted due to repeated failures.")

        requires_human_approval = calculated_cost > self.cost_approval_threshold
        
        # Guardrail checks vs peak G-forces
        is_safe = fragility_g < 50.0

        return {
            "approved": is_safe and not requires_human_approval,
            "requires_human_approval": requires_human_approval,
            "reason": "Cost exceeds threshold -> Human approval required" if requires_human_approval else ("Approved automatically" if is_safe else "Peak G-force limit exceeded")
        }

    def record_failure(self):
        self.failure_count += 1
        if self.failure_count >= self.max_failures:
            self.state = "OPEN"

    def reset(self):
        self.failure_count = 0
        self.state = "CLOSED"
