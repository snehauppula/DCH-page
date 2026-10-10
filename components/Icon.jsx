import {
  Mic, Gamepad2, Video, Camera, PenLine, Music, BookOpen, Zap, Radio, Scissors, GraduationCap,
  Sun, Moon, Search, Megaphone, Users, ShieldCheck, Star, Headset, CircleCheck, Check, Target,
  Rocket, Heart, CloudUpload, Mail, MapPin, Globe, ArrowRight, ChevronDown, Sparkles,
  MessageCircle, X, Menu, ExternalLink,
} from "lucide-react";

// shadcn/ui's icon set is lucide — names below are the app's existing icon keys.
const L = {
  mic: Mic, gamepad: Gamepad2, video: Video, camera: Camera, pen: PenLine, music: Music, book: BookOpen,
  zap: Zap, radio: Radio, scissors: Scissors, graduation: GraduationCap, sun: Sun, moon: Moon,
  search: Search, megaphone: Megaphone, users: Users, shield: ShieldCheck, star: Star, headset: Headset,
  check: CircleCheck, tick: Check, target: Target, rocket: Rocket, heart: Heart, cloud: CloudUpload,
  mail: Mail, pin: MapPin, globe: Globe, arrow: ArrowRight, chevron: ChevronDown, spark: Sparkles,
  chat: MessageCircle, close: X, x: X, menu: Menu, external: ExternalLink,
};

// lucide v1 ships no brand logos, so these four stay as inline paths.
const brand = {
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v6M8 7.5v.01M12 17v-6m0 3a3 3 0 0 1 6 0v3" /></>,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>,
};

export default function Icon({ name, size = 24, className = "", filled = false, ...rest }) {
  const Cmp = L[name];
  if (Cmp) return <Cmp size={size} strokeWidth={1.8} className={className} fill={filled ? "currentColor" : "none"} aria-hidden="true" {...rest} />;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {brand[name] || null}
    </svg>
  );
}
