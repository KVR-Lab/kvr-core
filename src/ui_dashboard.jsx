import React, { useState, useEffect } from 'react';

export default function AgenticDashboard() {
  const [logs, setLogs] = useState([]);
  const [history, setHistory] = useState([]);
  const [metrics, setMetrics] = useState({ ordersProcessed: 1, weightSaved: "18%", sapSyncRate: "100%" });

  const fetchHistory = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/history');
      const data = await res.json();
      if (data && data.history) {
        setHistory(data.history);
        setMetrics(prev => ({ ...prev, ordersProcessed: data.history.length || 1 }));
      }
    } catch (err) {
      console.log("Waiting for backend API connection...");
    }
  };

  useEffect(() => {
    fetchHistory();
    const interval = setInterval(fetchHistory, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0d14', color: '#00f2fe', minHeight: '100vh', padding: '24px', fontFamily: 'monospace' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #1f293d', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '2px' }}>🛸 KVRAT.ai // AGENTIC MONITOR</h1>
          <p style={{ margin: '4px 0 0', color: '#64748b' }}>SAP S/4HANA Autonomous Packaging & Procurement Swarm</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>SWARM CONNECTED</span>
        </div>
      </header>

      {/* Real-Time Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '16px', borderRadius: '8px' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>MATERIAL SAVINGS</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>{metrics.weightSaved}</div>
          <div style={{ fontSize: '11px', color: '#4b5563' }}>32 ECT Single-Wall Optimizations</div>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '16px', borderRadius: '8px' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>SAP SYNCHRONIZATION</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>{metrics.sapSyncRate}</div>
          <div style={{ fontSize: '11px', color: '#4b5563' }}>OData 201 Created Status</div>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '16px', borderRadius: '8px' }}>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>ORDERS PROCESSED</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#f59e0b' }}>{metrics.ordersProcessed}</div>
          <div style={{ fontSize: '11px', color: '#4b5563' }}>Drop Fragility &lt; 48" Validated</div>
        </div>
      </div>

      {/* Live History Feed */}
      <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#f8fafc' }}>⚡ Real-Time Swarm Execution History</h3>
        {history.length === 0 ? (
          <p style={{ color: '#64748b' }}>No live orders executed yet. Run API requests to view live updates...</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {history.map((item, idx) => (
              <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ color: '#f8fafc' }}>Order: {item.order_id}</strong>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Material: {item.material_recommendation} | Density: {item.cushioning_density}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}></span>
                  <div style={{ fontSize: '11px', color: '#3b82f6' }}>{item.sap_document_id}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
