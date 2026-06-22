"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Dumbbell,
  TrendingUp,
  Award,
  Calendar,
  Activity,
  Scale,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Dumbbell,
    title: "Workout Tracking",
    description:
      "Log every set, rep, and weight with an intuitive interface built for speed. Start a workout in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Progressive Overload",
    description:
      "Automatic suggestions for weight and rep progression. Never stall on a lift again.",
  },
  {
    icon: Award,
    title: "Personal Records",
    description:
      "Track PRs across all your lifts. See your best e1RM, heaviest sets, and volume milestones.",
  },
  {
    icon: Calendar,
    title: "Mesocycle Planning",
    description:
      "Plan training blocks with periodized programming. Linear progression, block periodization, and more.",
  },
  {
    icon: Activity,
    title: "Muscle Balance",
    description:
      "Weekly volume breakdowns by muscle group. Spot imbalances before they become problems.",
  },
  {
    icon: Scale,
    title: "Bodyweight Tracking",
    description:
      "Log and chart your bodyweight over time. See trends and correlate with your training.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-delay-${index % 3} group rounded-2xl bg-surface border border-border p-7 transition-all duration-300 hover:bg-surface-hover hover:border-border-light hover:-translate-y-1`}
    >
      <div className="w-11 h-11 rounded-xl bg-accent-dim flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
        <Icon size={20} className="text-accent" strokeWidth={1.5} />
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-wide text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted font-body font-light leading-relaxed">{description}</p>
    </div>
  );
}

export function FeaturesGrid() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white">
            Everything you need
          </h2>
          <p className="mt-4 text-muted font-body font-light max-w-lg mx-auto">
            Purpose-built for lifters who want more than a logbook. Athelix gives you the tools to
            train smarter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
