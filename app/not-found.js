import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pd-hero" style={{ minHeight: "80vh", display: "grid", alignContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1><span className="grad">404</span></h1>
        <p className="lead" style={{ marginInline: "auto" }}>We couldn&apos;t find that page. It may have moved — let&apos;s get you back to the hub.</p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
