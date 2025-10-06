"use client"

import { useEffect, useRef } from "react"
import { Presentation, Settings, GraduationCap } from "lucide-react"

export default function IconSections() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto opacity-0">
          {/* Presentation */}
          <button onClick={() => scrollToSection("presentation")} className="bookmarkBtn">
            <span className="IconContainer">
              <Presentation className="icon w-5 h-5 text-white" />
            </span>
            <p className="text">Présentation</p>
          </button>

          {/* Services */}
          <button onClick={() => scrollToSection("services")} className="bookmarkBtn">
            <span className="IconContainer">
              <Settings className="icon w-5 h-5 text-white" />
            </span>
            <p className="text">Services</p>
          </button>

          {/* Groupe CODWAY */}
          <button onClick={() => scrollToSection("group")} className="bookmarkBtn">
            <span className="IconContainer">
              <GraduationCap className="icon w-5 h-5 text-white" />
            </span>
            <p className="text">Groupe</p>
          </button>
        </div>
      </div>

      <style jsx>{`
        .bookmarkBtn {
          width: 180px;
          height: 50px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.349);
          background-color: rgb(12, 12, 12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition-duration: 0.3s;
          overflow: hidden;
        }

        .IconContainer {
          width: 40px;
          height: 40px;
          background: linear-gradient(to bottom, rgb(255, 136, 255), rgb(172, 70, 255));
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 2;
          transition-duration: 0.3s;
        }

        .icon {
          border-radius: 1px;
        }

        .text {
          height: 100%;
          width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 1;
          transition-duration: 0.3s;
          font-size: 1.04em;
        }

        .bookmarkBtn:hover .IconContainer {
          width: 160px;
          transition-duration: 0.3s;
        }

        .bookmarkBtn:hover .text {
          transform: translate(10px);
          width: 0;
          font-size: 0;
          transition-duration: 0.3s;
        }

        .bookmarkBtn:active {
          transform: scale(0.95);
          transition-duration: 0.3s;
        }
      `}</style>
    </section>
  )
}
