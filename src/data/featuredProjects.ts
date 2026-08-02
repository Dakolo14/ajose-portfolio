export const CERAVE_BLUE = "#005994";

export interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  accentColor?: string;
  thumbnail?: string;
  active?: boolean;
  category: "design" | "engineering";
}

export const featuredProjects: FeaturedProject[] = [
  // Design Projects
  {
    title: "Konga WorkStation",
    subtitle: "User Interface Design & Brand Strategy",
    description: "Enterprise workspace and Shop-in-Shop brand partner ecosystem for Konga.",
    href: "/work/user-interface/konga-workstation",
    accentColor: "#ED017F",
    thumbnail: "/kongathumb.png",
    active: true,
    category: "design",
  },
  {
    title: "CeraVe CerAwards Campaign",
    subtitle: "Campaign Design & Experience",
    description: "Interactive awards campaign with gamification & public voting elements.",
    href: "/work/user-interface/cerave-cerawards",
    accentColor: CERAVE_BLUE,
    thumbnail: "/cerawards.png",
    active: true,
    category: "design",
  },
  {
    title: "Verselift",
    subtitle: "Product Design & Strategy",
    description: "Next-gen SaaS platform designed for operational management and revenue growth.",
    href: "/work/user-interface/verselift",
    accentColor: "#3b82f6",
    thumbnail: "/verseliftthumb.png",
    active: true,
    category: "design",
  },
  /* {
    title: "StatMind",
    subtitle: "Product Design & Strategy",
    description: "Analytics platform with intelligent insights and real-time dashboards.",
    href: "/work/user-interface/statmind",
    accentColor: "#5A6BFF",
    thumbnail: "/statmind.png",
    active: true,
    category: "design",
  }, */

  // Engineering Projects
  {
    title: "Bella Homes Ltd",
    subtitle: "Full-Stack Luxury Short-Let & Property Portal",
    description: "Hotel-grade booking engine with real-time availability search, multi-currency engine (NGN, USD, GBP), WhatsApp concierge integration, and isolated owner management portal.",
    href: "/work/engineering/bella-homes",
    accentColor: "#D4AF37",
    thumbnail: "/BellaHomes Thumbnail.png",
    active: true,
    category: "engineering",
  },
  {
    title: "CeraVe CerAwards Platform",
    subtitle: "Frontend & Platform Engineering",
    description: "Built the high-traffic voting platform for CeraVe's Nigerian debut campaign.",
    href: "/work/engineering/cerave-cerawards",
    accentColor: CERAVE_BLUE,
    thumbnail: "/cerawards.png",
    active: true,
    category: "engineering",
  },
  /* {
    title: "Konga FM Platform & Admin",
    subtitle: "Frontend & CMS Engineering",
    description: "Built the main web application and internal admin dashboard for Konga's media streaming platform.",
    href: "/work/engineering/konga-fm",
    accentColor: "#ED017F",
    active: true,
    category: "engineering",
  }, */
  {
    title: "Konga Group Engineering",
    subtitle: "Frontend Architecture & Systems",
    description: "Engineering leadership and UI development across Konga Group e-commerce ecosystem.",
    href: "/work/engineering/konga-group",
    accentColor: "#ED017F",
    thumbnail: "/kongagroupthumb.png",
    active: true,
    category: "engineering",
  },
  /* {
    title: "Konga Platform Rework",
    subtitle: "Performance & Architecture",
    description: "Complete platform restructuring, performance tuning, and scalable UI architecture.",
    href: "/work/engineering/konga-rework",
    accentColor: "#ED017F",
    active: true,
    category: "engineering",
  },
  {
    title: "KYC Interactive Form",
    subtitle: "Frontend Engineering",
    description: "Dynamic multi-step KYC verification workflow with real-time validation.",
    href: "/work/engineering/kyc-interactive-form",
    accentColor: "#22c55e",
    active: true,
    category: "engineering",
  }, */

  // Drafts
  {
    title: "Tradon App",
    subtitle: "Product Design",
    description: "Distribution management system for Nigerian FMCG brands.",
    href: "/work/user-interface/tradon-app",
    accentColor: "#22c55e",
    active: false,
    category: "design",
  },
];
