import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  slug,
  image,
}: BlogCardProps) {
  return (
    <article className="group">
      <Link to={`/blog/${slug}`} className="block">
        {/* Image */}
        {image && (
          <div className="relative overflow-hidden rounded-xl mb-5 aspect-[16/10]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              style={{ transitionTimingFunction: 'var(--ease-ethereal)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        {/* Content */}
        <div className="space-y-3">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm">
            <span className="font-body text-gold">{category}</span>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span className="font-body text-charcoal-light">{date}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-sm text-charcoal-light leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Read more */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 font-body text-sm text-gold group-hover:gap-3 transition-all duration-300">
              Read More
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
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
