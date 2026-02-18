'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KongaGroupEngineeringProject() {
  const [showCodeModal, setShowCodeModal] = useState(false);

  const codeSnippets = [
    {
      filename: "component-system.ts",
      language: "typescript",
      code: `// Compound component pattern for flexibility
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  const styles = combineStyles([
    buttonBaseStyles,
    variantStyles[variant],
    sizeStyles[size]
  ]);
  
  return <button className={styles} {...props} />;
};

// Enables composition like:
// <Button variant="primary" size="lg">
//   Click me
// </Button>`
    },
    {
      filename: "design-tokens.json",
      language: "json",
      code: `{
  "colors": {
    "base": {
      "primary": "#ED017F",
      "secondary": "#60a5fa",
      "neutral": "#181818"
    },
    "semantic": {
      "success": "#10b981",
      "error": "#ef4444",
      "warning": "#f59e0b"
    }
  },
  "typography": {
    "h1": { "fontSize": "2.5rem", "fontWeight": 700 },
    "body": { "fontSize": "1rem", "fontWeight": 400 },
    "caption": { "fontSize": "0.75rem", "fontWeight": 500 }
  },
  "spacing": {
    "xs": "0.5rem", "sm": "1rem", "md": "1.5rem",
    "lg": "2rem", "xl": "3rem"
  }
}`
    },
    {
      filename: "theme-provider.tsx",
      language: "typescript",
      code: `// Theme system supporting vendor customization
import { ThemeProvider } from 'styled-components';

interface ThemeConfig {
  vendorId: string;
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
}

export const createVendorTheme = (config: ThemeConfig) => {
  return {
    ...defaultTokens,
    colors: {
      ...defaultTokens.colors,
      primary: config.primaryColor || defaultTokens.colors.primary,
      secondary: config.secondaryColor || defaultTokens.colors.secondary
    },
    fonts: {
      body: config.fontFamily || defaultTokens.fonts.body
    }
  };
};

// Usage in vendor storefront
export const VendorStorefront = ({ vendorId }: Props) => {
  const theme = createVendorTheme(getVendorBranding(vendorId));
  return (
    <ThemeProvider theme={theme}>
      <StorefrontLayout />
    </ThemeProvider>
  );
};`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-4 inline-block">← Back to Work</Link>
        <h1 className="text-5xl font-bold text-white mb-4">Konga Group</h1>
        <p className="text-[#bdbdbd] text-lg mb-8">Component system and design tokens architecture for vendor storefronts at scale</p>
        
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#232323]">
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-white font-semibold">Frontend Architect</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold">3 Months</p>
          </div>
          <div>
            <p className="text-[#bdbdbd] text-xs uppercase tracking-widest mb-2">Vendors</p>
            <p className="text-white font-semibold">12K+</p>
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
          <Image src="/file.svg" alt="Konga Group Preview" width={120} height={120} className="mx-auto mb-4 opacity-50" />
          <p className="text-[#bdbdbd]">Project Preview</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          Konga Group is a component system and design tokens architecture built to enable 12K+ vendor storefronts to share UI patterns while maintaining brand consistency and flexibility.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed mb-4">
          As Frontend Architect, I designed and implemented a composable component library with design tokens, enabling vendors to build storefronts without duplicating code or making styling decisions.
        </p>
        <p className="text-[#bdbdbd] text-lg leading-relaxed">
          The system needed to balance consistency (visual uniformity) with customization (vendor branding), all while maintaining performance across high-latency connections used by mobile shoppers.
        </p>
      </section>

      {/* Technical Challenge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Engineering Challenges</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Component Composition at Scale</h3>
            <p className="text-[#bdbdbd]">Creating reusable, composable components that 12K+ teams could use without modification, while allowing vendor-specific customization through props and design tokens</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Design tokens & CSS Architecture</h3>
            <p className="text-[#bdbdbd]">Managing hundreds of design tokens (colors, spacing, typography, shadows) in a way that scales across themes and vendor customizations</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Bundle Size & Performance</h3>
            <p className="text-[#bdbdbd]">Keeping the component library small (&lt;50KB) while supporting 40+ components without hurting mobile performance</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8">
            <h3 className="text-[#ED017F] font-semibold text-lg mb-3">Version Management & Backward Compatibility</h3>
            <p className="text-[#bdbdbd]">Updating components without breaking 12K+ vendor implementations that depend on them</p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Architecture & Solution</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Component System</h3>
          <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-8 mb-6">
            <p className="text-[#bdbdbd] mb-6">Built a 40-component library organized into 5 categories:</p>
            <div className="space-y-3 text-[#bdbdbd]">
              <p>• <strong>Primitives:</strong> Button, Input, Card, Badge (foundational building blocks)</p>
              <p>• <strong>Layout:</strong> Grid, Container, Flex, Stack (structural components)</p>
              <p>• <strong>Feedback:</strong> Toast, Modal, Alert, Spinner (user feedback)</p>
              <p>• <strong>Forms:</strong> TextField, Select, Checkbox, DatePicker (input components)</p>
              <p>• <strong>Ecommerce:</strong> ProductCard, CartItem, PriceDisplay, RatingCard (domain-specific)</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Design Token System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Color Tokens</h4>
              <p className="text-[#bdbdbd] text-sm">Base, semantic, and component tokens enabling theme switching and vendor branding</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Typography Tokens</h4>
              <p className="text-[#bdbdbd] text-sm">Scale-based system (h1-h6, body, caption) with mobile/desktop variants</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Spacing Scale</h4>
              <p className="text-[#bdbdbd] text-sm">8px base unit for consistent spacing and rhythm across all components</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-3">Shadow & Elevation</h4>
              <p className="text-[#bdbdbd] text-sm">3-level elevation system (subtle, medium, prominent) for depth and hierarchy</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-6">Key Technical Decisions</h3>
          <div className="space-y-4">
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-2">CSS-in-JS with atomic styles</h4>
              <p className="text-[#bdbdbd] text-sm">Emotion library for scoped styling, tree-shaking unused styles, and minimal bundle bloat</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-2">Compound Components Pattern</h4>
              <p className="text-[#bdbdbd] text-sm">Allowing flexibility through composition rather than prop explosion, enabling vendors to build custom layouts</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-6">
              <h4 className="text-[#ED017F] font-semibold mb-2">Storybook for documentation</h4>
              <p className="text-[#bdbdbd] text-sm">Interactive component documentation enabling developers and designers to understand capabilities and usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Impact & Metrics</h2>
        
        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Development Efficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">60%</p>
              <p className="text-[#bdbdbd]">Faster Storefront Development</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">40</p>
              <p className="text-[#bdbdbd]">Reusable Components</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">300+</p>
              <p className="text-[#bdbdbd]">Design Tokens</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Quality & Consistency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">95%</p>
              <p className="text-[#bdbdbd]">Visual Consistency Score</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">99%</p>
              <p className="text-[#bdbdbd]">A11y Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">45KB</p>
              <p className="text-[#bdbdbd]">Gzipped Bundle Size</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#ED017F] font-semibold text-lg mb-6">Vendor Adoption</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">12K+</p>
              <p className="text-[#bdbdbd]">Vendors Using System</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">87%</p>
              <p className="text-[#bdbdbd]">Component Usage Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#ED017F] mb-2">0</p>
              <p className="text-[#bdbdbd]">Breaking Changes in 2 Years</p>
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
        <p className="text-[#bdbdbd] text-lg">Deep dive into the component system with key code snippets showing the design token architecture and composition patterns.</p>
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
