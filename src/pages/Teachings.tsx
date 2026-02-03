import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import BlogCard from '@/components/cards/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const categories = [
  'All',
  'Articles',
  'Awakening',
  'Enlightenment',
  'Healing',
  'Intuition',
  'Life',
  'Trust',
];

export default function Teachings() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                Teachings
              </h1>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                Articles, insights, and reflections on awakening, healing, and the spiritual
                journey.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream border-y border-charcoal/10 sticky top-20 z-30">
        <div className="section-padding">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-white text-charcoal hover:bg-gold/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.slug} animation="fadeUp" delay={index * 0.1}>
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    slug={post.slug}
                  />
                </ScrollReveal>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-charcoal-light">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Open the Doorway Within
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Subscribe to receive the FREE Ebook & Guided Meditation, plus occasional
              teachings and updates.
            </p>
            <a
              href="https://jonathanvanvalin.us11.list-manage.com/subscribe?u=26436e53b7da3b1c7858cf723&id=07767656bd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Podcasts CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Prefer to Listen?
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Explore Jonathan's podcast appearances and audio teachings.
            </p>
            <Link to="/podcasts" className="btn-secondary">
              Explore Podcasts
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
