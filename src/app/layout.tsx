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
  title: "Ajose Damilare | Web Designer & Developer",
  description: "Portfolio of Ajose Damilare, an expert Web Designer & Developer creating affordable, high-converting websites and digital products designed to scale revenue.",
  keywords: ["Web Designer", "Web Developer", "Affordable Websites", "Product Designer", "Ajose Damilare", "UI/UX Designer", "Frontend Developer", "Nigeria"],
  verification: {
    google: "RpdMl-47Eio6iL8qhkc2uusr8nrG7g3b4uEm3jtGo8c",
  },
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
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
