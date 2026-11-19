import Image from "next/image";
import {
  ArrowUpRight,
  AudioLines,
  CalendarCheck,
  Car,
  Clock,
  Cog,
  Cpu,
  Crosshair,
  Disc3,
  Droplet,
  Filter,
  House,
  MapPin,
  MoveVertical,
  Route,
  type LucideIcon,
} from "lucide-react";
import { OilVideo } from "@/components/oil-video";
import { OpenStatus } from "@/components/open-status";
import { Reveal } from "@/components/reveal";
import { StickyNav } from "@/components/sticky-nav";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import {
  ADDRESS_ONE_LINE,
  BUSINESS,
  HOURS_TABLE,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  SERVICES,
  SITE_URL,
  WHATSAPP_URL,
  type ServiceId,
} from "@/lib/site";
import fachada from "../../public/images/fachada-jsg-motors-frente.jpg";
import galpaoLateral from "../../public/images/galpao-valvoline-lateral.jpg";
import galpao from "../../public/images/galpao-troca-de-oleo-valvoline.jpg";
import logo from "../../public/images/jsg-motors-logo.png";

const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  preventiva: CalendarCheck,
  oleo: Droplet,
  filtros: Filter,
  ruidos: AudioLines,
  motor: Cog,
  injecao: Cpu,
  freios: Disc3,
  suspensao: MoveVertical,
  geometria: Crosshair,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#oficina`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  taxID: BUSINESS.cnpj,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/images/jsg-motors-logo.png`,
  telephone: BUSINESS.phoneE164,
  sameAs: [BUSINESS.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.street} - ${BUSINESS.district}`,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    addressCountry: BUSINESS.country,
  },
  hasMap: MAPS_DIRECTIONS_URL,
  areaServed: { "@type": "City", name: "Concórdia" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "11:45" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "11:30" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de oficina mecânica",
    itemListElement: [
      ...SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        itemOffered: { "@type": "Service", name: "Leva e traz do veículo em Concórdia", areaServed: "Concórdia" },
      },
    ],
  },
};

/** The facade's corner slashes: paired diagonal bands cutting top-left and bottom-right. */
function SignBars() {
  return (
    <>
      <span aria-hidden className="sign-corner top-0 left-0" data-from="left">
        <span className="sign-slash sign-slash--wide" />
        <span className="sign-slash sign-slash--thin" />
      </span>
      <span aria-hidden className="sign-corner right-0 bottom-0 rotate-180" data-from="right">
        <span className="sign-slash sign-slash--wide" />
        <span className="sign-slash sign-slash--thin" />
      </span>
    </>
  );
}

/** Check-engine light, as on the facade's "Diagnóstico avançado" row. */
function CheckEngineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M8 6h6M11 6v2" />
      <path d="M5 9h3l1-1h5l2 2h2v-1h2v7h-2v-1h-2l-2 3H8l-3-3z" />
      <path d="M2.5 10.5v4M2.5 12.5H5" />
    </svg>
  );
}

function SignRow({ icon, lines, last }: { icon: React.ReactNode; lines: string[]; last: string }) {
  return (
    <p className="sign-lit flex items-center gap-2.5">
      {icon}
      <span aria-hidden className="h-8 w-px bg-primary" />
      <span className="sign-type text-[0.6rem] leading-[1.35] tracking-[0.06em] text-primary sm:text-[0.66rem]">
        {lines.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
        <span className="block text-white">{last}</span>
      </span>
    </p>
  );
}

function SectionHeading({ id, children, sub }: { id: string; children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14" data-reveal>
      <h2 id={id} className="display text-[1.75rem] sm:text-[2.5rem]">
        {children}
      </h2>
      {sub ? <p className="mt-3 max-w-[52ch] text-silver/90 sm:text-[1.0625rem]">{sub}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Reveal />
      <StickyNav />

      {/* The signboard: continues the facade the client already knows. */}
      <header id="topo" className="sign-panel power-on relative overflow-hidden border-b border-hairline">
        <SignBars />
        <div className="mx-auto grid max-w-7xl items-center gap-y-4 px-5 pt-6 pb-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10 lg:py-6">
          <div className="relative mx-auto w-[150px] sm:w-[180px] lg:order-2 lg:w-[200px]">
            <Image src={logo} alt="JSG Motors" priority sizes="200px" className="sign-lit h-auto w-full" />
            <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden mask-[url(/images/jsg-motors-logo.png)] mask-size-[100%_100%]">
              <span className="sign-sheen absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/45 to-transparent opacity-0" />
            </span>
          </div>
          <div className="flex justify-center gap-6 sm:gap-10 lg:order-1 lg:justify-start">
            <SignRow
              icon={<Car aria-hidden className="size-6 shrink-0 text-silver-light" strokeWidth={1.4} />}
              lines={["Manutenção", "automotiva"]}
              last="especializada"
            />
            <SignRow icon={<CheckEngineIcon className="size-6 shrink-0 text-silver-light" />} lines={["Diagnóstico"]} last="avançado" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:order-3 lg:flex-col lg:items-end">
            <OpenStatus className="text-xs" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sign-type flex min-h-11 items-center gap-2 rounded-full border border-hairline bg-ink/60 px-4 text-[0.66rem] lg:min-h-0 lg:py-1.5 text-white transition-colors duration-200 hover:border-primary"
            >
              <WhatsAppIcon className="size-3.5 text-primary" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1} className="outline-none">
        {/* Hero: the real facade bleeds off the right edge, cut on the sign's diagonal. */}
        <section aria-labelledby="titulo" className="relative overflow-x-clip lg:flex lg:min-h-[640px] lg:items-center">
          <div className="hero-photo relative aspect-[4/3] sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[56vw] xl:w-[58vw]">
            <span aria-hidden className="hero-slash" />
            <div className="hero-frame absolute inset-0 overflow-hidden">
              <Image
                src={fachada}
                alt="Fachada da JSG Motors em Concórdia vista de frente, com o letreiro e carros no pátio e nos elevadores"
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 56vw, 100vw"
                className="h-full w-full object-cover object-[50%_52%]"
              />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-5 pt-8 pb-16 sm:px-8 lg:py-20">
            <div className="lg:max-w-[min(30rem,38vw)]">
              <h1 id="titulo" className="display text-[2rem] sm:text-[2.75rem] lg:text-[3.1rem]">
                <span className="intro-line"><span>Oficina mecânica</span></span>{" "}
                <span className="intro-line" style={{ "--i": 1 } as React.CSSProperties}><span>que busca seu carro.</span></span>
              </h1>
              <p className="intro-fade mt-5 max-w-[42ch] text-silver/90 sm:text-[1.0625rem]">
                Em casa ou no trabalho, <strong className="font-semibold text-white">grátis em Concórdia</strong>. Manutenção, troca de óleo e diagnóstico sem você perder o dia.
              </p>
              <div className="intro-fade mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ "--d": "1000ms" } as React.CSSProperties}>
                <WhatsAppButton className="ml-1.5" />
                <a href={`tel:${BUSINESS.phoneE164}`} className="link-draw inline-flex min-h-11 items-center text-sm text-steel hover:text-silver-light lg:min-h-0 lg:pb-0.5">
                  ou ligue {BUSINESS.phoneDisplay}
                </a>
              </div>
              <dl className="intro-fade mt-10 grid grid-cols-3 border-t border-hairline pt-5 text-xs sm:text-[0.8rem]" style={{ "--d": "1150ms" } as React.CSSProperties}>
                {[
                  { icon: Route, dt: "Leva e traz", dd: "Grátis na cidade" },
                  { icon: Droplet, dt: "Óleo", dd: "Valvoline", brand: true },
                  { icon: Clock, dt: "Seg a sáb", dd: "Desde as 8h" },
                ].map((f) => (
                  <div key={f.dt} className="border-l border-hairline pl-3 first:border-l-0 first:pl-0 sm:pl-4">
                    <dt className="flex items-center gap-1.5 text-steel">
                      <f.icon aria-hidden className="size-3.5" strokeWidth={1.5} />
                      {f.dt}
                    </dt>
                    <dd className="mt-1 text-silver-light" translate={"brand" in f ? "no" : undefined}>{f.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Leva e traz */}
        <section aria-labelledby="leva-e-traz" className="border-y border-hairline bg-surface/60">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading id="leva-e-traz" sub="Você não precisa parar a rotina para cuidar do carro.">
              A gente busca. A gente devolve.
            </SectionHeading>
            <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
              {[
                { icon: WhatsAppIcon, title: "Você chama", text: "Manda mensagem para a nossa equipe no WhatsApp e combina o serviço." },
                { icon: Car, title: "A gente busca", text: "Buscamos o carro em casa ou no trabalho, onde for melhor para você." },
                { icon: House, title: "Devolve pronto", text: "Serviço concluído. Nós levamos seu carro até você! Busca e entrega sem custo em Concórdia." },
              ].map((step, i) => {
                const Icon = step.icon;
                const d = { "--d": `${i * 140}ms` } as React.CSSProperties;
                return (
                  <li key={step.title} className="relative pt-7" data-reveal style={d}>
                    <span aria-hidden className="absolute top-0 left-0 h-px w-full bg-hairline" />
                    <span aria-hidden className="absolute top-0 left-0 h-px w-full bg-primary" data-reveal="line" style={{ "--d": `${200 + i * 160}ms` } as React.CSSProperties} />
                    <Icon aria-hidden className="size-5 text-silver" strokeWidth={1.5} />
                    <h3 className="display mt-4 text-lg">
                      <span className="mr-2 text-steel tabular-nums">{i + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[36ch] text-silver/85">{step.text}</p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-14 max-w-[64ch] border-l border-hairline pl-4 text-sm text-silver" data-reveal>
              <span className="font-medium text-silver-light">Mora em outra cidade?</span> Atendemos clientes da região também. A busca é só dentro de Concórdia, então o carro vem até a oficina por sua conta.
            </p>
          </div>
        </section>

        {/* Services, set like the rows on the sign. */}
        <section aria-labelledby="servicos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading id="servicos" sub="Tudo o que uma oficina mecânica completa faz, num lugar só.">
            Serviços
          </SectionHeading>
          <ul className="grid border-t border-hairline sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id];
              return (
                <li
                  key={s.id}
                  className="flex items-start gap-4 border-b border-hairline py-5"
                  data-reveal
                  style={{ "--d": `${(i % 3) * 70 + Math.floor(i / 3) * 90}ms` } as React.CSSProperties}
                >
                  <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-silver" strokeWidth={1.4} />
                  <div>
                    <h3 className="text-lg font-medium leading-snug text-silver-light [font-stretch:108%]">{s.name}</h3>
                    {s.detail ? <p className="mt-0.5 text-sm text-steel">{s.detail}</p> : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Valvoline: the oil-change bay next door. */}
        <section aria-labelledby="troca-de-oleo" className="border-y border-hairline bg-panel/60">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* Mosaic: the reel spans two rows; two stills stack beside it, flush with its top and bottom. */}
            <div className="grid min-w-0 grid-cols-5 grid-rows-2 gap-3 lg:col-span-7">
              <div className="relative col-span-3 row-span-2 aspect-[9/16] overflow-hidden bg-surface" data-reveal="cut">
                <OilVideo
                  src="/videos/troca-de-oleo-valvoline.mp4"
                  poster="/videos/troca-de-oleo-valvoline-capa.jpg"
                  label="Vídeo da troca de óleo na JSG Motors: o mecânico apresenta o serviço, solta o bujão do cárter, troca o filtro e coloca o óleo novo"
                />
              </div>
              <div className="relative col-span-2 min-h-0 overflow-hidden bg-surface" data-reveal="cut" style={{ "--d": "140ms" } as React.CSSProperties}>
                <Image
                  src={galpao}
                  alt="Galpão de troca de óleo da JSG Motors com a placa Valvoline e um carro no elevador"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 23vw, 40vw"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
                />
              </div>
              <div className="relative col-span-2 min-h-0 overflow-hidden bg-surface" data-reveal="cut" style={{ "--d": "260ms" } as React.CSSProperties}>
                <Image
                  src={galpaoLateral}
                  alt="Placa Valvoline e JSG Motors no galpão de troca de óleo"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 23vw, 40vw"
                  className="absolute inset-0 h-full w-full object-cover object-[40%_60%]"
                />
              </div>
            </div>
            <div className="min-w-0 lg:col-span-5" data-reveal style={{ "--d": "250ms" } as React.CSSProperties}>
              <h2 id="troca-de-oleo" className="display text-[1.75rem] sm:text-[2.5rem]">
                Troca de óleo <span translate="no">Valvoline</span>
              </h2>
              <p className="mt-4 max-w-[46ch] text-silver/90 sm:text-[1.0625rem]">
                A <span translate="no">JSG</span> é parceira <span translate="no">Valvoline</span>, oferencendo óleos de qualidade por um preço justo!
              </p>
              <WhatsAppButton className="mt-8 ml-1.5" label="Agendar troca de óleo" shortLabel="Agendar troca" />
            </div>
          </div>
        </section>

        {/* Where: map + practical facts. */}
        <section aria-labelledby="onde-fica" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading id="onde-fica">Onde fica</SectionHeading>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-surface lg:col-span-7 lg:aspect-auto lg:min-h-[420px]" data-reveal="cut">
              <iframe
                title="Mapa da JSG Motors em Concórdia"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 filter-[grayscale(0.35)_contrast(1.05)]"
              />
            </div>
            <dl className="divide-y divide-hairline border-y border-hairline lg:col-span-5" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
              <div className="py-5">
                <dt className="sign-type flex items-center gap-2 text-[0.66rem] text-steel">
                  <MapPin aria-hidden className="size-3.5" /> Endereço
                </dt>
                <dd className="mt-2 text-silver-light">
                  <address className="not-italic">
                    {BUSINESS.street}
                    <br />
                    {BUSINESS.district}, {BUSINESS.city} - {BUSINESS.state}
                  </address>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary-light"
                  >
                    Como chegar <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="sign-type flex items-center gap-2 text-[0.66rem] text-steel">
                  <Clock aria-hidden className="size-3.5" /> Horário
                </dt>
                <dd className="mt-3">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">Horário de funcionamento</caption>
                    <tbody>
                      {HOURS_TABLE.map((row) => (
                        <tr key={row.days} className="align-top">
                          <th scope="row" className="py-1 pr-4 font-normal text-steel">
                            {row.days}
                          </th>
                          <td className="py-1 text-right text-silver-light tabular-nums">
                            {row.times.map((t) => (
                              <span key={t} className="ml-4 inline-block">
                                {t}
                              </span>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <OpenStatus className="mt-3 text-xs" />
                </dd>
              </div>
              <div className="py-5">
                <dt className="sign-type flex items-center gap-2 text-[0.66rem] text-steel">
                  <WhatsAppIcon className="size-3.5" /> Contato
                </dt>
                <dd className="mt-1 flex flex-col items-start">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-silver-light hover:text-white">
                    {BUSINESS.phoneDisplay} · {BUSINESS.supervisor}
                  </a>
                  <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm text-silver hover:text-silver-light">
                    <InstagramIcon className="size-3.5" /> <span translate="no">{BUSINESS.instagramHandle}</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Closing signboard. */}
        <section aria-labelledby="chamar" className="sign-panel relative overflow-hidden border-t border-hairline">
          <SignBars />
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between" data-reveal>
            <h2 id="chamar" className="display text-[1.75rem] sm:text-[2.5rem]">
              Precisa de mecânico?
              <span className="block text-silver/70">Entre em contato com a nossa equipe!</span>
            </h2>
            <WhatsAppButton className="ml-1.5" />
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline bg-ink pb-24 lg:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 pt-10 text-xs text-steel sm:px-8 md:flex-row md:items-center md:justify-between">
          <Image src={logo} alt="JSG Motors" sizes="96px" className="h-auto w-24" />
          <div className="md:text-right">
            <p className="text-silver">
              <span translate="no">{BUSINESS.legalName}</span> · <span className="whitespace-nowrap">CNPJ {BUSINESS.cnpj}</span>
            </p>
            <p className="mt-1">{ADDRESS_ONE_LINE}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
