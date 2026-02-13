import blogBg from "@/assets/blog-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Resolver conflitos começa por compreender o Campo Pessoal",
    excerpt: "Descubra como a compreensão do campo pessoal pode transformar a maneira como lidamos com conflitos internos e externos.",
    image: "https://picsum.photos/seed/blog1/400/300",
  },
  {
    title: "Sonhos repetitivos — por que o inconsciente insiste?",
    excerpt: "Entenda o significado por trás dos sonhos que se repetem e como eles revelam mensagens essenciais do inconsciente.",
    image: "https://picsum.photos/seed/blog2/400/300",
  },
  {
    title: "O I Ching como diálogo com o Inconsciente",
    excerpt: "Uma análise de como o antigo oráculo chinês pode servir como ferramenta de autoconhecimento e diálogo interior.",
    image: "https://picsum.photos/seed/blog3/400/300",
  },
];

export function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28">
      <img
        src={blogBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div
        ref={ref}
        className={`relative z-10 container-wide px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="heading-uppercase text-2xl md:text-3xl text-primary-foreground text-center mb-12">
          Blog do Instituto
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-background rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden h-44">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading font-bold text-primary text-base leading-snug">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wider text-primary hover:gap-3 transition-all duration-300"
                >
                  Leia mais <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Mostrar mais
          </button>
        </div>
      </div>
    </section>
  );
}
