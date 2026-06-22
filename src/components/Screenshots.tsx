"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const screenshots = [
  "/Screenshots/Screenshot_Phone1.png",
  "/Screenshots/Screenshot_Phone2.png",
  "/Screenshots/Screenshot_Phone3.png",
  "/Screenshots/Screenshot_Phone4.png",
  "/Screenshots/Screenshot_Phone5.png",
  "/Screenshots/Screenshot_Phone6.png",
];

export function Screenshots() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const scrollRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="screenshots" className="relative py-24 lg:py-32 bg-screen/50">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white">
            Built for performance
          </h2>
          <p className="mt-4 text-muted font-body font-light max-w-lg mx-auto">
            Clean, dark design that gets out of your way. Every screen is optimized for quick logging
            and clear insights.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="scroll-reveal flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
        >
          {screenshots.map((src, i) => (
            <div
              key={src}
              className="snap-center shrink-0 first:pl-0 last:pr-0"
            >
              <img
                src={src}
                alt={`Athelix screenshot ${i + 1}`}
                className="w-[220px] h-[460px] rounded-2xl border border-border-light shadow-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
