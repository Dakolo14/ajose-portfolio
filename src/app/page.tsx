'use client';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

export default function Home() {
  // For the update bar dismiss
  const [showUpdate, setShowUpdate] = useState(true);
  return (
    <div className="flex min-h-screen bg-[#181818] text-[#ededed] font-sans">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-[260px]">
        <Header />
        {/* Blue update bar */}
        {showUpdate && (
          <div className="relative bg-[#2563eb] text-sm text-white text-center py-3 flex items-center justify-center">
            <span className="w-full">Discover my work.</span>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg hover:bg-[#1e40af] rounded-full w-7 h-7 flex items-center justify-center"
              aria-label="Dismiss update bar"
              onClick={() => setShowUpdate(false)}
            >
              ×
            </button>
          </div>
        )}
        {/* Content */}
        <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-18 py-12">
          <div className="flex flex-start gap-4 mb-6">
            <div className="hidden md:!block md:w-16 md:h-16 bg-[#232323] overflow-hidden">
              {/* Profile image placeholder */}
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-tight mb-1">Product designer with focus on product thinking and craft.</h1>
              <p className="text-[#bdbdbd] text-base mb-2">I design and prototype digital products & visual interfaces.<br/>Welcome to my small corner of web.</p>
              <div className="text-sm font-semibold text-white">
                Currently <span className="text-[#FF37A2]">@ Konga Group</span>, Prev. <span className="text-[#60a5fa]">@ Buzzy Media</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#bdbdbd] mt-1">
                <span>San Francisco, CA</span>
                <span>•</span>
                <span>3:48 PM</span>
              </div>
            </div>
          </div>
          {/* Team/Experience section */}
          <section className="mb-8">
            <div className="flex flex-col divide-y divide-[#232323]">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#ED017F] text-white font-medium px-2 py-1 rounded text-xs">Konga Group</span>
                  <span className="text-sm">Product Design</span>
                </div>
                <span className="text-xs text-[#bdbdbd]">2023 - Present</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#232323] text-white font-bold px-2 py-1 rounded text-xs">Buzzy Media</span>
                  <span className="text-sm">Lead Product Designer</span>
                </div>
                <span className="text-xs text-[#bdbdbd]">2024 - 2025</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#232323] text-white font-bold px-2 py-1 rounded text-xs">McKinley Rice</span>
                  <span className="text-sm">Product Designer & Developer</span>
                </div>
                <span className="text-xs text-[#bdbdbd]">2020–2021</span>
              </div>
            </div>
          </section>
          {/* Projects as cards */}
          <div className="flex flex-col gap-10">
            <ProjectCard
                title="PayFly Ecosystem"
                subtitle="Brand & UI/UX Design"
                description="Designed seamless payment flows and dashboards for PayFly."
                href="/work/interface/payfly-ecosystem"
            />
            <ProjectCard
              title="Konga Group"
              subtitle="Product Design"
              description="Designed and developed a new product for Konga Group."
              href="/work/interface/konga-group"
            />
            <ProjectCard
              title="Buzzy Media"
              subtitle="UI/UX Redesign"
              description="Created brand identity and responsive website for Buzzy Media."
              href="/work/interface/buzzy-media"
            />
            <ProjectCard
              title="Verselift"
              subtitle="Product Design"
              description="Designed and developed for Verselift's SaaS platform."
              href="/work/interface/verselift"
            />
            <ProjectCard
              title="Bet-Inn"
              subtitle="Brand & UI/UX Design, Interaction Specialist"
              description="Crafted engaging betting experiences for Bet-Inn users."
              href="/work/interface/bet-inn"
            />
          </div>
        </main>
        <div className="px-4 sm:px-8 md:px-12 lg:px-18"><Footer /></div>
        <BackToTop />
      </div>
    </div>
  );
}
