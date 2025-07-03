import Image from "next/image";
import Link from "next/link";

export default function BetInn() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Bet-Inn</h1>
      <Image src="/file.svg" alt="Bet-Inn" width={120} height={120} className="mb-4" />
      <p className="mb-4">Project details for Bet-Inn go here.</p>
      <Link href="/work" className="text-[#ED017F] underline">Back to Work</Link>
    </div>
  );
} 