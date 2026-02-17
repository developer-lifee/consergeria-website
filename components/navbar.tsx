"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield, Phone } from "lucide-react"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Marco Legal", href: "#marco-legal" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base font-bold leading-tight tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Multiservicios Sosa
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest leading-tight transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/50"
                }`}
              >
                Conserjeria profesional
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Phone className="w-4 h-4" />
              Cotizar ahora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 border-t border-border/30 pt-4 bg-background/95 backdrop-blur-md -mx-6 px-6 rounded-b-xl">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm w-full mt-2"
            >
              <Phone className="w-4 h-4" />
              Cotizar ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
