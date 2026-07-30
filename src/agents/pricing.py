class DynamicPricingEngine:
    def __init__(self, base_rate_per_kg: float = 2.5, fragility_multiplier: float = 1.5):
        self.base_rate = base_rate_per_kg
        self.fragility_multiplier = fragility_multiplier

    def calculate_cost(self, weight_kg: float, fragility_g: float) -> dict:
        base_cost = weight_kg * self.base_rate
        protection_fee = (fragility_g / 10.0) * self.fragility_multiplier
        total_price = round(base_cost + protection_fee, 2)
        
        return {
            "base_cost": round(base_cost, 2),
            "protection_fee": round(protection_fee, 2),
            "total_price_usd": total_price
        }
