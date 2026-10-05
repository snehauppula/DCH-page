"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Counter from "./Counter";
import Icon from "./Icon";
import LogoCircle from "./LogoCircle";
import { useJoin } from "./JoinProvider";

const chips = [
  { icon: "mic", label: "Podcasts", s: { top: "6%", left: "4%" } },
  { icon: "gamepad", label: "Gaming", s: { top: "14%", right: "0%" } },
  { icon: "camera", label: "Photo", s: { bottom: "14%", right: "2%" } },
  { icon: "pen", label: "Design", s: { bottom: "6%", left: "8%" } },
];

export default function Hero() {
  const { open } = useJoin();
  const root = useRef(null);

  // one-off entrance on load — nothing loops or floats afterwards
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
          <span className="eyebrow">THE HOME FOR CREATORS</span>
          <h1>Where creators connect, collaborate &amp; <span className="grad">grow together.</span></h1>
          <p className="lead">Digital Creators Hub brings podcasters, gamers, filmmakers, artists and writers into one vibrant community with the tools, mentors and brand deals to level up.</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => open()}>Join the Hub <Icon name="arrow" size={18} /></button>
            <a href="#hubs" className="btn btn-outline">Explore Hubs</a>
          </div>
          <div className="hero-stats">
            <div><Counter to={10000} /><span>+ Creators</span></div>
            <div><Counter to={12} /><span>Creator Hubs</span></div>
            <div><Counter to={100} /><span>+ Brand Partners</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo"><LogoCircle /></div>
          {chips.map((c) => (
            <div key={c.label} className="chipf" style={c.s}><Icon name={c.icon} size={18} /> {c.label}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
