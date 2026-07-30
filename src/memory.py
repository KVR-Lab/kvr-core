import json
import os
from typing import Dict, Any, List

class UnifiedDataFabricMemory:
    def __init__(self, storage_path: str = "data/memory_store.json"):
        self.storage_path = storage_path
        os.makedirs(os.path.dirname(self.storage_path), exist_ok=True)
        if not os.path.exists(self.storage_path):
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump({}, f)

    def _load_memory(self) -> Dict[str, Any]:
        try:
            with open(self.storage_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}

    def _save_memory(self, data: Dict[str, Any]) -> None:
        with open(self.storage_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

    def store_decision(self, item_id: str, decision_data: Dict[str, Any]) -> None:
        memory = self._load_memory()
        if item_id not in memory:
            memory[item_id] = []
        memory[item_id].append(decision_data)
        self._save_memory(memory)

    def get_history(self, item_id: str) -> List[Dict[str, Any]]:
        memory = self._load_memory()
        return memory.get(item_id, [])
