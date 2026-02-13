import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calendar } from "lucide-react";

const courses = [
  {
    title: "O Campo Pessoal na Psicoterapia",
    description: "Uma formação inédita que integra psicologia profunda e espiritualidade, preparando profissionais para uma atuação terapêutica diferenciada.",
    image: "https://picsum.photos/seed/psico1/600/400",
    startDate: "2 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/psicologia-do-espirito-e-alquimia-65b9449027030/d09xqwml4y0n",
  },
  {
    title: "Desfazendo-se de Culpas e Alterando Predisposições",
    description: "Compreenda os mecanismos da culpa e aprenda a transformar predisposições que limitam seu desenvolvimento pessoal e espiritual.",
    image: "https://picsum.photos/seed/psico2/600/400",
    startDate: "3 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/desfazendo-se-de-culpas-e-alterando-predisposicoes-65b94b537e4a7/thg8mbqzp1md",
  },
  {
    title: "O I Ching e o Campo Pessoal",
    description: "Estudo do I Ching como ferramenta de autoconhecimento e diálogo interior sob a perspectiva da Psicologia do Espírito.",
    image: "https://picsum.photos/seed/psico3/600/400",
    startDate: "9 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/o-i-ching-e-o-campo-pessoal-68e2a370a8004/yuc0ai7talzi",
  },
  {
    title: "Vivenciando Jung: conceitos fundamentais aplicados a jornada interior",
    description: "Conceitos fundamentais de Jung aplicados à prática da jornada interior e ao processo de individuação.",
    image: "https://picsum.photos/seed/psico4/600/400",
    startDate: "11 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/vivenciando-jung-conceitos-fundamentais-aplicados-a-jornada-interior-6/qktu0mlwsvoz",
  },
];

export function CoursesGrid() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cursos" className="section-padding bg-off-white">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="heading-uppercase text-2xl md:text-3xl text-primary text-center mb-12">
          Nossos Cursos
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-background rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-primary text-lg">
                  {course.title}
                </h3>
                <p className="body-serif text-base text-muted-foreground">
                  {course.description}
                </p>
                <p className="flex items-center gap-2 font-heading text-xs uppercase tracking-wider text-muted-foreground">
                  <Calendar size={14} /> Início: {course.startDate}
                </p>
                <a
                  href={course.enrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary text-xs mt-2"
                >
                  Inscreva-se <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
