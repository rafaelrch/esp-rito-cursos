import heroFormacao from "@/assets/hero-formacao.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Foto de fundo */}
      <div className="absolute inset-0">
        <img
          src={heroFormacao}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          aria-hidden
        />
        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-primary/70" aria-hidden />
      </div>

      {/* Conteúdo centralizado */}
      <div
        ref={ref}
        className={`relative z-10 container-wide flex flex-col items-center text-center max-w-3xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="heading-uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary-foreground">
          O Espírito é a individualidade que evolui nas relações que estabelece consigo mesmo, com o outro e com o universo
        </h1>
        <p className="body-serif text-primary-foreground/95 mt-6 text-lg">
          Um Instituto voltado a criar, aprofundar, debater e difundir conteúdos focados em estudos psicológicos e espirituais fundamentados na Psicologia do Espírito.
        </p>
        <p className="body-serif text-primary-foreground/90 mt-4 text-lg">
          Oferecemos cursos e formações para quem busca autoconhecimento, desenvolvimento interior e uma atuação terapêutica diferenciada.
        </p>
        <a
          href="#cursos"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3 rounded-md bg-primary-foreground text-primary font-heading font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Ver cursos disponíveis
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
