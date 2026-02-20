import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const GRUPO_WHATSAPP_URL = "https://chat.whatsapp.com/G5Jzhe1VrK8KCCMj4llJJ4?mode=gi_t";

const Obrigado = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center section-padding pt-28 md:pt-32">
        <div className="container-wide max-w-xl mx-auto text-center space-y-8">
          <h1 className="heading-uppercase text-2xl md:text-3xl lg:text-4xl leading-tight text-primary">
            Obrigado!
          </h1>
          <p className="body-serif text-muted-foreground text-lg">
            Agradecemos por preencher o formulário. Em breve entraremos em contato com mais informações sobre o Instituto e nossos cursos.
          </p>
          <p className="body-serif text-foreground">
            Enquanto isso, entre no nosso grupo no WhatsApp para ficar por dentro das novidades e trocar experiências com outras pessoas.
          </p>
          <Button asChild size="lg" className="btn-primary inline-flex gap-2">
            <a
              href={GRUPO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" />
              Entrar no grupo
            </a>
          </Button>
          <p className="pt-4">
            <Link to="/" className="text-primary underline hover:no-underline text-sm">
              Voltar para a página inicial
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Obrigado;
