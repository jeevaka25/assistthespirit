import { Link } from 'react-router-dom';
import { Play, ExternalLink } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const podcasts = [
  {
    title: 'Man Dies and Merges into Infinity During Amazing Near-Death Experience',
    description:
      'Jonathan led an ordinary life until his NDE in which he was made very aware that while his body was dying, his consciousness and his true self were very much awake and alive. These days Jonathan is a spiritual teacher and healer and in this episode he shares his remarkable journey and some of the incredible insights he has gained from it.',
    platform: 'Conscious Conversations Podcast',
    host: 'Christina Renee',
    embedUrl: null,
    externalUrl: '#',
  },
];

export default function Podcasts() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/podcast-setup.jpg"
            alt="Podcast recording setup"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream" />
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                Spiritual Podcasts
              </h1>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                Jonathan shares his journey and insights through conversations on various
                spiritual podcasts.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Podcasts List */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {podcasts.map((podcast, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Play Button / Thumbnail */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gold/10 rounded-xl flex items-center justify-center">
                          <Play className="w-10 h-10 lg:w-12 lg:h-12 text-gold" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-gold/10 rounded-full text-gold font-body text-xs uppercase tracking-wider mb-3">
                            {podcast.platform}
                          </span>
                          <h2 className="font-display text-xl lg:text-2xl text-charcoal mb-2">
                            {podcast.title}
                          </h2>
                          <p className="font-body text-sm text-charcoal-light">
                            Hosted by {podcast.host}
                          </p>
                        </div>

                        <p className="font-body text-charcoal-light leading-relaxed mb-6">
                          {podcast.description}
                        </p>

                        <a
                          href={podcast.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-body text-sm transition-colors"
                        >
                          Listen Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {podcasts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-charcoal-light">
                  Podcast episodes coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <div className="relative">
              <span className="absolute -top-8 left-0 font-display text-8xl text-gold/20 leading-none">
                "
              </span>
              <span className="absolute -bottom-16 right-0 font-display text-8xl text-gold/20 leading-none">
                "
              </span>

              <blockquote className="relative z-10">
                <p className="font-display text-xl sm:text-2xl text-charcoal leading-relaxed italic mb-8">
                  It took him many years to understand his experience, and eventually began
                  offering what he calls "healing by Divine Principle" and teaches people
                  about the importance of understanding the illusory nature of the usual
                  dimensions and that we are actually One with All.
                </p>
                <footer className="font-body text-sm text-charcoal-light">
                  <cite className="not-italic">– Conscious Conversations Podcast</cite>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Open the Doorway Within
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Subscribe to receive the FREE Ebook & Guided Meditation, plus updates on new
              podcast appearances.
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

      {/* Articles CTA */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Prefer to Read?
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Explore Jonathan's written teachings and articles.
            </p>
            <Link to="/teachings" className="btn-secondary">
              Explore Articles
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
