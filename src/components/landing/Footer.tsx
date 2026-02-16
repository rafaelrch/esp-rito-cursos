import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-lg tracking-wide">
            Instituto do Espírito A.N.
          </h4>
          <p className="font-body text-sm leading-relaxed opacity-80">
            O Instituto do Espírito foi concebido com vistas a criar, aprofundar, debater e difundir conteúdos focados em estudos psicológicos e espirituais.
          </p>
          <div className="space-y-2 text-sm opacity-80">
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 flex-shrink-0" />
              Rua Desembargador Polybio Mendes da Silva, 159 Sala 109, Piatã – Salvador/BA, CEP 41650-480
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} className="flex-shrink-0" />
              falecom@institutodoespiritoan.com.br
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="flex-shrink-0" />
              55 71 9171-9460
            </p>
          </div>
        </div>

        {/* Col 2: Institucional */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Institucional</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Home", "O Instituto", "Formação", "Cursos", "Matrícula"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:opacity-100 transition-opacity">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Informações */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Informações</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Fale Conosco", "Próximos Eventos", "Política de Privacidade", "Notícias", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:opacity-100 transition-opacity">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Redes Sociais */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Redes Sociais</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/institutodoespiritoan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-primary-foreground/20 text-center">
        <p className="font-heading text-xs opacity-60 uppercase tracking-wider">
          © 2026 Instituto do Espírito A.N. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
