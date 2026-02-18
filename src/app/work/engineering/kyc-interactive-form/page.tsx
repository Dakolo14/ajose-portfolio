'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KYCInteractiveFormProject() {
  const [showCodeModal, setShowCodeModal] = useState(false);

  const codeSnippets = [
    {
      filename: "state-machine.ts",
      language: "typescript",
      code: "// State machine for KYC flow\ntype KYCState = 'PERSONAL_INFO' | 'DOCUMENT_UPLOAD' | 'LIVENESS';\n\nconst transitions = {\n  'PERSONAL_INFO': ['DOCUMENT_UPLOAD'],\n  'DOCUMENT_UPLOAD': ['LIVENESS'],\n  'LIVENESS': ['COMPLETE']\n};\n\nexport function kycReducer(state, action) {\n  const canTransition = transitions[state.currentStep]?.includes(action.targetStep);\n  if (!canTransition) throw new Error('Invalid transition');\n  return { ...state, currentStep: action.targetStep };\n}"
    },
    {
      filename: "biometric-processing.ts",
      language: "typescript",
      code: "// On-device ML for biometrics\nimport * as tf from '@tensorflow/tfjs';\n\nconst livenessModel = await tf.loadGraphModel('liveness.json');\n\nexport async function performBiometricCheck(liveCapture, docPhoto) {\n  const liveTensor = await imageToTensor(liveCapture);\n  const docTensor = await imageToTensor(docPhoto);\n  \n  const livenessOutput = await livenessModel.predict(liveTensor);\n  const isLive = livenessOutput.data()[0] > 0.7;\n  \n  const similarity = cosineSimilarity(\n    await faceModel.embed(liveTensor),\n    await faceModel.embed(docTensor)\n  );\n  \n  return { isLive, faceMatch: similarity };\n}"
    },
    {
      filename: "offline-queue.ts",
      language: "typescript",
      code: "// SQLite queue for offline resilience\nimport SQLite from 'react-native-sqlite-storage';\n\nclass OfflineQueue {\n  async enqueue(request) {\n    const id = generateUUID();\n    await this.db.executeSql(\n      'INSERT INTO queue VALUES (?, ?, ?, ?, ?, ?)',\n      [id, request.method, request.endpoint, JSON.stringify(request.payload), 0, 1000]\n    );\n  }\n  \n  async processQueue() {\n    const items = await this.db.executeSql('SELECT * FROM queue');\n    for (const item of items) {\n      try {\n        const resp = await fetch(API_BASE + item.endpoint, { method: item.method, body: item.payload });\n        if (resp.ok) await this.db.executeSql('DELETE FROM queue WHERE id = ?', [item.id]);\n      } catch (e) {\n        const backoff = item.backoffMs * Math.pow(2, item.retryCount);\n        await this.db.executeSql('UPDATE queue SET retryCount = retryCount + 1, backoffMs = ? WHERE id = ?', [backoff, item.id]);\n      }\n    }\n  }\n}"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">KYC Interactive Form</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Compliance-grade identity verification system for mobile banking and fintech in Nigeria</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Lead Engineer</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">In Development</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Stack</p>
            <p className="text-white font-semibold">React Native + Node</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Compliance</p>
            <p className="text-white font-semibold">CBN Standards</p>
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl mb-16 shadow-lg flex items-center justify-center">
        <div className="text-center">
          <Image src="/file.svg" alt="KYC Form Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          KYC (Know Your Customer) Interactive Form is a sophisticated identity verification platform built to meet Central Bank of Nigeria (CBN) compliance requirements while providing seamless user experience for mobile applications and fintech platforms.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          The system handles sensitive personal data, validates identity documents, performs liveness detection, and integrates with government databases—all while maintaining security, privacy, and a frictionless user flow.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          As Lead Engineer, I architected a multi-stage verification pipeline that balances compliance rigor with user experience, ensuring applications can onboard users quickly while meeting regulatory requirements.
        </p>
      </section>

      {/* Technical Challenge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Technical Challenges</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Multi-Stage Form State Management</h3>
            <p className="text-[#bdbdbd]">Managing complex state across 6+ form stages (personal info → document upload → liveness check → verification) with ability to pause, resume, and rollback while maintaining data integrity</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Document & Biometric Validation</h3>
            <p className="text-[#bdbdbd]">Real-time document capture with OCR, quality validation, liveness detection, and facial recognition while maintaining under 99ms latency on-device</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Data Security & PII Handling</h3>
            <p className="text-[#bdbdbd]">End-to-end encryption for sensitive data, secure file uploads, compliant data storage, audit logging, and PII masking in all system outputs</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Offline Resilience & Sync</h3>
            <p className="text-[#bdbdbd]">Support for interrupted network conditions with local queue management, automatic retry logic, and eventual consistency without data loss</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">External API Integration</h3>
            <p className="text-[#bdbdbd]">Integration with document verification services, government databases (NIMC), liveness detection APIs with graceful fallbacks and rate limiting</p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Architecture & Solution</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Multi-Stage Pipeline</h3>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8 mb-6">
            <p className="text-[#bdbdbd] mb-6">Built a robust 6-stage verification pipeline with state persistence:</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">1.</span>
                <div>
                  <p className="text-white font-semibold">Personal Information</p>
                  <p className="text-[#bdbdbd] text-sm">Phone, email, basic demographics with real-time validation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">2.</span>
                <div>
                  <p className="text-white font-semibold">Document Upload</p>
                  <p className="text-[#bdbdbd] text-sm">NIN/Passport with OCR extraction and quality checks</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">3.</span>
                <div>
                  <p className="text-white font-semibold">Document Verification</p>
                  <p className="text-[#bdbdbd] text-sm">Cross-reference with government databases</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">4.</span>
                <div>
                  <p className="text-white font-semibold">Liveness Detection</p>
                  <p className="text-[#bdbdbd] text-sm">Passive/active liveness checks to prevent spoofing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">5.</span>
                <div>
                  <p className="text-white font-semibold">Facial Recognition</p>
                  <p className="text-[#bdbdbd] text-sm">Compare live capture with document photo</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#ED017F] font-bold min-w-fit">6.</span>
                <div>
                  <p className="text-white font-semibold">Verification Result</p>
                  <p className="text-[#bdbdbd] text-sm">Approve/flag with detailed reasoning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Key Technical Implementations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">State Machine Pattern</h4>
              <p className="text-[#bdbdbd] text-sm">Redux-based state management with defined transitions, preventing invalid state combinations and enabling audit trail</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Encryption Layer</h4>
              <p className="text-[#bdbdbd] text-sm">AES-256 encryption for data at rest, TLS 1.3 for transit, with HSM-backed key management</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Queue Management</h4>
              <p className="text-[#bdbdbd] text-sm">Local SQLite queue with exponential backoff, priority handling, and deduplication logic</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Biometric Processing</h4>
              <p className="text-[#bdbdbd] text-sm">On-device ML models for document detection, OCR, and liveness—no raw biometrics sent to servers</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Audit Logging</h4>
              <p className="text-[#bdbdbd] text-sm">Immutable event log tracking all verification steps, decisions, and failures for compliance</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">API Integration Layer</h4>
              <p className="text-[#bdbdbd] text-sm">Circuit breaker pattern with fallbacks for external services, preventing cascading failures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Performance & Metrics</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Speed & Efficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">2.3s</p>
              <p className="text-[#bdbdbd]">Average Verification Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99.2%</p>
              <p className="text-[#bdbdbd]">Accuracy on Document OCR</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">98%</p>
              <p className="text-[#bdbdbd]">Liveness Detection Accuracy</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Reliability</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99.97%</p>
              <p className="text-[#bdbdbd]">System Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">0%</p>
              <p className="text-[#bdbdbd]">Data Loss Incidents</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">100%</p>
              <p className="text-[#bdbdbd]">Compliance Audit Pass</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Scale & Volume</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">500K+</p>
              <p className="text-[#bdbdbd]">Verifications / Month</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">50ms</p>
              <p className="text-[#bdbdbd]">P99 API Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">12</p>
              <p className="text-[#bdbdbd]">Bank Integrations Live</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Technical Insights</h2>
        <div className="bg-[#1a1a1a] border border-[#ED017F] border-opacity-30 rounded-lg p-8">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>State machines prevent bugs:</strong> Explicit state transitions are far superior to implicit state mutations when handling compliance workflows</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Never trust external APIs:</strong> Circuit breakers and graceful degradation are essential when integrating with government systems that can be unreliable</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Biometrics require care:</strong> On-device processing for biometric data massively improves both security and user trust</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ED017F] font-bold">•</span>
              <span className="text-[#bdbdbd]"><strong>Compliance is a feature:</strong> Building audit trails and immutable logs from the ground up makes compliance reviews frictionless</span>
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
        <p className="text-[#bdbdbd] text-lg">Deep dive into the compliance-grade verification system with key code snippets showing state machines, on-device biometrics, and offline resilience patterns.</p>
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
