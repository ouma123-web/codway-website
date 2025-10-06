import Hero from "@/components/hero"
import Presentation from "@/components/presentation"
import Statistics from "@/components/statistics"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Group from "@/components/group"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata = {
  title: "CODWAY I IT Services Company Tunisia",
  description:
    "CODWAY is an engineering and IT services company specializing in Business Process Outsourcing, IT development, and outsourcing solutions.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Presentation />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <Group />
      <Contact />
      <Footer />
    </main>
  )
}
