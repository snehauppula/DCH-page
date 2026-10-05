"use client";
import Icon from "./Icon";
import { useJoin } from "./JoinProvider";

export default function FloatingChat() {
  const { open } = useJoin();
  return (
    <button className="fab" onClick={() => open()} aria-label="Join the hub">
      <Icon name="chat" size={26} />
    </button>
  );
}
