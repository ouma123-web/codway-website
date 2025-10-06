"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg shadow-primary/5"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
  src="codway.png"
  alt="Codway Logo"
  width={60} // réduit la largeur
  height={30} // réduit la hauteur
  className="h-8 w-auto" // ajuste aussi la classe Tailwind
/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("presentation")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Présentation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("group")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Groupe
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+21671123456"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium text-sm">+216 71 123 456</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("presentation")}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Présentation
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("group")}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Groupe
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <a
                href="tel:+21671123456"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+216 71 123 456</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
