import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-background leading-tight tracking-tight">
                  Multiservicios Sosa
                </span>
                <span className="text-[10px] text-background/40 uppercase tracking-widest leading-tight">
                  Conserjeria profesional
                </span>
              </div>
            </div>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Servicio profesional de conserjeria para copropiedades en Colombia,
              con total cumplimiento de la normativa vigente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Navegacion
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Marco Legal", href: "#marco-legal" },
                { label: "Equipo", href: "#equipo" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/50 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-background/50">Ley 675 de 2001 - Propiedad Horizontal</p>
              <p className="text-sm text-background/50">
                Ley 1920 de 2018 - Vigilancia y Seguridad
              </p>
              <a
                href="https://isaservice.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                isaservice.co
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            {"© 2026 ISA Service. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-background/40">
            Colombia - Servicio de conserjeria profesional
          </p>
        </div>
      </div>
    </footer>
  )
}
