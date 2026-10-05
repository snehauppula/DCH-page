"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { getLenis } from "@/lib/lenis";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const top = () => {
    const l = getLenis();
    if (l) l.scrollTo(0, { duration: 1.2 }); else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.button className="totop" aria-label="Back to top" onClick={top}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
          <Icon name="arrow" size={20} style={{ transform: "rotate(-90deg)" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
