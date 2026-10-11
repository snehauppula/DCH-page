"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import HoverIcon from "./HoverIcon";
import { faqs } from "@/lib/data";
import { useJoin } from "./JoinProvider";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { open: openJoin } = useJoin();
  return (
    <section className="section faq alt" id="faqs">
      <div className="container faq-grid">
        <Reveal x={-40} y={0}>
          <span className="chip"><HoverIcon name="spark" size={16} /> Knowledge Base</span>
          <h2 className="big2">Everything you need to know before choosing us</h2>
          <p className="muted">Clear answers to the questions businesses ask before choosing HFC software for their operations.</p>
          <div className="notes">
            <div><b>Quick setup</b><span>Go live in 24–48 hours, end to end</span></div>
            <div>
              <b>Dedicated support</b>
              <span>Call / WhatsApp: <a href="tel:+919912799855" style={{ color: "var(--accent)", fontWeight: 600 }}>+91 99127 99855</a></span>
            </div>
            <div>
              <b>Visit our office</b>
              <span>
                467, Ayyappa Society, Madhapur, Hyderabad &nbsp;·&nbsp;
                <a
                  href="https://maps.google.com/maps/search/Digital%20Creators%20Hub/@17.4527,78.3902,17z?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline", fontWeight: 600 }}
                >
                  View on Google Maps
                </a>
              </span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => openJoin()}>Book a Free Demo</button>
        </Reveal>
        <Reveal className="faq-list" stagger={0.07} y={24}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`qa${isOpen ? " open" : ""}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="chev"><HoverIcon name="chevron" size={18} /></span>
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
