import os
import json
import urllib.request

API_KEY = os.environ.get("GEMINI_API_KEY")
INSTRUCTION = os.environ.get("KVR_COMMAND", "")

SYSTEM_PROMPT = """
You are K.V.R, the Sovereign Executive Engine for Nail Golden & KVRAT.ai (B2B & B2C finished products platform, central green library #00E676, gold #D4AF37, dark #121212, snow-white #FFFFFF).
Convert the user instruction into repository files.
Return ONLY valid JSON matching this schema:
{
  "commit_message": "feat(kvr): short description",
  "files": [
    {"path": "relative/path/to/file.ext", "content": "full file content"}
  ]
}
"""

def execute_command():
    if not API_KEY or not INSTRUCTION:
        raise ValueError("Missing GEMINI_API_KEY or KVR_COMMAND")

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"
    payload = {
        "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT}]},
        "contents": [{"parts": [{"text": INSTRUCTION}]}],
        "generationConfig": {"responseMimeType": "application/json"}
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode("utf-8"))
        raw_json = result["candidates"][0]["content"]["parts"][0]["text"]
        plan = json.loads(raw_json)

    for f in plan.get("files", []):
        file_path = f["path"]
        os.makedirs(os.path.dirname(file_path) or ".", exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as out:
            out.write(f["content"])
        print(f"Written: {file_path}")

if __name__ == "__main__":
    execute_command()
