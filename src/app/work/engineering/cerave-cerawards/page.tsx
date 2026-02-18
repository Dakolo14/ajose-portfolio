'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CeraveCerawardsEngineeringProject() {
  const [showCodeModal, setShowCodeModal] = useState(false);

  const codeSnippets = [
    {
      filename: "rewards-engine.ts",
      language: "typescript",
      code: `// Event-sourced transaction processing
async function processRewardTransaction(event: RewardEvent) {
  // 1. Validate event integrity
  const validated = await validateEventSignature(event);
  
  // 2. Calculate points with tier multiplier
  const basePoints = calculateBasePoints(event.amount, event.category);
  const tierMultiplier = await getTierMultiplier(event.userId);
  const finalPoints = basePoints * tierMultiplier;
  
  // 3. Check for promotional multipliers
  const promoMultiplier = await getActivePromo(event.userId, event.category);
  const bonusPoints = finalPoints * (1 + promoMultiplier);
  
  // 4. Atomic ledger update with event sourcing
  const transaction = {
    userId: event.userId,
    points: bonusPoints,
    timestamp: Date.now(),
    tier: await getUserTier(event.userId),
    expiryDate: calculateExpiry(event.userId)
  };
  
  // 5. Persist immutable event
  await eventStore.append(transaction);
  await updateUserBalance(event.userId, bonusPoints);
  
  return transaction;
}`
    },
    {
      filename: "tier-progression.ts",
      language: "typescript",
      code: `// Complex tier logic with edge case handling
async function evaluateTierProgression(userId: string) {
  const user = await getUser(userId);
  const balance = await getUserBalance(userId);
  
  // Tier progression thresholds
  const tiers = {
    BRONZE: { min: 0, max: 5000, benefits: [...] },
    SILVER: { min: 5000, max: 15000, benefits: [...] },
    GOLD: { min: 15000, max: 50000, benefits: [...] },
    PLATINUM: { min: 50000, max: Infinity, benefits: [...] }
  };
  
  // Determine new tier
  let newTier = user.currentTier;
  for (const [tierName, tierConfig] of Object.entries(tiers)) {
    if (balance >= tierConfig.min && balance <= tierConfig.max) {
      newTier = tierName;
      break;
    }
  }
  
  // Handle tier change
  if (newTier !== user.currentTier) {
    // Promotion: add anniversary points bonus
    if (getTierRank(newTier) > getTierRank(user.currentTier)) {
      await addPoints(userId, tierConfig.promotionBonus);
    }
    // Demotion: notify user but keep accumulated benefits
    else if (getTierRank(newTier) < getTierRank(user.currentTier)) {
      await notifyDemotion(userId);
    }
    
    await updateUserTier(userId, newTier);
  }
}`
    },
    {
      filename: "eventual-consistency.ts",
      language: "typescript",
      code: `// Distributed ledger reconciliation
async function reconcilePointsLedger() {
  const eventLog = await eventStore.getAll();
  const currentBalances = new Map();
  
  // Replay all events to calculate ground truth
  for (const event of eventLog) {
    const current = currentBalances.get(event.userId) || 0;
    
    // Handle point expiration
    if (isPointExpired(event.expiryDate)) {
      continue;
    }
    
    // Apply transaction
    const newBalance = current + event.points;
    currentBalances.set(event.userId, newBalance);
    
    // Audit: track reconciliation
    await auditLog.record({
      userId: event.userId,
      operation: 'RECONCILE',
      calculatedBalance: newBalance,
      timestamp: Date.now()
    });
  }
  
  // Verify consistency across replicas
  const dbBalances = await database.getAllBalances();
  const discrepancies = [];
  
  for (const [userId, calculated] of currentBalances) {
    const stored = dbBalances.get(userId);
    if (calculated !== stored) {
      discrepancies.push({ userId, calculated, stored });
    }
  }
  
  return discrepancies;
}`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">CeraVe CerAwards</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Distributed rewards engine handling points, tiers, and transactions at scale</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Backend Engineer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">4 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Scale</p>
            <p className="text-white font-semibold">450K Users</p>
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
          <Image src="/file.svg" alt="CeraVe CerAwards Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          The CeraVe CerAwards engineering project centers on building a distributed rewards engine that processes loyalty transactions, calculates points, manages tier progression, and handles redemptions for 450K+ active users.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          As Backend Engineer, I architected the core transaction pipeline handling millions of monthly operations while maintaining accuracy, consistency, and sub-100ms API responses.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          The system needed to handle complex business rules (bonus multipliers, tier benefits, expiring points) while remaining eventually consistent across microservices and distributed databases.
        </p>
      </section>

      {/* Technical Challenge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Engineering Challenges</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Distributed Transaction Consistency</h3>
            <p className="text-[#bdbdbd]">Ensuring accuracy when recording purchases, earning points, and applying tier bonuses across multiple services without race conditions or double-counting</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Complex Point Calculation</h3>
            <p className="text-[#bdbdbd]">Managing dynamic point multipliers, category-specific rates, tier bonuses, promotional campaigns, and earning/expiration rules in real-time</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">High-Volume Processing</h3>
            <p className="text-[#bdbdbd]">Processing 15K+ transactions/minute during peak times while maintaining under 100ms API response times</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Tier Promotion & Demotion Logic</h3>
            <p className="text-[#bdbdbd]">Accurately tracking progress toward tiers, triggering promotions, managing benefits, and handling edge cases (expired points, refunds, cancellations)</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Data Accuracy & Auditing</h3>
            <p className="text-[#bdbdbd]">Complete audit trail for regulatory compliance, reconciliation with finance systems, and dispute resolution</p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Architecture & Solution</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Event-Driven Architecture</h3>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <p className="text-[#bdbdbd] mb-6">Built an event-sourced rewards system where all point transactions are immutable events:</p>
            <div className="space-y-4 text-[#bdbdbd]">
              <p>• <strong>Purchase event</strong> → Calculate base points → Apply tier multiplier → Store event → Update balance</p>
              <p>• <strong>Tier promotion event</strong> → Unlock new benefits → Notify user → Update profile</p>
              <p>• <strong>Redemption event</strong> → Deduct points → Apply discount → Record transaction</p>
              <p>• <strong>Expiration event</strong> → Remove expired balance → Notify user → Update ledger</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Key Technical Implementations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Saga Pattern</h4>
              <p className="text-[#bdbdbd] text-sm">Choreography-based sagas for multi-step transactions (purchase → points → tier check → notification)</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Event Sourcing</h4>
              <p className="text-[#bdbdbd] text-sm">Immutable event log as source of truth, enabling full audit trail and temporal queries</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">CQRS Pattern</h4>
              <p className="text-[#bdbdbd] text-sm">Separate read models (optimized for queries) from write model (canonical source of truth)</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Eventual Consistency</h4>
              <p className="text-[#bdbdbd] text-sm">Distributed consensus protocol ensuring all replicas converge within SLA</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Caching Strategy</h4>
              <p className="text-[#bdbdbd] text-sm">Redis for hot data (user balances, tier info), PostgreSQL for cold storage and reconciliation</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Message Queue</h4>
              <p className="text-[#bdbdbd] text-sm">Apache Kafka for event streaming with partitioning by user ID to preserve ordering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Performance & Scale</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Transaction Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">45ms</p>
              <p className="text-[#bdbdbd]">P95 API Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">15K+</p>
              <p className="text-[#bdbdbd]">Transactions/Minute Peak</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99.95%</p>
              <p className="text-[#bdbdbd]">Accuracy Rate</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Reliability & Consistency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99.99%</p>
              <p className="text-[#bdbdbd]">System Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">100%</p>
              <p className="text-[#bdbdbd]">Reconciliation Match</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">2.5s</p>
              <p className="text-[#bdbdbd]">Event Propagation SLA</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">450K+</p>
              <p className="text-[#bdbdbd]">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">$2.4M</p>
              <p className="text-[#bdbdbd]">Revenue Influenced</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">4.8x</p>
              <p className="text-[#bdbdbd]">CLV Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Insights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Technical Insights</h2>
        <div className="bg-[#1a1a1a] border border-[#ED017F] border-opacity-30 rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Event sourcing scales:</strong> Trading some write complexity for unlimited auditability and temporal queries is a smart trade at this scale</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Eventual consistency is fine:</strong> For loyalty systems, eventual consistency (2-5s) is acceptable and massively simplifies architecture</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Kafka as source of truth:</strong> Using Kafka as the event log combined with computed caches makes debugging and reprocessing trivial</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Code Logic Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Code Logic</h2>
          <button
            onClick={() => setShowCodeModal(true)}
            className="px-6 py-3 bg-[#ED017F] text-white rounded-lg hover:bg-[#ff62b9] transition-colors font-semibold flex items-center gap-2"
          >
            <span>View Code</span>
            <span className="text-lg">→</span>
          </button>
        </div>
        <p className="text-[#bdbdbd] text-lg">Deep dive into the architecture with key code snippets showing event sourcing, tier progression logic, and distributed consistency patterns.</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 border-t border-[#232323]">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to explore more?</h3>
            <p className="text-[#bdbdbd]">Check out other engineering projects or get in touch</p>
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

      {/* Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && setShowCodeModal(false)}>
          <div className="bg-[#1e1e1e] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-[#232323]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#232323] bg-[#252526]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ED017F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-white font-semibold">Code Logic Explorer</span>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-[#bdbdbd] hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4 p-4">
                {codeSnippets.map((snippet, idx) => (
                  <div key={idx} className="bg-[#1e1e1e] border border-[#232323] rounded-lg overflow-hidden">
                    {/* File Tab */}
                    <div className="bg-[#252526] px-4 py-3 border-b border-[#232323] flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ED017F]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                      </svg>
                      <span className="text-[#bdbdbd] text-sm font-mono">{snippet.filename}</span>
                      <span className="ml-auto text-xs text-[#666] bg-[#1e1e1e] px-2 py-1 rounded">{snippet.language}</span>
                    </div>

                    {/* Code Content */}
                    <div className="overflow-x-auto">
                      <pre className="text-sm text-[#d4d4d4] font-mono p-4 leading-relaxed">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#232323] bg-[#252526] px-4 py-3 text-sm text-[#bdbdbd]">
              Showing {codeSnippets.length} key code snippets from the project architecture
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
