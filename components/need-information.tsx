"use client"

import { useEffect, useRef } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function NeedInformation() {
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
    <section className="py-24 bg-[rgb(73,71,73)]">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="max-w-4xl mx-auto opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Need Information ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Contact us at the number:</h3>
              <a
                href="tel:+21671123456"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                +216 71 123 456
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Send an email to the address:</h3>
              <a
                href="mailto:contact@codway-it.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-lg break-all"
              >
                contact@codway-it.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Head Office:</h3>
              <p className="text-muted-foreground leading-relaxed">Tunis, Tunisia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
