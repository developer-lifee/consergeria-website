"use client"

import { useState, useCallback, useEffect } from "react"
import { Quote, Users, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const teamMembers = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-04%20at%203.40.40%20PM-5Y6XJMLW0mYUDZk6G70rVSORMrMdwK.jpeg",
    alt: "Miembro del equipo ISA Service - Conserje profesional",
    name: "Carlos M.",
    role: "Conserje Senior",
    experience: "Especialista en propiedad horizontal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-04%20at%203.40.40%20PM%20%282%29-JZtoib07zejVzMWv6wKs3w5zeOfHda.jpeg",
    alt: "Miembro del equipo ISA Service - Conserje profesional",
    name: "Jorge R.",
    role: "Conserje Profesional",
    experience: "Atencion y gestion de zonas comunes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-04%20at%203.40.40%20PM%20%281%29-0hDMM19SFg9KPCOi4Yhl2bWqGGKkIO.jpeg",
    alt: "Miembro del equipo ISA Service - Conserje profesional",
    name: "Luis A.",
    role: "Conserje Profesional",
    experience: "Control de acceso y correspondencia",
  },
]

export function TeamSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <section id="equipo" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Nuestro equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            Profesionales comprometidos con su copropiedad
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Contamos con un equipo de conserjes capacitados, identificados y con
            vocacion de servicio. Cada miembro esta preparado para brindarle la
            mejor atencion.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100%", label: "Personal verificado" },
            { value: "24/7", label: "Cobertura disponible" },
            { value: "Capacitacion", label: "Continua y actualizada" },
            { value: "Contrato", label: "Claro y transparente" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-secondary rounded-xl p-6 border border-border"
            >
              <p className="text-xl md:text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {teamMembers.map((member, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 basis-full md:basis-1/3"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 aspect-[3/4] ${
                      current === i
                        ? "border-accent shadow-lg shadow-accent/10 scale-100"
                        : "border-border scale-[0.97] opacity-80"
                    }`}
                  >
                    <img
                      src={member.src}
                      alt={member.alt}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Verificado
                        </span>
                      </div>
                      <p className="text-xl font-bold text-background">
                        {member.name}
                      </p>
                      <p className="text-sm text-background/80 font-medium">
                        {member.role}
                      </p>
                      <p className="text-xs text-background/60 mt-1">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom nav buttons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={scrollPrev}
              aria-label="Miembro anterior"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir al miembro ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    current === i
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Siguiente miembro"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              Personal con antecedentes verificados
            </span>
          </div>
          <div className="hidden md:block w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              Capacitacion en servicio al cliente
            </span>
          </div>
          <div className="hidden md:block w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              Funciones definidas por contrato
            </span>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 rounded-2xl bg-primary p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Quote className="h-10 w-10 shrink-0 text-primary-foreground/30" />
            <div>
              <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
                Cada uno de nuestros conserjes recibe capacitacion continua
                sobre sus funciones, limites legales y protocolo de atencion.
                Trabajamos con contratos claros, manuales de funciones y total
                transparencia para proteger a la copropiedad y al trabajador.
              </p>
              <p className="mt-6 text-sm font-semibold text-primary-foreground">
                ISA Service
              </p>
              <p className="text-sm text-primary-foreground/50">
                Conserjeria Profesional para Copropiedades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
