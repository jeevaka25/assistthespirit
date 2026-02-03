import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        transitionTimingFunction: 'var(--ease-ethereal)',
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-charcoal-light leading-relaxed">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          <span className="font-body text-sm font-medium">Learn More</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Link>
  );
}
