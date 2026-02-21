import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
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

const formSchema = z.object({
  nome: z.string().min(2, "Digite seu nome"),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z.string().min(10, "Digite um telefone válido"),
  curso: z.enum(COURSE_OPTIONS, {
    required_error: "Selecione um curso de interesse",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

export function FormSection() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      curso: undefined,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      if (SCRIPT_URL?.trim()) {
        await submitToGoogleSheet(
          { nome: data.nome, email: data.email, telefone: data.telefone, curso: data.curso },
          SCRIPT_URL.trim(),
        );
      } else {
        console.warn("VITE_GOOGLE_SCRIPT_URL não está definida. Configure no Vercel (Settings → Environment Variables) e faça um novo deploy.");
      }
      navigate("/obrigado");
    } catch {
      toast.error("Não foi possível enviar para a planilha. Tente novamente ou entre em contato.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="inscricao" className="section-padding bg-off-white">
      <div
        ref={ref}
        className={`container-wide max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="heading-uppercase text-2xl md:text-4xl text-primary mb-4">
          Receba informações e entre no grupo
        </h2>
        <p className="body-serif text-muted-foreground mb-10 text-lg">
          Preencha o formulário para receber informações sobre nossos cursos e entrar no grupo do WhatsApp.
        </p>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
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
    </section>
  );
}
