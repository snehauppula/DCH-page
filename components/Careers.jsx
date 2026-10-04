"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { jobs } from "@/lib/data";

export default function Careers() {
  return (
    <section className="section alt" id="careers">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">CAREERS</span>
          <h2>Grow <span className="grad">with us</span></h2>
          <div className="bar" />
          <p className="muted">Join a friendly, remote team building the home for digital creators.</p>
        </Reveal>
        <div className="grid jobs">
          {jobs.map((j, i) => (
            <motion.div key={j.title} className="job" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}>
              <h4>{j.title}</h4><p>{j.place}</p>
              <a href={`mailto:hello@digitalcreatorshub.com?subject=${encodeURIComponent("Application: " + j.title)}`}>Apply <Icon name="arrow" size={16} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
