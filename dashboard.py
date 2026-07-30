import streamlit as st
import requests

API_URL = "http://localhost:8000"

st.set_page_config(page_title="KVRAT.ai Dashboard", layout="wide")
st.title("⚡ منصة التحكم الذكي - KVRAT.ai")

tab1, tab2, tab3, tab4 = st.tabs([
    "📦 خوارزمية التغليف", 
    "👨‍💻 إدارة الموافقات (HITL)", 
    "📊 المقاييس (Telemetry)", 
    "🧠 الذاكرة الموحدة"
])

with tab1:
    st.subheader("تشغيل خوارزمية التغليف الذكية")
    item_id = st.text_input("معرف المنتج (Item ID)", value="ITEM-202")
    weight_kg = st.number_input("الوزن (كجم)", value=12.5)
    fragility_g = st.number_input("معامل الهشاشة (G-force)", value=4.5)
    
    submitted = st.form_submit_button("تشغيل خوارزمية التغليف") if hasattr(st, 'form_submit_button') else st.button("تشغيل الخوارزمية")
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
            
            # تحليل السجل وإظهار التوصية
            if isinstance(history_res, list) and len(history_res) > 0:
                st.info(f"💡 تم العثور على {len(history_res)} سجل تاريخي لهذا المنتج.")
        except Exception as e:
            st.error(f"خطأ في الاتصال بالذاكرة: {e}")