"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";
import LogoCircle from "./LogoCircle";
import { whyStats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container why-grid">
        <Reveal x={-40} y={0}>
          <span className="eyebrow"><i className="dot" />WHY CREATORS TRUST US</span>
          <h2 className="big">Why Choose<br /><span className="grad">Digital Creators</span><br />Hub?</h2>
          <motion.div className="underline" initial={{ width: 0 }} whileInView={{ width: 70 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
          <p className="muted why-p">We&apos;re building the community we wished existed — one place where creators of every craft share knowledge, find collaborators and turn passion into a sustainable career.</p>
        </Reveal>

        <div className="orbit">
          <div className="orbit-circle">
            <motion.div className="ring" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} />
            <motion.div className="orbit-logo" initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <LogoCircle />
            </motion.div>
          </div>
          <ul className="orbit-list">
            {whyStats.map((s, i) => (
              <motion.li key={s.rest} style={{ "--x": s.x }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }}>
                <span className="ico"><Icon name={s.icon} size={22} /></span>
                <div><h4><b>{s.bold}</b> {s.rest}</h4><p>{s.text}</p></div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
