"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { hubs } from "@/lib/data";
import { getLenis } from "@/lib/lenis";
import HoverIcon from "./HoverIcon";
import CheckedIcon from "./ui/checked-icon";

const Ctx = createContext({ open: () => {} });
export const useJoin = () => useContext(Ctx);

const schema = Yup.object({
  name: Yup.string().trim().min(2, "Please enter your name.").max(100).required("Please enter your name."),
  email: Yup.string().trim().email("Enter a valid email address.").max(150).required("Enter a valid email address."),
  handle: Yup.string().trim().max(100),
  hub: Yup.string().required(),
});

function FieldRow({ label, name, hint, children }) {
  return (
    <label>
      <span>{label}{hint && <span className="muted"> {hint}</span>}</span>
      {children}
      <ErrorMessage name={name} component="span" className="field-err" />
    </label>
  );
}

export default function JoinProvider({ children }) {
  const [show, setShow] = useState(false);
  const [hub, setHub] = useState(hubs[0].name);
  const [done, setDone] = useState(false);
  const lastFocus = useRef(null);
  const boxRef = useRef(null);

  const open = (h) => {
    if (h) setHub(h);
    setDone(false);
    lastFocus.current = document.activeElement;
    setShow(true);
  };
  const close = useCallback(() => {
    setShow(false);
    lastFocus.current?.focus?.();
  }, []);

  // scroll lock (Lenis + body), Esc to close, simple focus trap
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    getLenis()?.stop();
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
    return () => {
      document.body.style.overflow = prev;
      getLenis()?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [show, close]);

  async function submit(values, { setStatus, resetForm }) {
    setStatus(undefined);
    try {
      const r = await fetch("/api/join", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(schema.cast(values)) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Something went wrong");
      resetForm();
      setDone(true);
      setTimeout(() => {
        close();
        toast.success("Demo request sent!", { description: "We'll reach out within 24 hours." });
      }, 1800);
    } catch (err) {
      setStatus(err.message || "Network error — please try again.");
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <Ctx.Provider value={{ open }}>
        {children}
        <AnimatePresence>
          {show && (
            <motion.div className="modal" data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.18 } }} exit={{ opacity: 0, transition: { duration: 0.15 } }} onMouseDown={(e) => e.target === e.currentTarget && close()}>
              <motion.div ref={boxRef} className="modal-box" role="dialog" aria-modal="true" aria-labelledby="join-title" initial={{ y: 32, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 380, damping: 30 } }} exit={{ y: 16, opacity: 0, scale: 0.98, transition: { duration: 0.18 } }}>
                <button type="button" className="x" onClick={close} aria-label="Close"><HoverIcon name="close" size={22} /></button>
                {done ? (
                  <div className="success">
                    <CheckedIcon size={64} color="var(--green)" />
                    <h3 id="join-title">Demo request sent!</h3>
                    <p className="muted">Thanks — our team will reach out within 24 hours to schedule your demo.</p>
                    <button type="button" className="btn btn-primary" onClick={close}>Back to site</button>
                  </div>
                ) : (
                  <Formik initialValues={{ name: "", email: "", handle: "", hub }} validationSchema={schema} onSubmit={submit}>
                    {({ isSubmitting, status, errors, touched }) => (
                      <Form noValidate className="join-form">
                        <h3 id="join-title">Request a Demo</h3>
                        <p className="muted">Tell us about your business and we&apos;ll get back to you within 24 hours.</p>
                        <FieldRow label="Name" name="name">
                          <Field autoFocus name="name" placeholder="Your name" autoComplete="name" aria-invalid={!!(touched.name && errors.name)} />
                        </FieldRow>
                        <FieldRow label="Email" name="email">
                          <Field name="email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={!!(touched.email && errors.email)} />
                        </FieldRow>
                        <FieldRow label="Business name" hint="(optional)" name="handle">
                          <Field name="handle" placeholder="Your restaurant or business name" />
                        </FieldRow>
                        <FieldRow label="Interested in" name="hub">
                          <Field as="select" name="hub">
                            {hubs.map((p) => <option key={p.slug}>{p.name}</option>)}
                          </Field>
                        </FieldRow>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? <><span className="spin" /> Sending…</> : <>Request Demo</>}
                        </button>
                        {status && <p className="err" role="alert">{status}</p>}
                      </Form>
                    )}
                  </Formik>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Ctx.Provider>
    </MotionConfig>
  );
}
