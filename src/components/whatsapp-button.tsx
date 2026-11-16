import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./brand-icons";

export function WhatsAppButton({
  label = "Chamar nossa equipe no WhatsApp",
  shortLabel = "Chamar no WhatsApp",
  className = "",
}: {
  label?: string;
  /** Shown below the `sm` breakpoint so the plate sets on one line at phone width. */
  shortLabel?: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-sign ${className}`}
    >
      <WhatsAppIcon className="size-[1.1rem] shrink-0" />
      <span className="whitespace-nowrap sm:hidden">{shortLabel}</span>
      <span className="hidden sm:inline lg:whitespace-nowrap">{label}</span>
    </a>
  );
}
