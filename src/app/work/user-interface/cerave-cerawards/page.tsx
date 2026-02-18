'use client';
import Image from "next/image";
import Link from "next/link";

export default function CeraveCerawardsProject() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">CeraVe CerAwards</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Digital rewards and loyalty campaign driving customer engagement and lifetime value</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Lead Designer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">6 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Team</p>
            <p className="text-white font-semibold">Design + Dev + Marketing</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Status</p>
            <p className="text-white font-semibold">Live & Growing</p>
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl mb-16 shadow-lg flex items-center justify-center">
        <div className="text-center">
          <Image src="/file.svg" alt="CeraVe CerAwards Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          CeraVe CerAwards is a comprehensive digital rewards and loyalty program designed to recognize customer engagement and incentivize repeat purchases. The campaign combines gamification, personalized rewards, and social sharing to create a compelling customer experience.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          As the lead designer, I orchestrated the complete user experience across web and mobile platforms, working closely with marketing and engineering teams to launch a campaign that exceeded all initial KPI targets.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Declining repeat purchase rates and customer lifetime value</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Need to create emotional connection and brand loyalty in competitive skincare market</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold min-w-fit">•</span>
              <span className="text-[#bdbdbd]">Opportunity to leverage social sharing and user-generated content for organic growth</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Solution</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
          I designed a multi-tier rewards program that gamifies the customer journey and incentivizes both purchases and brand advocacy:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Gamified Tiers</h3>
            <p className="text-[#bdbdbd]">Bronze, Silver, Gold, Platinum levels with progressive rewards and exclusive perks</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Achievement Badges</h3>
            <p className="text-[#bdbdbd]">Collectible digital badges for milestones like first purchase, referral success, social shares</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Point System</h3>
            <p className="text-[#bdbdbd]">Earn points on purchases, reviews, referrals, and social sharing with clear progression tracking</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
            <h3 className="text-[#ED017F] font-semibold mb-3">Social Integration</h3>
            <p className="text-[#bdbdbd]">Shareable achievements and referral links to drive word-of-mouth and community growth</p>
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Design Highlights</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Visual Hierarchy & Progress</h3>
            <p className="text-[#bdbdbd]">Clear visual representation of progression toward next tier with milestone indicators and reward preview</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Mobile-First Experience</h3>
            <p className="text-[#bdbdbd]">Optimized touch interactions, readable typography, and responsive layouts for on-the-go engagement</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Inclusivity & Accessibility</h3>
            <p className="text-[#bdbdbd]">WCAG AA compliant design ensuring all customers can participate regardless of ability</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        
        <div className="mb-10">
          <p className="text-[#bdbdbd] text-lg mb-8">This campaign delivered exceptional results across all key metrics:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">156%</p>
              <p className="text-[#bdbdbd]">Increase in Repeat Purchase Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">$2.4M</p>
              <p className="text-[#bdbdbd]">Additional Revenue Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">287%</p>
              <p className="text-[#bdbdbd]">ROI in First Quarter</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">450K+</p>
              <p className="text-[#bdbdbd]">Active Users Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">73%</p>
              <p className="text-[#bdbdbd]">Social Share Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">4.8x</p>
              <p className="text-[#bdbdbd]">Customer Lifetime Value Increase</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#ED017F] border-opacity-30 rounded-lg p-8 mt-10">
          <p className="text-[#ED017F] font-semibold mb-3">Key Achievement:</p>
          <p className="text-[#bdbdbd]">Campaign exceeded initial revenue projections by 156%, making it one of the highest-performing loyalty initiatives in company history. User retention improved significantly with 89% of active members making repeat purchases within 90 days.</p>
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
