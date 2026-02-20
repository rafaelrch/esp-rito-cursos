import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import heroFormacao from "@/assets/hero-formacao.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { submitToGoogleSheet } from "@/lib/googleSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COURSE_OPTIONS = [
  "O Campo Pessoal na Psicoterapia",
  "Desfazendo-se de Culpas e Alterando Predisposições",
  "O I Ching e o Campo Pessoal",
  "Vivenciando Jung: conceitos fundamentais aplicados a jornada interior",
] as const;

const heroFormSchema = z.object({
  nome: z.string().min(2, "Digite seu nome"),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z.string().min(10, "Digite um telefone válido"),
  curso: z.enum(COURSE_OPTIONS, {
    required_error: "Selecione um curso de interesse",
  }),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

export function Hero() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      curso: undefined,
    },
  });

  async function onSubmit(data: HeroFormValues) {
    setIsSubmitting(true);
    try {
      if (SCRIPT_URL?.trim()) {
        await submitToGoogleSheet(
          { nome: data.nome, email: data.email, telefone: data.telefone, curso: data.curso },
          SCRIPT_URL.trim(),
        );
      }
      navigate("/obrigado");
    } catch {
      toast.error("Não foi possível enviar para a planilha. Tente novamente ou entre em contato.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="home" className="section-padding pt-28 md:pt-32 bg-background">
      <div
        ref={ref}
        className={`container-wide grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Coluna esquerda: título + formulário */}
        <div className="max-w-xl">
          <div className="space-y-6 mb-10">
            <h1 className="heading-uppercase text-2xl md:text-3xl lg:text-4xl leading-tight text-primary">
              O Espírito é a individualidade que evolui nas relações que estabelece consigo mesmo, com o outro e com o universo
            </h1>
            <p className="body-serif text-muted-foreground">
              Preencha o formulário abaixo para receber informações sobre nossos cursos e entrar no grupo.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="curso"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso de interesse</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um curso" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {COURSE_OPTIONS.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </Form>
        </div>

        {/* Coluna direita: imagem da formação */}
        <div className="relative flex justify-center order-first md:order-none">
          <div className="relative w-full max-w-md">
            <img
              src={heroFormacao}
              alt="Meditação e reflexão na natureza - formação no Instituto do Espírito"
              className="w-full h-auto rounded-sm shadow-xl object-cover aspect-[4/5]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
