"use client";
import { useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import ExternalLinkIcon from "./ui/external-link-icon";
import ArrowNarrowRightIcon from "./ui/arrow-narrow-right-icon";
import { hubs } from "@/lib/data";

function HubRow({ p, i }) {
  const iconRef = useRef(null);
  const isExternal = !!p.href;
  const href = p.href ?? `/hubs/${p.slug}`;

  return (
    <Reveal>
      <Link
        href={href}
        className="hubs-item"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        <span className="hubs-num">0{i + 1}</span>
        <div className="hubs-name">
          <h3>{p.name}</h3>
        </div>
        <div className="hubs-desc">
          <p>{p.blurb}</p>
          <ul className="hubs-feats">
            {p.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <span className="hubs-arrow">
          {isExternal
            ? <ExternalLinkIcon ref={iconRef} size={20} />
            : <ArrowNarrowRightIcon ref={iconRef} size={20} />}
        </span>
      </Link>
    </Reveal>
  );
}

export default function Hubs() {
  return (
    <section className="section" id="hubs">
      <div className="container">
        <Reveal className="head">
          <span className="eyebrow center">Our software products</span>
          <h2>A solution for every kind of business</h2>
        </Reveal>

        <div className="hubs-list">
          {hubs.map((p, i) => <HubRow key={p.slug} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
