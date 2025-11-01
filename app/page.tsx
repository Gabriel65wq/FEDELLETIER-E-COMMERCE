"use client"

import dynamic from "next/dynamic"

const MainContent = dynamic(() => import("@/components/main-content"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Cargando...
      </div>
    </div>
  ),
})

export default function Home() {
  return <MainContent />
}
