'use client';
import Image from "next/image";
import Link from "next/link";

export default function KongaWorkstationProject() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">Konga WorkStation</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Vendor management platform with Shop-In-Shop pages and campaign push capabilities</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">UI/UX Designer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">4 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Focus Areas</p>
            <p className="text-white font-semibold">SIS & Campaigns</p>
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
          <Image src="/file.svg" alt="Konga WorkStation Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          Konga WorkStation is a comprehensive vendor management platform designed to empower sellers with tools to manage their storefronts, campaigns, and sales more effectively. The platform serves thousands of vendors on Africa's leading e-commerce marketplace.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          My focus centered on two critical components: the Shop-In-Shop (SIS) pages and the Campaigns Push system. These features are fundamental to how vendors present their inventory and reach customers.
        </p>
      </section>

      {/* The Challenge - SIS Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Challenge: Shop-In-Shop Pages</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          SIS pages are dedicated storefronts for vendors, serving as their primary digital presence. The original design faced several UX obstacles:
        </p>
        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Information Overload:</strong> Too many elements competing for attention, decreasing engagement</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Poor Product Discovery:</strong> Customers struggled to find relevant products within a vendor's catalog</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Inconsistent Branding:</strong> No clear way for vendors to differentiate their storefronts</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Mobile Experience:</strong> Responsive design issues made mobile shopping frustrating</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution - SIS Pages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Solution: Redesigned SIS Pages</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          I redesigned the SIS pages with a modular, customer-centric approach:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Hero Banner</h3>
            <p className="text-[#bdbdbd]">Brand-customizable header showcasing vendor identity and current promotions</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Curated Collections</h3>
            <p className="text-[#bdbdbd]">Organized product sections with smart filtering and sorting options</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Quick Stats Widget</h3>
            <p className="text-[#bdbdbd]">Display vendor ratings, reviews, and response time to build trust</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Responsive Grid</h3>
            <p className="text-[#bdbdbd]">Adaptive product grid that scales beautifully across all device sizes</p>
          </div>
        </div>
      </section>

      {/* The Challenge - Campaigns Push */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Challenge: Campaigns Push System</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          The Campaigns Push feature allows vendors to create and manage promotional campaigns. The original system was unintuitive:
        </p>
        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Complex Workflow:</strong> Multi-step campaign creation required too many clicks and decisions</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Limited Targeting:</strong> Vendors couldn't segment their campaigns effectively</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>No Real-time Analytics:</strong> Vendors couldn't track campaign performance instantly</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]"><strong>Poor Preview:</strong> No way to preview campaigns before sending to customers</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution - Campaigns Push */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Solution: Streamlined Campaigns Push</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          I redesigned the campaign creation and management system to be intuitive and powerful:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Wizard-style Interface</h3>
            <p className="text-[#bdbdbd]">Step-by-step campaign builder with clear progress indicator and helpful hints</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Smart Segmentation</h3>
            <p className="text-[#bdbdbd]">Target campaigns by customer behavior, purchase history, and location</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Live Preview</h3>
            <p className="text-[#bdbdbd]">See exactly how campaigns appear to customers before publishing</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Performance Dashboard</h3>
            <p className="text-[#bdbdbd]">Real-time metrics on impressions, clicks, conversions, and ROI</p>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">SIS Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">38%</p>
              <p className="text-[#bdbdbd]">Increase in Avg. Session Duration</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">52%</p>
              <p className="text-[#bdbdbd]">Higher Product Click-through Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">4.2/5</p>
              <p className="text-[#bdbdbd]">Average Vendor Satisfaction</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Campaigns Push</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">65%</p>
              <p className="text-[#bdbdbd]">Faster Campaign Creation</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">2.8x</p>
              <p className="text-[#bdbdbd]">Higher Campaign Engagement</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">1000+</p>
              <p className="text-[#bdbdbd]">Daily Active Campaigns</p>
            </div>
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
