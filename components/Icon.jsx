const P = {
  mic: <><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" /></>,
  gamepad: <><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M6 12h4M8 10v4" /><circle cx="15" cy="11" r="1" /><circle cx="18" cy="13" r="1" /></>,
  video: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3z" /></>,
  camera: <><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="3.5" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
  book: <><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z" /><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" /></>,
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  radio: <><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19a10 10 0 0 1 0-14" /></>,
  scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.5 8 20 19M8.5 16 20 5" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c3 2.500 9 2.500 12 0v-5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M19 9a4 4 0 0 1 0 6" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 21a7 7 0 0 1 14 0" /><circle cx="17" cy="9" r="2.5" /><path d="M18 14.5a5.5 5.5 0 0 1 4 6.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  star: <path d="m12 3 2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z" />,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.500" y="14" width="4" height="6" rx="1.500" /><rect x="17.500" y="14" width="4" height="6" rx="1.500" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  tick: <path d="m5 12 5 5 9-10" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.500" /></>,
  rocket: <><path d="M5 15c-1 1-2 4-2 6 2 0 5-1 6-2M14 4c3-1 6-1 7-1 0 1 0 4-1 7l-7 7-6-6z" /><circle cx="15" cy="9" r="1.5" /></>,
  heart: <path d="M12 20s-8-5-8-11a4.500 4.500 0 0 1 8-2.500A4.500 4.500 0 0 1 20 9c0 6-8 11-8 11z" />,
  cloud: <><path d="M7 18a4.500 4.500 0 0 1-.5-9A6 6 0 0 1 18 9.500 4 4 0 0 1 17 18z" /><path d="M12 12v5m-2-3 2-2 2 2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M12 21s-7-6.500-7-11a7 7 0 0 1 14 0c0 4.500-7 11-7 11z" /><circle cx="12" cy="10" r="2.500" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  spark: <path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800zM19 16l.8 2.200L22 19l-2.200.8L19 22l-.8-2.200L16 19l2.200-.8z" />,
  chat: <path d="M21 12a8 8 0 0 1-11.500 7.200L4 20l1-4.500A8 8 0 1 1 21 12z" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r=".8" /></>,
  x: <path d="M4 4l16 16M20 4 4 20" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v6M8 7.500v.01M12 17v-6m0 3a3 3 0 0 1 6 0v3" /></>,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>,
};

export default function Icon({ name, size = 24, className = "", filled = false, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {P[name] || null}
    </svg>
  );
}
