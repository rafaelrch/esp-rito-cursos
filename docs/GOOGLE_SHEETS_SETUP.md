# Enviar dados do formulário para o Google Sheets

Os dados do formulário (Nome, E-mail, Telefone, Curso) são enviados para uma planilha no Google Sheets usando **Google Apps Script**. Siga os passos abaixo.

## 1. Configurar a planilha

Sua planilha "INSTITUTO DO ESPÍRITO" já deve ter na **primeira linha** os cabeçalhos:

| A   | B     | C         | D     |
|-----|-------|-----------|--------|
| NOME | EMAIL | TELEFONE | CURSO  |

## 2. Criar o script na planilha

1. Abra a planilha **"INSTITUTO DO ESPÍRITO"** no Google Sheets (em [sheets.google.com](https://sheets.google.com)).
2. No menu da planilha: **Extensões** → **Apps Script** (isso abre o editor em outra aba; se aparecer "Bad Request", você pode ter aberto a URL errada — veja a observação abaixo).
3. Apague o conteúdo padrão do arquivo `Code.gs` e cole o código abaixo.
4. Salve o projeto (Ctrl+S ou ícone de disquete). Dê um nome ao projeto, por exemplo: **Enviar para Planilha**.

**Se aparecer "Bad Request" ou "Error 400":** isso costuma acontecer quando se abre no navegador a **URL de implantação** (a que termina em `/exec`). Essa URL não é para abrir no navegador — é só para o site enviar os dados. Para **editar o script**, sempre entre pela planilha: Google Sheets → abra a planilha → **Extensões** → **Apps Script**.

### Código do script (cole no Apps Script)

```javascript
// Responde quando alguém abre a URL no navegador (evita erro 400)
function doGet() {
  return ContentService.createTextOutput("Esta URL é apenas para envio do formulário do site. Não abra no navegador.")
    .setMimeType(ContentService.MimeType.TEXT);
}

// Recebe os dados enviados pelo formulário do site
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;

    var nome = params.nome || "";
    var email = params.email || "";
    var telefone = params.telefone || "";
    var curso = params.curso || "";

    sheet.appendRow([nome, email, telefone, curso]);

    return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Erro: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
```

> **Importante:** A URL que termina em `/exec` é só para o **site** enviar os dados. **Não use essa URL para abrir ou editar o script.** Para editar o código, sempre abra a planilha no Google Sheets e vá em **Extensões** → **Apps Script**.

## 3. Implantar como aplicativo web

1. No editor do Apps Script, clique em **Implantar** → **Nova implantação**.
2. Ao lado de **Selecionar tipo**, clique no ícone de engrenagem e escolha **Aplicativo da Web**.
3. Preencha:
   - **Descrição:** opcional (ex.: "Receber dados do site").
   - **Executar como:** **Eu** (sua conta do Google).
   - **Quem tem acesso:** **Qualquer pessoa** (para o site poder enviar os dados).
4. Clique em **Implantar**.
5. **Copie a URL do aplicativo da Web** (algo como `https://script.google.com/macros/s/XXXXX/exec`). Você vai usar essa URL no projeto.

## 4. Configurar a URL no projeto

1. Na raiz do projeto, crie um arquivo `.env` (se ainda não existir).
2. Adicione a linha (trocando pela sua URL):

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_ID_DA_IMPLANTACAO/exec
```

3. Reinicie o servidor de desenvolvimento (`npm run dev`) para carregar a variável.

## 5. Site no ar (produção) — importante

O arquivo `.env` **não** vai para o repositório (está no `.gitignore`). Por isso, quando o site é publicado (Vercel, Netlify, Lovable, etc.), o build roda no servidor deles **sem** a variável `VITE_GOOGLE_SCRIPT_URL`. Resultado: o formulário não envia nada para a planilha, só redireciona para a página de obrigado.

**O que fazer:** configurar a mesma variável no painel do serviço onde o site está hospedado:

1. Abra o painel do seu provedor (Vercel, Netlify, Lovable, etc.).
2. Vá em **Settings** / **Configurações** do projeto → **Environment Variables** / **Variáveis de ambiente**.
3. Crie uma variável:
   - **Nome:** `VITE_GOOGLE_SCRIPT_URL`
   - **Valor:** `https://script.google.com/macros/s/SUA_ID/exec` (a URL do seu Apps Script).
4. Faça um **novo deploy** (Redeploy / Build again). As variáveis do Vite são gravadas no build; sem novo deploy, a URL não entra no site no ar.

Depois disso, ao enviar o formulário no site publicado, uma nova linha será adicionada na planilha com NOME, EMAIL, TELEFONE e CURSO.

---

## 6. Troubleshooting (Vercel — dados não chegam na planilha)

### Conferir variável no Vercel

1. **Vercel** → projeto **institutodoespiritoan** → **Settings** → **Environment Variables**.
2. Deve existir:
   - **Key:** exatamente `VITE_GOOGLE_SCRIPT_URL` (tudo em maiúsculas, com os underscores).
   - **Value:** a URL completa, ex.: `https://script.google.com/macros/s/AKfycby.../exec`.
   - **Environment:** marque **Production** (e, se quiser testar em preview, **Preview**).
3. Salve e vá em **Deployments** → no último deploy, menu (⋯) → **Redeploy**. Aguarde o build terminar.

### Testar se a URL está no build

1. Abra o site no ar (ex.: `institutodoespiritoan.vercel.app`) em uma aba anônima (para evitar cache).
2. Abra o **Console** do navegador (F12 → aba Console).
3. Preencha e envie o formulário.
4. Se aparecer a mensagem *"VITE_GOOGLE_SCRIPT_URL não está definida..."* no console, a variável **não** entrou no build. Volte ao Vercel, confira o nome da variável e o ambiente, e faça um **Redeploy** de novo.

### Ver se o Google recebeu o envio

1. Abra a planilha no Google Sheets → **Extensões** → **Apps Script**.
2. No Apps Script: **Execuções** (ícone de relógio no menu lateral esquerdo).
3. Envie um formulário no site e, em seguida, atualize a lista de execuções no Apps Script.
4. Se aparecer uma execução de `doPost` com status **Concluído**, o Google recebeu o POST. Se a planilha não tiver a linha nova, o script pode estar ligado a outra planilha ou à primeira aba errada — o script usa a **primeira aba** da planilha onde ele foi criado. Confirme que o script foi criado em **Extensões → Apps Script** a partir da planilha "INSTITUTO DO ESPÍRITO" e que a aba onde estão NOME, EMAIL, TELEFONE, CURSO é a primeira aba.
5. Se **não** aparecer nenhuma execução ao enviar o formulário, o POST não está chegando ao script (a URL no site pode estar errada ou a variável ainda não está no build).
