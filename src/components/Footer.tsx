import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Dumbbell size={14} className="text-black" strokeWidth={2.5} />
          </div>
          <span className="font-heading text-base font-semibold text-white tracking-wider">
            ATHELIX
          </span>
        </div>

        <p className="text-xs text-faint font-body text-center">
          &copy; {new Date().getFullYear()} Athelix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
