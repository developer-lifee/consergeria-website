import { Shield, CheckCircle, Clock, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-building.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-4 py-2 w-fit backdrop-blur-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
                Servicio certificado y legal
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Conserjeria profesional para su copropiedad
            </h1>

            <p className="text-lg text-primary-foreground/75 leading-relaxed max-w-xl">
              Personal capacitado, con funciones claramente definidas bajo el marco de la
              Ley 675 de 2001. Seguridad, orden y confianza para su edificio o conjunto
              residencial en Colombia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base shadow-lg shadow-accent/20"
              >
                Solicitar cotizacion
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/25 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
              >
                Conocer servicios
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-primary-foreground/15 mt-2">
              {[
                { icon: CheckCircle, label: "Cumplimiento legal", value: "100%" },
                { icon: Clock, label: "Disponibilidad", value: "24/7" },
                { icon: Shield, label: "Copropiedades", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Employee showcase */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-04%20at%203.40.40%20PM-5Y6XJMLW0mYUDZk6G70rVSORMrMdwK.jpeg"
                  alt="Empleado de Multiservicios Sosa prestando servicio de conserjeria profesional"
                  className="w-full h-[560px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-8">
                  <p className="text-primary-foreground font-semibold text-lg">
                    Nuestro equipo
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Profesionalismo y compromiso en cada turno
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-card rounded-xl shadow-2xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">Ley 675 de 2001</p>
                    <p className="text-xs text-muted-foreground">Servicio 100% legal</p>
                  </div>
                </div>
              </div>

              {/* Floating stat top right */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl shadow-2xl p-4">
                <p className="text-2xl font-bold text-accent-foreground">10+</p>
                <p className="text-xs text-accent-foreground/80">Anos de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors"
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
