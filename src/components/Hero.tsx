"use client";

import { useMouseParallax } from "@/lib/useMouseParallax";
import { useScrollReveal } from "@/lib/useScrollReveal";

const PHONE_SCREENSHOT = "/Screenshots/Screenshot_Phone1.png";

export function Hero() {
  const phoneRef = useMouseParallax(6);
  const textRef = useScrollReveal<HTMLDivElement>();
  const accentRef = useScrollReveal<HTMLDivElement>();

  function scrollToForm() {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dim/20 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="scroll-reveal max-w-xl">
          <div ref={accentRef} className="scroll-reveal scroll-reveal-delay-1 mb-6">
            <svg width="60" height="4" viewBox="0 0 60 4" fill="none" className="stroke-accent">
              <line x1="0" y1="2" x2="60" y2="2" stroke="#FF5A36" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="font-hero text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white">
            Your training,
            <br />
            <span className="text-accent">elevated.</span>
          </h1>

          <p className="mt-6 text-lg text-muted font-body font-light leading-relaxed max-w-md">
            Track every set, rep, and PR. Athelix is the premium fitness companion that adapts to your
            goals — from progressive overload to muscle balance analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="font-heading text-sm font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full bg-accent text-black hover:bg-accent/90 transition-all duration-300 animate-glow-pulse"
            >
              Get the App
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-xs font-body text-muted">iOS</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted" fill="currentColor">
                  <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10V6z" />
                </svg>
                <span className="text-xs font-body text-muted">Android</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-faint font-body">
            Available now on Android. Join the testing group to get started.
          </p>
        </div>

        <div ref={phoneRef} className="hidden lg:flex items-center justify-center">
          <div className="relative w-[300px] h-[620px] rounded-[36px] bg-screen border border-border-light overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-10" />
            <img
              src={PHONE_SCREENSHOT}
              alt="Athelix app screenshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
