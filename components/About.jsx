"use client";
import Reveal from "./Reveal";
import Counter from "./Counter";
import HoverIcon from "./HoverIcon";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal x={-40} y={0}>
          <span className="eyebrow">About us</span>
          <h2>Built for food businesses, by people who understand them</h2>
          <p className="muted about-p">HFC Consultancy Services is a product company focused on building reliable, affordable technology for cloud kitchens, restaurants and digital businesses across India. We combine deep industry knowledge with modern engineering to deliver software that just works.</p>
          <ul className="ticks">
            <li><HoverIcon name="tick" size={18} /> Purpose-built for the food & service industry</li>
            <li><HoverIcon name="tick" size={18} /> Onboarding, training and 7-day support included</li>
            <li><HoverIcon name="tick" size={18} /> GST-compliant, delivery-partner integrated</li>
          </ul>
        </Reveal>
        <Reveal className="numbers" x={40} y={0} stagger={0.1}>
          <div><Counter to={500} /><span>Businesses</span></div>
          <div><Counter to={4} /><span>Products</span></div>
          <div><Counter to={99} /><span>% Uptime</span></div>
          <div><Counter to={7} /><span>Day Support</span></div>
        </Reveal>
      </div>
    </section>
  );
}
