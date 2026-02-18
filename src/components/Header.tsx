"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function toTitle(str: string) {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

export default function Header() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", href: "/" },
    ...parts.map((part, idx) => {
      const href = '/' + parts.slice(0, idx + 1).join('/');
      return { name: toTitle(part), href };
    })
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("https://ajosedamilare.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:!flex h-12 items-center justify-between px-8 border-b border-[#232323] bg-[#181818] sticky top-0 z-10 animate-slideInDown">
        <nav className="flex items-center gap-2 text-lg font-medium">
          {crumbs.map((crumb, i) => {
            const isSection = ["User Interface", "Engineering"].includes(crumb.name);
            return (
              <span key={crumb.href} className="flex items-center gap-2 transition-all duration-300">
                {i > 0 && <span className="text-[#bdbdbd] transition-all duration-300">/</span>}
                {isSection ? (
                  <span className={`text-xs text-[#bdbdbd] transition-all duration-300`}>{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className={`hover:underline transition-all duration-300 hover:text-[#60a5fa] ${i === crumbs.length - 1 ? 'text-[#ededed] text-base' : 'text-xs text-[#bdbdbd]'}`}>{crumb.name}</Link>
                )}
              </span>
            );
          })}
        </nav>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-[#bdbdbd] hover:text-[#ededed] group align-middle cursor-pointer transition-all duration-300 px-3 py-1 rounded hover:bg-[#232323] active:scale-95"
          aria-label="Copy website link"
        >
          <span className="leading-none transition-all duration-300">{copied ? 'Copied! ✓' : 'Copy link'}</span>
          <span className="flex items-center transition-all duration-300 group-hover:scale-110"><Image src="/copy.svg" alt="copy icon" width={16} height={16} className="opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-300" /></span>
        </button>
      </div>
      {/* Mobile Breadcrumbs */}
      <nav className="flex sm:block md:!hidden items-center gap-2 text-xs font-medium px-4 pt-3 pb-2 border-b border-[#232323] bg-[#181818] sticky top-0 z-10 animate-slideInDown">
        {crumbs.map((crumb, i) => {
          const isSection = ["Interface", "Design Engineering"].includes(crumb.name);
          return (
            <span key={crumb.href} className="flex items-center gap-2 transition-all duration-300">
              {i > 0 && <span className="text-[#bdbdbd] transition-all duration-300">/</span>}
              {isSection ? (
                <span className="text-[#bdbdbd] transition-all duration-300">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className={`hover:underline transition-all duration-300 hover:text-[#60a5fa] ${i === crumbs.length - 1 ? 'text-[#ededed]' : 'text-[#bdbdbd]'}`}>{crumb.name}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
} 