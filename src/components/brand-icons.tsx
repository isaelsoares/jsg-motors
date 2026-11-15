import { siInstagram, siWhatsapp } from "simple-icons";

type Props = { className?: string };

export function WhatsAppIcon({ className = "size-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d={siWhatsapp.path} />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d={siInstagram.path} />
    </svg>
  );
}
