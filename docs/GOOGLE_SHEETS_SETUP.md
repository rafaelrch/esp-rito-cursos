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

Depois disso, ao enviar o formulário no site, uma nova linha será adicionada na planilha com NOME, EMAIL, TELEFONE e CURSO.
