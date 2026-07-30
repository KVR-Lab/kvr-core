FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt . 2>/dev/null || true
RUN pip install --no-cache-dir fastapi uvicorn requests

COPY . .

EXPOSE 8000

CMD ["python", "run_server.py"]
