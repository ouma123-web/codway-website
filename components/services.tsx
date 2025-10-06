"use client"

import { Server, Code, Headphones, Database, Cloud, Shield, ArrowRight, Users, TrendingUp, Award } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

const services = [
  {
    icon: Server,
    title: "Business Process Outsourcing (BPO)",
    description:
      "Gestion des opérations back-office pour les entreprises de tous secteurs (industriel, financier, distribution, énergie, télécom, transport, etc.), travaillant sur l'ensemble de la chaîne de valeur.",
  },
  {
    icon: Code,
    title: "Développement IT & Solutions",
    description:
      "Développement IT et édition de solutions pour divers secteurs d'activité, incluant le développement de logiciels d'assurance et solutions sur mesure.",
  },
  {
    icon: Headphones,
    title: "Services d'Externalisation",
    description:
      "Gamme complète de services, de l'assistance technique pour les outils IT et applications logicielles à la gestion des systèmes, réseaux et actifs informatiques.",
  },
  {
    icon: Database,
    title: "Gestion de Données",
    description:
      "Solutions complètes de gestion et d'analyse de données pour optimiser vos processus décisionnels et améliorer la performance de votre entreprise.",
  },
  {
    icon: Cloud,
    title: "Solutions Cloud",
    description:
      "Migration et gestion d'infrastructures cloud sécurisées, scalables et performantes pour accompagner votre transformation digitale.",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description:
      "Protection avancée de vos systèmes d'information avec des solutions de sécurité adaptées aux menaces actuelles et conformes aux normes internationales.",
  },
]

export default function Services() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-codway-blue rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px] py-16">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="px-4 py-2 bg-codway-blue/20 border border-codway-blue/30 rounded-full text-sm font-medium text-white">
                  Excellence & Innovation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Nos Services
                <span className="block mt-2 bg-gradient-to-r from-codway-blue via-blue-400 to-white bg-clip-text text-transparent">
                  Technologiques
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Découvrez nos solutions complètes pour accompagner votre transformation digitale avec expertise et
                innovation.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-codway-blue/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-codway-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-sm text-slate-400">Clients Satisfaits</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-codway-blue/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-codway-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-sm text-slate-400">Taux de Réussite</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-codway-blue hover:bg-codway-blue/90 text-white px-8 py-6 text-lg group">
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column - Image with Overlay Effects */}
            <div className="relative animate-slide-in-right">
              {/* Main Image with Parallax */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strategic-business-growth-how-ai-software-transforms-accounting-HtcXkw4kF7XqpZUKcKOij9ZvCZsOLG.webp"
                  alt="Services technologiques Codway"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -left-6 top-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-codway-blue/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-codway-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                    <p className="text-sm text-slate-600">Années d'Expérience</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-32 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-sm text-slate-600">Sécurisé</p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-codway-blue/30 backdrop-blur-sm flex items-center justify-center animate-float-particles">
                <Cloud className="w-8 h-8 text-white" />
              </div>

              <div
                className="absolute bottom-20 left-10 w-14 h-14 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center animate-float-particles"
                style={{ animationDelay: "0.5s" }}
              >
                <Database className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-10 right-20 opacity-10">
          <Cloud className="w-32 h-32 text-primary rotate-45" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-10">
          <Shield className="w-24 h-24 text-secondary -rotate-12" />
        </div>

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Notre Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Des solutions adaptées à chaque besoin de votre entreprise
              </p>
            </div>

            <div className="relative px-12">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="group relative bg-gradient-to-br from-muted/50 to-muted/30 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-500" />

                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-primary/10 border-primary/30 hover:bg-primary/20" />
                <CarouselNext className="bg-primary/10 border-primary/30 hover:bg-primary/20" />
              </Carousel>

              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current - 1 ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
