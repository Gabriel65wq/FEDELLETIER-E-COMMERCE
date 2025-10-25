import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { InformationSection } from "@/components/information-section"
import { ReferencesSection } from "@/components/references-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <InformationSection />
        <ReferencesSection />
      </main>
      <Footer />
    </>
  )
}
