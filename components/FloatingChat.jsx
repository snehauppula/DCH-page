"use client";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { useJoin } from "./JoinProvider";

export default function FloatingChat() {
  const { open } = useJoin();
  return (
    <motion.button className="fab" onClick={() => open()} aria-label="Join the hub"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <motion.span animate={{ rotate: [0, -12, 12, -8, 0] }} transition={{ repeat: Infinity, repeatDelay: 4, duration: 0.8 }} style={{ display: "grid" }}>
        <Icon name="chat" size={28} />
      </motion.span>
    </motion.button>
  );
}
