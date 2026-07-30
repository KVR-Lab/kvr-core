import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

class SwarmTelemetry:
    def __init__(self):
        self.metrics = {
            "total_processed": 0,
            "cost_saved_usd": 0.0,
            "circuit_breaker_trips": 0
        }

    def log_event(self, event_type: str, details: dict):
        logging.info(f"⚡ [TELEMETRY] {event_type.upper()}: {details}")
        if event_type == "decision_made":
            self.metrics["total_processed"] += 1
            self.metrics["cost_saved_usd"] += details.get("savings", 0.0)
        elif event_type == "circuit_breaker_opened":
            self.metrics["circuit_breaker_trips"] += 1

    def send_webhook_alert(self, title: str, message: str):
        # Webhook trigger structure for Teams/Slack/Custom Integration
        alert_payload = {
            "title": f"🚨 KVRAT.ai Alert: {title}",
            "message": message,
            "status": "ACTION_REQUIRED"
        }
        logging.warning(f"🔔 [WEBHOOK SENT] {alert_payload}")
        return alert_payload
