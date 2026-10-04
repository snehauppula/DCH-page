"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { faqs } from "@/lib/data";
import { useJoin } from "./JoinProvider";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { open: openJoin } = useJoin();
  return (
    <section className="section faq alt" id="faqs">
      <div className="container faq-grid">
        <Reveal x={-40} y={0}>
          <span className="chip"><Icon name="spark" size={16} /> Knowledge Base</span>
          <h2 className="big2">Everything you need to know <span className="grad">before joining</span></h2>
          <p className="muted">Clear answers to the questions creators ask most about the community, collaborations, brand deals and support.</p>
          <div className="notes">
            <div><b>Fast onboarding</b><span>Join and meet your hub in minutes</span></div>
            <div><b>Friendly support</b><span>Mentors and moderators who care</span></div>
          </div>
          <button className="btn btn-primary" onClick={() => openJoin()}>Still have questions? <Icon name="arrow" size={18} /></button>
        </Reveal>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} className={`qa${isOpen ? " open" : ""}`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <span className="n">0{i + 1}</span>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="chev"><Icon name="chevron" size={18} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div style={{ overflow: "hidden" }} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="ans-p">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
