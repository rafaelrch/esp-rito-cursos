import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export function IntroCall() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div
        ref={ref}
        className={`container-wide max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="heading-uppercase text-xl md:text-2xl mb-6">
          Para quem busca compreender a si mesmo e também compreender o outro
        </h2>
        <p className="body-serif text-primary-foreground/90 text-lg mb-6">
          Cursos com Adenáuer Novaes, baseados na Psicologia do Espírito e no estudo do Campo Pessoal.
        </p>
        <p className="body-serif text-primary-foreground/80 mb-8">
          Clique e saiba como se aprofundar nessa jornada.
        </p>
        <a
          href="#cursos"
          className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider border-2 border-primary-foreground px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
        >
          Conhecer os cursos
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
