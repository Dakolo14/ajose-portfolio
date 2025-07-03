import Image from "next/image";
import Link from "next/link";

export default function KongaGroup() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Konga Group</h1>
      <Image src="/file.svg" alt="Konga Group" width={120} height={120} className="mb-4" />
      <p className="mb-4">Project details for Konga Group go here.</p>
      <Link href="/work" className="text-[#ED017F] underline">Back to Work</Link>
    </div>
  );
} 