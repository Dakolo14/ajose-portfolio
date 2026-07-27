'use client';
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/featuredProjects";
import { useState, useEffect } from "react";

const webApps = [
  {
    title: "Verselift AI SaaS",
    description: "Next-gen AI SaaS platform engineered for operational management and revenue growth.",
    url: "https://verseliftai.vercel.app/",
    tags: ["Next.js", "TypeScript", "AI SaaS", "Tailwind"],
  },
  {
    title: "Konga FM Media & Streaming",
    description: "Live broadcasting web app & custom Firebase CMS with audio stream persistence.",
    url: "https://kongafm.com/",
    tags: ["Next.js", "Firebase", "SSR", "Custom CMS"],
  },
  {
    title: "CeraVe CerAwards Platform",
    description: "Gamified awards and voting platform for CeraVe's Nigerian market debut campaign.",
    url: "https://www.cerawards.com.ng",
    tags: ["Next.js", "TypeScript", "Public Voting", "Tailwind"],
  },
  {
    title: "Konga Group Corporate",
    description: "Official corporate platform for Konga Group holding company, subsidiaries & careers.",
    url: "https://group.konga.com/",
    tags: ["Next.js", "Corporate Web", "Figma Design"],
  },
  {
    title: "Konga Shop-in-Shop Hub",
    description: "E-commerce flagship store hubs for Samsung, Apple, HP, CeraVe, and OEM partners.",
    url: "https://www.konga.com/content/samsungsis",
    tags: ["E-Commerce", "Shop-in-Shop", "CRO Strategy"],
  },
];

export default function Home() {
  // For the update bar dismiss
  const [showUpdate, setShowUpdate] = useState(true);
  const [dismissing, setDismissing] = useState(false);
  // For dynamic time
  const [currentTime, setCurrentTime] = useState<string>("");
  // For grid format selection
  const [gridFormat, setGridFormat] = useState<"list" | "2-col" | "4-col">("2-col");
  // For category filtering
  const [categoryFilter, setCategoryFilter] = useState<"all" | "design" | "engineering">("all");
  const activeProjects = featuredProjects.filter((p) => p.active && (categoryFilter === "all" || p.category === categoryFilter));

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric', minute: '2-digit', hour12: true
      };
      setCurrentTime(now.toLocaleTimeString([], options));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDismissUpdate = () => {
    setDismissing(true);
    setTimeout(() => {
      setShowUpdate(false);
      setDismissing(false);
    }, 300);
  };
  return (
    <div className="flex min-h-screen bg-[#181818] text-[#ededed] font-sans">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-[260px]">
        <Header />
        {/* Blue update bar */}
        {showUpdate && (
          <div className={`relative bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-sm text-white text-center py-3 flex items-center justify-center animate-slideInDown shadow-lg ${dismissing ? 'opacity-0 -translate-y-2 transition-all duration-300' : 'opacity-100 transition-all duration-300'}`}>
            <div className="flex items-center gap-2 w-full justify-center">
              <span className="text-lg">✨</span>
              <span className="font-medium">Check out my recent work</span>
            </div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg hover:bg-[#1e40af] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-90"
              aria-label="Dismiss update bar"
              onClick={handleDismissUpdate}
            >
              ×
            </button>
          </div>
        )}
        {/* Content */}
        <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-18 py-12">
          <div className="flex flex-start gap-4 mb-6 animate-fadeIn">
            <div className="hidden md:!block md:w-16 md:h-16 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:from-[#333] hover:to-[#1f1f1f] hover:scale-105 group cursor-pointer relative">
              <Image
                src="/profile-img.jpg"
                alt="Ajose Damilare"
                width={64}
                height={64}
                className="object-cover w-16 h-16"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ED017F]/0 to-[#ED017F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="animate-slideInUp flex-1">
              <h1 className="font-inter text-2xl font-light leading-tight mb-1 tracking-tight text-white">Product Designer & Developer focused on <span className="font-normal text-[#ED017F]">Revenue Growth</span></h1>
              <p className="font-helvetica text-[#bdbdbd] text-base mb-2 cursor-default">I design and build digital products, high-converting interfaces & web experiences built to scale business revenue.<br/>Welcome to my small corner of web.</p>
              <div className="font-helvetica text-sm text-white">
                Currently <span className="text-[#FF37A2]">@ Konga Group</span>, Contract <span className="text-[#005994]">@ CeraVe</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#bdbdbd] mt-1 font-helvetica cursor-default">
                <span>📍</span>
                <span>Lagos, Nigeria</span>
                <span>•</span>
                <span className="font-mono">{currentTime}</span>
              </div>
            </div>
          </div>
          {/* Team/Experience section */}
          <section className="mb-8 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col divide-y divide-[#232323]">
              {[
                { company: "Konga Group", role: "Product Design & Frontend", period: "2023 — Present", color: "#ED017F" },
                { company: "CeraVe", role: "Product Designer & Developer", period: "Contract · 2026", color: "#005994" },
                { company: "StatMind", role: "UI/UX Designer", period: "Contract · 2025 — 2026", color: "#5A6BFF" },
              ].map(({ company, role, period, color }) => (
                <div key={company} className="group relative flex items-center justify-between py-3 transition-all duration-300 hover:bg-[#1a1a1a] px-3 rounded-lg hover:translate-x-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium px-2 py-1 rounded text-xs transition-all duration-300 transform group-hover:scale-105" style={{ backgroundColor: color }}>{company}</span>
                    <span className="font-helvetica text-sm text-[#9a9a9a] transition-colors duration-300">{role}</span>
                  </div>
                  <span className="font-helvetica text-xs text-[#5c5c5c] transition-colors duration-300">{period}</span>
                  <div className="absolute left-0 top-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-t-lg" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
                </div>
              ))}
            </div>
          </section>
          {/* Live Web Applications Marquee Section */}
          <section className="mb-12 animate-slideInUp" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-inter text-lg font-medium text-white flex items-center gap-2">
                  <span>🚀</span> Web Applications I&apos;ve Designed & Developed
                </h2>
                <p className="font-helvetica text-xs text-[#6a6a6a] mt-0.5">
                  Live production applications engineered from Figma design to full-stack code (hover to pause).
                </p>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl border border-[#222] bg-[#121212]/80 py-4 shadow-inner">
              {/* Left and Right Fade Gradients */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#121212] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#121212] to-transparent" />

              <div className="animate-marquee gap-4 px-2">
                {[...webApps, ...webApps].map((app, idx) => (
                  <a
                    key={`${app.title}-${idx}`}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-[320px] sm:w-[350px] shrink-0 rounded-xl border border-[#262626] bg-[#161616] p-4 transition-all duration-300 hover:border-[#444] hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                            Live Web App
                          </span>
                        </div>
                        <span className="text-xs text-[#6a6a6a] group-hover:text-white transition-colors">
                          ↗
                        </span>
                      </div>
                      <h3 className="font-inter text-sm font-semibold text-white group-hover:text-[#ED017F] transition-colors mb-1">
                        {app.title}
                      </h3>
                      <p className="font-helvetica text-xs text-[#9a9a9a] line-clamp-2 leading-relaxed mb-3">
                        {app.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#222]">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-[#888] bg-[#202020] px-2 py-0.5 rounded border border-[#282828]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Controls: Category Filter + Grid Format Selector */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  categoryFilter === "all"
                    ? "bg-[#ededed] text-[#181818] font-semibold shadow-md"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                All Work ({featuredProjects.filter(p => p.active).length})
              </button>
              <button
                onClick={() => setCategoryFilter("design")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  categoryFilter === "design"
                    ? "bg-[#ED017F] text-white shadow-lg shadow-[#ED017F]/30"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                Product Design ({featuredProjects.filter(p => p.active && p.category === "design").length})
              </button>
              <button
                onClick={() => setCategoryFilter("engineering")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  categoryFilter === "engineering"
                    ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                Engineering ({featuredProjects.filter(p => p.active && p.category === "engineering").length})
              </button>
            </div>

            {/* Grid Format */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#bdbdbd] hidden lg:inline">Layout:</span>
              <button
                onClick={() => setGridFormat("list")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "list"
                    ? "bg-[#333] text-white"
                    : "bg-[#232323] text-[#888] hover:text-white"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setGridFormat("2-col")}
                className={`hidden md:inline-block px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "2-col"
                    ? "bg-[#333] text-white"
                    : "bg-[#232323] text-[#888] hover:text-white"
                }`}
              >
                2 Grid
              </button>
              <button
                onClick={() => setGridFormat("4-col")}
                className={`hidden md:inline-block px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "4-col"
                    ? "bg-[#333] text-white"
                    : "bg-[#232323] text-[#888] hover:text-white"
                }`}
              >
                4 Grid
              </button>
            </div>
          </div>

          {/* Projects as cards */}
          {gridFormat === "list" && (
            <div className="flex flex-col gap-10">
              {activeProjects.map((project) => (
                <ProjectCard key={project.href} {...project} />
              ))}
            </div>
          )}
          {gridFormat === "2-col" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeProjects.map((project) => (
                <ProjectCard key={project.href} {...project} />
              ))}
            </div>
          )}
          {gridFormat === "4-col" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {activeProjects.map((project) => (
                <ProjectCard key={project.href} {...project} />
              ))}
            </div>
          )}
        </main>
        <div className="px-4 sm:px-8 md:px-12 lg:px-18"><Footer /></div>
        <BackToTop />
      </div>
    </div>
  );
}
