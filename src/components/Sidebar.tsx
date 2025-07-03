"use client";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:!flex w-[260px] bg-[#181818] border-r border-[#232323] flex-col p-6 gap-8 min-h-screen fixed top-0 left-0 h-full z-20 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = "/"}>
          <div className="w-10 h-10 rounded-full bg-[#232323] overflow-hidden">
            {/* Profile image placeholder */}
          </div>
          <span className="font-semibold text-lg">Ajose Damilare</span>
        </div>
        <div className="h-4" />
        <Link href="/about" className="flex items-center gap-2 mt-2 cursor-pointer group">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-[#232323] group-hover:ring-2 group-hover:ring-[#ED017F] transition">
            {/* About image placeholder */}
          </div>
          <span className="text-[#ededed] text-base font-medium group-hover:text-[#ED017F] transition">About</span>
        </Link>
      </div>
      <nav className="flex-1 flex flex-col gap-2 text-sm">
        <div className="mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">Interface</div>
        <SidebarLink text="Bet-Inn" iconType="project" href="/work/interface/bet-inn" />
        <SidebarLink text="Verselift" iconType="project" href="/work/interface/verselift" />
        <SidebarLink text="Buzzy Media" iconType="project" href="/work/interface/buzzy-media" />
        <SidebarLink text="PayFly Ecosystem" iconType="project" href="/work/interface/payfly-ecosystem" />
        <SidebarLink text="Konga Group" iconType="project" href="/work/interface/konga-group" />
        <div className="mt-4 mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">Design Engineering</div>
        <SidebarLink text="KYC Interactive Form" iconType="project" href="/work/design-engineering/kyc-interactive-form" />
        <SidebarLink text="PrepStack" iconType="project" href="/work/design-engineering/prepstack" />
        <SidebarLink text="Verselift" iconType="project" href="/work/design-engineering/verselift" />
        <SidebarLink text="Konga Group" iconType="project" href="/work/design-engineering/konga-group" />
        <div className="mt-4 mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">Side Projects</div>
        <SidebarLink text="Strilo" iconType="project" href="/work/strilo" disabled />
        <div className="mt-4 mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">Contact</div>
        <SidebarItem text="Email" iconType="at" />
        <SidebarItem text="LinkedIn" iconType="linkedin" />
        <SidebarItem text="Tiktok" iconType="tiktok" />
        <SidebarItem text="Twitter/X" iconType="x" />
        <SidebarItem text="Resume" iconType="file" />
      </nav>
    </aside>
  );
}

function SidebarLink({ text, iconType, href, disabled = false }: { text: string; iconType?: string; href: string; disabled?: boolean }) {
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
      className={`flex items-center gap-2 py-1 px-2 rounded ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "hover:bg-[#232323] cursor-pointer group"}`}
      tabIndex={disabled ? -1 : 0}
    >
      {iconSrc ? (
        <Image src={iconSrc} alt={iconType || "icon"} width={16} height={16} className="opacity-40 group-hover:opacity-100 group-hover:text-white transition" />
      ) : (
        icon
      )}
      <span className="transition group-hover:text-white">{text}</span>
    </Link>
  );
}

function SidebarItem({ text, disabled = false, iconType }: { text: string; disabled?: boolean; iconType?: string }) {
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
    <div
      className={`flex items-center gap-2 py-1 px-2 rounded ${disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[#232323] cursor-pointer group"}`}
    >
      {iconSrc ? (
        <Image src={iconSrc} alt={iconType || "icon"} width={16} height={16} className="opacity-40 group-hover:opacity-100 group-hover:text-white transition" />
      ) : (
        icon
      )}
      <span className="transition group-hover:text-white">{text}</span>
    </div>
  );
} 