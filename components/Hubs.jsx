"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { hubs, categories } from "@/lib/data";

// per-service accent colours (purple shades)
const accents = {
  "cloud-kitchen-software": "#7c3aed",
  "restaurant-software":    "#6d28d9",
  "pos-billing-software":   "#5b21b6",
  "custom-software":        "#4c1d95",
};

export default function Hubs() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return hubs.filter((h) => (cat === "All" || h.cat === cat) && (!s || (h.name + " " + h.blurb).toLowerCase().includes(s)));
  }, [cat, q]);

  return (
    <section className="section" id="hubs">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">OUR SOFTWARE PRODUCTS</span>
          <h2>A solution for every <span className="grad">kind of business</span></h2>
        </Reveal>

        <Reveal className="toolbar">
          <label className="search">
            <Icon name="search" size={18} />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services — e.g. cloud kitchen, POS…" aria-label="Search services" />
            {q && <button type="button" onClick={() => setQ("")} aria-label="Clear search"><Icon name="close" size={16} /></button>}
          </label>
          <div className="pills" role="tablist" aria-label="Filter by category">
            {categories.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={`pill${cat === c ? " on" : ""}`} onClick={() => setCat(c)}>
                {cat === c && <motion.span layoutId="pill-bg" className="pill-bg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                <span>{c}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <p className="count" aria-live="polite">{list.length} {list.length === 1 ? "service" : "services"}</p>

        <motion.div className="grid hubs-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.28 }}>
                <Link
                  href={`/hubs/${p.slug}`}
                  className="pcard"
                  style={{ "--card-accent": accents[p.slug] || "var(--accent)" }}
                >
                  <div className="pc-body">
                    <div className="pc-top">
                      <span className="pi"><Icon name={p.icon} size={22} /></span>
                      <span className="tag">{p.cat}</span>
                    </div>
                    <h4>{p.name}</h4>
                    <p>{p.blurb}</p>
                    {p.features && (
                      <ul className="card-features">
                        {p.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    )}
                    <span className="more">Learn more <Icon name="arrow" size={16} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <div className="empty">
            <Icon name="search" size={32} />
            <p>No services match &ldquo;{q}&rdquo;.</p>
            <button className="btn btn-outline" onClick={() => { setQ(""); setCat("All"); }}>Reset filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
