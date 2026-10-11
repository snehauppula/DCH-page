"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { hubs } from "@/lib/data";
import HoverIcon from "./HoverIcon";
import { useJoin } from "./JoinProvider";

const catStyle = {
  Cloud:      { bg: "#fef2f2", accent: "#e11d48", grad: "135deg,#ffe4e6 0%,#f43f5e 100%" },
  Restaurant: { bg: "#fee2e2", accent: "#dc2626", grad: "135deg,#fecaca 0%,#ef4444 100%" },
  POS:        { bg: "#fff1f2", accent: "#be123c", grad: "135deg,#ffe4e6 0%,#e11d48 100%" },
  Delivery:   { bg: "#fee2e2", accent: "#b91c1c", grad: "135deg,#fecaca 0%,#dc2626 100%" },
  Ordering:   { bg: "#fee2e2", accent: "#b91c1c", grad: "135deg,#fecaca 0%,#dc2626 100%" },
  Tech:       { bg: "#fee2e2", accent: "#991b1b", grad: "135deg,#fee2e2 0%,#dc2626 100%" },
  AI:         { bg: "#fef2f2", accent: "#dc2626", grad: "135deg,#fecaca 0%,#ef4444 100%" },
  Platform:   { bg: "#fff1f2", accent: "#e11d48", grad: "135deg,#ffe4e6 0%,#f43f5e 100%" },
  Marketing:  { bg: "#fee2e2", accent: "#b91c1c", grad: "135deg,#fecaca 0%,#dc2626 100%" },
  Setup:      { bg: "#fef2f2", accent: "#dc2626", grad: "135deg,#fecaca 0%,#ef4444 100%" },
  Consulting: { bg: "#fee2e2", accent: "#991b1b", grad: "135deg,#fee2e2 0%,#b91c1c 100%" },
  Training:   { bg: "#fff1f2", accent: "#be123c", grad: "135deg,#ffe4e6 0%,#e11d48 100%" },
  Custom:     { bg: "#fee2e2", accent: "#dc2626", grad: "135deg,#fecaca 0%,#ef4444 100%" },
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
