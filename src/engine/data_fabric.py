import json
import os

class UnifiedDataFabric:
    def __init__(self, db_path: str = "data_fabric_store.json"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        if not os.path.exists(self.db_path):
            with open(self.db_path, "w", encoding="utf-8") as f:
                json.dump([], f)

    def store_decision(self, order_id: str, specs: dict, pricing: dict):
        """تخزين قرارات السرب وسياق التغليف والتسعير في نسيج البيانات"""
        with open(self.db_path, "r+", encoding="utf-8") as f:
            data = json.load(f)
            record = {
                "order_id": order_id,
                "specs": specs,
                "pricing": pricing,
                "timestamp": "2026-07-30"
            }
            data.append(record)
            f.seek(0)
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"[Data Fabric]: Decision logged into persistent store for {order_id}")

    def query_similar_history(self) -> list:
        """استرجاع السجل التاريخي للقرارات"""
        with open(self.db_path, "r", encoding="utf-8") as f:
            return json.load(f)
