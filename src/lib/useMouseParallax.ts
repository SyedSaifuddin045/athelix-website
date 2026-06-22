"use client";

import { useEffect, useRef } from "react";

export function useMouseParallax(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el!.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
    }

    function handleLeave() {
      el!.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
      el!.style.transition = "transform 0.6s ease-out";
    }

    function handleEnter() {
      el!.style.transition = "transform 0.1s ease-out";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mouseenter", handleEnter);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mouseenter", handleEnter);
    };
  }, [intensity]);

  return ref;
}
