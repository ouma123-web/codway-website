"use client"

import { useEffect, useRef } from "react"
import { Building2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Group() {
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
    <section id="group" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-4xl mx-auto text-center opacity-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-8">
            <Building2 className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">Group</h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Part of a dynamic group of companies delivering comprehensive IT and business solutions across multiple
            sectors and regions.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-medium px-8"
            asChild
          >
            <a
              href="https://www.codway-it.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Learn More About Our Group
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
