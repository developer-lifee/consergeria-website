"use client"

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Contactenos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance mb-6">
              {'La tranquilidad de su copropiedad comienza aqui'}
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed text-lg mb-10">
              Solicite una cotizacion personalizada para el servicio de conserjeria de su
              edificio o conjunto residencial. Nos adaptamos a las necesidades especificas
              de su copropiedad.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  label: "Telefono",
                  value: "Contactenos para una asesoria",
                  href: "#",
                },
                {
                  icon: Mail,
                  label: "Correo",
                  value: "info@multiserviciossosa.co",
                  href: "mailto:info@multiserviciossosa.co",
                },
                {
                  icon: MapPin,
                  label: "Ubicacion",
                  value: "Calle 8 Sur # 4-35, Colombia",
                  href: "#",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/40 uppercase tracking-wider font-medium">
                      {contact.label}
                    </p>
                    <p className="text-primary-foreground font-medium group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-2xl border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Solicite su cotizacion
            </h3>
            <p className="text-muted-foreground mb-8">
              Complete el formulario y nos comunicaremos con usted en menos de 24 horas.
            </p>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-card-foreground mb-1.5 block"
                >
                  Nombre completo
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-card-foreground mb-1.5 block"
                  >
                    Correo electronico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-card-foreground mb-1.5 block"
                  >
                    Telefono
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+57 300 000 0000"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-property"
                  className="text-sm font-medium text-card-foreground mb-1.5 block"
                >
                  Nombre de la copropiedad
                </label>
                <input
                  id="contact-property"
                  type="text"
                  placeholder="Edificio / Conjunto residencial"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-card-foreground mb-1.5 block"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Cuentenos sobre las necesidades de su copropiedad"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-lg hover:opacity-90 transition-opacity text-sm w-full mt-2 shadow-lg shadow-accent/20"
              >
                Enviar solicitud
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
