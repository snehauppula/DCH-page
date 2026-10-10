"use client";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { whyStats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container why-grid">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">WHY CREATORS TRUST US</span>
          <h2 className="big">Why Choose <span className="grad">Digital Creators Hub?</span></h2>
          <p className="muted why-p">We&apos;re building the community we wished existed — one place where creators of every craft share knowledge, find collaborators and turn passion into a sustainable career.</p>
        </Reveal>

        <Reveal className="why-list" stagger={0.1} y={24}>
          {whyStats.map((s, i) => (
            <div key={s.rest} className="why-card">
              <span className="step-num"><strong>{String(i + 1).padStart(2, '0')}</strong> BENEFIT</span>
              <span className="ico"><Icon name={s.icon} size={20} /></span>
              <div><h4><b>{s.bold}</b> {s.rest}</h4><p>{s.text}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
