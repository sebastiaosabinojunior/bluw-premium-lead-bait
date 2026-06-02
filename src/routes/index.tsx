import { createFileRoute } from "@tanstack/react-router";
import founders from "@/assets/bluw-founders-kv.jpg";
import conrado from "@/assets/conrado-hero.jpg";
import selo from "@/assets/selo-8ps.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluw Comunicação — Marketing para Lojas de Móveis de Médio e Alto Padrão" },
      { name: "description", content: "Sistema GMD — Gestão e Maturação de Demanda. Estruturamos o caminho do seu cliente do primeiro contato digital ao fechamento no showroom. Agência certificada Método 8Ps." },
      { property: "og:title", content: "Bluw Comunicação — Marketing para Lojas de Móveis Premium" },
      { property: "og:description", content: "Não vendemos tráfego. Vendemos um sistema que prepara o mercado para comprar de você." },
    ],
  }),
  component: Index,
});

/* Bluw × Conrado Adolpho 8Ps palette */
const NAVY = "#033059";       // deep blue
const NAVY_DEEP = "#01233F";  // dark navy
const NAVY_BLACK = "#01101E";
const CYAN = "#C9A36A";       // copper highlight (kept name for compat)
const COPPER = "#937152";     // brand copper
const CREAM = "#FFEFD5";      // cream highlight
const INK = "#0A0A14";
const PAPER = "#FFEFD5";      // cream as page background
const LINE = "rgba(1,35,63,0.18)";

const Rule = ({ color = LINE }: { color?: string }) => (
  <div className="w-full h-px" style={{ backgroundColor: color }} />
);

const Label = ({ children, color = INK }: { children: React.ReactNode; color?: string }) => (
  <span
    className="font-mono-label text-[10px] md:text-[11px]"
    style={{ color, letterSpacing: "0.22em" }}
  >
    {children}
  </span>
);

function Index() {
  return (
    <div style={{ background: PAPER, color: INK }} className="min-h-screen">
      {/* ─────────────── NAV ─────────────── */}
      <nav className="sticky top-0 z-50" style={{ background: NAVY, borderBottom: `1px solid ${CYAN}33` }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-white">Bluw<span style={{ color: CYAN }}>.</span></span>
            <span className="font-mono-label text-[9px] text-white/60 hidden sm:inline">COMUNICAÇÃO</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="font-mono-label text-[10px] text-white/70 hover:text-white">MÉTODO</a>
            <a href="#bluw" className="font-mono-label text-[10px] text-white/70 hover:text-white">BLUW</a>
            <a href="#problema" className="font-mono-label text-[10px] text-white/70 hover:text-white">DIAGNÓSTICO</a>
          </div>
          <a
            href="#contato"
            className="font-mono-label text-[10px] px-5 py-2.5 border transition-colors"
            style={{ borderColor: CYAN, color: CYAN }}
          >
            AGENDAR DIAGNÓSTICO
          </a>
        </div>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <header id="top" style={{ background: `linear-gradient(160deg, ${NAVY_BLACK} 0%, ${NAVY_DEEP} 55%, ${NAVY} 100%)`, color: CREAM }} className="relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full" style={{ background: `radial-gradient(circle, ${COPPER}26 0%, transparent 70%)` }} />
        {/* KV signature copper arcs */}
        <svg aria-hidden viewBox="0 0 1200 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-70">
          <defs>
            <linearGradient id="heroCopper" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={COPPER} stopOpacity="0.9" />
              <stop offset="60%" stopColor={CREAM} stopOpacity="0.7" />
              <stop offset="100%" stopColor={COPPER} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle cx="1000" cy="220" r="340" fill="none" stroke="url(#heroCopper)" strokeWidth="1.8" strokeDasharray="900 2000" strokeDashoffset="-80" />
          <circle cx="1080" cy="240" r="260" fill="none" stroke={COPPER} strokeOpacity="0.35" strokeWidth="1" strokeDasharray="600 2000" strokeDashoffset="-180" />
        </svg>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28 relative">
          {/* eyebrow row */}
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-14" style={{ background: COPPER }} />
            <Label color={CREAM}>ESPECIALISTAS EM VAREJO MOVELEIRO DE MÉDIO E ALTO PADRÃO</Label>
          </div>

          {/* headline grid */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <h1 className="md:col-span-9 font-display font-normal text-[44px] sm:text-[58px] md:text-[78px] leading-[0.98] tracking-[-0.02em]">
              Sua loja atraindo clientes com <em className="italic" style={{ color: CYAN }}>perfil real</em>, fechando sem brigar no preço e crescendo com previsibilidade.
            </h1>
            <div className="md:col-span-3 md:pb-3">
              <Rule color="rgba(255,255,255,0.25)" />
              <p className="mt-5 text-sm leading-relaxed text-white/75">
                Estruturamos o caminho do seu cliente desde o primeiro contato digital até o fechamento no showroom — com método, maturação de demanda e sem agência genérica.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-5 sm:items-center">
            <a href="#contato" className="font-mono-label text-[11px] px-8 py-4 inline-flex items-center justify-center gap-3 transition-colors hover:opacity-90" style={{ background: COPPER, color: NAVY_BLACK }}>
              AGENDAR DIAGNÓSTICO <span aria-hidden>→</span>
            </a>
            <a href="#metodo" className="font-mono-label text-[11px] px-8 py-4 inline-flex items-center justify-center border transition-colors" style={{ borderColor: `${CREAM}55`, color: CREAM }}>
              CONHECER O MÉTODO
            </a>
            <span className="font-mono-label text-[10px] sm:ml-2" style={{ color: `${CREAM}99` }}>DIAGNÓSTICO GRATUITO · SEM COMPROMISSO</span>
          </div>

          {/* ticker strip */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-b" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            {[
              ["+180%", "FATURAMENTO / 90 DIAS"],
              ["3×", "VISITAS QUALIFICADAS"],
              ["−60%", "LEADS FRIOS"],
              ["4°", "MÊS DE PIPELINE PREVISÍVEL"],
            ].map(([v, l], i) => (
              <div key={i} className={`py-6 px-4 ${i !== 0 ? "md:border-l" : ""} ${i % 2 !== 0 ? "border-l md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`} style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <div className="font-display text-3xl md:text-4xl">{v}</div>
                <div className="mt-2"><Label color="rgba(255,255,255,0.55)">{l}</Label></div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─────────────── RESULTADOS ─────────────── */}
      <section id="resultados" className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Label color={CYAN}>01 — RESULTADOS</Label>
              <h2 className="font-display text-4xl md:text-5xl leading-[1] tracking-tight mt-6">
                Números reais.<br/><em className="italic" style={{ color: CYAN }}>Negócios reais.</em>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#3A3A4A" }}>
                Não trabalhamos com promessa de volume. Trabalhamos com previsibilidade de resultado e qualidade de lead.
              </p>
            </div>

            <div className="md:col-span-8">
              <Rule />
              {[
                ["+180%", "de crescimento no faturamento em 90 dias com sistema de maturação de demanda", "LOJA DE MÓVEIS · SP"],
                ["3×", "mais visitas qualificadas ao showroom — cliente chegando preparado para comprar", "LOJA ALTO PADRÃO · MG"],
                ["−60%", "de redução em leads frios — menos curioso no WhatsApp, mais comprador no showroom", "VAREJO MOVELEIRO · RS"],
                ["4°", "mês com pipeline previsível e equipe comercial fechando com mais consistência", "SHOWROOM PREMIUM · RJ"],
              ].map(([v, t, src], i) => (
                <div key={i}>
                  <div className="py-8 grid grid-cols-12 gap-6 items-baseline">
                    <div className="col-span-3 font-display text-[40px] md:text-[56px] leading-none tracking-tight" style={{ color: NAVY }}>{v}</div>
                    <p className="col-span-7 text-[16px] leading-snug" style={{ color: INK }}>{t}</p>
                    <div className="col-span-2 text-right"><Label color="#7A7A88">{src}</Label></div>
                  </div>
                  <Rule />
                </div>
              ))}

              <blockquote className="mt-12 pl-6 border-l-2" style={{ borderColor: CYAN }}>
                <p className="font-display italic text-2xl md:text-[28px] leading-[1.25]" style={{ color: NAVY }}>
                  "Finalmente uma consultoria que entende que móvel de alto padrão não se vende com volume de leads. A Bluw estruturou nosso processo do zero — hoje temos previsibilidade de agenda e a equipe está muito mais preparada para conduzir o cliente até o fechamento."
                </p>
                <footer className="mt-5"><Label color="#7A7A88">DONO DE LOJA · ALTO PADRÃO · SÃO PAULO</Label></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── QUEM SOMOS (BLUW) ─────────────── */}
      <section id="bluw" style={{ background: NAVY, color: "white" }} className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <div
                className="aspect-[4/5] relative overflow-hidden"
                style={{ background: NAVY_DEEP }}
              >
                {/* portrait */}
                <img
                  src={founders}
                  alt="Junior Sabino e Vitor HRF, sócios da Bluw Comunicação"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* copper arc — KV signature */}
                <svg
                  aria-hidden
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <defs>
                    <linearGradient id="copperArc" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={COPPER} stopOpacity="0.95" />
                      <stop offset="55%" stopColor={CREAM} stopOpacity="0.85" />
                      <stop offset="100%" stopColor={COPPER} stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <circle cx="320" cy="180" r="160" fill="none" stroke="url(#copperArc)" strokeWidth="2.2" strokeDasharray="500 1000" strokeDashoffset="-30" />
                  <circle cx="80" cy="380" r="120" fill="none" stroke={COPPER} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="320 1000" strokeDashoffset="-100" />
                </svg>
                {/* bottom navy gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: `linear-gradient(180deg, transparent 0%, ${NAVY_BLACK} 100%)` }} />
                {/* hairline frame */}
                <div className="absolute inset-4 border pointer-events-none" style={{ borderColor: `${COPPER}55` }} />
                {/* labels */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="h-px w-6" style={{ background: COPPER }} />
                  <Label color={CREAM}>BLUW / SÓCIOS</Label>
                </div>
                <div className="absolute top-6 right-6">
                  <Label color="rgba(255,239,213,0.55)">FIG. 02</Label>
                </div>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between items-baseline">
                  <span className="font-display italic text-base" style={{ color: CREAM }}>Junior Sabino</span>
                  <span className="font-mono-label text-[9px]" style={{ color: `${COPPER}` }}>&</span>
                  <span className="font-display italic text-base" style={{ color: CREAM }}>Vitor HRF</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <Label color={CYAN}>02 — QUEM ESTÁ POR TRÁS</Label>
              <h2 className="font-display text-4xl md:text-[56px] leading-[1] tracking-tight mt-6">
                Não somos uma agência.<br/><em className="italic" style={{ color: CYAN }}>Somos especialistas no seu mercado.</em>
              </h2>
              <Rule color="rgba(255,255,255,0.18)" />
              <p className="mt-8 text-[16px] leading-relaxed text-white/80 max-w-[58ch]">
                Junior Sabino e Vitor HRF têm mais de 8 anos de experiência em marketing e vendas com foco exclusivo no varejo de móveis de médio e alto padrão e planejados.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-white/80 max-w-[58ch]">
                Entendemos que o seu cliente não decide em um clique. Que a decisão de compra é longa, começa com uma percepção e amadurece antes do contato. E que o marketing precisa fazer esse trabalho antes do vendedor entrar em cena.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.15)" }}>
                {[
                  ["8+", "Anos em marketing e vendas para varejo premium"],
                  ["GMD", "Método exclusivo de Gestão e Maturação de Demanda"],
                  ["100%", "Foco em varejo moveleiro médio, alto padrão e planejados"],
                ].map(([v, l], i) => (
                  <div key={i} className="p-6" style={{ background: NAVY }}>
                    <div className="font-display text-3xl md:text-4xl" style={{ color: CYAN }}>{v}</div>
                    <p className="mt-3 text-xs text-white/65 leading-relaxed">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROBLEMA ─────────────── */}
      <section id="problema" className="py-24 md:py-32" style={{ background: PAPER }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="max-w-[760px]">
            <Label color={CYAN}>03 — O CENÁRIO REAL DO SEU MERCADO</Label>
            <h2 className="font-display text-4xl md:text-[56px] leading-[1.02] tracking-tight mt-6" style={{ color: NAVY }}>
              Você investe em marketing. Mas o lead que chega <em className="italic" style={{ color: CYAN }}>não tem perfil.</em>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed" style={{ color: "#3A3A4A" }}>
              Isso não é azar. É sintoma de um marketing feito para volume — não para o ciclo longo de decisão do varejo de alto padrão.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-px" style={{ background: LINE }}>
            {[
              ["Só aparece curioso querendo preço", "Você investe em tráfego e recebe contatos que nunca vão comprar um sofá de R$ 15 mil. O vendedor perde tempo, se frustra e culpa o marketing."],
              ["Recebo muito lead mas fecho quase nada", "Não é o vendedor que é fraco — é o lead que chega despreparado. Sem valor percebido construído antes do contato, qualquer vendedor perde."],
              ["Invisto em marketing mas não vejo retorno", "Tráfego sem maturação gera volume sem qualidade. O ROI some porque o lead chega frio demais para tomar uma decisão de R$ 30k."],
              ["Já contratei agência e não funcionou", "Prometeram leads qualificados. Entregaram volume. Seu produto é premium — o sistema de marketing também precisa ser."],
            ].map(([t, d], i) => (
              <div key={i} className="p-8 md:p-10" style={{ background: PAPER }}>
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl leading-none mt-1" style={{ color: CYAN }}>✕</span>
                  <div>
                    <h3 className="font-display italic text-xl md:text-2xl leading-snug" style={{ color: NAVY }}>"{t}"</h3>
                    <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3A3A4A" }}>{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-[820px] font-display text-2xl md:text-[32px] leading-[1.25]" style={{ color: NAVY }}>
            O digital atrai. Mas o fechamento é humano. O que está faltando não é mais tráfego —<br className="hidden md:block"/>é <em className="italic" style={{ color: CYAN }}>um sistema que prepara o cliente antes de ele chegar no seu showroom.</em>
          </p>
        </div>
      </section>

      {/* ─────────────── MÉTODO GMD ─────────────── */}
      <section id="metodo" style={{ background: NAVY_DEEP, color: "white" }} className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <Label color={CYAN}>04 — NOSSO MÉTODO EXCLUSIVO</Label>
          <div className="mt-6 grid md:grid-cols-12 gap-10 items-end">
            <h2 className="md:col-span-8 font-display text-4xl md:text-[72px] leading-[0.98] tracking-tight">
              GMD — Gestão e <em className="italic" style={{ color: CYAN }}>Maturação de Demanda</em>
            </h2>
            <p className="md:col-span-4 text-[15px] leading-relaxed text-white/75">
              Não é uma campanha. É um sistema que trabalha o 80% da venda que acontece antes do seu vendedor entrar em cena.
            </p>
          </div>

          <Rule color="rgba(255,255,255,0.18)" />
          <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-[1080px]">
            <p className="text-[15px] leading-relaxed text-white/75">
              Ninguém acorda e decide comprar um sofá de R$ 30 mil. A decisão é longa — começa com uma percepção, amadurece com conexão e conteúdo, e se concretiza quando o cliente já formou uma opinião sobre quem vai atender ele.
            </p>
            <p className="text-[15px] leading-relaxed text-white/75">
              O GMD estrutura exatamente esse caminho: <span style={{ color: CYAN }}>do primeiro contato digital até o momento em que o lead chega ao seu showroom preparado para comprar</span>, com valor percebido alto e as principais objeções já quebradas.
            </p>
          </div>

          {/* timeline */}
          <div className="mt-20 grid md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.15)" }}>
            {[
              ["01", "MÊS 1", "Fundação", "Diagnóstico, análise do Instagram, planejamento de conteúdo e estruturação do funil de stories."],
              ["02", "MÊS 2", "Maturação", "Stories como motor de conexão, conteúdo educativo gerando valor percebido e remarketing ativo."],
              ["03", "MÊS 3", "Consolidação", "Sistema completo rodando, KPIs semanais, lead chegando mais preparado, vendedor com menos atrito."],
              ["04", "MÊS 4+", "Escala", "Base consolidada, aumento estratégico de verba e campanhas de alta performance."],
            ].map(([n, m, t, d], i) => (
              <div key={i} className="p-7" style={{ background: NAVY_DEEP }}>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl" style={{ color: CYAN }}>{n}</span>
                  <Label color="rgba(255,255,255,0.55)">{m}</Label>
                </div>
                <h4 className="font-display text-2xl mt-6">{t}</h4>
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">{d}</p>
              </div>
            ))}
          </div>

          {/* deliverables */}
          <div className="mt-24">
            <Label color="rgba(255,255,255,0.55)">O QUE VOCÊ RECEBE NO GMD</Label>
            <div className="mt-8 grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.15)" }}>
              {[
                ["01", "Análise do Instagram", "Diagnóstico completo de posicionamento e oportunidades"],
                ["02", "Conteúdo Orgânico", "Planejamento de feed e reels para os 3 primeiros meses"],
                ["03", "Funil de Stories", "Sequência de conexão com levantada de mão via direct ou WhatsApp"],
                ["04", "Tráfego Pago", "Campanhas Meta Ads alinhadas ao posicionamento premium"],
                ["05", "Relatório Semanal", "KPIs que o dono entende — qualidade, volume e conversão"],
                ["06", "CS Semanal", "Acompanhamento do projeto e ajuste de rota em tempo real"],
              ].map(([n, t, d], i) => (
                <div key={i} className="p-7" style={{ background: NAVY_DEEP }}>
                  <Label color={CYAN}>{n}</Label>
                  <h4 className="font-display text-xl mt-4">{t}</h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/65">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-20 max-w-[920px]">
            <p className="font-display italic text-2xl md:text-[34px] leading-[1.2]">
              "Não vendemos tráfego. Vendemos <span className="not-italic" style={{ color: CYAN }}>um sistema que prepara o mercado para comprar de você.</span>"
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─────────────── 8PS / CONRADO ─────────────── */}
      <section style={{ background: PAPER }} className="py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden border" style={{ borderColor: LINE }}>
                <img src={conrado} alt="Conrado Adolpho, criador do Método 8Ps" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-7">
              <Label color={CYAN}>05 — LASTRO METODOLÓGICO</Label>
              <h2 className="font-display text-4xl md:text-[56px] leading-[1] tracking-tight mt-6" style={{ color: NAVY }}>
                Consultoria certificada <em className="italic" style={{ color: CYAN }}>Método 8Ps.</em>
              </h2>
              <Rule />
              <p className="mt-8 text-[16px] leading-relaxed max-w-[58ch]" style={{ color: "#3A3A4A" }}>
                A Bluw é certificada oficialmente pelo Método 8Ps de Conrado Adolpho — referência brasileira em marketing digital aplicado a varejo. Isso significa um método validado, treinamento contínuo e uma estrutura comprovada por trás de cada decisão estratégica.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <img src={selo} alt="Selo de certificação 8Ps" className="w-24 h-24 object-contain" />
                <div>
                  <div className="font-display text-xl" style={{ color: NAVY }}>Consultoria Certificada 8Ps</div>
                  <div className="mt-1"><Label color="#7A7A88">MÉTODO VALIDADO · CONRADO ADOLPHO</Label></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESSO ─────────────── */}
      <section className="py-24 md:py-32" style={{ background: "white" }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Label color={CYAN}>06 — COMO FUNCIONA NA PRÁTICA</Label>
              <h2 className="font-display text-4xl md:text-[56px] leading-[1] tracking-tight mt-6" style={{ color: NAVY }}>
                Três passos para ter <em className="italic" style={{ color: CYAN }}>previsibilidade</em> na sua loja.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "#3A3A4A" }}>
                Nenhuma proposta antes do diagnóstico. Porque resultado real começa por entender o seu negócio de verdade.
              </p>
            </div>
            <div className="md:col-span-7">
              {[
                ["01", "Diagnóstico Estratégico", "Em 60 minutos, mapeamos onde você está perdendo cliente qualificado, quais são as principais oportunidades e o plano de ataque para os primeiros 90 dias. Clareza real, sem promessa vaga."],
                ["02", "Implementação do GMD", "Estruturamos e implementamos o sistema completo de maturação de demanda. Cada entrega tem propósito e indicador associado. Você acompanha em números que fazem sentido para o seu negócio."],
                ["03", "Acompanhamento Contínuo", "CS e relatório semanais, otimização contínua. O sistema fica mais inteligente a cada ciclo. Seu negócio fica mais previsível a cada mês."],
              ].map(([n, t, d], i) => (
                <div key={i}>
                  <Rule />
                  <div className="py-10 grid grid-cols-12 gap-6">
                    <div className="col-span-2 font-display text-4xl md:text-5xl" style={{ color: CYAN }}>{n}</div>
                    <div className="col-span-10">
                      <h3 className="font-display text-2xl md:text-3xl" style={{ color: NAVY }}>{t}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed max-w-[58ch]" style={{ color: "#3A3A4A" }}>{d}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Rule />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CTA FINAL ─────────────── */}
      <section id="contato" style={{ background: NAVY, color: "white" }} className="py-28 md:py-36 relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${CYAN}1A 0%, transparent 70%)` }} />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <Label color={CYAN}>07 — AGENDE SEU DIAGNÓSTICO ESTRATÉGICO</Label>
              <h2 className="font-display text-4xl md:text-[76px] leading-[0.98] tracking-tight mt-6">
                Crescimento não é sorte.<br/>É <em className="italic" style={{ color: CYAN }}>método, maturação e acompanhamento.</em>
              </h2>
              <p className="mt-8 text-[16px] text-white/75 max-w-[58ch]">
                Gratuito. Sem compromisso. Com clareza real sobre o que está travando o crescimento da sua loja.
              </p>
              <a href="#contato" className="mt-10 inline-flex items-center gap-3 font-mono-label text-[11px] px-8 py-4" style={{ background: CYAN, color: NAVY }}>
                QUERO AGENDAR MEU DIAGNÓSTICO <span aria-hidden>→</span>
              </a>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.15)" }}>
              {[
                ["Certificação 8Ps", "Conrado Adolpho"],
                ["Método GMD", "Exclusivo Bluw"],
                ["8+ Anos", "Marketing & Vendas"],
                ["Foco Exclusivo", "Varejo Moveleiro Premium"],
              ].map(([t, s], i) => (
                <div key={i} className="p-5" style={{ background: NAVY }}>
                  <div className="font-display text-base" style={{ color: CYAN }}>{t}</div>
                  <div className="mt-1 text-[11px] text-white/65">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer style={{ background: NAVY_DEEP, color: "white" }} className="py-12">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-xl">Bluw<span style={{ color: CYAN }}>.</span></span>
            <Label color="rgba(255,255,255,0.5)">COMUNICAÇÃO</Label>
          </div>
          <div className="flex items-center gap-6">
            <Label color="rgba(255,255,255,0.55)">@ojuniorsabino</Label>
            <Label color="rgba(255,255,255,0.55)">@vitorhrf</Label>
          </div>
          <Label color="rgba(255,255,255,0.4)">© BLUW COMUNICAÇÃO</Label>
        </div>
      </footer>
    </div>
  );
}