"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const t = gsap.to(ref.current, {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.3 },
    });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return <div ref={ref} className="progress" aria-hidden="true" />;
}
