"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { hubs } from "@/lib/data";
import HoverIcon from "./HoverIcon";
import { useJoin } from "./JoinProvider";

const catStyle = {
  Cloud:      { bg: "#dcfce7", accent: "#16a34a", grad: "135deg,#bbf7d0 0%,#4ade80 100%" },
  Restaurant: { bg: "#fee2e2", accent: "#dc2626", grad: "135deg,#fecaca 0%,#f87171 100%" },
  POS:        { bg: "#fef3c7", accent: "#d97706", grad: "135deg,#fde68a 0%,#fbbf24 100%" },
  Tech:       { bg: "#dbeafe", accent: "#2563eb", grad: "135deg,#bfdbfe 0%,#60a5fa 100%" },
  AI:         { bg: "#f3e8ff", accent: "#7c3aed", grad: "135deg,#ddd6fe 0%,#a78bfa 100%" },
  Platform:   { bg: "#fef9c3", accent: "#ca8a04", grad: "135deg,#fef08a 0%,#facc15 100%" },
  Marketing:  { bg: "#fce7f3", accent: "#db2777", grad: "135deg,#fbcfe8 0%,#f472b6 100%" },
  Setup:      { bg: "#d1fae5", accent: "#059669", grad: "135deg,#a7f3d0 0%,#34d399 100%" },
  Consulting: { bg: "#e0e7ff", accent: "#4f46e5", grad: "135deg,#c7d2fe 0%,#818cf8 100%" },
  Training:   { bg: "#ffedd5", accent: "#ea580c", grad: "135deg,#fed7aa 0%,#fb923c 100%" },
  Custom:     { bg: "#dcfce7", accent: "#15803d", grad: "135deg,#bbf7d0 0%,#4ade80 100%" },
};

const keyStats = [
  { label: "Businesses Served", value: "500+", icon: "users" },
  { label: "Client Satisfaction", value: "98%",  icon: "star" },
  { label: "Support Available",  value: "7-Day", icon: "headset" },
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const tabsRef = useRef(null);
  const { open } = useJoin();

  const current = hubs[active];
  const style = catStyle[current.cat] ?? catStyle.Cloud;

  function select(i) {
    if (i === active) return;
    setFade(false);
    setTimeout(() => { setActive(i); setFade(true); }, 150);
  }

  function scrollTabs(dir) {
    if (tabsRef.current) tabsRef.current.scrollBy({ left: dir * 220, behavior: "smooth" });
  }

  // scroll active tab into view
  useEffect(() => {
    const el = tabsRef.current?.querySelector(`[data-tab="${active}"]`);
    el?.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <section className="section sc-section" id="hubs">
      <div className="container">
        <div className="sc-head">
          <span className="eyebrow">Our Services</span>
          <h2>Everything your business needs,<br />under one roof</h2>
        </div>

        {/* Tabs row */}
        <div className="sc-tabs-wrap">
          <button className="sc-nav" onClick={() => scrollTabs(-1)} aria-label="Previous">
            <HoverIcon name="arrow-left" size={18} />
          </button>
          <div className="sc-tabs" ref={tabsRef}>
            {hubs.map((h, i) => {
              const s = catStyle[h.cat] ?? catStyle.Cloud;
              return (
                <button
                  key={h.slug}
                  data-tab={i}
                  className={`sc-tab${active === i ? " active" : ""}`}
                  onClick={() => select(i)}
                  style={active === i ? { borderColor: s.accent } : {}}
                >
                  <span className="sc-tab-icon" style={{ background: s.bg }}>
                    <HoverIcon name={h.icon} size={18} color={s.accent} />
                  </span>
                  <span className="sc-tab-text">
                    <small>{h.cat}</small>
                    <strong>{h.name}</strong>
                  </span>
                  {active === i && <span className="sc-tab-chevron" style={{ color: s.accent }}>›</span>}
                </button>
              );
            })}
          </div>
          <button className="sc-nav" onClick={() => scrollTabs(1)} aria-label="Next">
            <HoverIcon name="arrow" size={18} />
          </button>
        </div>

        {/* Big card */}
        <div className={`sc-card${fade ? " sc-fade-in" : " sc-fade-out"}`}>
          {/* Visual panel */}
          <div className="sc-visual" style={current.image ? {} : { background: style.bg }}>
            {current.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={current.image} alt={current.name} className="sc-visual-img" />
            ) : (
              <div className="sc-visual-icon" style={{ background: "rgba(255,255,255,.6)" }}>
                <HoverIcon name={current.icon} size={64} color={style.accent} />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="sc-content">
            <span className="sc-badge" style={{ background: style.bg, color: style.accent }}>{current.cat}</span>
            <h3 className="sc-name">{current.name}</h3>
            <p className="sc-blurb">{current.blurb}</p>

            <div className="sc-features">
              {current.features.map((f) => (
                <div key={f} className="sc-feat">
                  <span className="sc-feat-dot" style={{ background: style.accent }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="sc-ctas">
              {current.href ? (
                <a href={current.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-icon-pill">
                  <span>Visit Platform</span>
                  <span className="btn-circle"><HoverIcon name="external" size={14} /></span>
                </a>
              ) : (
                <button className="btn btn-primary btn-icon-pill" onClick={() => open(current.name)}>
                  <span>Get Started</span>
                  <span className="btn-circle"><HoverIcon name="arrow" size={14} /></span>
                </button>
              )}
              <Link href={`/hubs/${current.slug}`} className="btn btn-outline">Learn More</Link>
            </div>
          </div>

          {/* Key benefits */}
          <div className="sc-stats">
            <p className="sc-stats-title">Key Benefits</p>
            {keyStats.map((s) => (
              <div key={s.label} className="sc-stat">
                <span className="sc-stat-icon" style={{ background: style.bg }}>
                  <HoverIcon name={s.icon} size={16} color={style.accent} />
                </span>
                <div>
                  <div className="sc-stat-label">{s.label}</div>
                  <div className="sc-stat-value" style={{ color: style.accent }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
