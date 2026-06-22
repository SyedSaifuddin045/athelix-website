"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Athelix?",
    a: "Athelix is a premium fitness tracking app designed for lifters who want more than a basic logbook. It tracks workouts, personal records, progressive overload, muscle balance, and more — all in a beautifully dark interface.",
  },
  {
    q: "Which platforms are supported?",
    a: "Athelix will be available on both iOS and Android. The app is built with React Native, so both platforms get the same great experience simultaneously.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing hasn't been finalized yet. Early access users will get a special launch discount. Join the waitlist to lock in the best rate.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Your workout data is yours. We use end-to-end encryption for sensitive data and never share your personal information with third parties. Full privacy policy coming soon.",
  },
  {
    q: "How can I give feedback?",
    a: "Early testers will have direct access to our feedback portal where you can submit feature requests, report bugs, and vote on what we build next. Your input shapes the app.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="scroll-reveal border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-heading text-base sm:text-lg font-medium tracking-wide text-white group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-muted shrink-0 ml-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-80 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted font-body font-light leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white">
            Frequently asked
          </h2>
          <p className="mt-4 text-muted font-body font-light max-w-md mx-auto">
            Everything you need to know about Athelix.
          </p>
        </div>

        <div className="rounded-2xl bg-surface border border-border px-6">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
