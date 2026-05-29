import { createFileRoute } from "@tanstack/react-router";
import conrado1 from "@/assets/conrado-1.jpg";
import conrado2 from "@/assets/conrado-2.jpg";
import conrado3 from "@/assets/conrado-3.jpg";
import selo from "@/assets/selo-8ps.png";
import bluwFounders from "@/assets/bluw-founders.jpeg";

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

const NAVY = "#010B3C";
const CYAN = "#2BADCD";
const CREAM = "#F5F1EA";

function CtaButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const base = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:scale-[1.02]";
  if (variant === "ghost") {
    return (
      <a href="#contato" className={`${base} border border-white/40 text-white hover:bg-white/10`}>{children}</a>
    );
  }
  return (
    <a
      href="#contato"
      className={base}
      style={{ backgroundColor: CYAN, color: NAVY, boxShadow: "0 10px 30px -10px rgba(43,173,205,0.5)" }}
    >
      {children}
    </a>
  );
}

function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-10" style={{ backgroundColor: CYAN }} />
      <span
        className="text-[11px] uppercase tracking-[0.32em] font-semibold"
        style={{ color: light ? CYAN : NAVY }}
      >
        {children}
      </span>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: CREAM, color: NAVY }}>
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="font-display text-2xl text-white tracking-wide">
            Bluw<span style={{ color: CYAN }}>.</span>
          </div>
          <a
            href="#contato"
            className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.22em] text-white/90 hover:text-white border-b border-white/30 pb-1"
          >
            Agendar diagnóstico
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, rgba(43,173,205,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(181,138,92,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 lg:pt-48 lg:pb-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12" style={{ backgroundColor: CYAN }} />
              <span className="text-[11px] uppercase tracking-[0.32em]" style={{ color: CYAN }}>
                Agência certificada · Método 8Ps
              </span>
            </div>
            <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-normal">
              Marketing e performance para{" "}
              <em className="italic" style={{ color: CYAN }}>
                lojas de móveis
              </em>{" "}
              de médio e alto padrão.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
              Não vendemos posts. Construímos o <strong className="text-white font-semibold">Sistema GMD</strong> —
              Gestão e Maturação de Demanda — que transforma sua loja de móveis planejados em uma máquina previsível
              de fechamento.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CtaButton>Agendar diagnóstico</CtaButton>
              <CtaButton variant="ghost">Conheça o método</CtaButton>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span>Móveis planejados</span>
            <span>·</span>
            <span>Alto padrão</span>
            <span>·</span>
            <span>Performance</span>
            <span>·</span>
            <span>Autoridade</span>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionEyebrow>Resultados</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.1] mb-16">
            Lojas que pararam de depender de <em className="italic" style={{ color: CYAN }}>sorte</em>.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(1,11,60,0.1)" }}>
            {[
              { n: "+180%", l: "em leads qualificados" },
              { n: "3x", l: "ticket médio nos planejados" },
              { n: "-60%", l: "no custo por venda" },
              { n: "12 sem.", l: "para previsibilidade" },
            ].map((r) => (
              <div key={r.n} className="p-8 lg:p-10" style={{ backgroundColor: CREAM }}>
                <div className="font-display text-5xl lg:text-6xl mb-3" style={{ color: NAVY }}>
                  {r.n}
                </div>
                <div className="text-sm text-[#010B3C]/60 uppercase tracking-wider">{r.l}</div>
              </div>
            ))}
          </div>

          <figure className="mt-20 max-w-4xl">
            <div className="h-px w-12 mb-6" style={{ backgroundColor: CYAN }} />
            <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed" style={{ color: NAVY }}>
              "Em 4 meses paramos de brigar por preço. Hoje o cliente chega já querendo o nosso projeto."
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.22em] text-[#010B3C]/60">
              Dono de Loja · SP
            </figcaption>
          </figure>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: NAVY, color: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionEyebrow light>Quem somos</SectionEyebrow>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-8">
                Somos a <em className="italic" style={{ color: CYAN }}>Bluw</em> — agência certificada no Método 8Ps de Conrado Adolpho.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6 font-light">
                Especialistas em marketing e performance para lojas de móveis de médio e alto padrão. Não somos uma
                agência que faz "tudo para todos" — nós nos especializamos em um nicho, dominamos seu funil e entregamos
                um sistema, não promessas.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Por trás da Bluw estão dois sócios obcecados por método, dados e estética. A combinação rara de
                <span className="text-white"> estratégia comercial </span> com
                <span className="text-white"> direção criativa de alto padrão</span>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-10 border-t border-white/10">
                {[
                  { n: "+40", l: "Lojas atendidas" },
                  { n: "8 anos", l: "no nicho de móveis" },
                  { n: "100%", l: "foco em alto padrão" },
                  { n: "8Ps", l: "agência certificada" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl mb-1" style={{ color: CYAN }}>
                      {s.n}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="overflow-hidden border border-white/10">
                <img src={bluwFounders} alt="Sócios Bluw Comunicação" className="w-full h-auto" />
              </div>
              <div className="flex items-center gap-5 p-6 border border-white/10">
                <img src={selo} alt="Selo Agência Certificada Método 8Ps" className="w-20 h-20 object-contain" />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em]" style={{ color: CYAN }}>
                    Certificação
                  </div>
                  <div className="font-display text-xl text-white mt-1">Método 8Ps</div>
                  <div className="text-xs text-white/50 mt-1">Powered by Conrado Adolpho</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionEyebrow>O problema</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-6xl max-w-4xl leading-[1.1] mb-16">
            Você já fez de tudo. E mesmo assim a loja{" "}
            <em className="italic" style={{ color: CYAN }}>
              continua refém do mês
            </em>
            .
          </h2>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl">
            {[
              "Investe em tráfego mas chega lead frio que só quer preço.",
              "Depende do vendedor estrela — se ele sai, o mês morre.",
              "O Instagram cresce em seguidores, mas não em venda.",
              "Mês bom puxa mês ruim. Nunca sabe quanto vai fechar.",
            ].map((d, i) => (
              <div key={i} className="flex gap-6">
                <div className="font-display text-5xl shrink-0" style={{ color: CYAN, lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <p className="text-lg leading-relaxed pt-2" style={{ color: NAVY }}>
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t" style={{ borderColor: "rgba(1,11,60,0.15)" }}>
            <p className="font-display italic text-2xl md:text-3xl max-w-3xl leading-relaxed">
              O problema não é falta de marketing. É falta de <span style={{ color: CYAN }}>sistema</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO GMD */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: NAVY, color: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7">
              <SectionEyebrow light>Nosso método</SectionEyebrow>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
                <em className="italic" style={{ color: CYAN }}>GMD</em> — Gestão e Maturação de Demanda.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-white/70 text-lg leading-relaxed font-light">
                O sistema que pega o lead frio, aquece com autoridade e entrega no balcão pronto para fechar.
                Quatro fases conectadas — não quatro serviços soltos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            {[
              { n: "01", t: "Captura", d: "Tráfego pago e orgânico desenhado para o público de alto padrão. Sem leads de curiosos." },
              { n: "02", t: "Maturação", d: "Conteúdo de autoridade que educa, posiciona e elimina a concorrência por preço." },
              { n: "03", t: "Conversão", d: "Funil comercial integrado ao showroom: WhatsApp, agendamento, follow-up estruturado." },
              { n: "04", t: "Recompra", d: "Pós-venda, indicação e reativação. Cliente que volta e traz outros." },
            ].map((p) => (
              <div key={p.n} className="p-8 lg:p-10" style={{ backgroundColor: NAVY }}>
                <div className="text-xs uppercase tracking-[0.22em] mb-4" style={{ color: CYAN }}>
                  Fase {p.n}
                </div>
                <div className="font-display text-3xl text-white mb-4">{p.t}</div>
                <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-xs uppercase tracking-[0.22em] mb-8" style={{ color: CYAN }}>
              O que você recebe
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
              {[
                "Estratégia anual de marca e performance",
                "Gestão completa de tráfego pago",
                "Direção criativa e produção de conteúdo",
                "Funil de WhatsApp e CRM comercial",
                "Treinamento da equipe de vendas",
                "Relatórios semanais com dados de venda",
              ].map((e) => (
                <div key={e} className="flex gap-3 items-start py-4 border-t border-white/10">
                  <span className="mt-2 h-px w-6 shrink-0" style={{ backgroundColor: CYAN }} />
                  <span className="text-white/80">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONRADO / 8PS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <img src={conrado1} alt="Conrado Adolpho" className="w-full h-auto object-cover" />
              <div className="space-y-4">
                <img src={conrado3} alt="Conrado Adolpho" className="w-full h-auto object-cover" />
                <img src={conrado2} alt="Conrado Adolpho" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionEyebrow>Lastro</SectionEyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.15] mb-6">
                Certificados pelo criador do <em className="italic" style={{ color: CYAN }}>Método 8Ps</em>.
              </h2>
              <p className="text-lg leading-relaxed text-[#010B3C]/75 mb-6 font-light">
                Conrado Adolpho é referência em marketing digital no Brasil há mais de duas décadas. Criador do Método
                8Ps, formou milhares de profissionais e certifica apenas agências que provam aplicação real do método.
              </p>
              <p className="text-lg leading-relaxed text-[#010B3C]/75 font-light">
                A Bluw é uma dessas. Não somos só uma agência que ouviu falar — somos uma agência auditada.
              </p>
              <div className="flex items-center gap-5 mt-10 pt-8 border-t" style={{ borderColor: "rgba(1,11,60,0.15)" }}>
                <img src={selo} alt="Selo 8Ps" className="w-16 h-16 object-contain" />
                <div>
                  <div className="font-display text-lg">Agência Certificada</div>
                  <div className="text-sm text-[#010B3C]/60">Método 8Ps · Conrado Adolpho</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA / PASSOS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionEyebrow>Como começar</SectionEyebrow>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.1] mb-16">
            Três passos até a <em className="italic" style={{ color: CYAN }}>previsibilidade</em>.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { n: "01", t: "Diagnóstico", d: "Conversa estratégica de 45 minutos. Mapeamos onde sua loja está perdendo dinheiro hoje." },
              { n: "02", t: "Plano GMD", d: "Desenhamos o sistema sob medida para o seu showroom, seu ticket e sua região." },
              { n: "03", t: "Implantação", d: "Em 12 semanas você opera com previsibilidade. Sem reinventar a roda toda segunda-feira." },
            ].map((p) => (
              <div key={p.n}>
                <div className="font-display text-6xl mb-4" style={{ color: CYAN }}>
                  {p.n}
                </div>
                <div className="font-display text-2xl mb-3">{p.t}</div>
                <p className="text-[#010B3C]/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(43,173,205,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-28 lg:py-40 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-10" style={{ backgroundColor: CYAN }} />
            <span className="text-[11px] uppercase tracking-[0.32em]" style={{ color: CYAN }}>
              Agendar diagnóstico
            </span>
            <span className="h-px w-10" style={{ backgroundColor: CYAN }} />
          </div>
          <h2 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
            Crescimento não é sorte.<br />
            <em className="italic" style={{ color: CYAN }}>É método.</em>
          </h2>
          <p className="mt-10 text-white/70 text-lg max-w-2xl mx-auto font-light">
            Se sua loja de móveis fatura acima de R$ 200 mil/mês e quer parar de viver na corda bamba, vamos
            conversar. Diagnóstico gratuito e sem compromisso.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton>Quero agendar agora</CtaButton>
            <CtaButton variant="ghost">Falar pelo WhatsApp</CtaButton>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
            <div className="flex items-center gap-3">
              <img src={selo} alt="Selo 8Ps" className="w-10 h-10 object-contain" />
              <span>Agência Certificada · Método 8Ps</span>
            </div>
            <div className="flex items-center gap-6">
              <span>@bluwcomunicacao</span>
              <span>contato@bluw.com.br</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#00072A", color: "rgba(255,255,255,0.5)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="font-display text-white text-lg">
            Bluw<span style={{ color: CYAN }}>.</span> Comunicação
          </div>
          <div>© {new Date().getFullYear()} Bluw Comunicação · Todos os direitos reservados</div>
        </div>
      </footer>
    </main>
  );
}
