import heroHands from "@/assets/hero-hands.jpg";
import heroStones from "@/assets/hero-stones.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="section-padding pt-28 md:pt-32 bg-background">
      <div
        ref={ref}
        className={`container-wide grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="heading-uppercase text-2xl md:text-3xl lg:text-4xl leading-tight text-primary">
            O Espírito é a individualidade que evolui nas relações que estabelece consigo mesmo, com o outro e com o universo
          </h1>
          <p className="body-serif text-muted-foreground">
            Um Instituto voltado a criar, aprofundar, debater e difundir conteúdos focados em estudos psicológicos e espirituais fundamentados na Psicologia do Espírito.
          </p>
          <a href="#instituto" className="inline-block btn-primary">
            Saiba mais sobre o Instituto
          </a>
        </div>

        {/* Right: Overlapping images */}
        <div className="relative flex justify-center">
          <div className="relative w-64 md:w-72 lg:w-80">
            <img
              src={heroHands}
              alt="Mãos conectando em gesto de cura espiritual"
              className="w-full h-auto rounded-sm shadow-xl relative z-10"
              loading="lazy"
            />
            <img
              src={heroStones}
              alt="Pedras empilhadas à beira de um lago ao pôr do sol"
              className="absolute -bottom-12 -right-12 md:-right-16 w-48 md:w-56 lg:w-64 h-auto rounded-sm shadow-xl z-20 border-4 border-background"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
