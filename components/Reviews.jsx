"use client";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { reviews } from "@/lib/data";

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={18} filled className={i < n ? "" : "off"} />)}
    </span>
  );
}

function Card({ r, hidden }) {
  return (
    <div className="rev" aria-hidden={hidden || undefined}>
      <div><Stars n={r.stars} /><p>{r.text}</p></div>
      <div className="who"><span className="av" style={{ background: r.color }}>{r.name[0]}</span><div><b>{r.name}</b><small>Business owner</small></div></div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal className="rev-head">
          <div>
            <h2>What our clients say</h2>
            <p className="rating"><Stars n={5} /> <b>4.9</b> <span className="muted">average community rating</span></p>
          </div>
        </Reveal>
      </div>
      <div className="marquee" tabIndex={0} aria-label="Client testimonials, hover to pause">
        <div className="rev-track">
          {reviews.map((r, i) => <Card key={i} r={r} />)}
          {reviews.map((r, i) => <Card key={"d" + i} r={r} hidden />)}
        </div>
      </div>
    </section>
  );
}
