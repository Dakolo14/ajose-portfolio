'use client';
import Link from "next/link";

export default function ProjectCard({ title, subtitle, description, href, className = "", accentColor = "#ED017F" }: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  className?: string;
  accentColor?: string;
}) {
  return (
    <Link href={href} className={`block group rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[length:var(--shadow-color)] animate-slideInUp ${className}`}
      style={{ '--shadow-color': `${accentColor}1a` } as React.CSSProperties & { '--shadow-color': string }}
      tabIndex={0}
    >
      <div 
        className="text-white font-semibold mb-1 transition-colors duration-300" 
        style={{ color: 'white' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
      >
        {title}
      </div>
      <div className="text-xs text-[#bdbdbd] mb-2 transition-colors duration-300">{subtitle}</div>
      <div className="text-sm text-[#bdbdbd] transition-colors duration-300 group-hover:text-[#ededed]">{description}</div>
      <div className="bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-xl mt-4 transition-all duration-300 group-hover:from-[#2a2a2a] group-hover:to-[#1f1f1f]" style={{ width: '100%', aspectRatio: '16 / 9' }} />
    </Link>
  );
} 