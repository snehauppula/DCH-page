import Link from "next/link";
import { hubs } from "@/lib/data";
import Icon from "./Icon";
import LogoCircle from "./LogoCircle";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container foot-grid">
        <div>
          <div className="foot-brand"><LogoCircle className="logo-sm" /><h3>Digital Creators <span className="grad">Hub</span></h3></div>
          <p className="fm">Where creators connect, collaborate &amp; grow together.</p>
          <p><Icon name="mail" size={18} /> <a href="mailto:hello@digitalcreatorshub.com">hello@digitalcreatorshub.com</a></p>
          <p><Icon name="globe" size={18} /> Remote-first · Worldwide</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {[["Home", "/"], ["Hubs", "/#hubs"], ["Why Us", "/#why"], ["About Us", "/#about"], ["Careers", "/#careers"], ["FAQs", "/#faqs"]].map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}
        </div>
        <div>
          <h4>Our Hubs</h4>
          <div className="two">{hubs.map((p) => <Link key={p.slug} href={`/hubs/${p.slug}`}>{p.name}</Link>)}</div>
        </div>
        <div>
          <h4>Connect With Us</h4>
          <p className="fu">Follow Us</p>
          <div className="social">
            {["facebook", "instagram", "x", "linkedin", "youtube", "mail"].map((n) => (
              <a key={n} href={n === "mail" ? "mailto:hello@digitalcreatorshub.com" : "#"} aria-label={n}><Icon name={n} size={20} /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© 2026 Digital Creators Hub™. All rights reserved.</span>
        <span>10,000+ Creators &nbsp;|&nbsp; 12 Creator Hubs &nbsp;|&nbsp; 100+ Brand Partners</span>
        <span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Service</a></span>
      </div>
    </footer>
  );
}
