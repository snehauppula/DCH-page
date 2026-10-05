"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/lib/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // in-page anchors ("#hubs" or "/#hubs" while on the home page) glide instead of jumping
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin || u.pathname !== location.pathname || !u.hash) return;
      const el = document.getElementById(u.hash.slice(1));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 70) + 1 });
      history.pushState(null, "", u.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
  return null;
}
