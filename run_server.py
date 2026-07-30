import uvicorn

if __name__ == "__main__":
    print("🚀 Starting KVRATT.ai Engine & Agentic Swarm API Server...")
    uvicorn.run("src.api_server:app", host="0.0.0.0", port=8000, reload=True)
