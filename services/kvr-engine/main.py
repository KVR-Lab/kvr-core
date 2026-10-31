from fastapi import FastAPI
from pydantic import BaseModel
from typing import Literal

app = FastAPI(
    title="K.V.R Sovereign Engine - Nail Golden & KVRAT.ai",
    description="محرك التنبؤ الذكي بالطلب وإدارة النمو لقطاعي B2B و B2C للمنتجات النهائية",
    version="1.0.0"
)

class ProductDemandRequest(BaseModel):
    sku: str
    product_name: str
    channel: Literal["B2B", "B2C"]
    current_stock: int
    daily_sales_velocity: float
    ad_spend: float
    generated_revenue: float

@app.get("/health")
def system_status():
    return {
        "entity": "K.V.R",
        "organization": "Nail Golden & KVRAT.ai",
        "scope": "B2B & B2C Finished Products",
        "status": "ULTRA_EXECUTION_ACTIVE",
        "theme_core": "#00E676"
    }

@app.post("/api/v1/growth-agent/analyze")
def analyze_growth_and_demand(data: ProductDemandRequest):
    roas = round(data.generated_revenue / data.ad_spend, 2) if data.ad_spend > 0 else 0.0
    days_remaining = int(data.current_stock / data.daily_sales_velocity) if data.daily_sales_velocity > 0 else 999
    
    action = "SCALE_CAMPAIGN" if roas >= 3.5 and days_remaining > 14 else "OPTIMIZE_FUNNEL"
    if days_remaining <= 7:
        action = "URGENT_RESTOCK_FINISHED_GOODS"

    return {
        "sku": data.sku,
        "channel": data.channel,
        "metrics": {
            "roas": roas,
            "stock_coverage_days": days_remaining
        },
        "kvr_decision": action
    }
