"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Counter from "./Counter";
import Icon from "./Icon";
import { useJoin } from "./JoinProvider";

const chips = [
  { icon: "cloud", label: "Cloud Kitchen", s: { top: "8%", left: "2%" } },
  { icon: "book", label: "Restaurant", s: { top: "18%", right: "0%" } },
  { icon: "zap", label: "POS Billing", s: { bottom: "18%", right: "2%" } },
  { icon: "rocket", label: "Custom Software", s: { bottom: "8%", left: "6%" } },
];

export default function Hero() {
  const { open } = useJoin();
  const root = useRef(null);

  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-copy > *", { opacity: 0, y: 30, duration: 0.8, stagger: 0.1 })
        .from(".hero-visual", { opacity: 0, scale: 0.92, duration: 0.9 }, 0.2)
        .from(".chipf", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, 0.7);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={root}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">SMART SOFTWARE FOR MODERN BUSINESS</span>
          <h1>Powerful software for <span className="grad">restaurants & digital businesses.</span></h1>
          <p className="lead">HFC delivers cloud kitchen software, restaurant management, POS billing and custom software — everything your business needs to run faster and smarter.</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => open()}>Request a Demo <Icon name="arrow" size={18} /></button>
            <a href="#hubs" className="btn btn-outline">Our Services</a>
          </div>
          <div className="hero-stats">
            <div><Counter to={500} /><span>+ Businesses</span></div>
            <div><Counter to={4} /><span>Products</span></div>
            <div><Counter to={99} /><span>.9% Uptime</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hfc-logo.png" alt="HFC Software" style={{ width: "84%", borderRadius: "50%", display: "block", margin: "auto" }} />
          </div>
          {chips.map((c) => (
            <div key={c.label} className="chipf" style={c.s}><Icon name={c.icon} size={18} /> {c.label}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
