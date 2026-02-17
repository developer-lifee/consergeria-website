import { Scale, AlertTriangle, FileCheck, BookOpen } from "lucide-react"

const legalPoints = [
  {
    icon: Scale,
    title: "Marco normativo vigente",
    description:
      "La figura del conserje en la propiedad horizontal es completamente legal en Colombia. Aunque el termino no se encuentra explicitamente regulado en la Ley 675 de 2001, su inclusion en el regimen de propiedad horizontal se enmarca en las facultades de las copropiedades para organizar su esquema de aseo y mantenimiento.",
  },
  {
    icon: AlertTriangle,
    title: "Conserje vs. Vigilante: diferencias clave",
    description:
      "Es fundamental diferenciar entre conserjes y vigilantes. Mientras los conserjes se dedican a tareas administrativas, de mantenimiento y atencion al publico, los vigilantes estan amparados bajo la Ley de Vigilancia y Seguridad Privada (Ley 1920 de 2018) y requieren certificacion de la Superintendencia de Vigilancia.",
  },
  {
    icon: FileCheck,
    title: "Limites funcionales legales",
    description:
      "Un conserje no puede realizar actividades de vigilancia o seguridad privada que impliquen portar armas, hacer rondas o controlar acceso con camaras si no tiene certificacion de vigilancia. Delegarle estas tareas podria llevar a la copropiedad a enfrentar sanciones.",
  },
  {
    icon: BookOpen,
    title: "Manual de funciones y contrato claro",
    description:
      "Para evitar conflictos, es esencial elaborar un contrato donde se detallen funciones, jornada laboral y condiciones de trabajo. Ademas, es recomendable actualizar el reglamento de propiedad horizontal para incluir una descripcion detallada de los roles del conserje.",
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
              Conocemos la normativa colombiana a profundidad. Nuestro servicio esta
              disenado para proteger tanto a la copropiedad como al trabajador.
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
                Si se asignan labores de vigilancia a un conserje sin certificacion, la
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
