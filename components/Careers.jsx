"use client";
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
          <p className="muted">Join a friendly, remote team building the home for digital creators.</p>
        </Reveal>
        <Reveal className="grid jobs" stagger={0.1} y={24}>
          {jobs.map((j) => (
            <div key={j.title} className="job">
              <h4>{j.title}</h4><p>{j.place}</p>
              <a href={`mailto:hello@digitalcreatorshub.com?subject=${encodeURIComponent("Application: " + j.title)}`}>Apply <Icon name="arrow" size={16} /></a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
