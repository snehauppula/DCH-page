"use client";
import Reveal from "./Reveal";
import HoverIcon from "./HoverIcon";
import { serviceGroups } from "@/lib/data";

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal>
          <span className="eyebrow">What We Do</span>
          <h2 className="big">One complete solution<br />for your business</h2>
          <p className="lead" style={{ maxWidth: 560, marginBottom: "3rem" }}>
            From business setup to digital growth — HFC Consultancy Services covers every angle.
          </p>
        </Reveal>
        <div className="svc-grid">
          {serviceGroups.map((g) => (
            <Reveal key={g.category}>
              <div className="svc-card">
                <div className="svc-icon" style={{ background: g.color }}>
                  <HoverIcon name={g.icon} size={22} color="#3b0764" />
                </div>
                <h3 className="svc-title">{g.category}</h3>
                <ul className="svc-list">
                  {g.items.map((item) => (
                    <li key={item}>
                      <HoverIcon name="check" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
