import { Scale, AlertTriangle, FileCheck, BookOpen, Shield, Users, Mail } from "lucide-react"

const legalPoints = [
  {
    icon: Users,
    title: "Atención a residentes y visitantes",
    description: "Trato profesional y cordial para todos los miembros de la comunidad y sus invitados.",
  },
  {
    icon: Mail,
    title: "Registro de correspondencia y encomiendas",
    description: "Gestión organizada de paquetes, cartas y documentos para cada residente del edificio.",
  },
  {
    icon: Shield,
    title: "Control administrativo de visitantes",
    description: "Registro y control de ingreso y salida de visitantes según protocolos del edificio.",
  },
  {
    icon: FileCheck,
    title: "Apoyo logístico en portería",
    description: "Funciones de apoyo administrativo y logístico para el correcto funcionamiento de la portería.",
  },
  {
    icon: Scale,
    title: "Supervisión básica de áreas comunes",
    description: "Recorridos periódicos para verificar el estado y buen uso de las zonas comunes.",
  },
  {
    icon: AlertTriangle,
    title: "Reporte de novedades",
    description: "Informes detallados y oportunos a la administración sobre cualquier situación relevante.",
  },
]

export function LegalSection() {
  return (
    <section id="marco-legal" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left sticky header */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Marco legal
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
              {'Servicio con respaldo juridico'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              MULTISERVICIOS SOSA presta servicios de conserjería para propiedad horizontal, orientados a la atención en portería, control administrativo de visitantes y apoyo operativo en edificios y conjuntos residenciales.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nuestros servicios se desarrollan conforme a lo establecido en la Ley 675 de 2001 (Régimen de Propiedad Horizontal) y demás normas aplicables en Colombia.
            </p>

            {/* Highlight box */}
            <div className="mt-8 bg-primary rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-accent" />
                </div>
                <p className="font-semibold text-primary-foreground text-sm">
                  Implicaciones legales
                </p>
              </div>
              <p className="text-primary-foreground/75 text-sm leading-relaxed">
                Si se asignan labores de vigilancia a un conserje sin certificación, la
                copropiedad puede enfrentar sanciones. Con Multiservicios Sosa, tiene la
                tranquilidad de un servicio 100% legal.
              </p>
            </div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {legalPoints.map((point, index) => (
              <div
                key={point.title}
                className="group flex gap-5 bg-card rounded-xl p-7 border border-border hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                    <point.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-card-foreground">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
