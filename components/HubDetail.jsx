"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useJoin } from "./JoinProvider";
import { hubs } from "@/lib/data";

export default function HubDetail({ p }) {
  const { open } = useJoin();
  const i = hubs.findIndex((h) => h.slug === p.slug);
  const prev = hubs[(i - 1 + hubs.length) % hubs.length];
  const next = hubs[(i + 1) % hubs.length];
  const related = hubs.filter((h) => h.cat === p.cat && h.slug !== p.slug).slice(0, 3);
  const more = related.length ? related : [prev, next];

  return (
    <>
      <section className="pd-hero">
        <div className="container">
          <p className="crumb"><Link href="/">Home</Link> / <Link href="/#hubs">Hubs</Link> / {p.name}</p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="big-ico"><Icon name={p.icon} size={44} /></div>
            <span className="tag">{p.cat}</span>
            <h1>{p.name} <span className="grad">Hub</span></h1>
            <p className="lead">{p.blurb}</p>
            <button className="btn btn-primary" onClick={() => open(p.name)}>Join this hub <Icon name="arrow" size={18} /></button>
          </motion.div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>What you get</h2>
          <div className="grid pd-feats">
            {p.features.map((f, k) => (
              <motion.div key={f} className="job" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.08 }} whileHover={{ y: -6 }}>
                <p className="feat-line"><Icon name="tick" size={18} /> <b>{f}</b></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal><h2 style={{ marginBottom: "2rem" }}>Explore <span className="grad">more hubs</span></h2></Reveal>
          <div className="grid hubs-grid">
            {more.map((h) => (
              <Link key={h.slug} href={`/hubs/${h.slug}`} className="pcard">
                <div className="pi"><Icon name={h.icon} size={28} /></div>
                <h4>{h.name}</h4><p>{h.blurb}</p>
                <span className="more">Explore <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
          <div className="pn">
            <Link href={`/hubs/${prev.slug}`}><Icon name="arrow" size={18} style={{ transform: "rotate(180deg)" }} /> <span><small>Previous</small>{prev.name}</span></Link>
            <Link href={`/hubs/${next.slug}`}><span style={{ textAlign: "right" }}><small>Next</small>{next.name}</span> <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
