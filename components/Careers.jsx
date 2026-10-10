"use client";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { jobs } from "@/lib/data";

export default function Careers() {
  return (
    <section className="section alt" id="careers">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">Careers</span>
          <h2>Grow with us</h2>
          <p className="muted">Join our growing team building software that powers real businesses.</p>
        </Reveal>
        <Reveal className="grid jobs" stagger={0.1} y={24}>
          {jobs.map((j) => (
            <div key={j.title} className="job">
              <h4>{j.title}</h4><p>{j.place}</p>
              <a href={`mailto:hello@hfcsoftware.com?subject=${encodeURIComponent("Application: " + j.title)}`}>Apply</a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
