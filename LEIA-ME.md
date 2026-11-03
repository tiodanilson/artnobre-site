# Art Nobre — Site institucional

Site em HTML, CSS e JavaScript puro. Não precisa de build: é só publicar a pasta `site/` no Netlify (arraste a pasta em app.netlify.com/drop ou conecte o repositório com **Base directory = `site`**).

Enquanto uma foto não existir, o site mostra um quadro grafite com o nome do arquivo esperado. Salve a foto **com o nome exato** na pasta indicada e ela aparece no lugar, sem mexer no código.

> Dica: exporte as fotos em JPG com qualidade 75–80%. Os pesos abaixo são o limite para o site continuar rápido no celular.

---

## Imagens e vídeos esperados

### Logo — `assets/img/logo/`

| Arquivo | Tamanho recomendado | Onde aparece |
|---|---|---|
| `logo.png` | 560 × 325, dourado, fundo transparente | Topo do site (acima do título), rodapé e dados para o Google |
| `logo-branco.png` | 560 × 325, off-white, fundo transparente | Reserva para fundos com foto |
| `monograma.png` | 120 × 76, "AN" dourado | Menu flutuante, ao lado de "Art Nobre" |
| `favicon.png` | 256 × 256, "AN" dourado sobre preto | Ícone da aba e do atalho no celular |

> ✅ Já incluídos. Foram extraídos da arte da logo aplicada em tecido, por isso têm leve textura. Se o designer enviar o arquivo original (SVG, PDF ou PNG transparente), basta substituir mantendo os mesmos nomes.

### Hero (topo) — `assets/video/` e `assets/img/hero/`

| Arquivo | Tamanho recomendado | Onde aparece |
|---|---|---|
| `assets/video/hero.mp4` | 1920 × 1080, 10–20 s, sem áudio, H.264, **até 8 MB** | Vídeo de fundo do topo. Não carrega no celular com internet lenta |
| `assets/img/hero/hero-poster.jpg` | 1920 × 1080, até 400 KB | Imagem do topo enquanto o vídeo carrega (e no celular com internet lenta). Também é a **prévia do link no WhatsApp**: deve funcionar bem cortada em 1200 × 630 |

### Empresa — `assets/img/empresa/`

| Arquivo | Tamanho recomendado | Onde aparece |
|---|---|---|
| `fundador.jpg` | 1200 × 1500 (vertical 4:5), até 350 KB | Seção "Prazer em conhecer", ao lado do nome do fundador |
| `contato-bg.jpg` | 1920 × 1200, até 350 KB | Fundo escurecido do bloco de Contato. Foto com textura funciona bem (madeira, pedra, oficina) |
| `fachada.jpg` | 1200 × 1500 | Reservada (não aparece nesta versão) |
| `equipe.jpg` | 1600 × 1067 | Reservada (não aparece nesta versão) |

### Serviços — `assets/img/servicos/`

Fotos verticais 4:5 (1200 × 1500), até 300 KB. No desktop trocam ao passar o mouse sobre cada serviço; no celular aparecem dentro do item aberto (cortadas em 4:3, então mantenha o assunto no centro).

| Arquivo | Serviço |
|---|---|
| `servico-1.jpg` | 01 Móveis planejados residenciais |
| `servico-2.jpg` | 02 Projetos corporativos e comerciais |
| `servico-3.jpg` | 03 Marmoraria |
| `servico-4.jpg` | 04 Execução de projetos de arquitetos |

### Inspirações — `assets/img/inspiracoes/`

| Arquivo | Tamanho recomendado | Onde aparece |
|---|---|---|
| `inspiracao-1.jpg`, `inspiracao-2.jpg`, `inspiracao-3.jpg` | 1080 × 1350 (formato de post do Instagram), até 250 KB | Os 3 cards da seção "Inspirações" |

### Projetos — `assets/img/projetos/`

✅ **Já incluídas** (recortadas dos posts do Instagram, sem legenda e sem logo sobreposta). Para trocar por uma foto melhor, salve com o mesmo nome. Lado maior até 1600 px.

| Projeto | Arquivos |
|---|---|
| Living com painel em laca | `living-1` a `living-5.jpg` |
| Clínica Arthena | `clinica-arthena-1` a `-3.jpg` |
| Espaço Gourmet | `espaco-gourmet-1`, `-2.jpg` |
| Carvão Dourados | `carvao-dourados-1` a `-3.jpg` |
| Brava Imóveis | `brava-1` a `brava-5.jpg` |
| Cozinha com ilha em mármore | `cozinha-1` a `-3.jpg` |
| Suíte master | `suite-1` a `-3.jpg` |
| Quarto infantil | `quarto-infantil-1` a `-3.jpg` |
| Cristaleira personalizada | `cristaleira-1.jpg` |
| Escritório executivo | `escritorio-executivo-1`, `-2.jpg` |

Outras já incluídas: `hero/hero-poster.jpg` (living), `empresa/fundador.jpg`, `empresa/fachada.jpg`, `servicos/servico-1.jpg`, `servicos/servico-3.jpg`, `processo/producao.jpg`, `processo/oficina.jpg`.

---

## Textos para completar (procure por `TROCAR`, `[preencher]` e `[revisar]`)

| Onde | O que |
|---|---|
| `index.html` — "Prazer em conhecer" | `[NOME DO FUNDADOR]`, texto de boas-vindas e `[X]+` anos de experiência |
| `index.html` — Histórias de clientes | Ano de cada projeto e revisão do texto da Carvão Dourados |
| `index.html` — Depoimentos | 3 depoimentos e nomes reais do Google |
| `index.html` — FAQ | Respostas marcadas com `[revisar]` |
| `index.html` — Inspirações | Datas, títulos e links dos posts do Instagram |
| `js/main.js` — `PROJETOS` | Campos `[preencher]` das fichas técnicas |

---

## Como editar

### Adicionar ou trocar um projeto
Em `js/main.js`, no array `PROJETOS`:

```js
{
  titulo: 'Cozinha Jardim América',
  categoria: 'residencial',        // residencial | corporativo | comercial | gourmet | marmoraria
  descricao: 'Texto curto do projeto.',
  imagens: ['cozinha-ja-1.jpg', 'cozinha-ja-2.jpg'],   // em assets/img/projetos/
  video: null,                     // ou 'cozinha-ja.mp4' em assets/video/
  formato: 'largo',                // alto | retrato | largo | quadrado
  extras: ['marmoraria'],          // opcional: também aparece nesse filtro
  destaque: true,                  // aparece no slider "Projetos que falam por si"
  ficha: {
    'Cliente / Tipo': 'Residencial',
    'Ambientes': 'Cozinha e ilha',
    'Materiais': 'Laca fosca e quartzito',
    'Cidade': 'Dourados – MS',
    'Ano': '2026',
  },
},
```

### WhatsApp, e-mail e mensagem do orçamento
No topo de `js/main.js`, no objeto `CONFIG`. Todos os botões e o formulário usam esses dados. Se trocar o telefone, troque também nos dados estruturados do `index.html` (bloco `application/ld+json`).

### Formulário de contato
Não há servidor: ao enviar, o site monta a frase com os campos preenchidos e abre o WhatsApp com a mensagem pronta. As opções de serviço e cidade ficam nos `<select>` do bloco Contato no `index.html`.

### Domínio
O site usa `https://tiodanilson.github.io/artnobre-site/` em `canonical`, `og:image`, `og:url` e nos dados estruturados. Quando tiver domínio próprio, troque esse endereço no `index.html` (busque por `tiodanilson.github.io/artnobre-site`).
