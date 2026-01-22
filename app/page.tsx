import { Header } from "@/components/header"
import { ImageEditor } from "@/components/image-editor"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingBananas } from "@/components/banana-decoration"

export default function Home() {
  return (
    <>
      <FloatingBananas />
      <Header />
      <main className="relative z-10">
        <ImageEditor />
        <FeaturesSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
