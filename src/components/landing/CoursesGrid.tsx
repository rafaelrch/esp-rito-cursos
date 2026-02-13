import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Formação em Psicoterapia do Espírito",
    description: "Uma formação inédita que integra psicologia profunda e espiritualidade, preparando profissionais para uma atuação terapêutica diferenciada.",
    image: "https://picsum.photos/seed/psico1/600/400",
  },
  {
    title: "Curso de Teoria em Psicologia do Espírito",
    description: "Fundamentos teóricos da Psicologia do Espírito com ênfase nos processos de individuação e evolução da consciência.",
    image: "https://picsum.photos/seed/psico2/600/400",
  },
  {
    title: "Curso de Fundamentos da Psicologia do Espírito",
    description: "Introdução aos conceitos essenciais que fundamentam a compreensão psicológica do espírito humano e suas relações.",
    image: "https://picsum.photos/seed/psico3/600/400",
  },
  {
    title: "Curso de Mitologia segundo a Psicologia do Espírito",
    description: "Estudo dos mitos e arquétipos sob a perspectiva da Psicologia do Espírito, revelando padrões universais da psique.",
    image: "https://picsum.photos/seed/psico4/600/400",
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
                <a
                  href="#formacao"
                  className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wider text-primary hover:gap-3 transition-all duration-300"
                >
                  Saiba mais <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
