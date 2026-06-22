"use client";

import { useCounter } from "@/lib/useCounter";
import { useScrollReveal } from "@/lib/useScrollReveal";

const metrics = [
  { label: "Active Users", target: 340, suffix: "+" },
  { label: "Workouts Completed", target: 12500, suffix: "+" },
  { label: "Exercises Tracked", target: 86, suffix: "" },
  { label: "Workout Templates", target: 240, suffix: "+" },
];

function MetricCard({ label, target, suffix }: { label: string; target: number; suffix: string }) {
  const { count, ref } = useCounter(target);

  return (
    <div ref={ref} className="text-center">
      <div className="font-hero text-4xl sm:text-5xl font-bold text-white tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1.5 text-xs text-muted font-body tracking-wide uppercase">{label}</div>
    </div>
  );
}

export function MetricsBar() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 border-y border-border">
      <div
        ref={ref}
        className="scroll-reveal mx-auto max-w-5xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
      >
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
    </section>
  );
}
