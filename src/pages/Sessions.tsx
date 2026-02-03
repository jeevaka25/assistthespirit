import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { testimonials } from '@/data/testimonials';

export default function Sessions() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/healing-sessions.jpg"
            alt="Healing energy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream" />
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                One-On-One Sessions
              </h1>
              <p className="font-display text-xl text-gold italic mb-6">
                "Oneness is whole, and what is whole is healed."
              </p>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                Jonathan meets with people individually in person, and via phone and Zoom.
                Other platforms are possible as well.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="space-y-12">
                {/* What do you call this healing modality? */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="font-display text-2xl text-charcoal mb-4">
                    What do you call this healing modality?
                  </h2>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    <strong className="text-charcoal">Jonathan:</strong> "I call it 'healing
                    by Divine Principle.'"
                  </p>
                </div>

                {/* What happens in a private session? */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="font-display text-2xl text-charcoal mb-4">
                    What happens in a private session?
                  </h2>
                  <p className="font-body text-charcoal-light leading-relaxed mb-4">
                    <strong className="text-charcoal">Jonathan:</strong> "In a healing
                    encounter, the divine in one person connects with the divine in the other
                    and recognizes that it is the same; that there is no difference, that it
                    is ONE. Some experiential awareness of that oneness – or wholeness –
                    'rises up' and is experienced in ways that work for whomever is
                    experiencing it."
                  </p>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    "Sometimes this takes the form of physical healing, frequently as a
                    psycho-spiritual healing, and often as a deep, gentle stillness. People
                    often report vivid inner experiences, energetic surges, energetic
                    quietude, or report 'I just feel good!' They frequently find it hard to
                    put their experience into words."
                  </p>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="font-display text-2xl text-charcoal mb-4">Requirements?</h2>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    None, really. It is preferable to be sitting as comfortably as possible,
                    in a quiet place. If you have questions or concerns it's best to be very
                    succinct; to "boil them down" to their essence, with a minimum of
                    story-telling. To whatever degree is possible, let go of expectations.
                  </p>
                </div>

                {/* In-person sessions */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <p className="font-body text-charcoal-light leading-relaxed">
                    When sessions are done in person, Jonathan often asks permission to place
                    a hand on the person's head for a few minutes. It is not strictly
                    necessary at all, but often seems to facilitate the experience.
                  </p>
                </div>

                {/* More info */}
                <div className="bg-cream-dark rounded-2xl p-8">
                  <h3 className="font-display text-xl text-charcoal mb-4">
                    For More Information On Healing & How It Works
                  </h3>
                  <p className="font-body text-charcoal-light mb-4">
                    Please explore these short pieces:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/blog/what-is-whole-is-healed"
                      className="text-gold hover:text-gold-dark font-body text-sm underline underline-offset-4"
                    >
                      What Is Whole Is Healed
                    </Link>
                    <Link
                      to="/blog/how-does-healing-happen"
                      className="text-gold hover:text-gold-dark font-body text-sm underline underline-offset-4"
                    >
                      How Does Healing Happen?
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Book a private session with Jonathan and experience the transformative power
              of healing by Divine Principle.
            </p>
            <a
              href="https://assistthespirit.as.me/schedule/aba91061/appointment/10538953/calendar/3051148?appointmentTypeIds[]=10538953"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book A Session
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* More About Sessions */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-8 text-center">
                More About Private Divine Energy Healing Sessions
              </h2>

              <blockquote className="font-display text-xl text-charcoal italic border-l-4 border-gold pl-6 mb-8">
                "As an expression of purely divine principle, the gift offered is always the
                same and always maximal. It follows that it has nothing to do with 'Jonathan'
                as an individual ego or self. Thus, when this is received through the unique
                filter of another person, the experience that results is unique to that
                person."
              </blockquote>

              <p className="font-body text-charcoal-light leading-relaxed mb-6">
                "Often (though not always) during these healing encounters, intuitive
                information appears that can then be discussed and becomes part of the
                healing. Frequently, people experience 'ripple effects' of their healing
                encounter over the subsequent days in the form of insights, powerful dreams,
                revelations, inspirations, and clearer connection with their own inner
                guidance. In short, people find a greater connection with the divine."
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
                  The first amazing thing was that when you said my name and pointed out how
                  quiet it was… that is when I realized I wasn't thinking about anything. I
                  just was. It was quiet, and peaceful. I didn't want you to remove your hand
                  from my head!
                </p>
                <footer className="font-body text-sm text-charcoal-light">
                  <cite className="not-italic">
                    – {testimonials[2].author} – {testimonials[2].location}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              If It Resonates, You're Invited To Get In Touch:
            </h2>
            <Link to="/contact" className="btn-primary">
              Contact Me Here
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
