"use client"

export default function PagoFallido() {
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
          background: "#f44336",
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
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#f44336" }}>Pago Fallido</h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px" }}>
        Hubo un problema al procesar tu pago. Por favor, intenta nuevamente o contacta con nosotros.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
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

        <button
          onClick={() => window.history.back()}
          style={{
            background: "#6c757d",
            color: "white",
            border: "none",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  )
}
