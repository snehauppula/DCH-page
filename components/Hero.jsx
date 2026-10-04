"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Icon from "./Icon";
import LogoCircle from "./LogoCircle";
import { useJoin } from "./JoinProvider";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

const chips = [
  { icon: "mic", label: "Podcasts", c: "#22d3ee", s: { top: "6%", left: "4%" } },
  { icon: "gamepad", label: "Gaming", c: "#a855f7", s: { top: "14%", right: "0%" } },
  { icon: "camera", label: "Photo", c: "#4ade80", s: { bottom: "14%", right: "2%" } },
  { icon: "pen", label: "Design", c: "#f472b6", s: { bottom: "6%", left: "8%" } },
];

export default function Hero() {
  const { open } = useJoin();
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow"><i className="dot" />THE HOME FOR CREATORS</motion.span>
          <motion.h1 variants={item}>Where creators connect, collaborate &amp; <span className="grad">grow together.</span></motion.h1>
          <motion.p variants={item} className="lead">Digital Creators Hub brings podcasters, gamers, filmmakers, artists and writers into one vibrant community with the tools, mentors and brand deals to level up.</motion.p>
          <motion.div variants={item} className="cta-row">
            <button className="btn btn-primary" onClick={() => open()}>Join the Hub <Icon name="arrow" size={18} /></button>
            <a href="#hubs" className="btn btn-outline">Explore Hubs</a>
          </motion.div>
          <motion.div variants={item} className="hero-stats">
            <div><Counter to={10000} /><span>+ Creators</span></div>
            <div><Counter to={12} /><span>Creator Hubs</span></div>
            <div><Counter to={100} /><span>+ Brand Partners</span></div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <motion.div className="glow-ring" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="hero-logo">
            <LogoCircle />
          </motion.div>
          {chips.map((c, i) => (
            <motion.div key={c.label} className="chipf" style={{ ...c.s, "--c": c.c }} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}>
              <Icon name={c.icon} size={18} /> {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <a href="#hubs" className="scroll-cue" aria-label="Scroll to hubs"><span><motion.i animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} /></span></a>
    </section>
  );
}
