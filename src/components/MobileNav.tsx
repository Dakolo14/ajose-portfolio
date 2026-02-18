"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function SidebarLink({ text, iconType, href, disabled = false, onClick }: { text: string; iconType?: string; href: string; disabled?: boolean; onClick?: () => void }) {
  let icon = null;
  let iconSrc = null;
  if (iconType === "at") {
    icon = <span className="text-lg font-bold opacity-60 group-hover:opacity-100 group-hover:text-white">@</span>;
  } else if (iconType === "linkedin") {
    iconSrc = "/linkedin.svg";
  } else if (iconType === "tiktok") {
    iconSrc = "/tiktok.svg";
  } else if (iconType === "x") {
    iconSrc = "/x.svg";
  } else if (iconType === "file") {
    iconSrc = "/file.svg";
  } else if (iconType === "project") {
    iconSrc = "/briefcase.svg";
  }
  return (
    <Link
      href={disabled ? "#" : href}
      onClick={onClick}
      className={`flex items-center gap-2 py-2 px-4 rounded ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "hover:bg-[#232323] cursor-pointer group"}`}
      tabIndex={disabled ? -1 : 0}
    >
      {iconSrc ? (
        <Image src={iconSrc} alt={iconType || "icon"} width={18} height={18} className="opacity-40 group-hover:opacity-100 group-hover:text-white transition" />
      ) : (
        icon
      )}
      <span className="transition group-hover:text-white text-base">{text}</span>
    </Link>
  );
}

function SidebarItem({ text, iconType }: { text: string; iconType?: string }) {
  let icon = null;
  let iconSrc = null;
  if (iconType === "at") {
    icon = <span className="text-lg font-bold opacity-60 group-hover:opacity-100 group-hover:text-white">@</span>;
  } else if (iconType === "linkedin") {
    iconSrc = "/linkedin.svg";
  } else if (iconType === "tiktok") {
    iconSrc = "/tiktok.svg";
  } else if (iconType === "x") {
    iconSrc = "/x.svg";
  } else if (iconType === "file") {
    iconSrc = "/file.svg";
  } else if (iconType === "project") {
    iconSrc = "/briefcase.svg";
  }
  return (
    <div className="flex items-center gap-2 py-2 px-4 rounded hover:bg-[#232323] cursor-pointer group">
      {iconSrc ? (
        <Image src={iconSrc} alt={iconType || "icon"} width={18} height={18} className="opacity-40 group-hover:opacity-100 group-hover:text-white transition" />
      ) : (
        icon
      )}
      <span className="transition group-hover:text-white text-base">{text}</span>
    </div>
  );
}

function toTitle(str: string) {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

// Breadcrumbs for mobile, sticky under the top bar
function MobileBreadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", href: "/" },
    ...parts.map((part, idx) => {
      const href = '/' + parts.slice(0, idx + 1).join('/');
      return { name: toTitle(part), href };
    })
  ];
  return (
    <nav className="flex md:hidden items-center gap-2 text-xs font-medium px-4 pt-3 pb-2 border-b border-[#232323] bg-[#181818] sticky top-14 z-40">
      {crumbs.map((crumb, i) => {
        const isSection = ["User Interface", "Engineering"].includes(crumb.name);
        return (
          <span key={crumb.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-[#bdbdbd]">/</span>}
            {isSection ? (
              <span className="text-[#bdbdbd]">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className={`hover:underline ${i === crumbs.length - 1 ? 'text-[#ededed]' : 'text-[#bdbdbd]'}`}>{crumb.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Trap focus in drawer
  useEffect(() => {
    if (!open) return;
    const focusable = drawerRef.current?.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
    (focusable?.[0] as HTMLElement)?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="sm:block md:!hidden fixed top-0 left-0 w-full z-50">
        <div className="w-full h-14 bg-[#181818] border-b border-[#232323] flex items-center justify-between px-4">
          <Link href="/" className="font-semibold text-lg text-white">Ajose Damilare</Link>
          <button
            className="bg-[#232323] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#333] transition"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <MobileBreadcrumbs />
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="block md:!hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`block md:!hidden fixed top-0 left-0 h-full w-72 bg-[#181818] border-r border-[#232323] z-50 transform transition-transform duration-300 flex flex-col rounded-xl overflow-y-auto max-h-screen ${open ? "translate-x-0" : "-translate-x-full"}`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex flex-col border-b border-[#232323]">
          <div className="flex items-center justify-between p-4">
            <span className="font-semibold text-lg text-white">Ajose Damilare</span>
            <button
              className="text-white text-2xl p-1 rounded hover:bg-[#232323]"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-2 text-sm mt-4 pb-6">
          <SidebarLink text="About" iconType={undefined} href="/about" onClick={() => setOpen(false)} />
          <SidebarLink text="Work" iconType={undefined} href="/work" onClick={() => setOpen(false)} />
          <div className="mb-2 text-[#bdbdbd] pl-4 uppercase tracking-widest text-[10px] font-semibold mt-4">User Interface</div>
          <SidebarLink text="StatMind" iconType="project" href="/work/user-interface/statmind" onClick={() => setOpen(false)} />
          <SidebarLink text="Konga WorkStation" iconType="project" href="/work/user-interface/konga-workstation" onClick={() => setOpen(false)} />
          <SidebarLink text="Servewell" iconType="project" href="/work/user-interface/servewell" onClick={() => setOpen(false)} />
          <SidebarLink text="CeraVe CerAwards Campaign" iconType="project" href="/work/user-interface/cerave-cerawards" onClick={() => setOpen(false)} />
          <SidebarLink text="Payfly Ecosystem" iconType="project" href="/work/user-interface/payfly-ecosystem" onClick={() => setOpen(false)} />
          <SidebarLink text="DriveHelp" iconType="project" href="/work/user-interface/drivehelp" disabled onClick={() => setOpen(false)} />
          <div className="mb-2 text-[#bdbdbd] pl-4 uppercase tracking-widest text-[10px] font-semibold mt-4">Engineering</div>
          <SidebarLink text="CeraVe CerAwards Campaign" iconType="project" href="/work/engineering/cerave-cerawards" onClick={() => setOpen(false)} />
          <SidebarLink text="Konga Group" iconType="project" href="/work/engineering/konga-group" onClick={() => setOpen(false)} />
          <SidebarLink text="Konga Rework" iconType="project" href="/work/engineering/konga-rework" onClick={() => setOpen(false)} />
          <SidebarLink text="KYC Interactive Form" iconType="project" href="/work/engineering/kyc-interactive-form" onClick={() => setOpen(false)} />
          <div className="mb-2 text-[#bdbdbd] pl-4 uppercase tracking-widest text-[10px] font-semibold mt-4">Contact</div>
          <SidebarItem text="Resume" iconType="file" />
          <SidebarItem text="Email" iconType="at" />
          <SidebarItem text="LinkedIn" iconType="linkedin" />
          <SidebarItem text="Tiktok" iconType="tiktok" />
          <SidebarItem text="Twitter/X" iconType="x" />
        </nav>
      </div>
      {/* Add top padding to main content on mobile to account for the top bar */}
      <style>{`
        @media (max-width: 767px) {
          main { padding-top: 3.5rem !important; }
        }
      `}</style>
    </>
  );
} 