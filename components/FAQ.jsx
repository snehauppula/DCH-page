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
          <h2 className="big2">Everything you need to know <span className="grad">before choosing us</span></h2>
          <p className="muted">Clear answers to the questions businesses ask before choosing HFC software for their operations.</p>
          <div className="notes">
            <div><b>Quick setup</b><span>Go live in 24–48 hours, end to end</span></div>
            <div><b>Dedicated support</b><span>Real engineers, 7 days a week</span></div>
          </div>
          <button className="btn btn-primary" onClick={() => openJoin()}>Book a Free Demo <Icon name="arrow" size={18} /></button>
        </Reveal>
        <Reveal className="faq-list" stagger={0.07} y={24}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`qa${isOpen ? " open" : ""}`}>
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
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
