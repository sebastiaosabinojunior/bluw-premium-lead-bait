import { createFileRoute } from "@tanstack/react-router";
import conradoHero from "@/assets/conrado-hero.jpg";
import conrado2 from "@/assets/conrado-2.jpg";
import conrado3 from "@/assets/conrado-3.jpg";
import selo from "@/assets/selo-8ps.png";
import bluwFounders from "@/assets/bluw-founders-clean.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluw Comunicação — Marketing e performance para lojas de móveis de alto padrão" },
      { name: "description", content: "Agência certificada Método 8Ps. Sistema GMD: Gestão e Maturação de Demanda para lojas de móveis planejados que querem previsibilidade e crescimento." },
      { property: "og:title", content: "Bluw Comunicação — Marketing para lojas de móveis de alto padrão" },
      { property: "og:description", content: "Sistema GMD: previsibilidade, autoridade e crescimento para lojas de móveis planejados. Agência certificada Método 8Ps." },
    ],
  }),
  component: Index,
});

// KV palette — Conrado Adolpho / 8Ps
const NAVY = "#01233F";
const NAVY_DEEP = "#011A30";
const COOPER = "#937152";
const COOPER_LIGHT = "#B8956E";
const CREAM = "#FFEFD5";
const CREAM_SOFT = "#F8E6C6";

function Eyebrow({ children, tone = "navy" }: { children: React.ReactNode; tone?: "navy" | "cream" | "cooper" }) {
  const color = tone === "cream" ? CREAM : tone === "cooper" ? COOPER : NAVY;
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px w-12" style={{ backgroundColor: COOPER }} />
      <span
        className="text-[10px] uppercase font-medium"
        style={{ color, letterSpacing: "0.4em", fontFamily: "Lexend" }}
      >
        {children}
      </span>
    </div>
  );
}

function PrimaryCta({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-4 px-9 py-5 transition-all duration-500 hover:gap-6"
      style={{ backgroundColor: COOPER, color: CREAM }}
    >
      <span className="text-[11px] uppercase font-medium" style={{ letterSpacing: "0.28em" }}>
        {children}
      </span>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
        <path d="M0 5H19M19 5L15 1M19 5L15 9" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}

function GhostCta({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 px-9 py-5 border transition-all duration-500 hover:bg-white/5"
      style={{ borderColor: "rgba(255,239,213,0.25)", color: CREAM }}
    >
      <span className="text-[11px] uppercase font-medium" style={{ letterSpacing: "0.28em" }}>
        {children}
      </span>
    </a>
  );
}

function Index() {
  return (
    <main style={{ backgroundColor: CREAM, color: NAVY }}>
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="font-display text-2xl tracking-wide"
              style={{ color: CREAM, fontWeight: 500, fontStyle: "italic" }}
            >
              Bluw
            </div>
            <span className="text-[9px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.32em" }}>
              Comunicação
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#metodo" className="text-[10px] uppercase" style={{ color: "rgba(255,239,213,0.7)", letterSpacing: "0.28em" }}>
              Método
            </a>
            <a href="#bluw" className="text-[10px] uppercase" style={{ color: "rgba(255,239,213,0.7)", letterSpacing: "0.28em" }}>
              Bluw
            </a>
            <a href="#contato" className="text-[10px] uppercase border-b pb-1" style={{ color: CREAM, letterSpacing: "0.28em", borderColor: COOPER }}>
              Diagnóstico
            </a>
          </div>
        </div>
      </header>

      {/* HERO — editorial split */}
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: NAVY }}>
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 10% 20%, rgba(147,113,82,0.6) 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(147,113,82,0.4) 0%, transparent 50%)",
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 pt-40 lg:pt-44 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end min-h-screen">
          {/* Left text */}
          <div className="lg:col-span-7 z-10">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-16" style={{ backgroundColor: COOPER }} />
              <span className="text-[10px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.4em", fontFamily: "Lexend" }}>
                Agência Certificada · Método 8Ps
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95]"
              style={{ color: CREAM, fontWeight: 300 }}
            >
              Marketing e<br />
              performance para<br />
              <em className="italic" style={{ color: COOPER_LIGHT, fontWeight: 400 }}>
                lojas de móveis
              </em>
              <br />
              de alto padrão.
            </h1>

            <p
              className="mt-10 text-base md:text-lg max-w-xl leading-[1.7] font-light"
              style={{ color: "rgba(255,239,213,0.65)" }}
            >
              Não vendemos posts. Construímos o <span style={{ color: CREAM }}>Sistema GMD</span> — Gestão e Maturação
              de Demanda — que transforma sua loja em uma máquina previsível de fechamento.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <PrimaryCta>Agendar diagnóstico</PrimaryCta>
              <GhostCta href="#metodo">Conhecer o método</GhostCta>
            </div>
          </div>

          {/* Right portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Cooper frame */}
              <div className="absolute -inset-3 border" style={{ borderColor: COOPER, opacity: 0.5 }} />
              <img src={conradoHero} alt="Conrado Adolpho" className="relative w-full h-auto object-cover" />
              {/* Selo overlay */}
              <div className="absolute -bottom-10 -left-10 w-28 h-28 lg:w-36 lg:h-36">
                <img src={selo} alt="Selo Método 8Ps" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>
            <div className="mt-12 lg:mt-10 lg:absolute lg:-right-2 lg:bottom-2 lg:max-w-[200px] text-right">
              <div className="text-[9px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.4em" }}>
                Conrado Adolpho
              </div>
              <div className="text-[10px] mt-2 italic font-light" style={{ color: "rgba(255,239,213,0.5)", fontFamily: "Fraunces" }}>
                Criador do Método 8Ps
              </div>
            </div>
          </div>
        </div>

        {/* bottom tags */}
        <div className="relative border-t" style={{ borderColor: "rgba(255,239,213,0.1)" }}>
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-7 flex flex-wrap items-center gap-x-12 gap-y-3 text-[10px] uppercase" style={{ color: "rgba(255,239,213,0.4)", letterSpacing: "0.32em" }}>
            <span>Móveis Planejados</span>
            <span style={{ color: COOPER }}>—</span>
            <span>Alto Padrão</span>
            <span style={{ color: COOPER }}>—</span>
            <span>Performance</span>
            <span style={{ color: COOPER }}>—</span>
            <span>Autoridade</span>
            <span style={{ color: COOPER }}>—</span>
            <span>Previsibilidade</span>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <Eyebrow>Resultados</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]" style={{ fontWeight: 300 }}>
                Lojas que pararam de depender de <em className="italic" style={{ color: COOPER }}>sorte</em>.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg leading-[1.7] font-light" style={{ color: "rgba(1,35,63,0.7)" }}>
                Cada número abaixo veio de uma loja real que aplicou o Sistema GMD por pelo menos 12 semanas.
                Não é promessa de marketing — é o resultado quando processo encontra disciplina.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(1,35,63,0.12)" }}>
            {[
              { n: "+180%", l: "Leads qualificados" },
              { n: "3×", l: "Ticket médio" },
              { n: "−60%", l: "Custo por venda" },
              { n: "12 sem", l: "Para previsibilidade" },
            ].map((r, i) => (
              <div key={i} className="p-10 lg:p-12 group" style={{ backgroundColor: CREAM }}>
                <div className="text-[9px] uppercase mb-6" style={{ color: COOPER, letterSpacing: "0.4em" }}>
                  0{i + 1}
                </div>
                <div className="font-display text-6xl lg:text-7xl mb-4 transition-colors" style={{ color: NAVY, fontWeight: 300 }}>
                  {r.n}
                </div>
                <div className="text-[11px] uppercase" style={{ color: "rgba(1,35,63,0.55)", letterSpacing: "0.22em" }}>
                  {r.l}
                </div>
              </div>
            ))}
          </div>

          {/* depoimento */}
          <figure className="mt-24 lg:mt-32 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="font-display text-7xl leading-none" style={{ color: COOPER, fontStyle: "italic", fontWeight: 300 }}>
                "
              </div>
            </div>
            <div className="lg:col-span-9">
              <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.2]" style={{ color: NAVY, fontWeight: 300 }}>
                Em 4 meses paramos de brigar por preço. Hoje o cliente chega já querendo o nosso projeto, com a régua certa.
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 text-[10px] uppercase" style={{ color: "rgba(1,35,63,0.5)", letterSpacing: "0.32em" }}>
                <span className="h-px w-8" style={{ backgroundColor: COOPER }} />
                <span>Dono de loja · SP</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* DOR */}
      <section className="py-28 lg:py-40 relative overflow-hidden" style={{ backgroundColor: CREAM_SOFT }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <Eyebrow>O problema</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]" style={{ fontWeight: 300 }}>
                Você já fez de tudo. E mesmo assim a loja{" "}
                <em className="italic" style={{ color: COOPER }}>
                  continua refém do mês.
                </em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16 max-w-5xl">
            {[
              "Investe em tráfego pago mas chega lead frio que só quer preço de tabela.",
              "Depende do vendedor estrela — se ele sai, o mês morre junto.",
              "O Instagram cresce em seguidores, não em venda.",
              "Mês bom puxa mês ruim. Nunca sabe quanto vai fechar.",
            ].map((d, i) => (
              <div key={i} className="flex gap-8 pb-12 border-b" style={{ borderColor: "rgba(1,35,63,0.15)" }}>
                <div className="font-display text-5xl shrink-0 leading-none" style={{ color: COOPER, fontWeight: 300 }}>
                  0{i + 1}
                </div>
                <p className="text-lg leading-[1.6] pt-1 font-light" style={{ color: NAVY }}>
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-3xl">
            <p className="font-display italic text-3xl md:text-4xl leading-[1.3]" style={{ fontWeight: 300 }}>
              O problema não é falta de marketing. É falta de{" "}
              <span style={{ color: COOPER }}>sistema</span>.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTODO GMD */}
      <section id="metodo" className="py-28 lg:py-40 relative overflow-hidden" style={{ backgroundColor: NAVY, color: CREAM }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <Eyebrow tone="cream">O método</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]" style={{ color: CREAM, fontWeight: 300 }}>
                <em className="italic" style={{ color: COOPER_LIGHT }}>GMD</em>
                <br />
                Gestão e Maturação<br />
                de Demanda.
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-lg leading-[1.7] font-light" style={{ color: "rgba(255,239,213,0.65)" }}>
                Quatro fases conectadas — não quatro serviços soltos. O sistema que pega o lead frio, aquece com
                autoridade e entrega no balcão pronto para fechar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,239,213,0.1)" }}>
            {[
              { n: "01", t: "Captura", d: "Tráfego pago e orgânico desenhado para o público de alto padrão. Sem leads de curiosos." },
              { n: "02", t: "Maturação", d: "Conteúdo de autoridade que educa, posiciona e elimina a concorrência por preço." },
              { n: "03", t: "Conversão", d: "Funil comercial integrado ao showroom: WhatsApp, agendamento, follow-up estruturado." },
              { n: "04", t: "Recompra", d: "Pós-venda, indicação e reativação. Cliente que volta e traz outros." },
            ].map((p) => (
              <div key={p.n} className="p-10 lg:p-12 relative" style={{ backgroundColor: NAVY }}>
                <div className="font-display text-7xl mb-8 leading-none" style={{ color: COOPER, fontWeight: 300 }}>
                  {p.n}
                </div>
                <div className="font-display text-2xl mb-5" style={{ color: CREAM, fontWeight: 400 }}>
                  {p.t}
                </div>
                <p className="text-sm leading-[1.7] font-light" style={{ color: "rgba(255,239,213,0.55)" }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          {/* O que você recebe */}
          <div className="mt-24 lg:mt-32">
            <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
              <div className="lg:col-span-7">
                <Eyebrow tone="cream">O que está incluído</Eyebrow>
                <h3 className="font-display text-3xl md:text-4xl leading-[1.15]" style={{ color: CREAM, fontWeight: 300 }}>
                  Um único contrato. <em className="italic" style={{ color: COOPER_LIGHT }}>Seis frentes</em> trabalhando juntas.
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12">
              {[
                "Estratégia anual de marca e performance",
                "Gestão completa de tráfego pago",
                "Direção criativa e produção de conteúdo",
                "Funil de WhatsApp e CRM comercial",
                "Treinamento da equipe de vendas",
                "Relatórios semanais com dados de venda",
              ].map((e, i) => (
                <div key={i} className="flex gap-5 items-start py-6 border-t" style={{ borderColor: "rgba(255,239,213,0.15)" }}>
                  <span className="font-display text-xs pt-1" style={{ color: COOPER, fontFamily: "Lexend", letterSpacing: "0.1em" }}>
                    0{i + 1}
                  </span>
                  <span className="text-sm leading-[1.5] font-light" style={{ color: "rgba(255,239,213,0.85)" }}>
                    {e}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS - BLUW */}
      <section id="bluw" className="relative">
        {/* Founders banner */}
        <div className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
          <img src={bluwFounders} alt="Sócios Bluw Comunicação" className="w-full h-auto object-cover opacity-90" />
          <div
            className="absolute inset-0 flex items-center justify-center px-8"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, transparent 50%, rgba(1,35,63,0.4) 100%), radial-gradient(ellipse at center, rgba(1,35,63,0.55) 0%, rgba(1,35,63,0.15) 50%, transparent 80%)",
            }}
          >
            <div className="text-center max-w-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10" style={{ backgroundColor: COOPER_LIGHT }} />
                <span className="text-[10px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.4em" }}>
                  Bluw Comunicação
                </span>
                <span className="h-px w-10" style={{ backgroundColor: COOPER_LIGHT }} />
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1]" style={{ color: CREAM, fontWeight: 300 }}>
                Especialistas em marketing e performance para lojas de <em className="italic" style={{ color: COOPER_LIGHT }}>móveis de médio e alto padrão</em>.
              </h2>
            </div>
          </div>
        </div>

        {/* Bluw narrative */}
        <div className="py-28 lg:py-36" style={{ backgroundColor: CREAM }}>
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <Eyebrow>Quem somos</Eyebrow>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10" style={{ fontWeight: 300 }}>
                  Dois sócios. Um método.<br />
                  <em className="italic" style={{ color: COOPER }}>Um nicho.</em>
                </h3>
                <p className="text-lg leading-[1.7] font-light mb-6" style={{ color: "rgba(1,35,63,0.75)" }}>
                  Por trás da Bluw estão dois sócios obcecados por método, dados e estética. A combinação rara de
                  estratégia comercial com direção criativa de alto padrão — feita especificamente para o universo
                  dos móveis planejados.
                </p>
                <p className="text-lg leading-[1.7] font-light" style={{ color: "rgba(1,35,63,0.75)" }}>
                  Não somos uma agência que faz "tudo para todos". Nós nos especializamos em um nicho, dominamos seu
                  funil e entregamos um sistema — não promessas.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "rgba(1,35,63,0.12)" }}>
                  {[
                    { n: "+40", l: "Lojas atendidas" },
                    { n: "8 anos", l: "No nicho" },
                    { n: "100%", l: "Alto padrão" },
                    { n: "8Ps", l: "Certificados" },
                  ].map((s, i) => (
                    <div key={i} className="p-8 lg:p-10" style={{ backgroundColor: CREAM }}>
                      <div className="font-display text-4xl lg:text-5xl mb-3" style={{ color: COOPER, fontWeight: 300 }}>
                        {s.n}
                      </div>
                      <div className="text-[10px] uppercase" style={{ color: "rgba(1,35,63,0.55)", letterSpacing: "0.28em" }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONRADO / LASTRO */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: NAVY, color: CREAM }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3 relative">
                  <div className="absolute -inset-2 border" style={{ borderColor: COOPER, opacity: 0.4 }} />
                  <img src={conrado2} alt="Conrado Adolpho" className="relative w-full h-auto object-cover" />
                </div>
                <div className="col-span-2 mt-12">
                  <img src={conrado3} alt="Conrado Adolpho" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow tone="cream">Lastro</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10" style={{ color: CREAM, fontWeight: 300 }}>
                Certificados pelo criador do <em className="italic" style={{ color: COOPER_LIGHT }}>Método 8Ps</em>.
              </h2>
              <p className="text-lg leading-[1.7] mb-6 font-light" style={{ color: "rgba(255,239,213,0.7)" }}>
                Conrado Adolpho é referência em marketing digital no Brasil há mais de duas décadas. Criador do
                Método 8Ps, formou milhares de profissionais e certifica apenas agências que provam aplicação real
                do método.
              </p>
              <p className="text-lg leading-[1.7] font-light" style={{ color: "rgba(255,239,213,0.7)" }}>
                A Bluw é uma dessas. Não somos uma agência que ouviu falar — somos uma agência auditada.
              </p>

              <div className="flex items-center gap-6 mt-12 pt-10 border-t" style={{ borderColor: "rgba(255,239,213,0.15)" }}>
                <img src={selo} alt="Selo 8Ps" className="w-20 h-20 object-contain" />
                <div>
                  <div className="text-[10px] uppercase mb-2" style={{ color: COOPER_LIGHT, letterSpacing: "0.32em" }}>
                    Agência Certificada
                  </div>
                  <div className="font-display text-2xl" style={{ color: CREAM, fontWeight: 400 }}>
                    Método 8Ps
                  </div>
                  <div className="text-xs italic mt-1 font-light" style={{ color: "rgba(255,239,213,0.5)", fontFamily: "Fraunces" }}>
                    Powered by Conrado Adolpho
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO COMEÇAR */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <Eyebrow>Como começar</Eyebrow>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]" style={{ fontWeight: 300 }}>
                Três passos até a <em className="italic" style={{ color: COOPER }}>previsibilidade</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { n: "01", t: "Diagnóstico", d: "Conversa estratégica de 45 minutos. Mapeamos onde sua loja está perdendo dinheiro hoje." },
              { n: "02", t: "Plano GMD", d: "Desenhamos o sistema sob medida para o seu showroom, seu ticket e sua região." },
              { n: "03", t: "Implantação", d: "Em 12 semanas você opera com previsibilidade. Sem reinventar a roda toda segunda." },
            ].map((p) => (
              <div key={p.n} className="relative">
                <div className="font-display text-8xl mb-6 leading-none" style={{ color: COOPER, fontWeight: 300, opacity: 0.9 }}>
                  {p.n}
                </div>
                <div className="font-display text-3xl mb-5" style={{ fontWeight: 400 }}>
                  {p.t}
                </div>
                <p className="text-base leading-[1.7] font-light" style={{ color: "rgba(1,35,63,0.7)" }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="relative overflow-hidden" style={{ backgroundColor: NAVY_DEEP, color: CREAM }}>
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(147,113,82,0.6) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-8 lg:px-16 py-32 lg:py-44 text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-16" style={{ backgroundColor: COOPER }} />
            <span className="text-[10px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.4em" }}>
              Agendar diagnóstico
            </span>
            <span className="h-px w-16" style={{ backgroundColor: COOPER }} />
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98]" style={{ color: CREAM, fontWeight: 300 }}>
            Crescimento não é sorte.
            <br />
            <em className="italic" style={{ color: COOPER_LIGHT }}>É método.</em>
          </h2>

          <p className="mt-12 text-lg max-w-2xl mx-auto font-light leading-[1.7]" style={{ color: "rgba(255,239,213,0.65)" }}>
            Se sua loja de móveis fatura acima de R$ 200 mil/mês e quer parar de viver na corda bamba, vamos
            conversar. Diagnóstico gratuito e sem compromisso.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryCta>Quero agendar agora</PrimaryCta>
            <GhostCta>Falar pelo WhatsApp</GhostCta>
          </div>

          <div className="mt-24 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderColor: "rgba(255,239,213,0.12)" }}>
            <div className="flex items-center gap-4">
              <img src={selo} alt="Selo 8Ps" className="w-12 h-12 object-contain" />
              <div className="text-left">
                <div className="text-[9px] uppercase" style={{ color: COOPER_LIGHT, letterSpacing: "0.4em" }}>
                  Agência Certificada
                </div>
                <div className="text-xs mt-1 italic font-light" style={{ color: "rgba(255,239,213,0.6)", fontFamily: "Fraunces" }}>
                  Método 8Ps · Conrado Adolpho
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 text-[10px] uppercase" style={{ color: "rgba(255,239,213,0.5)", letterSpacing: "0.28em" }}>
              <span>@bluwcomunicacao</span>
              <span style={{ color: COOPER }}>·</span>
              <span>contato@bluw.com.br</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#000814", color: "rgba(255,239,213,0.4)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase" style={{ letterSpacing: "0.28em" }}>
          <div className="flex items-center gap-3">
            <div className="font-display text-lg italic" style={{ color: CREAM, letterSpacing: "0" }}>
              Bluw
            </div>
            <span style={{ color: COOPER }}>Comunicação</span>
          </div>
          <div>© {new Date().getFullYear()} · Todos os direitos reservados</div>
        </div>
      </footer>
    </main>
  );
}
