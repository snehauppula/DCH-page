"use client";
import { forwardRef } from "react";
import ArrowNarrowRightIcon from "./ui/arrow-narrow-right-icon";
import ArrowNarrowLeftIcon from "./ui/arrow-narrow-left-icon";
import ArrowNarrowUpIcon from "./ui/arrow-narrow-up-icon";
import BookIcon from "./ui/book-icon";
import CheckedIcon from "./ui/checked-icon";
import Cloud1Icon from "./ui/cloud-1-icon";
import CurrencyRupeeIcon from "./ui/currency-rupee-icon";
import DownChevron from "./ui/down-chevron";
import ExternalLinkIcon from "./ui/external-link-icon";
import FacebookIcon from "./ui/facebook-icon";
import GlobeIcon from "./ui/globe-icon";
import InstagramIcon from "./ui/instagram-icon";
import LinkedinIcon from "./ui/linkedin-icon";
import MailFilledIcon from "./ui/mail-filled-icon";
import MessageCircleIcon from "./ui/message-circle-icon";
import RocketIcon from "./ui/rocket-icon";
import ShieldCheck from "./ui/shield-check";
import SparklesIcon from "./ui/sparkles-icon";
import StarIcon from "./ui/star-icon";
import TargetIcon from "./ui/target-icon";
import TelephoneIcon from "./ui/telephone-icon";
import TwitterXIcon from "./ui/twitter-x-icon";
import UsersIcon from "./ui/users-icon";
import XIcon from "./ui/x-icon";
import YoutubeIcon from "./ui/youtube-icon";

const MAP = {
  arrow:    ArrowNarrowRightIcon,
  external: ExternalLinkIcon,
  chevron:  DownChevron,
  "arrow-up":   ArrowNarrowUpIcon,
  "arrow-left": ArrowNarrowLeftIcon,

  book:    BookIcon,
  check:   CheckedIcon,
  tick:    CheckedIcon,
  cloud:   Cloud1Icon,
  zap:     CurrencyRupeeIcon,
  globe:   GlobeIcon,
  mail:    MailFilledIcon,
  chat:    MessageCircleIcon,
  rocket:  RocketIcon,
  shield:  ShieldCheck,
  spark:   SparklesIcon,
  star:    StarIcon,
  target:  TargetIcon,
  headset: TelephoneIcon,
  phone:   TelephoneIcon,
  users:   UsersIcon,
  close:   XIcon,
  x:       TwitterXIcon,

  facebook:  FacebookIcon,
  instagram: InstagramIcon,
  linkedin:  LinkedinIcon,
  youtube:   YoutubeIcon,
  twitter:   TwitterXIcon,
};

const HoverIcon = forwardRef(({ name, size = 24, color = "currentColor", className = "", ...rest }, ref) => {
  const Cmp = MAP[name];
  if (Cmp) return <Cmp ref={ref} size={size} color={color} className={className} {...rest} />;
  // fallback: bare SVG for unmapped names (e.g. menu hamburger, map-pin)
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {name === "menu" && <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
      {name === "map-pin" && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>}
    </svg>
  );
});

HoverIcon.displayName = "HoverIcon";
export default HoverIcon;
