import womanLibrary from "@/assets/woman-library.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-wide grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: Image with steel-blue accent */}
        <div className="relative">
          <div className="absolute top-8 left-8 w-full h-full bg-steel-blue rounded-sm" />
          <img
            src={womanLibrary}
            alt="Mulher lendo em biblioteca"
            className="relative z-10 w-full h-auto rounded-sm shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="heading-uppercase text-2xl md:text-3xl text-primary">
            Integre novas habilidades
          </h2>
          <p className="body-serif text-muted-foreground">
            Adquira competências úteis para aplicar na vida, ampliando sua capacidade para encarar novos desafios e para alcançar a complexidade crescente que caracteriza a evolução.
          </p>
          <a href="#cursos" className="inline-block btn-outline">
            Conheça nossos Cursos
          </a>
        </div>
      </div>
    </section>
  );
}
