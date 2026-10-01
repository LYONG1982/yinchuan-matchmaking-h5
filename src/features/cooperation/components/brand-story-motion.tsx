"use client";

import { useEffect } from "react";

type MotionElement = HTMLElement | SVGElement;

const GROUP_SELECTOR = "[data-brand-motion-group]";
const TARGET_SELECTOR = "[data-brand-motion]";
const EASING = "cubic-bezier(.2,.65,.3,1)";

/** Optional enhancement: every reading state is visible in the server HTML. */
export function BrandStoryMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const groups = document.querySelectorAll<HTMLElement>(GROUP_SELECTOR);
    const played = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const moments = new Map<HTMLElement, () => void>();
    let disposed = false;

    const motionAllowed = () => !disposed && !preference.matches && !document.hidden;

    const animate = (
      target: Element,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ): Animation | null => {
      if (!motionAllowed()) return null;
      try {
        const animation = target.animate(keyframes, { easing: EASING, fill: "backwards", ...options });
        animations.add(animation);
        const forget = () => animations.delete(animation);
        animation.addEventListener("finish", forget, { once: true });
        animation.addEventListener("cancel", forget, { once: true });
        return animation;
      } catch {
        // Unsupported animation properties leave the original, readable DOM intact.
        return null;
      }
    };

    const childrenOf = (group: Element) => Array.from(
      group.querySelectorAll<MotionElement>(TARGET_SELECTOR),
    ).filter((target) => target.closest(GROUP_SELECTOR) === group);

    const orderOf = (target: MotionElement, peers: MotionElement[]) => {
      const explicit = target.getAttribute("data-motion-order");
      const parsed = explicit === null ? NaN : Number(explicit);
      if (Number.isFinite(parsed)) return Math.max(0, Math.floor(parsed));
      return Math.max(0, peers.filter((item) => item.dataset.brandMotion === target.dataset.brandMotion).indexOf(target));
    };

    const reveal = (target: MotionElement) => {
      if (played.has(target)) return;
      played.add(target);
      if (!motionAllowed()) return;
      const group = target.closest<HTMLElement>(GROUP_SELECTOR);
      if (!group || group.dataset.brandMotionGroup === "moment") return;
      const peers = childrenOf(group);
      const kind = target.dataset.brandMotion;
      const order = orderOf(target, peers);
      const header = group.dataset.brandMotionGroup === "header";
      const titleCount = peers.filter((item) => item.dataset.brandMotion === "title").length;
      let delay = 0;
      let duration = 650;
      let frames: Keyframe[] = [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];

      switch (kind) {
        case "number":
          delay = header ? 0 : 100;
          duration = 550;
          frames = [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }];
          break;
        case "rule":
          delay = header ? 150 : Math.min(400, 100 + order * 100);
          duration = 600;
          frames = [
            { transform: "scaleX(0)", transformOrigin: "left center" },
            { transform: "scaleX(1)", transformOrigin: "left center" },
          ];
          break;
        case "title":
          delay = (header ? 260 : 100) + Math.min(order, 4) * 140;
          duration = 750;
          frames = [
            { opacity: 0, transform: "translateY(18px)", filter: "blur(3px)" },
            { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
          ];
          break;
        case "image":
          duration = 800;
          frames = [
            { opacity: 0, transform: "translateY(12px) scale(1.025)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ];
          break;
        case "heading":
          delay = 200;
          break;
        case "body":
          delay = header ? 360 + Math.max(0, Math.min(titleCount, 5) - 1) * 140 : 300;
          break;
        case "tags":
          delay = 400;
          break;
        case "keyword": {
          // A single color effect keeps emphasis quiet and preserves text geometry.
          const color = window.getComputedStyle(target).color;
          const muted = `color-mix(in srgb, ${color} 82%, transparent)`;
          if (!window.CSS?.supports("color", muted)) return;
          delay = Math.min(400, order * 120);
          frames = [{ color: muted }, { color }];
          break;
        }
        case "trace":
          delay = Math.min(400, order * 120);
          duration = 1000;
          frames = [
            { strokeDasharray: "1", strokeDashoffset: "1" },
            { strokeDasharray: "1", strokeDashoffset: "0" },
          ];
          break;
        default:
          return;
      }
      animate(target, frames, { duration, delay });
    };

    const playMoment = (group: HTMLElement) => {
      if (played.has(group)) return;
      played.add(group);
      if (!motionAllowed()) return;
      const final = group.querySelector<HTMLElement>("[data-moment-final]");
      const overlay = group.querySelector<HTMLElement>("[data-moment-overlay]");
      const first = overlay?.querySelector<HTMLElement>("[data-moment-first]");
      const second = overlay?.querySelector<HTMLElement>("[data-moment-second]");
      const together = overlay?.querySelector<HTMLElement>("[data-moment-we]");
      if (!final || !overlay || !first || !second || !together) return;

      const local = new Set<Animation>();
      const settle = () => {
        overlay.hidden = true;
        for (const animation of local) {
          animation.cancel();
          animations.delete(animation);
        }
        local.clear();
        moments.delete(group);
      };
      const start = (target: Element, frames: Keyframe[]) => {
        const animation = animate(target, frames, { duration: 1600, fill: "both" });
        if (animation) local.add(animation);
        return animation;
      };

      moments.set(group, settle);
      group.dataset.momentStarted = "true";
      overlay.hidden = false;
      const firstAnimation = start(first, [
        { offset: 0, opacity: 0, transform: "translateX(0)" },
        { offset: 0.15, opacity: 1, transform: "translateX(0)" },
        { offset: 0.22, opacity: 1, transform: "translateX(0)" },
        { offset: 0.34, opacity: 1, transform: "translateX(-24px)" },
        { offset: 0.44, opacity: 1, transform: "translateX(-24px)" },
        { offset: 0.62, opacity: 1, transform: "translateX(-12px)" },
        { offset: 0.72, opacity: 0, transform: "translateX(0)" },
        { offset: 1, opacity: 0, transform: "translateX(0)" },
      ]);
      const secondAnimation = start(second, [
        { offset: 0, opacity: 0, transform: "translateX(24px)" },
        { offset: 0.31, opacity: 0, transform: "translateX(24px)" },
        { offset: 0.44, opacity: 1, transform: "translateX(24px)" },
        { offset: 0.62, opacity: 1, transform: "translateX(12px)" },
        { offset: 0.72, opacity: 0, transform: "translateX(0)" },
        { offset: 1, opacity: 0, transform: "translateX(0)" },
      ]);
      const togetherAnimation = start(together, [
        { offset: 0, opacity: 0 },
        { offset: 0.72, opacity: 0 },
        { offset: 0.8, opacity: 1 },
        { offset: 0.84, opacity: 1 },
        { offset: 0.9, opacity: 0 },
        { offset: 1, opacity: 0 },
      ]);
      const finalAnimation = start(final, [
        { offset: 0, opacity: 0 },
        { offset: 0.9, opacity: 0 },
        { offset: 1, opacity: 1 },
      ]);
      if (!firstAnimation || !secondAnimation || !togetherAnimation || !finalAnimation) {
        settle();
        return;
      }
      finalAnimation.addEventListener("finish", settle, { once: true });
    };

    // Targets in long stories are observed separately, so lower text waits for the reader.
    const targetObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        reveal(entry.target as MotionElement);
        targetObserver.unobserve(entry.target);
      }
    }, { threshold: 0.08 });

    const headerObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const group = entry.target;
        const targets = childrenOf(group);
        const viewportHeight = window.innerHeight;
        const tall = group.getBoundingClientRect().height > viewportHeight * 0.85;
        for (const target of targets) {
          const bounds = target.getBoundingClientRect();
          if (!tall && bounds.top < viewportHeight && bounds.bottom > 0) reveal(target);
          else targetObserver.observe(target);
        }
        headerObserver.unobserve(group);
      }
    }, { threshold: 0.1 });

    const momentObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const group = entry.target as HTMLElement;
        if (!entry.isIntersecting) moments.get(group)?.();
        else if (entry.intersectionRatio >= 0.12) playMoment(group);
      }
    }, { threshold: [0, 0.12] });

    for (const group of groups) {
      if (group.dataset.brandMotionGroup === "moment") momentObserver.observe(group);
      else if (group.dataset.brandMotionGroup === "header") headerObserver.observe(group);
      else childrenOf(group).forEach((target) => targetObserver.observe(target));
    }

    const settleAll = () => {
      for (const settle of moments.values()) settle();
      for (const animation of animations) animation.cancel();
      animations.clear();
    };
    const handlePreference = () => { if (preference.matches) settleAll(); };
    const handleVisibility = () => { if (document.hidden) settleAll(); };
    preference.addEventListener("change", handlePreference);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      disposed = true;
      targetObserver.disconnect();
      headerObserver.disconnect();
      momentObserver.disconnect();
      preference.removeEventListener("change", handlePreference);
      document.removeEventListener("visibilitychange", handleVisibility);
      settleAll();
    };
  }, []);

  return null;
}
