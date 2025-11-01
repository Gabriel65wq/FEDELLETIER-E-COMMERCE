import { Suspense } from "react"
import dynamic from "next/dynamic"

const MainContent = dynamic(() => import("@/components/main-content"), {
  ssr: false,
})

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <MainContent />
    </Suspense>
  )
}
