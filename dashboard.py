import streamlit as st
import requests

API_URL = "http://localhost:8000"

st.set_page_config(page_title="KVRAT.ai - لوحة التحكم الميدانية", page_icon="🚀", layout="wide")

st.title("🛸 KVRAT.ai — مركز التحكم والعمليات الذاتية")
st.caption("منصة إدارة التغليف والعمليات الذكية بالذكاء الاصطناعي")

st.divider()

col_status, col_breaker = st.columns(2)

try:
    health_res = requests.get(f"{API_URL}/health", timeout=3).json()
    status = health_res.get("status", "OFFLINE")
    breaker_state = health_res.get("circuit_breaker_state", "UNKNOWN")
    
    col_status.metric(label="حالة النظام", value=status, delta="متصل" if status == "ONLINE" else "غير متصل")
    col_breaker.metric(label="قاطع الدائرة (Circuit Breaker)", value=breaker_state)
except Exception:
    st.error("❌ تعذر الاتصال بخادم الـ API (تأكد من تشغيل uvicorn أو Docker)")

st.divider()

tab1, tab2, tab3, tab4 = st.tabs(["📦 تحسين التغليف", "✋ الموافقات البشرية", "📊 القياسات والتحليلات", "🧠 الذاكرة الموحدة"])

with tab1:
    st.subheader("إرسال طلب تحسين تغليف جديد")
    with st.form("optimize_form"):
        item_id = st.text_input("معرف المنتج (Item ID)", value="ITEM-202")
        weight_kg = st.number_input("الوزن (كجم)", min_value=0.1, value=12.0)
        fragility_g = st.number_input("معامل الهشاشة (G-Force)", min_value=1.0, value=30.0)
        
        submitted = st.form_submit_button("تشغيل خوارزمية التغليف")
        if submitted:
            payload = {
                "item_id": item_id,
                "weight_kg": weight_kg,
                "dimensions_cm": [20.0, 30.0, 40.0],
                "fragility_g": fragility_g
            }
            try:
                res = requests.post(f"{API_URL}/api/v1/optimize-packaging", json=payload).json()
                if res.get("status") == "SUCCESS":
                    st.success(f"✅ تم الاعتماد بنجاح! المواصفة: {res.get('specification')}")
                elif res.get("status") == "PENDING_APPROVAL":
                    st.warning(f"⚠️ الطلب يتطلب موافقة بشرية: {res.get('message')}")
                else:
                    st.json(res)
            except Exception as e:
                st.error(f"خطأ في الاتصال: {e}")

with tab2:
    st.subheader("إدارة الموافقات المعلقة (Human-in-the-Loop)")
    tx_id = st.text_input("معرف المعاملة (Transaction ID)", value="TX-101")
    col_app, col_rej = st.columns(2)
    
    if col_app.button("✅ موافقة"):
        res = requests.post(f"{API_URL}/api/v1/approve-transaction", json={"transaction_id": tx_id, "approved": True}).json()
        st.success(f"تمت الموافقة: {res.get('status')}")
        
    if col_rej.button("❌ رفض"):
        res = requests.post(f"{API_URL}/api/v1/approve-transaction", json={"transaction_id": tx_id, "approved": False}).json()
        st.error(f"تم الرفض: {res.get('status')}")

with tab3:
    st.subheader("المقاييس المباشرة (Telemetry)")
    if st.button("تحديث البيانات"):
        try:
            metrics = requests.get(f"{API_URL}/api/v1/telemetry/metrics").json()
            st.json(metrics)
        except Exception as e:
            st.error(f"خطأ في جلب المقاييس: {e}")

with tab4:
    st.subheader("استرجاع سجل الذاكرة الموحدة للعملاء والمنتجات")
    search_item_id = st.text_input("بحث برقم المنتج", value="ITEM-202")
    if st.button("جلب السجل من الذاكرة"):
        try:
            history_res = requests.get(f"{API_URL}/api/v1/history/{search_item_id}").json()
            st.json(history_res)
        except Exception as e:
            st.error(f"خطأ في الاتصال بالذاكرة: {e}")
