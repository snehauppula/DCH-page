"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ to }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(to); return; }
    const o = { n: 0 };
    const tween = gsap.to(o, {
      n: to, duration: 1.8, ease: "power2.out", paused: true,
      onUpdate: () => setV(Math.round(o.n)),
    });
    const st = ScrollTrigger.create({ trigger: ref.current, start: "top 95%", once: true, onEnter: () => tween.play() });
    return () => { st.kill(); tween.kill(); };
  }, [to]);
  return <b ref={ref}>{v.toLocaleString()}</b>;
}
