import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Connect
              </h1>
              <p className="font-body text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
                If it resonates, you're invited to get in touch. I'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <ScrollReveal animation="slideLeft">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
                      Get In Touch
                    </h2>
                    <p className="font-body text-charcoal-light leading-relaxed">
                      Whether you have questions about sessions, events, or just want to
                      connect, I'm here. Reach out through any of the channels below or fill
                      out the form.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a
                      href="mailto:jonathan@assistthespirit.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-charcoal-light mb-1">Email</p>
                        <p className="font-body text-charcoal group-hover:text-gold transition-colors">
                          jonathan@assistthespirit.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-charcoal-light mb-1">
                          Location
                        </p>
                        <p className="font-body text-charcoal">Seattle, WA</p>
                        <p className="font-body text-sm text-charcoal-light mt-1">
                          Available for sessions in person, via phone, or Zoom
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="bg-cream-dark rounded-2xl p-6 mt-8">
                    <h3 className="font-display text-xl text-charcoal mb-3">
                      Open the Doorway Within
                    </h3>
                    <p className="font-body text-sm text-charcoal-light mb-4">
                      Get the FREE Ebook & Guided Meditation
                    </p>
                    <a
                      href="https://jonathanvanvalin.us11.list-manage.com/subscribe?u=26436e53b7da3b1c7858cf723&id=07767656bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-body text-sm transition-colors"
                    >
                      Subscribe Now
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal animation="slideRight" delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-display text-2xl text-charcoal mb-2">
                        Message Sent!
                      </h3>
                      <p className="font-body text-charcoal-light">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="font-body text-sm">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Your first name"
                            className="border-charcoal/20 focus:border-gold focus:ring-gold/20"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="font-body text-sm">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Your last name"
                            className="border-charcoal/20 focus:border-gold focus:ring-gold/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body text-sm">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="border-charcoal/20 focus:border-gold focus:ring-gold/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-body text-sm">
                          Phone (optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="border-charcoal/20 focus:border-gold focus:ring-gold/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-body text-sm">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can I help you?"
                          rows={5}
                          className="border-charcoal/20 focus:border-gold focus:ring-gold/20 resize-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
