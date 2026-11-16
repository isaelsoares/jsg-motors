// Single source of truth for business facts used by the page, metadata and JSON-LD.

/** Production URL. TODO: replace with the real domain once it is registered. */
export const SITE_URL = "https://www.jsgmotors.com.br";

export const BUSINESS = {
  name: "JSG Motors",
  legalName: "Jsg Motors Auto Center LTDA",
  cnpj: "64.879.842/0001-48",
  supervisor: "Gustavo",
  phoneDisplay: "(49) 98419-1477",
  phoneE164: "+5549984191477",
  instagram: "https://www.instagram.com/jsg_motors/",
  instagramHandle: "@jsg_motors",
  street: "Rua Senador Attilio Francisco Xavier Fontana, 2106",
  district: "Santa Cruz",
  city: "Concórdia",
  state: "SC",
  country: "BR",
} as const;

export const ADDRESS_ONE_LINE = `${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.city} - ${BUSINESS.state}`;

const WHATSAPP_MESSAGE = "Olá, Gustavo! Vim pelo site da JSG Motors e quero agendar um serviço.";

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.phoneE164.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(`JSG Motors, ${ADDRESS_ONE_LINE}`)}&output=embed`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_ONE_LINE)}`;

/** Opening hours. Day 0 = Sunday. Times are minutes since midnight, America/Sao_Paulo. */
type Shift = { open: number; close: number };
export const HOURS: Record<number, Shift[]> = {
  0: [],
  1: [{ open: 8 * 60, close: 11 * 60 + 45 }, { open: 13 * 60 + 30, close: 18 * 60 }],
  2: [{ open: 8 * 60, close: 11 * 60 + 45 }, { open: 13 * 60 + 30, close: 18 * 60 }],
  3: [{ open: 8 * 60, close: 11 * 60 + 45 }, { open: 13 * 60 + 30, close: 18 * 60 }],
  4: [{ open: 8 * 60, close: 11 * 60 + 45 }, { open: 13 * 60 + 30, close: 18 * 60 }],
  5: [{ open: 8 * 60, close: 11 * 60 + 45 }, { open: 13 * 60 + 30, close: 18 * 60 }],
  6: [{ open: 8 * 60, close: 11 * 60 + 30 }],
};

export const HOURS_TABLE = [
  { days: "Segunda a sexta", times: ["08:00–11:45", "13:30–18:00"] },
  { days: "Sábado", times: ["08:00–11:30"] },
  { days: "Domingo", times: ["Fechado"] },
] as const;

// Only details the client stated; the rest stay as names.
export const SERVICES = [
  { id: "preventiva", name: "Manutenção preventiva", detail: null },
  { id: "oleo", name: "Troca de óleo", detail: "Qualidade e preço justo" },
  { id: "filtros", name: "Troca de filtros", detail: null },
  { id: "ruidos", name: "Diagnóstico de ruídos", detail: "Barulhos e ruídos estranhos" },
  { id: "motor", name: "Motor", detail: "Manutenção especializada" },
  { id: "injecao", name: "Injeção eletrônica", detail: null },
  { id: "freios", name: "Freios", detail: null },
  { id: "suspensao", name: "Suspensão", detail: null },
  { id: "geometria", name: "Geometria e balanceamento", detail: null },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];
