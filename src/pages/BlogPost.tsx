import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPostBySlug, getRelatedPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return <Navigate to="/teachings" replace />;
  }

  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <section className="py-6 bg-cream border-b border-charcoal/10">
        <div className="section-padding">
          <Link
            to="/teachings"
            className="inline-flex items-center gap-2 font-body text-sm text-charcoal-light hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Teachings
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-gold/10 rounded-full text-gold font-body text-xs uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments} Comments
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-charcoal">{post.author}</p>
                  <p className="font-body text-xs text-charcoal-light">Spiritual Teacher</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 lg:py-16 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                    return (
                      <blockquote
                        key={index}
                        className="font-display text-xl text-charcoal italic border-l-4 border-gold pl-6 my-8"
                      >
                        {paragraph.slice(1, -1)}
                      </blockquote>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="font-body text-charcoal-light leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </ScrollReveal>
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

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-cream">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal animation="fadeUp">
                <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-10 text-center">
                  Related Articles
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollReveal key={relatedPost.slug} animation="fadeUp" delay={index * 0.1}>
                    <BlogCard
                      title={relatedPost.title}
                      excerpt={relatedPost.excerpt}
                      date={relatedPost.date}
                      category={relatedPost.category}
                      slug={relatedPost.slug}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
