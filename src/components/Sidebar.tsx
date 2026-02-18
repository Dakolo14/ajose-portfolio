"use client";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:!flex w-[260px] bg-[#181818] border-r border-[#232323] flex-col p-6 gap-8 min-h-screen fixed top-0 left-0 h-full z-20 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-2 mb-2">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <div className="w-10 h-10 rounded-full bg-[#232323] overflow-hidden">
            <Image
              src="/profile-img.jpg"
              alt="Ajose Damilare"
              width={40}
              height={40}
              className="object-cover w-10 h-10"
            />
          </div>
          <span className="font-semibold text-lg">Ajose Damilare</span>
        </div>
        <div className="h-4" />
        <Link
          href="/about"
          className="flex items-center gap-2 mt-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#232323] group-hover:ring-2 group-hover:ring-[#ED017F] transition">
            <Image
              src="/Photo Corporate.jpg"
              alt="Ajose Damilare"
              width={40}
              height={40}
              className="object-cover w-10 h-10"
            />
          </div>
          <span className="text-[#ededed] text-base font-medium group-hover:text-[#ED017F] transition">
            About
          </span>
        </Link>
      </div>
      <nav className="flex-1 flex flex-col gap-2 text-sm">
        <div className="mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">
          User Interface
        </div>
        <SidebarLink
          text="StatMind"
          iconType="project"
          href="/work/user-interface/statmind"
        />
        <SidebarLink
          text="Konga WorkStation"
          iconType="project"
          href="/work/user-interface/konga-workstation"
        />
        <SidebarLink
          text="Servewell"
          iconType="project"
          href="/work/user-interface/servewell"
        />
        <SidebarLink
          text="CeraVe CerAwards Campaign"
          iconType="project"
          href="/work/user-interface/cerave-cerawards"
        />
        <SidebarLink
          text="Payfly Ecosystem"
          iconType="project"
          href="/work/user-interface/payfly-ecosystem"
        />
        <SidebarLink
          text="DriveHelp"
          iconType="project"
          href="/work/user-interface/drivehelp"
          disabled
        />
        <div className="mt-4 mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">
          Engineering
        </div>
        <SidebarLink
          text="CeraVe CerAwards Campaign"
          iconType="project"
          href="/work/engineering/cerave-cerawards"
        />
        <SidebarLink
          text="Konga Group"
          iconType="project"
          href="/work/engineering/konga-group"
        />
        <SidebarLink
          text="Konga Rework"
          iconType="project"
          href="/work/engineering/konga-rework"
        />
        <SidebarLink
          text="KYC Interactive Form"
          iconType="project"
          href="/work/engineering/kyc-interactive-form"
        />
        <div className="mt-4 mb-2 text-[#bdbdbd] uppercase tracking-widest text-[10px] font-semibold">
          Contact
        </div>
        <SidebarItem text="Resume" iconType="file" />
        <SidebarItem text="Email" iconType="at" />
        <SidebarItem text="LinkedIn" iconType="linkedin" />
        <SidebarItem text="Tiktok" iconType="tiktok" />
        <SidebarItem text="Twitter/X" iconType="x" />
      </nav>
    </aside>
  );
}

function SidebarLink({
  text,
  iconType,
  href,
  disabled = false,
}: {
  text: string;
  iconType?: string;
  href: string;
  disabled?: boolean;
}) {
  let icon = null;
  let iconSrc = null;
  if (iconType === "at") {
    icon = (
      <span className="text-lg font-bold opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
        @
      </span>
    );
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
      className={`flex items-center gap-2 py-1 px-2 rounded transition-all duration-300 ${
        disabled
          ? "opacity-60 cursor-not-allowed pointer-events-none"
          : "hover:bg-[#232323] cursor-pointer group hover:translate-x-1"
      }`}
      tabIndex={disabled ? -1 : 0}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={iconType || "icon"}
          width={16}
          height={16}
          className="opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
        />
      ) : (
        icon
      )}
      <span className="transition-all duration-300 group-hover:text-white">{text}</span>
    </Link>
  );
}

function SidebarItem({
  text,
  disabled = false,
  iconType,
}: {
  text: string;
  disabled?: boolean;
  iconType?: string;
}) {
  let icon = null;
  let iconSrc = null;
  if (iconType === "at") {
    icon = (
      <span className="text-lg font-bold opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
        @
      </span>
    );
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
      className={`flex items-center gap-2 py-1 px-2 rounded transition-all duration-300 ${
        disabled
          ? "opacity-60 cursor-not-allowed"
          : "hover:bg-[#232323] cursor-pointer group hover:translate-x-1"
      }`}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={iconType || "icon"}
          width={16}
          height={16}
          className="opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
        />
      ) : (
        icon
      )}
      <span className="transition-all duration-300 group-hover:text-white">{text}</span>
    </div>
  );
}
