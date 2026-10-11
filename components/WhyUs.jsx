"use client";
import Reveal from "./Reveal";
import HoverIcon from "./HoverIcon";
import { whyStats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container why-grid">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">Why businesses trust us</span>
          <h2 className="big">Why choose HFC Consultancy Services?</h2>
          <p className="muted why-p">We&apos;ve spent years building software specifically for the food and service industry — not generic tools repurposed for restaurants, but purpose-built products that understand your workflow.</p>
        </Reveal>

        <Reveal className="why-list" stagger={0.1} y={24}>
          {whyStats.map((s, i) => (
            <div key={s.rest} className="why-card">
              <span className="ico"><HoverIcon name={s.icon} size={20} /></span>
              <div><h4><b>{s.bold}</b> {s.rest}</h4><p>{s.text}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
