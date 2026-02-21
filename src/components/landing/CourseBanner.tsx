import sunsetBanner from "@/assets/sunset-banner.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export function CourseBanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="formacao"
      ref={ref}
      className={`relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={sunsetBanner}
        alt="Pôr do sol sobre a água"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 text-center text-primary-foreground space-y-4 px-4">
        <p className="font-heading text-sm uppercase tracking-[0.3em]">
          Conheça nosso mais novo curso
        </p>
        <h2 className="heading-uppercase text-3xl md:text-5xl">
          Formação em Psicoterapia do Espírito
        </h2>
        <a
          href="#inscricao"
          className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider border-b-2 border-primary-foreground pb-1 hover:gap-4 transition-all duration-300"
        >
          Saiba mais e inscreva-se <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
