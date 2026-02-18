'use client';
import Image from "next/image";
import Link from "next/link";

export default function PayflyEcosystemProject() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">Payfly Ecosystem</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Unified digital payment infrastructure connecting consumers, merchants, and financial institutions</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Lead Product Designer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">8 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Products</p>
            <p className="text-white font-semibold">2 Major Apps</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Status</p>
            <p className="text-white font-semibold">Live & Expanding</p>
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl mb-16 shadow-lg flex items-center justify-center">
        <div className="text-center">
          <Image src="/file.svg" alt="Payfly Ecosystem Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          Payfly Ecosystem represents a comprehensive digital payment infrastructure designed to modernize financial transactions across consumer and business verticals. The ecosystem comprises two interconnected applications: Payfly Payment (consumer-facing mobile app) and Payfly POS (merchant-facing point-of-sale system).
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          As Lead Product Designer, I architected a unified design system and user experience strategy that ensured seamless interaction between both applications while maintaining distinct use cases and contexts.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          The challenge was to create an ecosystem where consumers could pay with a tap, merchants could accept payments instantly, and both parties had complete visibility and control—all while maintaining security and trust.
        </p>
      </section>

      {/* Ecosystem Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Ecosystem Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-xl mb-4">Payfly Payment App</h3>
            <p className="text-[#bdbdbd] mb-4">Consumer-facing mobile application (iOS & Android)</p>
            <ul className="space-y-2 text-[#bdbdbd]">
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Digital wallet with multi-card support
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Tap-to-pay contactless transactions
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Transaction history & receipts
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Peer-to-peer money transfers
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Rewards & cashback integration
              </li>
            </ul>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-xl mb-4">Payfly POS System</h3>
            <p className="text-[#bdbdbd] mb-4">Merchant-facing point-of-sale platform</p>
            <ul className="space-y-2 text-[#bdbdbd]">
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Payment acceptance & processing
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Inventory management system
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Sales analytics dashboard
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Transaction settlement & reconciliation
              </li>
              <li className="flex gap-2">
                <span className="text-[#ED017F]">→</span> Multi-terminal management
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-4">How They Connect</h3>
          <p className="text-[#bdbdbd] leading-relaxed">
            The true power of the ecosystem lies in its unified architecture. When a consumer uses Payfly Payment to make a contactless payment at a merchant's Payfly POS terminal, multiple systems work in concert: secure tokenization, real-time settlement, instant receipt generation, and loyalty program integration. Both parties see synchronized transaction data, creating transparency and trust.
          </p>
        </div>
      </section>

      {/* Design Challenge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold mb-3">Designing for Dual Audiences</h3>
            <p className="text-[#bdbdbd]">Creating distinct, appropriate experiences for consumers on mobile and merchants on desktop/tablet without sacrificing ecosystem coherence</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold mb-3">Security & Trust</h3>
            <p className="text-[#bdbdbd]">Building confidence in financial transactions through clear security indicators, encryption visualization, and transparent transaction flows</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold mb-3">Complexity Simplification</h3>
            <p className="text-[#bdbdbd]">Managing complex backend processes (tokenization, settlement, reconciliation) through intuitive interfaces that hide technical complexity</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold mb-3">Context-Specific Speed</h3>
            <p className="text-[#bdbdbd]">Enabling fast-paced transactions for consumers while providing detailed, analytical interfaces for merchants</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">The Solution</h2>
        
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Unified Design System</h3>
          <p className="text-[#bdbdbd] text-lg leading-relaxed mb-8">
            I created a comprehensive design system that maintained visual and interaction consistency across both applications while allowing for context-appropriate customization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Color & Branding</h4>
              <p className="text-[#bdbdbd] text-sm">Consistent primary colors with context-specific palettes. Green for success states, red for warnings, ensuring immediate comprehension across both apps</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Typography & Spacing</h4>
              <p className="text-[#bdbdbd] text-sm">Scalable type system and spacing grid enabling responsive designs that work on phone screens to large merchant displays</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Components Library</h4>
              <p className="text-[#bdbdbd] text-sm">50+ reusable components for buttons, forms, data visualization, ensuring consistency and reducing development time</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Interaction Patterns</h4>
              <p className="text-[#bdbdbd] text-sm">Standardized animations, feedback loops, and state management providing familiar interactions across platforms</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Application-Specific Designs</h3>
          
          <div className="mb-8">
            <h4 className="text-[#ED017F] font-semibold text-lg mb-4">Payfly Payment: Speed & Simplicity</h4>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6 space-y-3">
              <p className="text-[#bdbdbd]"><strong>Transaction Flow:</strong> Streamlined checkout requiring minimal taps—users authenticate once then tap devices for purchases</p>
              <p className="text-[#bdbdbd]"><strong>Wallet Interface:</strong> Large, thumb-friendly card carousel for quick card selection during peak moments</p>
              <p className="text-[#bdbdbd]"><strong>Receipt Design:</strong> Minimal, scannable receipts that fit the mobile context without overwhelming users</p>
              <p className="text-[#bdbdbd]"><strong>Security Indicators:</strong> Subtle visual cues (checkmarks, lock icons) confirming secure transactions without creating friction</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#ED017F] font-semibold text-lg mb-4">Payfly POS: Control & Visibility</h4>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6 space-y-3">
              <p className="text-[#bdbdbd]"><strong>Dashboard Analytics:</strong> Real-time sales metrics, payment method breakdowns, and transaction trends for business intelligence</p>
              <p className="text-[#bdbdbd]"><strong>Transaction Management:</strong> Detailed ledger of all payments with ability to issue refunds, generate reports, and investigate disputes</p>
              <p className="text-[#bdbdbd]"><strong>Multi-terminal Control:</strong> Merchants managing multiple locations can monitor transactions across all terminals from one interface</p>
              <p className="text-[#bdbdbd]"><strong>Settlement Visibility:</strong> Clear breakdown of earnings, fees, and settlement timing to build merchant confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Network Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">850K+</p>
              <p className="text-[#bdbdbd]">Active Consumer Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">12K+</p>
              <p className="text-[#bdbdbd]">Merchant Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">$450M+</p>
              <p className="text-[#bdbdbd]">Annual Transactions</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">User Experience Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">2.3s</p>
              <p className="text-[#bdbdbd]">Avg. Payment Completion Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">4.7/5</p>
              <p className="text-[#bdbdbd]">Consumer App Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">4.8/5</p>
              <p className="text-[#bdbdbd]">Merchant POS Rating</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">94%</p>
              <p className="text-[#bdbdbd]">Merchant Retention Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">78%</p>
              <p className="text-[#bdbdbd]">Monthly Active User Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">3.2x</p>
              <p className="text-[#bdbdbd]">Transaction Growth YoY</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#ED017F] border-opacity-30 rounded-lg p-8">
          <p className="text-[#ED017F] font-semibold mb-3">Ecosystem Success:</p>
          <p className="text-[#bdbdbd]">By designing a cohesive ecosystem where consumer and merchant experiences were deeply integrated yet distinctly optimized, Payfly achieved network effects that accelerated growth. The design philosophy—unified system architecture with context-specific implementations—became the foundation for expansion into additional verticals including corporate payments and bill management.</p>
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
