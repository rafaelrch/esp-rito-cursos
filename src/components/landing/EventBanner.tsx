import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function EventBanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-wide transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 border border-border rounded-sm p-6 md:p-8 shadow-sm">
          <img
            src="https://picsum.photos/seed/evento1/200/200"
            alt="Aula inaugural"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-sm flex-shrink-0"
            loading="lazy"
          />
          <div className="space-y-3 text-center md:text-left">
            <h3 className="heading-uppercase text-lg md:text-xl text-primary">
              Aula Inaugural Formação em Psicoterapia do Espírito
            </h3>
            <p className="body-serif text-muted-foreground text-base">
              Não perca a oportunidade de ampliar suas habilidades psicoterapêuticas com esta formação inédita.
            </p>
            <a
              href="#formacao"
              className="inline-flex items-center gap-1 font-heading text-xs uppercase tracking-wider text-primary hover:text-secondary transition-colors"
            >
              saiba mais &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
