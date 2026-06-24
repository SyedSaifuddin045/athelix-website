"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ExternalLink, ChevronDown, Smartphone, Users } from "lucide-react";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/athelix-testing";
const PLAY_OPTIN_URL = "https://play.google.com/apps/testing/com.athelix.app";

export function WaitlistForm() {
  const [open, setOpen] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

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
          Get the app
        </h2>
        <p className="mt-4 text-muted font-body font-light max-w-sm mx-auto">
          Athelix is available now on Android. Join the testing group and install in two steps.
        </p>

        <div className="mt-10">
          <button
            onClick={() => setOpen(!open)}
            className="font-heading text-sm font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full bg-accent text-black hover:bg-accent/90 transition-all duration-300 animate-glow-pulse inline-flex items-center gap-2"
          >
            {open ? (
              <>
                Hide steps <ChevronDown size={16} className="rotate-180 transition-transform" />
              </>
            ) : (
              <>
                Get the App <Smartphone size={16} />
              </>
            )}
          </button>
        </div>

        {open && (
          <div className="mt-8 p-6 rounded-2xl bg-surface border border-border text-left space-y-5 animate-fade-in">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-black text-sm font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="font-medium text-white font-body">Join the testing group</p>
                <p className="text-sm text-muted font-body mt-0.5">
                  Request to join the Google Group to get access.
                </p>
                <a
                  href={GOOGLE_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline mt-2 text-sm font-body"
                >
                  <Users size={14} />
                  athelix-testing@googlegroups.com <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-black text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="font-medium text-white font-body">Opt in &amp; install</p>
                <p className="text-sm text-muted font-body mt-0.5">
                  Open the Play Store link and opt in as a tester. The app will appear for download.
                </p>
                <a
                  href={PLAY_OPTIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline mt-2 text-sm font-body"
                >
                  <Smartphone size={14} />
                  Play Store opt-in link <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
