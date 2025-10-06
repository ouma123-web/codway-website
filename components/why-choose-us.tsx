"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center codway-blue uppercase tracking-wide">
          Pourquoi Nous Choisir ?
        </h2>

        <div ref={sectionRef} className="max-w-6xl mx-auto mt-16 opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-lg border border-[rgb(80,140,202)]/20 transition-all duration-300 hover:bg-[rgb(80,140,202)]/10 hover:border-[rgb(80,140,202)]/50 hover:scale-105 hover:shadow-lg hover:shadow-[rgb(80,140,202)]/20">
              <CheckCircle2 className="w-6 h-6 codway-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expertise Technique Avancée</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe possède une expertise approfondie dans les technologies de pointe et les meilleures
                  pratiques du secteur IT.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-[rgb(80,140,202)]/20 transition-all duration-300 hover:bg-[rgb(80,140,202)]/10 hover:border-[rgb(80,140,202)]/50 hover:scale-105 hover:shadow-lg hover:shadow-[rgb(80,140,202)]/20">
              <CheckCircle2 className="w-6 h-6 codway-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Solutions Sur Mesure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous développons des solutions personnalisées adaptées aux besoins spécifiques de chaque client et à
                  leur secteur d&apos;activité.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-[rgb(80,140,202)]/20 transition-all duration-300 hover:bg-[rgb(80,140,202)]/10 hover:border-[rgb(80,140,202)]/50 hover:scale-105 hover:shadow-lg hover:shadow-[rgb(80,140,202)]/20">
              <CheckCircle2 className="w-6 h-6 codway-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Engagement Qualité</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous garantissons les plus hauts niveaux de performance, de flexibilité et d&apos;interopérabilité
                  dans tous nos projets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-[rgb(80,140,202)]/20 transition-all duration-300 hover:bg-[rgb(80,140,202)]/10 hover:border-[rgb(80,140,202)]/50 hover:scale-105 hover:shadow-lg hover:shadow-[rgb(80,140,202)]/20">
              <CheckCircle2 className="w-6 h-6 codway-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Support Continu</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un accompagnement et un support technique disponibles pour assurer le succès de vos projets à long
                  terme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
