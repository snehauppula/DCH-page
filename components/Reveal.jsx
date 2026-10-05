"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered fade/slide. With `stagger`, the direct children animate one after another instead of the wrapper.
export default function Reveal({ children, delay = 0, y = 28, x = 0, stagger = 0, className = "", ...rest }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const targets = stagger ? ref.current.children : ref.current;
      gsap.from(targets, {
        opacity: 0, y, x, duration: 0.8, delay, ease: "power3.out", stagger,
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [y, x, delay, stagger]);
  return <div ref={ref} className={className} {...rest}>{children}</div>;
}
