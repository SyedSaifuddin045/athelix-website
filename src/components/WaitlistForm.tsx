"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const ref = useScrollReveal<HTMLDivElement>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("https://api.athelix.fit/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll be in touch soon.");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 lg:py-32 border-y border-border"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dim/10 via-transparent to-accent-dim/5 pointer-events-none" />

      <div
        ref={ref}
        className="scroll-reveal mx-auto max-w-lg px-6 text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white">
          Get early access
        </h2>
        <p className="mt-4 text-muted font-body font-light max-w-sm mx-auto">
          Be among the first to experience Athelix. Join the waitlist and get notified when we launch.
        </p>

        <div className="mt-3 text-xs text-faint font-body">
          Join {new Intl.NumberFormat().format(340)}+ early testers
        </div>

        {status === "success" ? (
          <div className="mt-10 p-6 rounded-2xl bg-green/10 border border-green/20">
            <CheckCircle size={32} className="text-green mx-auto mb-3" />
            <p className="text-green font-body font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-white text-sm font-body placeholder:text-faint outline-none transition-all duration-300 focus:border-accent focus:border-accent/50 focus:bg-surface-hover"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border text-white text-sm font-body placeholder:text-faint outline-none transition-all duration-300 focus:border-accent focus:border-accent/50 focus:bg-surface-hover"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full font-heading text-sm font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full bg-accent text-black hover:bg-accent/90 disabled:opacity-60 transition-all duration-300 animate-glow-pulse flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing up...
                </>
              ) : (
                <>
                  Join the waitlist
                  <ArrowRight size={16} strokeWidth={2} />
                </>
              )}
            </button>

            {status === "error" && (
              <div className="flex items-center justify-center gap-2 text-red text-sm font-body">
                <AlertCircle size={14} />
                {message}
              </div>
            )}
          </form>
        )}

        <p className="mt-6 text-xs text-faint font-body">
          No spam, ever. We&apos;ll only email you about your early access.
        </p>
      </div>
    </section>
  );
}
