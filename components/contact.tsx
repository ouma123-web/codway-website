"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="max-w-3xl mx-auto opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text text-center mb-8">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Vous avez un projet en tête ? Discutons de la façon dont nous pouvons aider votre entreprise à se
            développer.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-muted/50 border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Votre Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-muted/50 border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-medium px-12"
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer le Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
