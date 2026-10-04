"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { hubs } from "@/lib/data";
import Icon from "./Icon";

const Ctx = createContext({ open: () => {} });
export const useJoin = () => useContext(Ctx);

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function JoinProvider({ children }) {
  const [show, setShow] = useState(false);
  const [hub, setHub] = useState(hubs[0].name);
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});
  const lastFocus = useRef(null);
  const boxRef = useRef(null);

  const open = (h) => {
    if (h) setHub(h);
    setState("idle");
    setErrors({});
    lastFocus.current = document.activeElement;
    setShow(true);
  };
  const close = useCallback(() => {
    setShow(false);
    lastFocus.current?.focus?.();
  }, []);

  // scroll lock, Esc to close, simple focus trap
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && boxRef.current) {
        const f = boxRef.current.querySelectorAll("button, input, select, a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [show, close]);

  const validate = (name, value) => {
    if (name === "name") return value.trim().length < 2 ? "Please enter your name." : "";
    if (name === "email") return !emailOk(value.trim()) ? "Enter a valid email address." : "";
    return "";
  };
  const onBlur = (e) => setErrors((x) => ({ ...x, [e.target.name]: validate(e.target.name, e.target.value) }));

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    const errs = { name: validate("name", body.name || ""), email: validate("email", body.email || "") };
    setErrors(errs);
    if (errs.name || errs.email) { form.querySelector(errs.name ? "[name=name]" : "[name=email]").focus(); return; }
    setState("sending");
    try {
      const r = await fetch("/api/join", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Something went wrong");
      setState("ok");
      form.reset();
    } catch (err) {
      setMsg(err.message || "Network error — please try again.");
      setState("error");
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <Ctx.Provider value={{ open }}>
        {children}
        <AnimatePresence>
          {show && (
            <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && close()}>
              <motion.div ref={boxRef} className="modal-box" role="dialog" aria-modal="true" aria-labelledby="join-title" initial={{ y: 40, scale: 0.95, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                <button type="button" className="x" onClick={close} aria-label="Close"><Icon name="close" size={22} /></button>
                {state === "ok" ? (
                  <div className="success">
                    <svg viewBox="0 0 52 52" width="76" height="76" aria-hidden="true">
                      <motion.circle cx="26" cy="26" r="23" fill="none" stroke="var(--green)" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                      <motion.path d="m15 27 8 8 15-17" fill="none" stroke="var(--green)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
                    </svg>
                    <h3 id="join-title">Welcome aboard!</h3>
                    <p className="muted">We&apos;ve saved your spot. Our team will reach out soon with next steps.</p>
                    <button type="button" className="btn btn-primary" onClick={close}>Continue exploring</button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate className="join-form">
                    <h3 id="join-title">Join the <span className="grad">Hub</span></h3>
                    <p className="muted">Tell us about your craft and we&apos;ll welcome you into the community.</p>
                    <label>Name
                      <input autoFocus name="name" placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} onBlur={onBlur} />
                      {errors.name && <span className="field-err">{errors.name}</span>}
                    </label>
                    <label>Email
                      <input name="email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} onBlur={onBlur} />
                      {errors.email && <span className="field-err">{errors.email}</span>}
                    </label>
                    <label><span>Channel / handle <span className="muted">(optional)</span></span><input name="handle" placeholder="@yourhandle" /></label>
                    <label>Your hub
                      <select name="hub" value={hub} onChange={(e) => setHub(e.target.value)}>
                        {hubs.map((p) => <option key={p.slug}>{p.name}</option>)}
                      </select>
                    </label>
                    <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
                      {state === "sending" ? <><span className="spin" /> Sending…</> : <>Join now <Icon name="arrow" size={18} /></>}
                    </button>
                    {state === "error" && <p className="err" role="alert">{msg}</p>}
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Ctx.Provider>
    </MotionConfig>
  );
}
