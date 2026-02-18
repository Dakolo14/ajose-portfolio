'use client';
import Image from "next/image";
import Link from "next/link";

export default function DriveHelpProject() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* Back Link */}
        <Link href="/work" className="text-[#ED017F] hover:underline text-sm mb-12 inline-block">← Back to Work</Link>
        
        {/* Coming Soon Content */}
        <div className="mb-12">
          <Image src="/file.svg" alt="DriveHelp" width={120} height={120} className="mx-auto mb-8 opacity-50" />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">DriveHelp</h1>
        <p className="text-[#bdbdbd] text-xl mb-8">Vehicle navigation & roadside assistance platform</p>

        <div className="bg-[#1a1a1a] border border-[#232323] rounded-lg p-12 mb-12">
          <p className="text-[#ED017F] text-lg font-semibold mb-4">Coming Soon</p>
          <p className="text-[#bdbdbd] text-lg leading-relaxed">
            This case study is currently in development. The detailed breakdown of design challenges, solutions, and impact metrics will be available soon.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/work" className="px-6 py-3 bg-[#232323] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors inline-block">
            View All Projects
          </Link>
          <Link href="/" className="px-6 py-3 bg-[#ED017F] text-white rounded-lg hover:bg-[#ff62b9] transition-colors inline-block">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
