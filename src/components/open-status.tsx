"use client";

import { useEffect, useState } from "react";
import { HOURS } from "@/lib/site";

const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

function fmt(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
}

function nowInConcordia() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

type Status = { open: boolean; text: string };

function computeStatus(): Status {
  const { day, minutes } = nowInConcordia();
  const today = HOURS[day] ?? [];
  const current = today.find((s) => minutes >= s.open && minutes < s.close);
  if (current) return { open: true, text: `Aberto agora · fecha às ${fmt(current.close)}` };

  const laterToday = today.find((s) => minutes < s.open);
  if (laterToday) {
    const lunch = today[0] && minutes >= today[0].close;
    return {
      open: false,
      text: lunch ? `Intervalo de almoço · volta às ${fmt(laterToday.open)}` : `Fechado · abre hoje às ${fmt(laterToday.open)}`,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const first = HOURS[d]?.[0];
    if (first) {
      const when = i === 1 ? "amanhã" : DAY_NAMES[d];
      return { open: false, text: `Fechado · abre ${when} às ${fmt(first.open)}` };
    }
  }
  return { open: false, text: "Fechado" };
}

/** Live open/closed line, computed on the client in Concórdia time. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className={`flex items-center gap-2 text-sm ${className}`} aria-live="polite">
      <span
        aria-hidden
        className={`size-2 shrink-0 rounded-full ${
          status === null ? "bg-graphite" : status.open ? "bg-primary shadow-[0_0_0_4px_rgb(4_198_182/0.18)]" : "bg-steel"
        }`}
      />
      <span className={status?.open ? "text-primary-light" : "text-silver"}>
        {status?.text ?? "Seg a sex 8h–18h · Sáb 8h–11h30"}
      </span>
    </p>
  );
}
