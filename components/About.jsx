"use client";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Icon from "./Icon";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">ABOUT US</span>
          <h2>A community built <span className="grad">by creators, for creators</span></h2>
          <p className="muted about-p">Digital Creators Hub is a global, remote-first community where podcasters, gamers, video makers, photographers, artists and writers learn from each other, collaborate on projects and connect with brands that value their work.</p>
          <ul className="ticks">
            <li><Icon name="tick" size={18} /> Remote-first, open to creators worldwide</li>
            <li><Icon name="tick" size={18} /> Mentors, workshops and challenges every month</li>
            <li><Icon name="tick" size={18} /> Verified brand partnerships</li>
          </ul>
        </Reveal>
        <Reveal className="numbers" x={40} y={0} stagger={0.1}>
          <div><Counter to={10000} /><span>Creators</span></div>
          <div><Counter to={12} /><span>Creator Hubs</span></div>
          <div><Counter to={100} /><span>Brand Partners</span></div>
          <div><Counter to={50} /><span>Monthly Events</span></div>
        </Reveal>
      </div>
    </section>
  );
}
