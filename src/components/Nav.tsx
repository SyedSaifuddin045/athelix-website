"use client";

import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToForm() {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-root/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <Dumbbell size={18} className="text-black" strokeWidth={2.5} />
          </div>
          <span className="font-heading text-xl font-semibold text-white tracking-wider">
            ATHELIX
          </span>
        </a>

          <button
            onClick={scrollToForm}
            className="font-heading text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full bg-accent text-black hover:bg-accent/90 transition-all duration-300 animate-glow-pulse"
          >
            Get the App
          </button>
      </div>
    </nav>
  );
}
