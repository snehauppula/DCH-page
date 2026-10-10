"use client";
import Link from "next/link";
import HoverIcon from "./HoverIcon";
import Reveal from "./Reveal";
import { useJoin } from "./JoinProvider";
import { hubs } from "@/lib/data";

export default function HubDetail({ p }) {
  const { open } = useJoin();
  const i = hubs.findIndex((h) => h.slug === p.slug);
  const prev = hubs[(i - 1 + hubs.length) % hubs.length];
  const next = hubs[(i + 1) % hubs.length];
  const related = hubs.filter((h) => h.cat === p.cat && h.slug !== p.slug).slice(0, 3);
  const more = related.length ? related : [prev, next];

  return (
    <>
      <section className="pd-hero">
        <div className="container">
          <p className="crumb"><Link href="/">Home</Link> / <Link href="/#hubs">Services</Link> / {p.name}</p>
          <div>
            <div className="big-ico"><HoverIcon name={p.icon} size={34} /></div>
            <span className="tag">{p.cat}</span>
            <h1>{p.name}</h1>
            <p className="lead">{p.blurb}</p>
            <button className="btn btn-primary" onClick={() => open(p.name)}>Get Started</button>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>What's Included</h2>
          <Reveal className="grid pd-feats" stagger={0.08} y={24}>
            {p.features.map((f) => (
              <div key={f} className="job">
                <p className="feat-line"><HoverIcon name="tick" size={18} /> <b>{f}</b></p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal><h2 style={{ marginBottom: "2rem" }}>Explore our other products</h2></Reveal>
          <div className="grid hubs-grid">
            {more.map((h) => (
              <Link key={h.slug} href={`/hubs/${h.slug}`} className="pcard">
                <div className="pc-body">
                  <div className="pc-top"><span className="pi"><HoverIcon name={h.icon} size={22} /></span></div>
                  <h4>{h.name}</h4><p>{h.blurb}</p>
                  <span className="more">Explore</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="pn">
            <Link href={`/hubs/${prev.slug}`}><HoverIcon name="arrow-left" size={18} /> <span><small>Previous</small>{prev.name}</span></Link>
            <Link href={`/hubs/${next.slug}`}><span style={{ textAlign: "right" }}><small>Next</small>{next.name}</span> <HoverIcon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
