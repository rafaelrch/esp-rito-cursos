import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calendar } from "lucide-react";
import curso01 from "@/assets/curso-01-campo-pessoal.png";
import curso02 from "@/assets/curso-02-culpas.png";
import curso03 from "@/assets/curso-03-i-ching.png";
import curso04 from "@/assets/curso-04-jung.png";

const courses = [
  {
    title: "O Campo Pessoal na Psicoterapia",
    description: "Sobre o curso: Curso para quem deseja identificar conflitos e manejá-los, articulando teoria e prática a partir do Campo Pessoal e da Psicologia do Espírito. O objetivo central é fornecer subsídios para reconhecer os conflitos e resolvê-los considerando o Campo Pessoal e os pressupostos da Psicologia do Espírito. Para isso, trataremos de temas como vibrações do campo, mapeamento de tendências e predisposições e equação do destino.",
    image: curso01,
    startDate: "2 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/psicologia-do-espirito-e-alquimia-65b9449027030/d09xqwml4y0n",
  },
  {
    title: "Desfazendo-se de Culpas e Alterando Predisposições",
    description: "Sobre o curso: Curso focado em possibilitar a compreensão de como alterar predisposições e libertar o ser humano de culpas aprisionantes. Ancorado na Psicologia do Espírito, abordamos a culpa como protocolo psíquico e sua inscrição no corpo, a ilusão do paraíso e a inércia, meios de redenção e libertação, o mapeamento de tendências e predisposições, além de carma e destino.",
    image: curso02,
    startDate: "3 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/desfazendo-se-de-culpas-e-alterando-predisposicoes-65b94b537e4a7/thg8mbqzp1md",
  },
  {
    title: "O I Ching e o Campo Pessoal",
    description: "Sobre o curso: Curso introdutório que apresenta o I Ching como linguagem simbólica para compreender o funcionamento do Inconsciente e sua relação com o Campo Pessoal. Você conhecerá os 8 trigramas e suas imagens, aprenderá a formular perguntas, lançar as moedas e interpretar hexagramas — um diálogo com a Vida.",
    image: curso03,
    startDate: "9 de Março",
    enrollUrl: "https://institutodoespiritoan.eadplataforma.app/course/o-i-ching-e-o-campo-pessoal-68e2a370a8004/yuc0ai7talzi",
  },
  {
    title: "Vivenciando Jung: conceitos fundamentais aplicados a jornada interior",
    description: "Sobre o curso: O Curso Viver Jung, ministrado por Camila Novaes em parceria com o Instituto do Espírito A.N., tem como proposta apresentar os principais conceitos da psicologia analítica de Carl Gustav Jung em uma abordagem teórico-vivencial. O curso combina exposição teórica, leituras dirigidas e práticas reflexivas que conduzem os participantes a uma ampliação da consciência e do autoconhecimento. Serão explorados temas como arquétipos, inconsciente coletivo, individuação, sombra, anima e animus, sincronicidade, sonhos e psicossomática, entre outros. Mais do que um curso, o Viver Jung se constitui como um grupo de aprendizagem e vivência simbólica, em que os participantes têm a oportunidade de integrar teoria e experiência, aprofundando a compreensão de si mesmos, das relações interpessoais e do mundo. Ainda que não seja um grupo de terapia, o curso tem efeito terapêutico ao possibilitar um processo de autoconhecimento singular, que vai além do aprendizado teórico, permitindo a cada participante reconhecer em sua própria história o sentido dos conceitos junguianos.",
    image: curso04,
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
              className="bg-background rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="min-h-80 flex items-center justify-center bg-muted/30 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="max-h-80 w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
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
