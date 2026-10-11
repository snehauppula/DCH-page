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
          <div className="foot-contact">
            <HoverIcon name="phone" size={18} />
            <a href="tel:+919912799855">+91 99127 99855</a>
          </div>
          <div className="foot-contact">
            <HoverIcon name="mail" size={18} />
            <a href="mailto:hello@hfcsoftware.com">hello@hfcsoftware.com</a>
          </div>
          <div className="foot-contact">
            <HoverIcon name="map-pin" size={18} />
            <div>
              <span>467, Ayyappa Society, Siddhi Vinayak Nagar, Madhapur, Hyderabad, Telangana 500081, India</span>
              <div>
                <a
                  href="https://maps.google.com/maps/search/Digital%20Creators%20Hub/@17.4527,78.3902,17z?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-map-btn"
                >
                  <HoverIcon name="external" size={13} /> View on Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="foot-contact">
            <HoverIcon name="globe" size={18} />
            <span>Serving Businesses Nationwide</span>
          </div>
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
