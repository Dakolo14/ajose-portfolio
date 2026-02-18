"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 bg-[#232323] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#333] hover:shadow-lg hover:shadow-[#ED017F]/20 transition-all duration-300 hover:scale-110 active:scale-95 animate-slideInUp"
      aria-label="Back to top"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="transition-transform duration-300 hover:translate-y-1 group">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
} 