'use client';
import Image from "next/image";
import Link from "next/link";

export default function StatMindProject() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#5A6BFF] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">StatMind</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Analytics platform with intelligent insights and real-time dashboards</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">UI/UX Designer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">3 Months</p>
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
          <Image src="/file.svg" alt="StatMind Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          StatMind is a comprehensive analytics platform designed to help businesses make data-driven decisions. The platform combines real-time data visualization with intelligent insights to provide users with actionable analytics at their fingertips.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          My role involved designing the entire user interface from concept through implementation, ensuring a seamless experience for both novice and advanced analytics users.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#5A6BFF] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Complex data needed to be visualized in an intuitive way without overwhelming users</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#5A6BFF] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Balance between powerful features for experts and simplicity for beginners</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#5A6BFF] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Real-time data updates required responsive and performant dashboard</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Solution</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          I designed a modular dashboard system with customizable widgets that allows users to create personalized analytics views. Key features include:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#5A6BFF] font-semibold mb-3">Smart Dashboards</h3>
            <p className="text-[#bdbdbd]">Customizable widgets and drag-and-drop interface for intuitive dashboard building</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#5A6BFF] font-semibold mb-3">Real-time Updates</h3>
            <p className="text-[#bdbdbd]">Live data streams with smooth animations and instant notifications</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#5A6BFF] font-semibold mb-3">AI Insights</h3>
            <p className="text-[#bdbdbd]">Intelligent recommendations based on data patterns and trends</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#5A6BFF] font-semibold mb-3">Accessibility First</h3>
            <p className="text-[#bdbdbd]">WCAG compliant design ensuring usability for all users</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#5A6BFF] mb-2">92%</p>
            <p className="text-[#bdbdbd]">User Satisfaction Score</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#5A6BFF] mb-2">45%</p>
            <p className="text-[#bdbdbd]">Increase in User Engagement</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#5A6BFF] mb-2">2.3s</p>
            <p className="text-[#bdbdbd]">Average Dashboard Load Time</p>
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
            <Link href="/" className="px-6 py-3 bg-[#5A6BFF] text-white rounded-lg hover:bg-[#707FFF] transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
