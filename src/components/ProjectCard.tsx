import Link from "next/link";

export default function ProjectCard({ title, subtitle, description, href, className = "" }: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`block group rounded-xl transition-shadow hover:shadow-lg ${className}`}
      tabIndex={0}
    >
      <div className="text-white font-semibold mb-1 transition-colors">{title}</div>
      <div className="text-xs text-[#bdbdbd] mb-2">{subtitle}</div>
      <div className="text-sm text-[#bdbdbd]">{description}</div>
      <div className="bg-black rounded-xl mt-4" style={{ width: '100%', aspectRatio: '16 / 9' }} />
    </Link>
  );
} 