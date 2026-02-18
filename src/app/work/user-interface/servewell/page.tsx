'use client';
import Image from "next/image";
import Link from "next/link";

export default function ServeWellProject() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">Servewell</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Customer service platform for efficient support ticket management and agent collaboration</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">UI/UX Designer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">5 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Team</p>
            <p className="text-white font-semibold">Design + Dev</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Status</p>
            <p className="text-white font-semibold">Live</p>
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl mb-16 shadow-lg flex items-center justify-center">
        <div className="text-center">
          <Image src="/file.svg" alt="Servewell Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          Servewell is a comprehensive customer service platform designed to streamline support operations and improve customer satisfaction. It brings together tickets, live chat, knowledge bases, and team collaboration tools in one unified interface.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          My role involved designing the entire user interface from concept through implementation, ensuring support agents have everything they need to resolve customer issues quickly and effectively.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Support teams using multiple disconnected tools, losing context between channels</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">High ticket resolution times due to inefficient workflows and poor prioritization</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Limited visibility into team performance and customer satisfaction metrics</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Solution</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          I designed a unified customer service hub that brings all communication channels and tools together. Key features include:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Unified Inbox</h3>
            <p className="text-[#bdbdbd]">All customer interactions from email, chat, and social media in one centralized view</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Smart Routing</h3>
            <p className="text-[#bdbdbd]">Automatic ticket assignment based on agent expertise and workload balance</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Collaboration Tools</h3>
            <p className="text-[#bdbdbd]">Internal notes, @mentions, and notes to enable seamless team coordination</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-[#bdbdbd]">Real-time metrics on response times, resolution rates, and customer satisfaction</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#ED017F] mb-2">47%</p>
            <p className="text-[#bdbdbd]">Reduction in Resolution Time</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#ED017F] mb-2">89%</p>
            <p className="text-[#bdbdbd]">Customer Satisfaction Score</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#ED017F] mb-2">3.2x</p>
            <p className="text-[#bdbdbd]">Tickets Handled Per Agent</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 border-t border-[#232323]">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to explore more?</h3>
            <p className="text-[#bdbdbd]">Check out other projects or get in touch</p>
          </div>
          <div className="flex gap-4">
            <Link href="/work" className="px-6 py-3 bg-[#232323] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors">
              View All Projects
            </Link>
            <Link href="/" className="px-6 py-3 bg-[#ED017F] text-white rounded-lg hover:bg-[#ff62b9] transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
