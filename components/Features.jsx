"use client";
import { motion } from "framer-motion";
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
          <div className="bar" />
        </Reveal>
        <div className="features">
          {features.map((f, i) => (
            <motion.div key={f.title} className="feat" style={{ "--c": f.color }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <motion.span whileHover={{ scale: 1.15, rotate: 6 }}><Icon name={f.icon} size={30} /></motion.span>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </motion.div>
          ))}
        </div>

        <Reveal className="promise">
          <div className="p-left">
            <motion.div className="target" animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: Infinity, duration: 5 }}><Icon name="target" size={44} /></motion.div>
            <div><h3>Our Promise</h3><p>We&apos;re committed to a welcoming, creator-first community that helps you grow your audience, your skills and your income with confidence.</p></div>
          </div>
          <div className="p-right">
            <span className="phone"><Icon name="rocket" size={24} /></span>
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
