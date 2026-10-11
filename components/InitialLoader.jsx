"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Sequence runs: Circle fill -> Logo reveal -> Divider & "CONSULTANCY SERVICES" -> 5 Stars pop -> Quote -> "SINCE 2011"
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {visible && (
        <motion.div
          key="initial-loader"
          className="initial-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={() => setVisible(false)}
          role="status"
          aria-label="Loading HFC Consultancy Services"
        >
          <div className="initial-loader-content">
              {/* 1. Circle path fill + 2. Circular Logo */}
              <div className="loader-circle-wrapper">
                <svg className="loader-svg" viewBox="0 0 180 180" width="180" height="180">
                  {/* Subtle track circle */}
                  <circle
                    cx="90"
                    cy="90"
                    r="82"
                    className="loader-circle-track"
                  />
                  {/* Outer animated red filling circle stroke with spring */}
                  <motion.circle
                    cx="90"
                    cy="90"
                    r="82"
                    className="loader-circle-fill"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={{ pathLength: 1, rotate: -90 }}
                    transition={{
                      type: "spring",
                      stiffness: 65,
                      damping: 16,
                      mass: 0.9,
                    }}
                    style={{ transformOrigin: "90px 90px" }}
                  />
                </svg>

                {/* Logo with spring scale & bounce */}
                <motion.div
                  className="loader-logo-inner"
                  initial={{ scale: 0, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 16,
                    mass: 0.85,
                    delay: 0.25,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hfc-logo.png"
                    alt="HFC Consultancy Services Logo"
                    className="loader-logo-img"
                  />
                </motion.div>
              </div>

              {/* Horizontal line divider with spring expand */}
              <motion.div
                className="loader-divider-line"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                  delay: 0.6,
                }}
              />

              {/* "C O N S U L T A N C Y   S E R V I C E S" with spring slide */}
              <motion.div
                className="loader-consultancy-title"
                initial={{ opacity: 0, y: 22, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 340,
                  damping: 20,
                  delay: 0.72,
                }}
              >
                CONSULTANCY SERVICES
              </motion.div>

              {/* 5 Stars popping out with high-energy bouncy spring physics */}
              <div className="loader-stars-row">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="loader-star-item"
                    initial={{ scale: 0, y: 16, rotate: -40, opacity: 0 }}
                    animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 520,
                      damping: 12,
                      mass: 0.6,
                      delay: 0.92 + i * 0.07,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#d97706" stroke="#d97706" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Tagline Quote with spring slide up */}
              <motion.blockquote
                className="loader-quote-text"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                  delay: 1.35,
                }}
              >
                &ldquo;Your Growth, Our Responsibility. All Within Your Budget.&rdquo;
              </motion.blockquote>

              {/* CRAFTING F&B BRANDS SINCE 2011 with spring reveal */}
              <motion.div
                className="loader-since-text"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  delay: 1.6,
                }}
              >
                CRAFTING F&amp;B BRANDS SINCE 2011
              </motion.div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
