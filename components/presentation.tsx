"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Presentation() {
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
    <section id="presentation" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Codway logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20251005_111727-P2Pe8lpYCdHbulhrob7zEO4C4ondHv.png"
          alt="CODWAY Background"
          width={800}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[rgb(80,140,202)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-5xl mx-auto opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Présentation</h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              CODWAY est une société d&apos;ingénierie et de services informatiques, spécialisée dans l&apos;intégration
              de solutions IT dans des environnements techniques complexes et hétérogènes.
            </p>

            <p>
              Basée à Tunis, CODWAY est devenue l&apos;un des acteurs majeurs dans le domaine de l&apos;intégration de
              solutions informatiques et de l&apos;externalisation des processus métiers (BPO) en Tunisie et dans la
              région.
            </p>

            <p>
              Afin de répondre aux besoins de ses clients, CODWAY a entrepris des partenariats fructueux avec des
              éditeurs de renom et des acteurs majeurs reconnus dans le monde IT. Notre expertise couvre un large
              éventail de domaines, notamment le développement d&apos;applications, l&apos;outsourcing IT, et les
              solutions BPO.
            </p>

            <p>
              CODWAY dispose de ressources certifiées assurant le conseil, le design, l&apos;intégration, et le support
              de l&apos;ensemble des offres technologiques. Nous accompagnons nos clients dans leur transformation
              digitale avec des solutions innovantes et sur mesure.
            </p>

            <p>
              De nombreux clients nous font confiance, localement et à l&apos;international, pour leur fournir des
              services IT de haute qualité et des solutions d&apos;externalisation efficaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
