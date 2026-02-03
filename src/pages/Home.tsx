import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Calendar, BookOpen } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ServiceCard from '@/components/cards/ServiceCard';
import { testimonials } from '@/data/testimonials';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroImageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 }
      )
        .fromTo(
          '.hero-headline span',
          { y: 60, opacity: 0, rotateX: 15 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1 },
          '-=1.5'
        )
        .fromTo(
          '.hero-subheadline',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        );

      // Hero scroll parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (heroImageRef.current) {
            gsap.set(heroImageRef.current, {
              y: self.progress * 100,
              scale: 1 + self.progress * 0.1,
            });
          }
          if (heroContentRef.current) {
            gsap.set(heroContentRef.current, {
              y: self.progress * -80,
              opacity: 1 - self.progress * 1.5,
            });
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 z-0"
          style={{ willChange: 'transform' }}
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Serene lake with mountain reflection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/80" />
        </div>

        {/* Floating Orbs */}
        {!prefersReducedMotion && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/10 blur-3xl animate-float" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gold/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </>
        )}

        {/* Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 section-padding w-full max-w-5xl mx-auto text-center pt-20"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="hero-headline font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
            <span className="inline-block">There is a spark</span>{' '}
            <span className="inline-block">that lights up</span>{' '}
            <span className="inline-block">our deepest being,</span>
            <br className="hidden md:block" />
            <span className="inline-block">where our original oneness</span>{' '}
            <span className="inline-block">has always been whole.</span>
          </h1>

          <p className="hero-subheadline font-body text-base sm:text-lg text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome! Jonathan travels, writes, creates media, and meets with people
            to share what's been received. His essential function is to help remove
            the blocks to awareness of our deepest being.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/sessions" className="btn-primary">
              Book a Session
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-charcoal/50 rounded-full animate-bounce-subtle" />
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <div className="relative">
              {/* Quote Marks */}
              <span className="absolute -top-8 left-0 font-display text-8xl text-gold/20 leading-none">
                "
              </span>
              <span className="absolute -bottom-16 right-0 font-display text-8xl text-gold/20 leading-none">
                "
              </span>

              <blockquote className="relative z-10">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-charcoal leading-relaxed italic mb-8">
                  {testimonials[0].quote}
                </p>
                <footer className="font-body text-sm text-charcoal-light">
                  <cite className="not-italic">
                    – {testimonials[0].author} – {testimonials[0].location}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Ebook CTA Section */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <ScrollReveal animation="slideLeft">
                <div className="space-y-6">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal">
                    Open the Doorway Within
                  </h2>
                  <p className="font-display text-xl text-gold">
                    FREE Ebook & Guided Meditation
                  </p>
                  <p className="font-body text-charcoal-light leading-relaxed max-w-md">
                    Begin your journey to inner peace with this complimentary resource.
                    Discover practices that have helped thousands find stillness and clarity.
                  </p>
                  <a
                    href="https://jonathanvanvalin.us11.list-manage.com/subscribe?u=26436e53b7da3b1c7858cf723&id=07767656bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Get Yours Now
                  </a>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal animation="slideRight" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/images/ebook-meditation.jpg"
                      alt="Meditation practice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-8">
              If It Resonates, You're Invited To Get In Touch:
            </h2>
            <Link to="/contact" className="btn-primary">
              Contact Me Here
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <ScrollReveal animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
                  How I Can Help
                </h2>
                <p className="font-body text-charcoal-light max-w-xl mx-auto">
                  Jonathan is delighted to be helpful wherever he can be, including via the links below!
                </p>
              </div>
            </ScrollReveal>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <ServiceCard
                  icon={Users}
                  title="Sessions"
                  description="One-on-one healing and guidance sessions, available in person, via phone, or Zoom."
                  href="/sessions"
                />
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <ServiceCard
                  icon={Calendar}
                  title="Events"
                  href="/events"
                  description="Group meditation gatherings, workshops, and spiritual events both in person and online."
                />
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <ServiceCard
                  icon={BookOpen}
                  title="Teachings"
                  href="/teachings"
                  description="Articles, videos, podcasts, and insights to support your spiritual journey."
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
