import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Video, Users } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { events } from '@/data/events';

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'online' | 'in-person'>('all');

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true;
    return event.type === filter;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/group-meditation.jpg"
            alt="Group meditation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream" />
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
                Events
              </h1>
              <p className="font-display text-xl text-gold mb-6">
                Group Meditation, Online Group Meditation, & "Energy" Healing
              </p>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                These group meditation gatherings offer a simple invitation to slow down,
                settle inward, and rest in a shared field of quiet presence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Sessions emphasize stillness, inner listening, and direct experience, and
                  may also include gentle "energy" healing – what Jonathan describes as
                  "healing by Divine Principle" – which is offered to support relaxation,
                  balance, and clarity.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Both in-person and online group meditation sessions are open to everyone,
                  with no prior meditation experience required. Participants are invited to
                  sit comfortably, tune inwardly, and allow whatever naturally unfolds.
                  Occasionally, personal reflections are shared, and there is always space
                  for questions.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed mb-6">
                  Many people describe these gatherings as calming, restorative, or quietly
                  transformative. Others simply appreciate the opportunity to pause from
                  daily life and reconnect with a sense of inner wholeness.
                </p>

                <p className="font-body text-charcoal-light leading-relaxed">
                  Most gatherings are free and open to all. Advance registration is typically
                  required for online events to receive the Zoom link. Donations are welcomed
                  and deeply appreciated, but never required – just come and be.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-cream border-y border-charcoal/10">
        <div className="section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {(['all', 'online', 'in-person'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  filter === type
                    ? 'bg-gold text-white'
                    : 'bg-white text-charcoal hover:bg-gold/10'
                }`}
              >
                {type === 'all' ? 'All Events' : type === 'online' ? 'Online' : 'In Person'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {filteredEvents.map((event, index) => (
                <ScrollReveal key={event.id} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gold/10 rounded-xl flex flex-col items-center justify-center">
                          <span className="font-display text-2xl text-gold">
                            {new Date(event.date).getDate()}
                          </span>
                          <span className="font-body text-xs text-charcoal-light uppercase">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'short',
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body ${
                              event.type === 'online'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-green-50 text-green-600'
                            }`}
                          >
                            {event.type === 'online' ? (
                              <>
                                <Video className="w-3 h-3" />
                                Online
                              </>
                            ) : (
                              <>
                                <Users className="w-3 h-3" />
                                In Person
                              </>
                            )}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-3">
                          {event.title}
                        </h3>

                        <p className="font-body text-charcoal-light leading-relaxed mb-4">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-charcoal-light">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gold" />
                            <span>{event.time}</span>
                            <span className="text-charcoal/30">|</span>
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gold" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex-shrink-0">
                        {event.registrationUrl ? (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs whitespace-nowrap"
                          >
                            Register
                          </a>
                        ) : (
                          <button className="btn-primary text-xs whitespace-nowrap opacity-50 cursor-not-allowed">
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-charcoal-light">
                  No {filter !== 'all' ? filter : ''} events scheduled at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Host a Gathering CTA */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Would You Like to Host a Gathering?
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              Jonathan travels widely and often. If you'd like to host a meditation gathering
              or workshop in your area, please reach out.
            </p>
            <Link to="/contact" className="btn-primary">
              Reach Out Here
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* One-on-One Sessions CTA */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              Seeking More Personalized Support?
            </h2>
            <p className="font-body text-charcoal-light mb-8">
              One-on-one energy healing sessions are also available for those seeking
              individualized guidance.
            </p>
            <Link to="/sessions" className="btn-primary">
              Learn About Sessions
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
