'use client';
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  subtitle,
  description,
  href,
  className = "",
  accentColor = "#ED017F",
  thumbnail,
}: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  className?: string;
  accentColor?: string;
  thumbnail?: string;
}) {
  return (
    <Link
      href={href}
      className={`block group rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[length:var(--shadow-color)] animate-slideInUp ${className}`}
      style={{ '--shadow-color': `${accentColor}1a` } as React.CSSProperties & { '--shadow-color': string }}
      tabIndex={0}
    >
      <div
        className="relative w-full aspect-[1336/1002] overflow-hidden rounded-xl bg-gradient-to-br from-[#222222] via-[#181818] to-[#121212] border border-[#282828] transition-all duration-300 group-hover:border-[#383838] group-hover:ring-1 group-hover:ring-white/10 mb-3 flex items-center justify-center"
      >
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span
              className="w-3 h-3 rounded-full mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono text-[11px] text-[#6a6a6a] uppercase tracking-widest line-clamp-1">
              {title}
            </span>
          </div>
        )}
      </div>
      <div
        className="text-white font-semibold mb-1 transition-colors duration-300"
        style={{ color: 'white' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
      >
        {title}
      </div>
      <div className="text-xs text-[#bdbdbd] mb-1 transition-colors duration-300">{subtitle}</div>
      <div className="text-xs text-[#888888] transition-colors duration-300 group-hover:text-[#ededed] leading-relaxed line-clamp-2">{description}</div>
    </Link>
  );
}
