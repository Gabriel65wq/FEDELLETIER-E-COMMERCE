"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function PagoExitoso() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [pedido, setPedido] = useState<any>(null)

  useEffect(() => {
    const paymentId = searchParams.get("payment_id")
    const externalReference = searchParams.get("external_reference")

    if (paymentId && externalReference) {
      // Verificar el pago
      fetch(`/api/verificar-pago?payment_id=${paymentId}&external_reference=${externalReference}`)
        .then((res) => res.json())
        .then((data) => {
          setPedido(data.pedido)
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error al verificar pago:", error)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [searchParams])

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
        }}
      >
        Verificando pago...
      </div>
    )
  }

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
          background: "#4caf50",
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
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#4caf50" }}>¡Pago Exitoso!</h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px" }}>
        Tu pedido ha sido procesado correctamente. Federico se pondrá en contacto contigo para coordinar la entrega.
      </p>

      {pedido && (
        <div
          style={{
            background: "#f5f5f5",
            padding: "2rem",
            borderRadius: "10px",
            marginBottom: "2rem",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <p>
            <strong>Número de pedido:</strong> {pedido.numero_pedido}
          </p>
          <p>
            <strong>Total pagado:</strong> ${pedido.total} USD
          </p>
          <p>
            <strong>Estado:</strong> {pedido.estado}
          </p>
        </div>
      )}

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
