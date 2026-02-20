/**
 * Envia os dados do formulário para o Google Sheets via Google Apps Script.
 * Usa um form que submete para um iframe oculto para evitar problemas de CORS.
 */

export type SheetFormData = {
  nome: string;
  email: string;
  telefone: string;
  curso: string;
};

/**
 * Submete os dados para a URL do Google Apps Script (web app).
 * A URL deve ser a URL de implantação do script (termina em /exec).
 */
export function submitToGoogleSheet(data: SheetFormData, scriptUrl: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const iframeName = "google-sheet-submit-iframe-" + Date.now();
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    iframe.title = "Envio para planilha";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.action = scriptUrl;
    form.method = "POST";
    form.target = iframeName;
    form.style.display = "none";

    const fields: (keyof SheetFormData)[] = ["nome", "email", "telefone", "curso"];
    fields.forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key] ?? "";
      form.appendChild(input);
    });

    document.body.appendChild(form);

    const cleanup = () => {
      form.remove();
      setTimeout(() => iframe.remove(), 1000);
    };

    // O script do Google pode demorar; consideramos sucesso após enviar.
    // Não há como ler a resposta de forma confiável por CORS.
    const timeout = setTimeout(() => {
      cleanup();
      resolve();
    }, 3000);

    iframe.onerror = () => {
      clearTimeout(timeout);
      cleanup();
      reject(new Error("Erro ao enviar para a planilha."));
    };

    form.submit();
    // Resolve logo após o submit; o dado já foi enviado
    setTimeout(() => {
      clearTimeout(timeout);
      cleanup();
      resolve();
    }, 800);
  });
}
