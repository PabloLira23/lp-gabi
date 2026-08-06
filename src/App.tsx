import heroPortrait from '../fotos/22-IMG_9233.jpg'
import planningPortrait from '../fotos/78-IMG_9354.jpg'
import lifestylePortrait from '../fotos/177-IMG_9530.jpg'

const whatsappMessage = encodeURIComponent(
  'Olá, Gabriela! Vim pelo site e gostaria de saber mais sobre o acompanhamento nutricional.',
)
const whatsappUrl = `https://wa.me/5544997236151?text=${whatsappMessage}`
const instagramUrl = 'https://www.instagram.com/gabialencar.nutri'
const tiktokUrl = 'https://www.tiktok.com/@nutri.gabialencar?_r=1&_t=ZS-95NN3jgeG7V'

const phases = [
  {
    step: '01',
    title: 'Diagnóstico real',
    kicker: 'Começa pela sua rotina',
    description:
      'Anamnese completa, avaliação física e leitura do seu histórico para entender como você vive antes de decidir como você vai comer.',
    bullets: [
      'Rotina, objetivo e histórico alimentar',
      'Avaliação física',
      'Plano pensado para encaixar na sua vida',
    ],
  },
  {
    step: '02',
    title: 'Plano na prática',
    kicker: 'Tudo pronto para começar',
    description:
      'Em até 48 horas você recebe o planejamento alimentar com orientação suficiente para agir sem ficar perdida.',
    bullets: [
      'Plano alimentar via app',
      'Lista de compras',
      'Manual do paciente e e-book de receitas',
    ],
  },
  {
    step: '03',
    title: 'Ajuste e estratégia',
    kicker: 'O plano evolui com você',
    description:
      'A cada 30 dias, reavaliação e nova estratégia com base em resposta corporal, aderência e progresso real.',
    bullets: [
      'Retorno mensal com reavaliação física',
      'Resultados mostrados com dados concretos',
      'Suporte no WhatsApp para pequenos ajustes',
    ],
  },
  {
    step: '04',
    title: 'Resultado com constância',
    kicker: 'Sem rigidez inútil',
    description:
      'A ideia não é seguir uma dieta perfeita. É construir uma alimentação simples, possível e sustentável.',
    bullets: [
      'Acompanhamento de 2, 3 ou 6 meses',
      'Evolução progressiva e monitorada',
      'Autonomia alimentar ao final do processo',
    ],
  },
]

const plans = [
  {
    name: 'Consultoria nutricional',
    duration: '100% online',
    tag: 'Sem compromisso de continuidade',
    description:
      'Ideal para quem quer entender como se alimentar melhor e precisa de um ponto de partida claro, sem entrar em acompanhamento contínuo.',
    bullets: [
      'Cardápio inicial personalizado',
      'Orientação prática para começar',
      'Atendimento online, objetivo e acessível',
      'Avaliação completa de histórico, rotina, objetivos e exames se houver',
    ],
  },
  {
    name: 'Plano Base',
    duration: '2 meses',
    tag: 'Direção e presença',
    description:
      'Para quem quer começar a ver resultado e precisa de orientação próxima em cada etapa.',
    bullets: [
      'Cardápio individualizado',
      'Avaliação corporal',
      'Uma consulta de ajuste inclusa',
      'Suporte quinzenal via WhatsApp',
      'Materiais e guias práticos',
      'Presencial ou online',
    ],
  },
  {
    name: 'Plano Monitoramento',
    duration: '3 meses',
    tag: 'Consistência e hábito',
    description:
      'Para consolidar a rotina, ajustar o plano conforme o corpo responde e avançar com mais segurança.',
    bullets: [
      'Cardápio individualizado',
      'Avaliação corporal',
      'Duas consultas de retorno inclusas',
      'Suporte semanal via WhatsApp',
      'Materiais e guias práticos',
      'Presencial ou online',
    ],
  },
  {
    name: 'Plano Intensivo',
    duration: '6 meses',
    tag: 'Objetivos complexos',
    description:
      'Para perda de peso significativa, hipertrofia, reabilitação metabólica ou construção de uma relação mais sólida com a alimentação.',
    bullets: [
      'Cardápio individualizado',
      'Avaliação corporal',
      'Quatro consultas de retorno inclusas',
      'Suporte via WhatsApp',
      'Materiais e guias práticos',
      'Presencial ou online',
    ],
  },
]

const contactLinks = [
  {
    label: 'WhatsApp',
    title: 'Conversa direta para agendamento e dúvidas',
    action: 'Abrir WhatsApp',
    href: whatsappUrl,
    icon: '/whatsapp.png',
  },
  {
    label: 'Instagram',
    title: 'Conteúdos, rotina profissional e atualizações',
    action: 'Ver Instagram',
    href: instagramUrl,
    icon: '/instagram.png',
  },
  {
    label: 'TikTok',
    title: 'Vídeos curtos com dicas e bastidores',
    action: 'Ver TikTok',
    href: tiktokUrl,
    icon: '/tiktok.png',
  },
]

const metrics = [
  {
    label: 'Emagrecimento',
    icon: '◔',
  },
  {
    label: 'Hipertrofia',
    icon: '✦',
  },
  {
    label: 'Reeducação alimentar',
    icon: '⌘',
  },
  {
    label: 'Melhora de performance',
    icon: '↗',
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-mist text-slate">
      <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 rounded-[30px] border border-white/65 bg-white/80 px-5 py-4 shadow-[0_24px_60px_rgba(28,46,41,0.08)] backdrop-blur-xl md:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <a
              href="#inicio"
              className="inline-flex w-fit items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <img
                src="/gabriela-alencar-logo.png"
                alt="Gabriela Alencar Nutrição Clínica"
                className="h-16 w-auto md:h-20"
              />
            </a>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate/80 lg:flex">
              <a href="#como-funciona" className="hover:text-forest">
                Como funciona
              </a>
              <a href="#planos" className="hover:text-forest">
                Planos
              </a>
              <a href="#sobre" className="hover:text-forest">
                Sobre
              </a>
              <a href="#contato" className="hover:text-forest">
                Contato
              </a>
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-bold text-white transition hover:bg-deep-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <img src="/whatsapp.png" alt="" aria-hidden="true" className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </header>

        <main className="pb-20 pt-6 md:pb-28">
          <section
            id="inicio"
            className="relative overflow-hidden rounded-[42px] border border-white/50 bg-white/70 px-6 py-8 shadow-[0_35px_120px_rgba(24,40,36,0.10)] md:px-10 md:py-10 lg:px-14 lg:py-14"
          >
            <div className="metabolic-grid pointer-events-none absolute inset-0 opacity-70" />
            <div className="absolute right-[-8%] top-[-10%] h-72 w-72 rounded-full bg-mint/35 blur-3xl" />
            <div className="absolute bottom-[-16%] left-[18%] h-72 w-72 rounded-full bg-peach/45 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-forest/10 bg-white/90 px-4 py-2 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-forest">
                    estratégia alimentar personalizada
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-forest sm:text-6xl lg:text-[5.4rem]">
                  Nutrição estratégica para quem busca resultado de verdade.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate/88 sm:text-lg">
                  Planos de acompanhamento personalizados, com ajustes constantes
                  conforme seu corpo evolui e sua rotina pede novas decisões.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-deep-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    <img src="/whatsapp.png" alt="" aria-hidden="true" className="h-4 w-4" />
                    Agendar consulta
                  </a>
                  <a
                    href="#planos"
                    className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-white/90 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-forest transition hover:border-forest hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    Ver planos
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-forest/8 bg-white/82 px-4 py-4 shadow-[0_10px_30px_rgba(31,53,46,0.06)] backdrop-blur"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-forest/15 text-lg text-forest/80">
                        {item.icon}
                      </div>
                      <p className="text-sm font-semibold leading-6 text-forest">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[700px]">
                <div className="absolute left-4 right-18 top-0 bottom-18 overflow-hidden rounded-[38px] bg-white p-3 shadow-[0_30px_90px_rgba(25,43,38,0.16)]">
                  <img
                    src={heroPortrait}
                    alt="Gabriela Alencar sorrindo em pé em seu consultório"
                    className="h-full w-full rounded-[30px] object-cover object-top"
                  />
                </div>

                <div className="absolute right-0 top-8 w-[46%] rounded-[30px] bg-forest p-5 text-white shadow-[0_28px_70px_rgba(15,31,27,0.28)]">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/62">
                    acompanhamento
                  </p>
                  <p className="mt-3 font-display text-3xl leading-tight">
                    Nutrição clínica pensada para rotina real.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    Online ou presencial, com ajustes ao longo do processo.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-[56%] rounded-[30px] bg-white/92 p-5 shadow-[0_20px_50px_rgba(25,43,38,0.10)] backdrop-blur">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-forest/62">
                    método
                  </p>
                  <p className="mt-3 text-lg font-bold text-forest">
                    Planejamento em até 48h, reavaliação mensal e suporte via
                    WhatsApp.
                  </p>
                </div>

                <div className="absolute bottom-8 right-4 h-[42%] w-[36%] overflow-hidden rounded-[28px] border-4 border-mist bg-white shadow-[0_24px_60px_rgba(25,43,38,0.14)]">
                  <img
                    src={lifestylePortrait}
                    alt="Gabriela Alencar sentada segurando uma xícara"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="px-1 py-18 md:px-2 md:py-24">
            <div className="space-y-5">
              <div className="grid gap-5 rounded-[34px] border border-white/60 bg-white/82 p-7 shadow-[0_24px_70px_rgba(28,46,41,0.07)] backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-forest/65">
                    Como funciona
                  </p>
                  <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-[-0.03em] text-forest md:text-5xl">
                    Um acompanhamento que muda junto com a sua resposta corporal.
                  </h2>
                </div>
                <p className="max-w-2xl leading-8 text-slate/82 lg:pt-2">
                  O processo tem ordem porque cada fase responde a uma pergunta
                  real: onde você está, como começar, quando ajustar e como
                  sustentar.
                </p>
              </div>

              <div className="space-y-5">
                {phases.map((phase, index) => (
                  <article
                    key={phase.step}
                    className={`rounded-[34px] border p-7 shadow-[0_24px_70px_rgba(28,46,41,0.07)] md:p-8 ${
                      index === 1
                        ? 'border-peach/40 bg-peach'
                        : 'border-white/60 bg-white/82 backdrop-blur'
                    }`}
                  >
                    <div className="grid gap-5 md:grid-cols-[110px_1fr]">
                      <div>
                        <p className="font-display text-5xl tracking-[-0.04em] text-forest/88">
                          {phase.step}
                        </p>
                        <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-forest/62">
                          {phase.kicker}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-display text-3xl tracking-[-0.03em] text-forest">
                          {phase.title}
                        </h3>
                        <p className="mt-4 max-w-2xl leading-8 text-slate/84">
                          {phase.description}
                        </p>
                        <ul className="mt-5 grid gap-3 md:grid-cols-2">
                          {phase.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-[20px] border border-forest/10 bg-white/66 px-4 py-4 text-sm font-semibold leading-6 text-forest"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="planos"
            className="relative overflow-hidden rounded-[42px] bg-forest px-6 py-16 text-white md:px-10 md:py-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,237,228,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,207,171,0.18),transparent_24%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/62">
                Planos e serviços
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-[-0.03em] md:text-5xl">
                Escolha o nível de acompanhamento que combina com o seu momento.
              </h2>
            </div>

            <div className="relative mt-12 grid gap-6 xl:grid-cols-2">
              {plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`rounded-[32px] p-7 md:p-8 ${
                    index === 0 || index === 3
                      ? 'border border-white/10 bg-white/10 backdrop-blur-sm'
                      : 'bg-mist text-forest'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-[11px] font-extrabold uppercase tracking-[0.28em] ${
                          index === 0 || index === 3 ? 'text-white/60' : 'text-forest/62'
                        }`}
                      >
                        {plan.duration}
                      </p>
                      <h3 className="mt-3 font-display text-3xl tracking-[-0.03em]">
                        {plan.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] ${
                        index === 0 || index === 3
                          ? 'bg-white/12 text-white'
                          : 'bg-forest/8 text-forest'
                      }`}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  <p
                    className={`mt-5 leading-8 ${
                      index === 0 || index === 3 ? 'text-white/80' : 'text-slate/84'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-start gap-3 text-sm font-semibold leading-6 ${
                          index === 0 || index === 3 ? 'text-white/92' : 'text-forest'
                        }`}
                      >
                        <span
                          className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                            index === 0 || index === 3 ? 'bg-mint' : 'bg-peach-strong'
                          }`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="relative mt-10 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-forest transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Quero descobrir meu melhor plano
              </a>
            </div>
          </section>

          <section
            id="sobre"
            className="grid gap-6 px-1 py-18 md:px-2 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch"
          >
            <div className="rounded-[38px] border border-white/60 bg-white/82 p-8 shadow-[0_28px_80px_rgba(27,45,40,0.07)] backdrop-blur md:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-forest/65">
                Sobre mim
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.03em] text-forest md:text-5xl">
                Estratégia alimentar com escuta, presença e vida real.
              </h2>
              <p className="mt-6 leading-8 text-slate/84">
                Nutricionista e pós-graduanda em nutrição clínica e esportiva.
                Atendo pacientes que buscam emagrecimento, hipertrofia,
                reeducação alimentar e melhora da performance.
              </p>
              <p className="mt-4 leading-8 text-slate/84">
                Ajudo pessoas que vivem na correria a alcançar seus objetivos sem
                dietas impossíveis. Acredito que um plano alimentar só funciona
                quando se adapta à sua rotina, e não o contrário.
              </p>
              <p className="mt-4 leading-8 text-slate/84">
                Por isso, meu foco é criar estratégias simples, práticas e
                sustentáveis.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {metrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-white"
                  >
                    {metric.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-[38px] bg-white p-3 shadow-[0_28px_80px_rgba(27,45,40,0.10)] lg:row-span-2">
                <img
                  src={planningPortrait}
                  alt="Gabriela Alencar escrevendo anotações durante atendimento"
                  className="h-full min-h-[540px] w-full rounded-[30px] object-cover object-top"
                />
              </div>

              <div className="rounded-[38px] bg-peach p-8 text-forest shadow-[0_28px_70px_rgba(95,71,48,0.09)] md:p-10">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-forest/60">
                  CRN-8/2002
                </p>
                <p className="mt-5 font-display text-4xl leading-tight tracking-[-0.03em]">
                  O paciente aprende a comer, não só a seguir dieta.
                </p>
              </div>

              <div className="overflow-hidden rounded-[38px] bg-white p-3 shadow-[0_28px_70px_rgba(27,45,40,0.08)]">
                <img
                  src={lifestylePortrait}
                  alt="Gabriela Alencar em um retrato descontraído segurando uma xícara"
                  className="h-[320px] w-full rounded-[30px] object-cover object-top"
                />
              </div>
            </div>
          </section>

          <section
            id="contato"
            className="grid gap-6 rounded-[42px] border border-white/60 bg-white/82 px-6 py-10 shadow-[0_28px_80px_rgba(27,45,40,0.07)] backdrop-blur md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-forest/65">
                Formas de contato
              </p>
              <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight tracking-[-0.03em] text-forest md:text-5xl">
                Vamos desenhar a estratégia mais viável para o seu objetivo.
              </h2>

              <div className="mt-8 space-y-4">
                {contactLinks.map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-[24px] border border-forest/10 bg-white/88 px-5 py-5 shadow-[0_12px_30px_rgba(27,45,40,0.05)]"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-forest/62">
                      {contact.label}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate/84">
                      {contact.title}
                    </p>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-forest/14 bg-mist px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-forest transition hover:-translate-y-0.5 hover:border-forest hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                    >
                      <img
                        src={contact.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                      {contact.action}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] bg-forest p-8 text-white md:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/62">
                Agendamento
              </p>
              <h3 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.03em]">
                Atendimento para quem quer resultado sem entrar em guerra com a própria rotina.
              </h3>
              <p className="mt-5 max-w-2xl leading-8 text-white/80">
                Se você quer emagrecer, ganhar massa, melhorar sua performance ou
                simplesmente comer melhor com mais autonomia, o primeiro passo pode
                ser uma conversa simples pelo WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-forest transition hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <img src="/whatsapp.png" alt="" aria-hidden="true" className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <img src="/instagram.png" alt="" aria-hidden="true" className="h-4 w-4" />
                  Ver Instagram
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
