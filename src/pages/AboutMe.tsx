import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { testimonials } from '@/data/testimonials';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 bg-cream overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal animation="slideLeft">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/images/jonathan-portrait.jpg"
                      alt="Jonathan Van Valin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
                </div>
              </ScrollReveal>

              {/* Content */}
              <div className="about-hero-content">
                <ScrollReveal animation="slideRight" delay={0.2}>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                    About Jonathan Van Valin
                  </h1>
                  <p className="font-body text-charcoal-light leading-relaxed mb-6">
                    Jonathan has led an outwardly ordinary life, during which a long series
                    of inner events pointed him towards relinquishing much of that life in
                    favor of awakening and a radical falling away of egoic self. And yet
                    outwardly, life still looks rather ordinary.
                  </p>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    Briefly in his own words:
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="prose prose-lg max-w-none">
                <blockquote className="font-display text-xl sm:text-2xl text-charcoal italic border-l-4 border-gold pl-6 mb-8">
                  "I grew up in suburban middle-class Seattle, spending much of my youth
                  immersed in music and assorted outdoorsy and athletic pursuits. My family
                  was kind of a mess. By 17, I'd managed to earn many musical accolades and
                  get kicked out of high school and arrested for a prank that went rather
                  awry."
                </blockquote>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "I went to college though, devoting myself to training in my first instrument
                  as a concert pianist; graduating with a music degree. Pivoting immediately to
                  entrepreneurial pursuits, I spent much of my 20's and 30's self-employed. In
                  retrospect, I'd say I was simply trying my best to work out how to function
                  effectively in the world. There were moderate successes and an ordinary amount
                  of failures along the way. I also had a tendency to go traveling across
                  continents, including a stint living in Italy."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "Throughout all of this, an inner search for real truth ramped up, mostly
                  unrevealed to those around me, which eventually became quietly yet ferociously
                  all-consuming. Long periods of silence were sought as I inquired deeply into
                  the nature of who or what was at the core of being."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "Many transformative spiritual experiences (STE's) or 'awakening' experiences
                  occurred during these years. Among them a near-death experience (NDE) at the
                  age of 29 that illuminated what it was like to relinquish the body, understand
                  the illusory nature of the usual dimensions and become One with All."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "In 2011 I left regular life entirely for a long self-directed retreat in a
                  tiny village in the remote highlands of Guatemala. There, I went through a
                  sort of 'final' doorway, in which the falling away of egoic self became the
                  permanently abiding ground of being."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "For over a year following, back in Seattle, I was hardly inclined to talk at
                  all; mostly doing so only when absolutely necessary. And although the ordinary
                  willingness to talk eventually returned, I still sat in a pleasant silence
                  often, worked a little, and ultimately left again to wander quietly around
                  Asia, Africa, and the U.S."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "People began to occasionally seek me out, or ask me to speak or teach about
                  my experiences. Along the way, an inner prompt revealed a subtle healing
                  ability, often assisted by touching someone on their head. But most of the
                  time, unless asked quite directly, my natural tendency was to reveal nothing
                  of my own experiences or gifts."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  "But that eventually shifted too. Over the past few years, the inner prompt
                  to share what's been received has become the prime mover of life. There's no
                  one here, and yet what does remain is so ordinary. When everything appears
                  divine, nothing really stands out as particularly special."
                </p>

                <p className="font-body text-charcoal-light leading-relaxed">
                  "I am happy to be in service and bend towards joy. The essential function –
                  it seems, as I walk along my own journey – is to help others remove blocks to
                  their own awareness of their deepest being… and to live from the peace that
                  pours forth; even though it is sometimes a bumpy road."
                </p>

                <p className="font-display text-xl text-charcoal mt-8">
                  Let's go together towards home.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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
                  Whenever I have sat with Jonathan as he shares the still, sweet water of
                  inner peace and goodness, my heart unfurls with this most trustworthy and
                  gentle guide.
                </p>
                <footer className="font-body text-sm text-charcoal-light">
                  <cite className="not-italic">
                    – {testimonials[3].author} – {testimonials[3].location}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Open the Doorway Within
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              FREE Ebook & Guided Meditation - Get Yours Now
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://jonathanvanvalin.us11.list-manage.com/subscribe?u=26436e53b7da3b1c7858cf723&id=07767656bd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Your Free Ebook
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Me Here
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
