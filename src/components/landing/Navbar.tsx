import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoInstituto from "@/assets/logo-instituto.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "O Instituto", href: "#instituto" },
  { label: "Psicologia do Espírito", href: "#skills" },
  { label: "Formação em Psicoterapia do Espírito", href: "#formacao" },
  { label: "Cursos 2026", href: "#cursos" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img src={logoInstituto} alt="Instituto do Espírito A.N." className="h-10 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#formacao"
          className="hidden md:inline-block btn-primary text-xs"
        >
          Inscrições Abertas — Formação em Psicoterapia
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-heading text-sm uppercase tracking-wider text-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#formacao" className="block btn-primary text-center text-xs mt-4">
            Inscrições Abertas — Formação em Psicoterapia
          </a>
        </div>
      )}
    </nav>
  );
}
