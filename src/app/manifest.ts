import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JSG Motors",
    short_name: "JSG Motors",
    description: "Oficina mecânica em Concórdia SC com leva e traz grátis.",
    start_url: "/",
    display: "browser",
    background_color: "#010203",
    theme_color: "#010203",
    lang: "pt-BR",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
