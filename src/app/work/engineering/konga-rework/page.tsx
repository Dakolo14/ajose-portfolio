'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KongaReworkProject() {
  const [showCodeModal, setShowCodeModal] = useState(false);

  const codeSnippets = [
    {
      filename: "performance-optimization.ts",
      language: "typescript",
      code: `// Route-based code splitting strategy
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const ProductPage = lazy(() => import('./pages/Product'));
const CheckoutPage = lazy(() => import('./pages/Checkout'));

// Each route loads only its required code
export default function Router() {
  return (
    <Suspense fallback={<LoadingShell />}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Suspense>
  );
}

// Result: Initial bundle 2.8MB → 680KB`
    },
    {
      filename: "recommendation-engine.ts",
      language: "typescript",
      code: `// Pre-computed collaborative filtering
interface UserVector {
  userId: string;
  embedding: number[];
  lastUpdated: number;
}

// Compute recommendations during off-peak
async function preComputeRecommendations() {
  const allUsers = await getUserVectors();
  const recommendations = new Map();
  
  for (const user of allUsers) {
    // Collaborative filtering: find similar users
    const similarUsers = findNearestNeighbors(user.embedding, 50);
    
    // Aggregate products from similar users
    const products = aggregateProductsFromUsers(similarUsers);
    
    // Sort by purchase velocity and user rating
    const ranked = rankByPopularityAndRating(products);
    
    recommendations.set(user.userId, ranked.slice(0, 20));
  }
  
  // Store in Redis for <10ms lookups
  await redis.set('recommendations', recommendations);
}

// Serve from cache during peak hours
export async function getRecommendations(userId: string) {
  return redis.get('recommendations')[userId];
}`
    },
    {
      filename: "zero-downtime-migration.ts",
      language: "typescript",
      code: `// Canary deployment with traffic shifting
interface DeploymentConfig {
  newVersion: string;
  startCanaryPercentage: number;
  targetPercentage: number;
  rollbackThreshold: number;
}

async function canaryDeploy(config: DeploymentConfig) {
  let currentPercentage = config.startCanaryPercentage; // Start at 5%
  
  while (currentPercentage <= config.targetPercentage) {
    // Shift traffic gradually
    await loadBalancer.setTrafficSplit({
      newVersion: currentPercentage,
      oldVersion: 100 - currentPercentage
    });
    
    // Monitor error rates
    const metrics = await prometheus.query('error_rate_5m');
    
    if (metrics.errorRate > config.rollbackThreshold) {
      console.log('Rollback triggered');
      await loadBalancer.setTrafficSplit({ newVersion: 0, oldVersion: 100 });
      return;
    }
    
    // Gradually increase traffic
    currentPercentage += 10; // 5% → 15% → 25% ... 100%
    await sleep(5 * 60 * 1000); // Wait 5 min between shifts
  }
  
  console.log('Deployment complete with 99.99% uptime');
}`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">Konga Rework</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Homepage performance optimization and engagement engine redesign for Africa's largest e-commerce platform</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Full-Stack Engineer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">5 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Scale</p>
            <p className="text-white font-semibold">10M+ Monthly</p>
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
          <Image src="/file.svg" alt="Konga Rework Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          The Konga homepage rework was a comprehensive optimization project targeting user retention and product discovery for Africa's largest e-commerce platform serving 10M+ monthly visitors.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          As Full-Stack Engineer, I led the technical redesign focusing on performance (3x faster load times), engagement (algorithmic recommendations), and conversion (reduced friction in product discovery).
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          The challenge was improving user retention 23% while maintaining backward compatibility with existing recommendation logic and third-party integrations across millions of daily users.
        </p>
      </section>

      {/* Technical Challenge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Engineering Challenges</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Zero-Downtime Migration</h3>
            <p className="text-[#bdbdbd]">Rolling out a new homepage architecture to millions of daily users without service disruption, supporting A/B testing and gradual rollout</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Performance at Scale</h3>
            <p className="text-[#bdbdbd]">Achieving &lt;2s homepage load on 3G networks across Nigeria, Egypt, and Kenya with image-heavy content and complex recommendations</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Algorithmic Recommendations</h3>
            <p className="text-[#bdbdbd]">Building a real-time recommendation engine that personalizes product displays without sacrificing performance or privacy</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Third-Party Integration Coordination</h3>
            <p className="text-[#bdbdbd]">Managing 50+ integrations (ads, tracking, payments) while improving performance and ensuring compatibility</p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Architecture & Solution</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Frontend Optimization</h3>
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">Lazy Loading & Code Splitting</h4>
              <p className="text-[#bdbdbd]">Reduced initial bundle from 2.8MB to 680KB using route-based code splitting and dynamic imports</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">Image Optimization</h4>
              <p className="text-[#bdbdbd]">WebP format with JPEG fallbacks, responsive images, srcset optimization, reduced image size by 65%</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">Virtual Scrolling</h4>
              <p className="text-[#bdbdbd]">Rendering only visible product cards, preventing DOM bloat and memory issues on low-end devices</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Backend Optimization</h3>
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">Recommendation Engine</h4>
              <p className="text-[#bdbdbd]">Collaborative filtering with real-time personalization, pre-computed during off-peak hours, served from cache</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">GraphQL API</h4>
              <p className="text-[#bdbdbd]">Clients request exactly what they need, reducing payload by 40% compared to REST endpoints</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
              <h4 className="text-[#ED017F] font-semibold mb-3">Redis Caching Layer</h4>
              <p className="text-[#bdbdbd]">Cache homepage components, recommendations, and product data, reducing database queries by 85%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">67%</p>
              <p className="text-[#bdbdbd]">Faster Load Time (3G)</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">1.8s</p>
              <p className="text-[#bdbdbd]">First Contentful Paint</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">2.1s</p>
              <p className="text-[#bdbdbd]">Largest Contentful Paint</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">User Engagement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">23%</p>
              <p className="text-[#bdbdbd]">Increase in User Retention</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">38%</p>
              <p className="text-[#bdbdbd]">Higher Click-Through Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">44%</p>
              <p className="text-[#bdbdbd]">Increased Avg. Session Time</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">$12M+</p>
              <p className="text-[#bdbdbd]">Incremental Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">15%</p>
              <p className="text-[#bdbdbd]">Conversion Rate Lift</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99.99%</p>
              <p className="text-[#bdbdbd]">Uptime During Rollout</p>
            </div>
          </div>
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
        <p className="text-[#bdbdbd] text-lg">Deep dive into the performance optimization strategies with key code snippets showing zero-downtime deployment, recommendation engine, and bundle optimization.</p>
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
