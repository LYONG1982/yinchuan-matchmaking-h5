"use client";

import { useEffect } from "react";

/** Progressive enhancement: the server-rendered text stays visible without JavaScript. */
export function ReadingEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-cooperation-reveal]");
    const played = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || played.has(entry.target)) continue;
        played.add(entry.target);
        observer.unobserve(entry.target);
        if (preference.matches) continue;
        const animation = entry.target.animate([
          { opacity: 0.65, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 550, easing: "cubic-bezier(.2,.65,.3,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    const stopMotion = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); preference.removeEventListener("change", stopMotion); };
  }, []);
  return null;
}
