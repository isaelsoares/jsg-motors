"use client";

import { useEffect } from "react";

/**
 * Marks [data-reveal] elements with `.is-in` as they enter the viewport.
 * Content is visible by default; hiding only applies under `html.js`, which this
 * component sets on mount, so a script that never runs never hides the page.
 * Safety nets: reduced motion shows everything at once; if the observer never reports,
 * everything is shown; keyboard focus reveals the element it lands in.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const showAll = () => els.forEach((el) => el.classList.add("is-in"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }
    document.documentElement.classList.add("js");

    let reported = false;
    const io = new IntersectionObserver(
      (entries) => {
        reported = true;
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      if (!reported) showAll();
    }, 1500);

    const onFocus = (e: FocusEvent) => {
      (e.target as Element | null)?.closest?.("[data-reveal]")?.classList.add("is-in");
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);
  return null;
}
