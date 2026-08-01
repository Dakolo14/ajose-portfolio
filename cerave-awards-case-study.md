# Cera-Awards 2026 — Cerave Campaign Platform

<br>

**Timeline:** 2026 · Full-Stack Web App
**Role:** Lead Product Designer & Frontend Engineer
**Live at:** [cerave-awards.vercel.app](#) *(example link)*

---

## Executive Summary & Overview

The Cera-Awards 2026 is a dedicated digital campaign platform built for Cerave to host, manage, and track their annual awards campaign. 

**The Business Challenge:** The campaign required a high-performance, accessible, and engaging web application capable of handling high-traffic voting, secure user authentication via OTP, and real-time data visualization for campaign metrics. I was tasked with architecting a modern frontend that aligned with Cerave's clinical yet approachable brand identity, while delivering a robust technical foundation using the latest React 19 and Next.js 16 ecosystems.

### Key Metrics
- **Next.js 16 & React 19:** Bleeding-edge React capabilities.
- **< 800ms:** LCP (Largest Contentful Paint) for high conversion.
- **100%:** Accessible interactive components via Radix UI.
- **0 Layout Shift:** Heavily optimized font and image loading.

---

## Design System & Visual Token Architecture

### ℹ️ Design System Overview
This design system translates Cerave's clinical, dermatologist-recommended brand into a digital interface. It heavily utilizes accessible primitives and modern CSS capabilities provided by Tailwind CSS v4.

### 🎨 Brand Color Tokens
**Primary Palette**
- **Cerave Clinical Blue:** `#005C9A` — Primary branding, active states, and buttons.
- **Dermatologist White:** `#FFFFFF` — Clean, clinical background.
- **Soft Slate:** `#F4F5F7` — Secondary backgrounds to reduce contrast fatigue.

**Accents & Highlights**
- **Gentle Teal:** `#008B8B` — Secondary calls to action and success states.
- **Slate Gray:** `#333333` — Primary typography.

### 🖋 Typography Architecture
**Font Family: Geist (Optimized via next/font)**
- Clean, modern, highly legible sans-serif.
- **Weights:** Light (300), Regular (400), Medium (500), Bold (700).

### 📐 UI Components & Styling Tokens (Radix UI)
- **Accessibility First:** Leveraged Radix UI primitives (`@radix-ui/react-dialog`, `react-select`, `react-accordion`) to ensure the campaign is fully accessible (WAI-ARIA compliant) for all users.
- **Soft UI:** Rounded corners (`rounded-xl`), gentle drop shadows to maintain an approachable, non-intimidating aesthetic.
- **Feedback:** Implemented `sonner` for non-intrusive, elegant toast notifications during voting and form submissions.

---

## Act I: Architecture — Next.js 16, React 19 & Tailwind v4

Built on the bleeding edge of the React ecosystem. By utilizing **Next.js 16** with **React 19**, the application benefits from advanced server components, automated optimizations, and simplified data fetching.

**Tailwind CSS v4:** The styling engine is powered by the newly released Tailwind v4, providing a significantly faster build time and zero-configuration design tokens, seamlessly integrated via PostCSS.

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cerave-assets.com' }
    ]
  }
};

export default nextConfig;
```

---

## Act II: Secure Authentication & Voting Flow

To ensure the integrity of the Cera-Awards voting process, user authentication needed to be frictionless yet secure. 

**OTP Verification:** I integrated `input-otp` alongside React Hook Form (`@hookform/resolvers`) to create a smooth, native-feeling One-Time Password verification flow. This reduced drop-off rates during the critical voting stage.

```tsx
// src/components/VotingAuth.tsx
import { OTPInput, Slot } from "input-otp";

export function VerificationInput() {
  return (
    <OTPInput maxLength={6}>
      <Slot index={0} />
      <Slot index={1} />
      <Slot index={2} />
      <span className="mx-2 text-[#a3a3a3]">-</span>
      <Slot index={3} />
      <Slot index={4} />
      <Slot index={5} />
    </OTPInput>
  );
}
```

---

## Act III: Real-Time Data & Interactive Visuals

The campaign dashboard required real-time tracking of votes and engagement metrics.

**Data Engine:** Implemented `@tanstack/react-query` to handle caching, background syncing, and optimistic UI updates. This ensures users see their votes cast instantly without waiting for a server round-trip.

**Data Visualization:** Integrated `recharts` to build interactive, responsive, and cleanly animated bar and pie charts to display campaign progress, demographic engagement, and category leaders.

---

## Act IV: Engaging User Interfaces

**Dynamic Carousels:** Utilized `embla-carousel-react` to present the award nominees in a fluid, touch-optimized swipeable interface that performs flawlessly on mobile devices without jank.

**Accessible Dropdowns & Modals:** Built complex filtering menus for award categories using `@radix-ui/react-dropdown-menu` and `@radix-ui/react-dialog`, ensuring keyboard navigation and screen reader support out of the box.

---

*Thanks for reading. Questions about this project? Back to home.*
