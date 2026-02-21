import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export function EventBanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-primary">
      <div
        ref={ref}
        className={`container-wide text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="heading-uppercase text-2xl md:text-3xl text-primary-foreground mb-3">
          Inscreva-se nos nossos cursos
        </h2>
        <p className="body-serif text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
          Escolha um curso, preencha o formulário e receba todas as informações para começar.
        </p>
        <a
          href="#inscricao"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-heading font-semibold px-8 py-4 rounded-md uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Fazer inscrição
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
