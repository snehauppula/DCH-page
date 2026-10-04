"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useJoin } from "./JoinProvider";
import LogoCircle from "./LogoCircle";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "home"], ["Hubs", "hubs"], ["Why Us", "why"], ["About Us", "about"], ["Careers", "careers"], ["FAQs", "faqs"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { open: openJoin } = useJoin();

  useEffect(() => {
    if (pathname !== "/") { setActive(""); return; }
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const y = window.scrollY + 160;
      let cur = "home";
      links.forEach(([, id]) => { const el = document.getElementById(id); if (el && el.offsetTop <= y) cur = id; });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <motion.header className={`nav${scrolled ? " scrolled" : ""}`} initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          <LogoCircle className="logo-sm" />
          <span className="logo-text">Digital Creators <span className="grad">Hub</span></span>
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><Icon name={open ? "close" : "menu"} size={26} /></button>
        <nav className={`links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {links.map(([label, id]) => (
            <Link key={id} href={id === "home" ? "/" : `/#${id}`} className={active === id ? "active" : ""}>{label}{active === id && <motion.span layoutId="nav-ul" className="ul" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}</Link>
          ))}
          <ThemeToggle />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="btn btn-primary" onClick={() => openJoin()}>Join the Hub</motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
