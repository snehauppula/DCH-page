"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { hubs, categories } from "@/lib/data";

export default function Hubs() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return hubs.filter((h) => (cat === "All" || h.cat === cat) && (!s || (h.name + " " + h.blurb).toLowerCase().includes(s)));
  }, [cat, q]);

  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="section" id="hubs">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">CREATOR HUBS</span>
          <h2>A hub for every <span className="grad">kind of creator</span></h2>
          <div className="bar" />
        </Reveal>

        <Reveal className="toolbar">
          <label className="search">
            <Icon name="search" size={18} />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search hubs — e.g. podcast, design…" aria-label="Search hubs" />
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
        <p className="count" aria-live="polite">{list.length} {list.length === 1 ? "hub" : "hubs"}</p>

        <motion.div className="grid hubs-grid" layout>
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }} whileHover={{ y: -6 }}>
                <Link href={`/hubs/${p.slug}`} className="pcard" onMouseMove={spot}>
                  <div className="pi"><Icon name={p.icon} size={28} /></div>
                  <span className="tag">{p.cat}</span>
                  <h4>{p.name}</h4>
                  <p>{p.blurb}</p>
                  <span className="more">Explore <Icon name="arrow" size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <div className="empty">
            <Icon name="search" size={32} />
            <p>No hubs match &ldquo;{q}&rdquo;.</p>
            <button className="btn btn-outline" onClick={() => { setQ(""); setCat("All"); }}>Reset filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
