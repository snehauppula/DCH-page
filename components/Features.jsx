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
          <h2>Powerful Tools. <span className="grad">Real Creator Impact.</span></h2>
        </Reveal>
        <Reveal className="features" stagger={0.08} y={30}>
          {features.map((f, i) => (
            <div key={f.title} className="feat">
              <span className="step-num"><strong>{String(i + 1).padStart(2, '0')}</strong> STEP</span>
              <span className="ico"><Icon name={f.icon} size={22} /></span>
              <div><h4>{f.title}</h4><p>{f.text}</p></div>
            </div>
          ))}
        </Reveal>

        <Reveal className="promise">
          <div className="p-left">
            <Icon name="target" size={32} className="target" />
            <div><h3>Our Promise</h3><p>We&apos;re committed to a welcoming, creator-first community that helps you grow your audience, your skills and your income with confidence.</p></div>
          </div>
          <div className="p-right">
            <div>
              <h3>Let&apos;s build something together</h3>
              <p>Join thousands of creators today!</p>
              <button className="btn btn-outline" onClick={() => open()}>Join the Hub <Icon name="arrow" size={16} /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
