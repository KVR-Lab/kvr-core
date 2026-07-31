# 🛸 KVRAT.ai — Core Autonomous Control & Dynamic Pricing Platform

منصة ذكية لإدارة التغليف والتسعير الديناميكي المؤتمتة باقتدار، مدعومة بنظام حوكمة أمان متعدد الطبقات وذاكرة موحدة.

## 🏗️ البنية الهندسية (Architecture)
- FastAPI Core API: المحرك الرئيسي للتسعير ومعالجة الطلبات.
- Streamlit Dashboard: لوحة المراقبة والتحكم الميدانية.
- Governance Agent: فحص معايير السلامة والحدود التشغيلية.
- Dynamic Pricing Engine: حساب التكاليف والرسوم الديناميكية.
- Unified Data Fabric: ذاكرة سياقية موحدة للقرارات.
- CI/CD & Docker: أتمتة الاختبارات والحاويات الجاهزة للنشر السحابي.

## 💻 التشغيل السريع محلياً (Local Setup)
1. تشغيل الـ API:
   python -m uvicorn src.api_server:app --port 8000

2. تشغيل لوحة التحكم:
   python -m streamlit run dashboard.py

## 🐳 التشغيل باستخدام Docker
   docker-compose up --build

## 🧪 تشغيل الاختبارات الأوتوماتيكية
   python -m pytest tests/test_pipeline.py
