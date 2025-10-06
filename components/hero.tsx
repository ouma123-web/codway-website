"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "./header"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      <Header />

      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(80,140,202)]/20 via-background to-white/10 animate-gradient" />

        {/* Floating particles */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[rgb(80,140,202)]/30 blur-2xl"
          style={{ animation: "float-particles 20s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/20 blur-xl"
          style={{ animation: "float-particles 15s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-[rgb(80,140,202)]/20 blur-3xl"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-white/15 blur-2xl"
          style={{ animation: "float-particles 18s ease-in-out infinite 4s" }}
        />

        {/* Wave effects */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(80,140,202)]/10 to-transparent"
          style={{ animation: "wave-motion 10s linear infinite" }}
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">CODWAY</h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Leader en Services IT & Conseil en Tunisie
            </p>
            <p className="text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Solutions innovantes en Business Process Outsourcing, développement IT et services d'externalisation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="bg-[rgb(80,140,202)] hover:bg-[rgb(80,140,202)]/90 transition-all duration-300 text-white font-medium px-8 py-6 text-base"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-white/50 text-white hover:bg-white/10 transition-all duration-300 font-medium px-8 py-6 text-base"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
