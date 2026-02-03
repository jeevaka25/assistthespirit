import ScrollReveal from '@/components/animations/ScrollReveal';
import { Link } from 'react-router-dom';

export default function AboutYou() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-you-hero.jpg"
            alt="Spiritual journey path"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream" />
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                About You
              </h1>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                When I look across that table to those who have shared it with me over the
                last few years, it seems we share a lot of common ground.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  The picture emerges like this:
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You have probably identified as a seeker for a long time (lifetimes?), though
                  you don't always reveal the nature or depth of your seeking to others.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You – probably long ago – questioned the "usual" values of the world around
                  you, deciding that living gently, and kindly, and with less resource-impact
                  are good for you, and for those around you.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You've come a long way! You've done work! Inwardly and outwardly. You
                  probably consider yourself rather advanced. And are quite right to do so.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Throughout your journey of highs and lows and the long stream of "learning
                  opportunities" you can see how you've grown, which has surely helped you
                  achieve a certain worldly stability and command of resources, or at least…
                  you can "see" that stability from where you are, now.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You've valued healthy habits and practices for a long time, even though you
                  don't always stick to them. You've probably meditated; some of you
                  persistently… You've read lots of books! Maybe Eckhart Tolle, Adyashanti,
                  Jed MacKenna, Nisargadatta, the Baghavad Gita, Emerson, Rumi, Zen koans,
                  Seth, the Bible, and all manner of others. Perhaps one of my favorites: A
                  Course In Miracles.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You've been to classes and trainings… sat with teachers and occasionally had
                  your "mind blown." There have been powerful experiences along the way – some
                  of which you find a bit hard to explain to certain others in your life.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Words like "awareness," and "presence" and "energy" have been useful, but
                  you may have noticed they can be a little tricky too, depending on your
                  audience or context. You've noticed often how words, in general, turn out to
                  be limited.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You're well aware of the power of direct experience, and how this can
                  transcend words entirely.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Sometimes you get impatient with the journey. Hasn't it been long enough?
                  "Shouldn't I be further, already?" "Shouldn't I have gotten over (this or
                  that thing, whatever it is…) by now?" …Which is only natural because you've
                  come so far already!
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You may even be getting tired of the seeking; of taking one more class, or
                  finding one more book, or one more teacher.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  So much has been overcome, let go, forgiven and happily, peacefully, moved
                  on from.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  And yet! There is, somewhere in the canyons of mind, in hidden, shrouded
                  parts of consciousness, a few things that beg some light. They are calling
                  to you, persistently…
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You've cleared away so much else there is little left to shroud them any
                  longer, and so you've found them hard to ignore. You've built many skills
                  over all this time, and yet you find yourself still concerned you don't know
                  how to navigate this next part, yet both pushed and pulled to do so.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  You know that where this leads is wonderful, yet there remains something
                  fearful about the shadows in these deepest canyons of self.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  The lamp on the table draws you… This light emboldens that inner sense of
                  being pushed and strengthens that pull you feel… so you've come, that
                  perhaps this might be a beacon to light this late leg of the journey.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  If any of this sounds familiar, I can relate… because this is essentially
                  the path I've trod myself, which is generally a good quality in a guide.
                </p>

                <p className="font-display text-xl text-charcoal mt-8 mb-6">
                  So we find ourselves here at this table. It is good to see you here! Let's
                  proceed!!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-cream-dark">
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
