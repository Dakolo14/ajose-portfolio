'use client';
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/featuredProjects";
import { useState, useEffect } from "react";

export default function Home() {
  // For the update bar dismiss
  const [showUpdate, setShowUpdate] = useState(true);
  const [dismissing, setDismissing] = useState(false);
  // For dynamic time
  const [currentTime, setCurrentTime] = useState<string>("");
  // For grid format selection
  const [gridFormat, setGridFormat] = useState<"list" | "2-col" | "4-col">("2-col");
  const activeProjects = featuredProjects.filter((p) => p.active);

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
              <h1 className="font-inter text-2xl font-light leading-tight mb-1 tracking-tight text-white">Product designer with focus on product thinking and craft.</h1>
              <p className="font-helvetica text-[#bdbdbd] text-base mb-2 cursor-default">I design and prototype digital products & visual interfaces.<br/>Welcome to my small corner of web.</p>
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
                { company: "Konga Group", role: "Product Design", period: "2023 — Present", color: "#ED017F" },
                { company: "CeraVe", role: "Product Designer & Developer", period: "Contract", color: "#005994" },
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
          {/* Grid Format Selector */}
          <div className="mb-8 flex items-center gap-3 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm text-[#bdbdbd] hidden md:inline">View:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setGridFormat("list")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "list"
                    ? "bg-[#ED017F] text-white shadow-lg shadow-[#ED017F]/30"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setGridFormat("2-col")}
                className={`hidden md:inline-block px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "2-col"
                    ? "bg-[#ED017F] text-white shadow-lg shadow-[#ED017F]/30"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                2 Grid
              </button>
              <button
                onClick={() => setGridFormat("4-col")}
                className={`hidden md:inline-block px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  gridFormat === "4-col"
                    ? "bg-[#ED017F] text-white shadow-lg shadow-[#ED017F]/30"
                    : "bg-[#232323] text-[#bdbdbd] hover:text-white hover:bg-[#2a2a2a]"
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
