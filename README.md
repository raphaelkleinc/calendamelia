# Caderno de Expedição · Chuí → Montevidéu

Companheiro de planejamento para o cicloturismo solo Chuí (RS) → Montevidéu pela Ruta 10.
São três páginas, acessíveis pelas abas no topo:

- **Equipamento** — marque o que já tem, ajuste quantidades e preços, veja o quanto falta comprar e sua prontidão avançar de Chuí a Montevidéu.
- **Organização** — as quatro frentes de preparação (equipamento, treino físico, logística e pré-partida), com metas que você conclui e acompanha.
- **Mapa & Rota** — mapa de trecho da costa com distâncias, o que há em cada parada e onde NÃO há serviço, mais seus pontos de interesse.

**Funciona 100% offline.** Seus dados ficam salvos no próprio aparelho.

> Este app é o painel **estratégico**. A navegação real na estrada é de um app de mapas offline (OsmAnd / Maps.me). Nunca dependa de um único instrumento.

---

## O que tem nesta pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro. É só isso que você precisa para usar. |
| `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` | Extras que permitem **instalar** o app no celular. Opcionais. |
| `README.md` | Este guia. |

---

## Jeito mais rápido de usar (offline, sem GitHub)

Abra o arquivo `index.html` com dois cliques. Ele abre no navegador e já funciona — **sem internet**.
Copie a pasta para o celular ou um pendrive e abra lá também.

> Nesse modo (arquivo local), o app funciona, mas o botão "instalar no celular" só aparece quando ele está publicado num endereço `https` — é aí que entra o GitHub abaixo.

---

## Publicar no GitHub Pages (para ter um link e instalar no celular)

Você não precisa saber programar. São 6 passos.

1. **Crie uma conta** em https://github.com (grátis).
2. Clique em **New repository** (botão verde). Dê um nome, ex.: `expedicao`. Deixe **Public**. Clique **Create repository**.
3. Na página do repositório vazio, clique em **uploading an existing file**.
4. **Arraste todos os arquivos desta pasta** (o `index.html`, os ícones, o `manifest`, o `sw.js`). Clique em **Commit changes**.
5. Vá em **Settings → Pages**. Em "Branch", escolha **main** e a pasta **/ (root)**. Clique **Save**.
6. Espere ~1 minuto e recarregue. Vai aparecer o link, algo como:
   `https://SEU-USUARIO.github.io/expedicao/`

Pronto — esse é o seu app na web.

---

## Instalar no celular (para levar na estrada, sem sinal)

1. Abra o link do GitHub Pages no navegador do celular (**Chrome** no Android, **Safari** no iPhone).
2. No menu do navegador, toque em **"Adicionar à tela de início"** (Android) ou **Compartilhar → "Adicionar à Tela de Início"** (iPhone).
3. Um ícone da expedição aparece na tela inicial. Abra por ele: ele roda em tela cheia e **funciona offline** depois da primeira abertura.

Assim, no meio do ripio sem sinal, o app abre normalmente.

---

## Backup dos seus dados (importante!)

Os dados ficam **só no aparelho** onde você usou. Regra de expedição: nunca dependa de uma fonte única.

- **Exportar backup** → baixa um arquivo `.json` com toda a sua lista.
- **Importar backup** → carrega esse arquivo em outro aparelho (ou depois de limpar o navegador).

Faça um export de vez em quando e guarde o arquivo (e-mail, nuvem, pendrive).

---

## Editar a lista depois

Tudo é editável dentro do próprio app: marcar como "já tenho", mudar quantidade e preço, adicionar e remover itens.
Se quiser começar do zero, use **Restaurar lista original**.
