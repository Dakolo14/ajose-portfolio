import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "../components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ajose Damilare | Expert Web Designer & Developer",
  description: "Ajose Damilare is a top-tier Web Designer and Developer specializing in creating affordable, high-converting websites and digital products. Hire the best product designer to scale your revenue.",
  keywords: ["Best Web Designer", "Hire Web Developer", "Affordable Websites", "Product Designer", "Ajose Damilare", "UI/UX Expert", "Frontend Developer", "Nigeria", "Lagos", "Hire UI/UX Designer"],
  verification: {
    google: "RpdMl-47Eio6iL8qhkc2uusr8nrG7g3b4uEm3jtGo8c",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ajose Damilare | Expert Web Designer & Developer",
    description: "Looking for the best web designer and developer? Ajose Damilare builds affordable, high-converting digital products designed to scale revenue.",
    url: "https://ajose-portfolio.vercel.app",
    siteName: "Ajose Damilare Portfolio",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Ajose Damilare - Expert Web Designer & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajose Damilare | Expert Web Designer & Developer",
    description: "Looking for the best web designer and developer? Ajose Damilare builds affordable, high-converting digital products designed to scale revenue.",
    images: ["/preview.png"],
    creator: "@PrettyboyAJ14",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    shortcut: ['/favicon/favicon.ico'],
  },
  manifest: '/favicon/site.webmanifest',
};

// JSON-LD Schema for AI Crawlers and Rich Search Results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ajose Damilare",
  "url": "https://ajose-portfolio.vercel.app",
  "image": "https://ajose-portfolio.vercel.app/profile-img.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/ajose-damilare-643189169/",
    "https://x.com/PrettyboyAJ14"
  ],
  "jobTitle": "Expert Web Designer & Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance / Konga Group / CeraVe"
  },
  "description": "Top-tier Web Designer and Developer specializing in creating affordable, high-converting websites and digital products designed to scale business revenue.",
  "knowsAbout": ["Web Design", "Frontend Development", "UI/UX Design", "Affordable Websites", "High-converting Interfaces", "Product Strategy"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
