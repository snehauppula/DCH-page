"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useJoin } from "./JoinProvider";
import LogoCircle from "./LogoCircle";
import HoverIcon from "./HoverIcon";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "home"], ["Services", "hubs"], ["Why Us", "why"], ["About Us", "about"], ["Careers", "careers"], ["FAQs", "faqs"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { open: openJoin } = useJoin();
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = gsap.from(ref.current, { y: -90, duration: 0.7, ease: "power3.out" });
    return () => t.kill();
  }, []);

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
    <header ref={ref} className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hfc-logo.png" alt="HFC" className="logo-sm" style={{ borderRadius: "50%", objectFit: "cover" }} />
          <span className="logo-text">HFC Consultancy Services</span>
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><HoverIcon name={open ? "close" : "menu"} size={26} /></button>
        <nav className={`links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {links.map(([label, id]) => (
            <Link key={id} href={id === "home" ? "/" : `/#${id}`} className={active === id ? "active" : ""}>{label}</Link>
          ))}
          <ThemeToggle />
          <button className="btn btn-primary" onClick={() => openJoin()}>Get a Demo</button>
        </nav>
      </div>
    </header>
  );
}
