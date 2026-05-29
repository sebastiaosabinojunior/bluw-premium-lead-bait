## Objetivo

Transformar o PDF "Instagram - Sistema de Levantadas de Mão" (25 páginas, 7 capítulos) em uma isca digital com visual editorial premium, aplicando a identidade Bluw. **Zero alteração de conteúdo** — apenas layout, tipografia, hierarquia visual e elementos gráficos.

## Identidade visual (extraída do KV enviado)

**Paleta:**
- `#01233F` — Dark Navy (cor principal Bluw, fundo dos capítulos)
- `#033059` — Deep Blue (apoio, gradientes sutis)
- `#937152` — Cooper (acento premium, números de capítulo, fios e destaques)
- `#FFEFD5` — Cream (fundo principal das páginas de conteúdo)
- `#FFFFFF` — Branco (respiro)

**Tipografia:**
- **Mundial** (serifa moderna) — títulos e displays. Como Mundial é fonte paga, usarei a substituta livre **Fraunces** (Google Fonts), de DNA visual muito próximo (serifa contemporânea com personalidade editorial).
- **Lexend** — corpo, legendas, navegação (Google Fonts, fiel ao KV).

**Logo:** uso da versão azul sobre fundos claros (cream) e versão branca sobre fundos navy.

## Estrutura do PDF (25 páginas, espelhando o original)

```text
P1   Capa — Material exclusivo, título, subtítulo, badges (7 capítulos / sistema completo / exemplos práticos)
P2   Sobre este material — texto introdutório longo
P3   Sumário — 8 itens (intro + 6 caps + conclusão)
P4-5 Introdução (2 páginas) — inclui pull quote + "sistema em 6 etapas"
P6   Abertura Cap. 01 (página inteira navy + número 01 em cooper)
P7-8 Conteúdo Cap. 01
P9   Abertura Cap. 02
P10-11 Conteúdo Cap. 02
P12  Abertura Cap. 03
P13-14 Conteúdo Cap. 03
P15  Abertura Cap. 04
P16-17 Conteúdo Cap. 04
P18  Abertura Cap. 05
P19-20 Conteúdo Cap. 05
P21  Abertura Cap. 06
P22-23 Conteúdo Cap. 06
P24  Conclusão — "O sistema completo"
P25  Página final — "Crescimento não é sorte. É método." + handles
```

## Sistema de layout

**Capa (P1):** fundo navy `#01233F`, logo Bluw branca no topo, eyebrow "MATERIAL EXCLUSIVO" em cooper tracking amplo, título em Fraunces display (mistura regular + italic para "transforma seguidor em levantada de mão aquecida"), três badges horizontais com fio cooper, rodapé com handles em Lexend.

**Páginas de conteúdo:** fundo cream `#FFEFD5`, margem generosa (~22mm), grid de 1 coluna com texto em Lexend 11pt / leading 1.55. Eyebrow em cooper uppercase com tracking. Títulos em Fraunces navy. Pull quotes com fio cooper à esquerda e itálico Fraunces. Rodapé fixo com mini-logo Bluw + "GMD — Gestão e Maturação de Demanda" + número de página em cooper.

**Aberturas de capítulo (P6, 9, 12, 15, 18, 21):** página inteira navy, número "01–06" em cooper Fraunces gigante (~240pt) marca d'água, eyebrow "CAPÍTULO 0X" em cream, título do capítulo em Fraunces cream grande, logo Bluw branca discreta no rodapé.

**Sumário (P3):** lista vertical com numeração cooper, títulos Fraunces navy, descrições Lexend muted, fios sutis separando os itens.

**Páginas-marco (P5 lista das 6 etapas, P24 conclusão):** cards/blocos com fundo branco sobre cream, número cooper grande, título navy, descrição muted — tratamento de "sistema" para reforçar o método.

**Página final (P25):** fundo navy, citação central em Fraunces italic grande cream com "É método." destacado em cooper, handles e site no rodapé.

## Detalhes técnicos

- Formato: A4 retrato (210×297mm), alta resolução para impressão e leitura digital.
- Geração via ReportLab (Python, Platypus) com fontes Fraunces e Lexend baixadas do Google Fonts.
- Logo embarcada como PNG (versão azul e versão branca).
- Sem decorações gratuitas: tipografia, cor e espaço fazem o trabalho visual.
- QA obrigatório: conversão para imagens página a página, checagem de overflow, viúvas, alinhamento, contraste e fidelidade ao conteúdo original.
- Saída final: `/mnt/documents/Bluw_Sistema_Levantadas_de_Mao.pdf` entregue via `<presentation-artifact>`.

## Pontos a confirmar

1. **Conteúdo completo:** o PDF tem trechos longos por capítulo. Vou usar o texto integral extraído do original — se você tiver uma versão `.docx` ou `.md` com a revisão final do texto, é melhor ainda (evita qualquer ruído de OCR).
2. **Substituto de Mundial:** ok usar **Fraunces** (Google Fonts, livre e muito próxima)? Alternativas viáveis: PP Editorial New (paga) ou Playfair Display (mais clássica).
3. **Versão editável (PPTX):** quer só o PDF ou também uma versão editável?

Posso seguir com Fraunces + Lexend e PDF apenas, usando o texto extraído, se você confirmar.
