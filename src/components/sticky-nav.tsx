"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./brand-icons";
import logo from "../../public/images/jsg-motors-logo.png";

const LINKS = [
  { href: "#leva-e-traz", label: "Leva e traz" },
  { href: "#servicos", label: "Serviços" },
  { href: "#troca-de-oleo", label: "Troca de óleo" },
  { href: "#onde-fica", label: "Onde fica" },
];

/**
 * Once the signboard header (which carries the phone pill) scrolls away, WhatsApp stays
 * reachable: a slim nav bar on desktop, a docked sign plate below lg.
 */
export function StickyNav() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const header = document.getElementById("topo");
    if (!header) return;
    const io = new IntersectionObserver(([e]) => setShown(!e.isIntersecting), { threshold: 0 });
    io.observe(header);
    return () => io.disconnect();
  }, []);

  return (
    <>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar a JSG Motors no WhatsApp"
      inert={!shown}
      className={`btn-sign btn-dock fixed right-4 bottom-4 z-50 !px-4 !py-3 transition-[transform,opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity sm:right-6 sm:bottom-6 lg:hidden ${
        shown ? "visible translate-y-0 opacity-100" : "invisible translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-5 text-primary" />
      <span translate="no">WhatsApp</span>
    </a>
    <div
      inert={!shown}
      className={`fixed inset-x-0 top-0 z-40 hidden border-b border-hairline bg-ink/92 transition-[transform,opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity lg:block ${
        shown ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"
      }`}
    >
      <nav aria-label="Seções" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <a href="#topo" aria-label="JSG Motors, voltar ao topo">
          <Image src={logo} alt="" sizes="84px" className="h-auto w-[84px]" />
        </a>
        <ul className="flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="sign-type link-draw pb-1 text-[0.68rem] text-silver hover:text-silver-light">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-sign !px-5 !py-2.5 !text-[0.68rem]">
          <WhatsAppIcon className="size-4" />
          <span translate="no">WhatsApp</span>
        </a>
      </nav>
    </div>
    </>
  );
}
