"use client"

export default function PagoPendiente() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#ff9800",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#ff9800" }}>Pago Pendiente</h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px" }}>
        Tu pago está siendo procesado. Te notificaremos cuando se confirme. Federico se pondrá en contacto contigo.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Volver al inicio
      </button>
    </div>
  )
}
