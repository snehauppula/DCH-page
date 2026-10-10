"use client";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { features } from "@/lib/data";
import { useJoin } from "./JoinProvider";

export default function Features() {
  const { open } = useJoin();
  return (
    <section className="section alt" id="features">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">WHAT MAKES US DIFFERENT</span>
          <h2>Built for speed. <span className="grad">Designed for scale.</span></h2>
        </Reveal>
        <Reveal className="features" stagger={0.08} y={30}>
          {features.map((f, i) => (
            <div key={f.title} className="feat">
              <div className="feat-num">{String(i + 1).padStart(2, "0")}</div>
              <span className="ico"><Icon name={f.icon} size={22} /></span>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="promise">
          <div className="p-left">
            <Icon name="target" size={32} className="target" />
            <div><h3>Our Promise</h3><p>We build software that works on day one and keeps working. No surprise downtime, no hidden fees — just reliable tools for your business.</p></div>
          </div>
          <div className="p-right">
            <div>
              <h3>See it live in 30 minutes</h3>
              <p>Book a free demo — we&apos;ll walk you through everything.</p>
              <button className="btn btn-outline" onClick={() => open()}>Request a Demo <Icon name="arrow" size={16} /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
