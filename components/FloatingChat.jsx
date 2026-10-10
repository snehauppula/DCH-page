"use client";
import HoverIcon from "./HoverIcon";
import { useJoin } from "./JoinProvider";

export default function FloatingChat() {
  const { open } = useJoin();
  return (
    <button className="fab" onClick={() => open()} aria-label="Join the hub">
      <HoverIcon name="chat" size={26} />
    </button>
  );
}
