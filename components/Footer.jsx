import Link from "next/link";
import { hubs } from "@/lib/data";
import HoverIcon from "./HoverIcon";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container foot-grid">
        <div>
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hfc-logo.png" alt="HFC Consultancy Services" className="logo-sm" style={{ borderRadius: "50%", objectFit: "cover" }} />
            <h3>HFC Consultancy Services</h3>
          </div>
          <p className="fm">Smart software for restaurants, cloud kitchens &amp; digital businesses.</p>
          <div className="foot-contact"><HoverIcon name="mail" size={18} /> <a href="mailto:hello@hfcsoftware.com">hello@hfcsoftware.com</a></div>
          <div className="foot-contact"><HoverIcon name="globe" size={18} /> India-based · Serving nationwide</div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {[["Home", "/"], ["Services", "/#hubs"], ["Why Us", "/#why"], ["About Us", "/#about"], ["Careers", "/#careers"], ["FAQs", "/#faqs"]].map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}
        </div>
        <div>
          <h4>Our Products</h4>
          <div className="two">{hubs.map((p) => <Link key={p.slug} href={`/hubs/${p.slug}`}>{p.name}</Link>)}</div>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <p className="fu">Follow Us</p>
          <div className="social">
            {["facebook", "instagram", "x", "linkedin", "youtube", "mail"].map((n) => (
              <a key={n} href={n === "mail" ? "mailto:hello@hfcsoftware.com" : "#"} aria-label={n}><HoverIcon name={n} size={20} /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© 2026 HFC Consultancy Services™. All rights reserved.</span>
        <span>500+ Businesses &nbsp;|&nbsp; 4 Products &nbsp;|&nbsp; 99.9% Uptime</span>
        <span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Service</a></span>
      </div>
    </footer>
  );
}
