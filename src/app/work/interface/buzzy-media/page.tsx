import Image from "next/image";
import Link from "next/link";

export default function BuzzyMedia() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Buzzy Media</h1>
      <Image src="/file.svg" alt="Buzzy Media" width={120} height={120} className="mb-4" />
      <p className="mb-4">Project details for Buzzy Media go here.</p>
      <Link href="/work" className="text-[#ED017F] underline">Back to Work</Link>
    </div>
  );
} 