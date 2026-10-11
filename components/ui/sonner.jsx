"use client";
import { Toaster as Sonner } from "sonner";

export function Toaster(props) {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--card)",
          color: "var(--ink)",
          border: "1px solid var(--bd)",
          borderRadius: "12px",
          fontFamily: "var(--f-brand)",
        },
      }}
      {...props}
    />
  );
}
