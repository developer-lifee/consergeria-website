import { Mail, DoorOpen, ClipboardList, Users, ShieldCheck, FileText } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento legal laboral",
    description:
      "Garantizamos el cumplimiento total de todas las normas laborales colombianas para nuestro personal.",
  },
  {
    icon: Users,
    title: "Reemplazos por incapacidad",
    description:
      "Contamos con personal de reserva para asegurar la continuidad del servicio en caso de incapacidades.",
  },
  {
    icon: FileText,
    title: "Personal verificado",
    description:
      "Riguroso proceso de selección y verificación de antecedentes para su total tranquilidad.",
  },
  {
    icon: Mail,
    title: "Capacitación permanente",
    description:
      "Nuestro personal recibe formación constante en servicio al cliente y protocolos de conserjería.",
  },
  {
    icon: ClipboardList,
    title: "Manual de funciones definido",
    description:
      "Cada conserje cuenta con un manual de funciones específico adaptado a las necesidades de su copropiedad.",
  },
  {
    icon: DoorOpen,
    title: "Supervisión del servicio",
    description:
      "Realizamos visitas constantes de supervisión para garantizar la excelencia en la prestación del servicio.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            {'Funciones claras, servicio confiable'}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Cada conserje de Multiservicios Sosa cuenta con funciones claramente establecidas en su
            manual interno, garantizando un servicio profesional y dentro del marco legal
            colombiano.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle number */}
              <span className="absolute top-4 right-5 text-7xl font-bold text-foreground/[0.03] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
