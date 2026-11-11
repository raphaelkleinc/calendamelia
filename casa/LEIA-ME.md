# Mañana Lo Hago

Agenda compartilhada da casa: tarefas por pessoa, adiamento "pra amanhã", visão da semana e lista de compras.
Usa o mesmo Firebase do Calendário da Amélia, numa área separada (`/casa`), e lê a guarda de lá (`/overrides` + âncora 09/06/2026).

## 1. Publicar no GitHub Pages
1. Crie um repositório novo no GitHub, por exemplo `manana`.
2. Envie todos os arquivos desta pasta (index.html, manifest.json, sw.js e os 3 ícones).
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
4. O app fica em `https://raphaelkleinc.github.io/calendamelia/casa/`.

O domínio `raphaelkleinc.github.io` já está autorizado no Firebase (o calendário usa login Google nele), então não precisa mexer em Authentication.

## 2. Regras do Realtime Database
Nada a mudar: o app usa as regras que o Firebase do calendário já tem (precisa estar logado).
A área `/casa` fica visível para quem loga no Firebase do calendário, o que está ok porque só vocês dois têm o link.

## 3. Instalar no celular
- **Android (Chrome):** menu ⋮ → *Adicionar à tela inicial*.
- **iPhone (Safari):** botão Compartilhar → *Adicionar à Tela de Início*.

## Primeiro uso
Cada um entra com sua conta Google e vira uma "pessoa" automaticamente. Depois, em **Ajustes**:
- adicione a Amélia com presença *Conforme a guarda da Amélia*;
- crie categorias (opcional) e seções da lista de compras (opcional).

Em **Tarefas**, crie o que quiser: responsável, frequência (todo dia, dias da semana, 1x por semana, a cada X dias, uma vez só), horário, observação e pausar/ativar.

## Testar sem Firebase
Abra `index.html?demo`: roda tudo no navegador, sem salvar nada no Firebase.

## Estrutura dos dados (`/casa`)
- `membros/{id}`: nome, emoji, cor, presenca (`sempre` | `guarda` | `dias`), dias, email
- `tarefas/{id}`: nome, emoji, resp (id da pessoa ou `qualquer`), cat, freq {tipo, dias, cada, inicio}, hora, notas, ativa
- `categorias/{id}`, `compras/secoes/{id}`, `compras/itens/{id}`
- `dia/{AAAA-MM-DD}/{tarefa}`: { s: `feita` | `adiada`, por, em }
- `adiadas/{AAAA-MM-DD}/{tarefa}`: tarefas empurradas pra esse dia
