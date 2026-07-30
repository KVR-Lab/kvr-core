class GovernanceAgent:
    def __init__(self, max_weight_kg: float = 100.0):
        self.max_weight_kg = max_weight_kg

    def validate_request(self, weight_kg: float, fragility_g: float, dimensions_cm: list) -> dict:
        if weight_kg <= 0 or fragility_g <= 0:
            return {"valid": False, "reason": "القيم المرفقة يجب أن تكون أكبر من الصفر"}
        
        if weight_kg > self.max_weight_kg:
            return {"valid": False, "reason": f"الوزن ({weight_kg} كجم) يتجاوز الحد المسموح به ({self.max_weight_kg} كجم)"}
            
        if any(d <= 0 for d in dimensions_cm):
            return {"valid": False, "reason": "أبعاد الشحنة غير صالحة"}

        return {"valid": True, "reason": "تم اجتياز جميع قواعد الحوكمة بنجاح"}
