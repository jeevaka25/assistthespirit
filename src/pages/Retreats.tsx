import { Calendar, MapPin, Users, Check } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Retreats() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/retreat-venue.jpg"
            alt="Retreat venue"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream" />
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <p className="font-body text-gold uppercase tracking-wider mb-4">
                Re-Inspect · Re-Cover · Re-Member · Go Beyond
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                Going Beyond Personality
              </h1>
              <p className="font-display text-xl text-charcoal mb-4">
                A 3-Day Enneagram & Embodied Spiritual Awareness Immersion
              </p>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                A 3-day intimate immersion spiritual retreat exploring life beyond habitual
                identity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
                  Are you ready to step beyond the familiar box of who you've taken yourself
                  to be?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  This intimate 3-day immersion invites you to re-inspect the early
                  conditioning and adaptive patterns — perfectionism, over-helping, control,
                  avoidance, relentless striving, or "not enough" stories — that quietly shape
                  your life and contribute to exhaustion, anxiety, or disconnection.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Using the Enneagram as a sacred mirror, this experience moves beyond
                  insight into embodied remembrance — supporting a felt reconnection with
                  presence, clarity, and inner stability.
                </p>

                <p className="font-display text-xl text-charcoal text-center my-8">
                  This is not about fixing yourself.
                  <br />
                  It is about remembering what lies beneath effort and identity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We'll Explore */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-10 text-center">
                What We'll Explore Together
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  'Re-Inspect personality patterns and core fears with compassion and clarity',
                  'Re-Cover embodied presence, nervous system balance, and inner stability',
                  'Re-Member what lies beneath identity through direct experience',
                  'Go Beyond automatic ways of being into lived awareness',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="font-body text-charcoal-light">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl text-charcoal mb-6">
                Practices Include:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Somatic inquiry & gentle Qi Gong movement',
                  'Breathwork & trauma-informed nervous system regulation',
                  'Meditation & vibrational sound',
                  'Nature connection & guided self-exploration',
                  'Simple, practical tools that integrate into daily life',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <p className="font-body text-charcoal-light text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Participants Experience */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-10 text-center">
                What Participants Often Experience
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'A softening in the body and deeper, freer breath',
                  'Quieter mental activity and more grounded presence',
                  'Renewed energy and natural confidence',
                  'A subtle inner "click" — practical tools that support clarity and settling',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="font-body text-charcoal-light">{item}</p>
                  </div>
                ))}
              </div>

              <p className="font-display text-lg text-charcoal text-center mt-10">
                This is not intellectual understanding alone.
                <br />
                It is a lived, natural inward opening to what you truly are.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-10 text-center">
                What's Included
              </h2>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Enneagram assessment to clarify your dominant type',
                    'Optional 30 minute Pre-immersion "Get to Know Your Type" exploration call',
                    '3-day in-person immersion with guided practices',
                    'On-the-spot integration support and facilitated group sharing',
                    'Space for reflection, rest, and nature immersion',
                    '1 x 30 – 60 minute Post-immersion integration call',
                    'Optional access to discounted extended coaching or inquiry programs',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <p className="font-body text-charcoal-light text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Retreat Details */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-10 text-center">
                Retreat Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-charcoal-light">Dates</p>
                        <p className="font-body text-charcoal">
                          Friday 6 March – Sunday 8 March, 2026
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-charcoal-light">Arrival</p>
                        <p className="font-body text-charcoal">10:00 – 11:00 am</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-charcoal-light">Departure</p>
                        <p className="font-body text-charcoal">After 15:30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-charcoal-light">Location</p>
                        <p className="font-body text-charcoal">Ecopsia Retreats, Shropshire, UK</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-charcoal-light">Group Size</p>
                        <p className="font-body text-charcoal">
                          Limited to 12 participants (men warmly welcome)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-display text-xl text-charcoal mb-4">
                    Facilitation & Support
                  </h3>
                  <p className="font-body text-charcoal-light leading-relaxed mb-4">
                    This immersion is guided by Belinda Anderson, Debbie Nicolls, and
                    Jonathan Van Valin, bringing together international experience in:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Enneagram & spiritual formation',
                      'Somatic and trauma-informed facilitation',
                      'Coaching, meditation, and embodied inquiry',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                        <span className="font-body text-charcoal-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-body text-charcoal-light mt-4">
                    You'll be held in a grounded, attentive, and supportive container.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
                Who This Is For
              </h2>
              <p className="font-body text-charcoal-light leading-relaxed mb-6">
                This immersion is for those who feel called to explore life beyond habitual
                identity and value depth, embodiment, and spiritual inquiry held with care.
              </p>
              <p className="font-body text-charcoal-light mb-8">
                No prior Enneagram experience required — just openness and curiosity.
              </p>
              <p className="font-display text-lg text-gold mb-8">
                Limited spaces available.
              </p>
              <p className="font-body text-charcoal-light text-sm mb-8">
                There are options to pay in 2 installments. You can pay a deposit of £200 now
                and the remainder to be paid by 18th February. To opt for the £200 deposit
                call Deb on 07894628622.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Find Out More and Book Your Retreat
            </h2>
            <a
              href="https://www.eventbrite.com/e/going-beyond-personality-3-day-immersion-spiritual-retreat-tickets-1981442745591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Retreat
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
