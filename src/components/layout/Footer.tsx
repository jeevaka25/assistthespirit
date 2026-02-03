import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

const teachingLinks = [
  { href: '/teachings', label: 'Articles' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/retreats', label: 'Retreats' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-display text-2xl tracking-wider text-white mb-4 block"
            >
              ASSIST THE SPIRIT
            </Link>
            <p className="font-body text-sm text-white/70 mt-4">
              Spiritual Teacher & Healer
            </p>
            <p className="font-body text-sm text-white/50 mt-2">
              Guiding you toward inner peace and awakening.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teachings */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Teachings</h4>
            <ul className="space-y-3">
              {teachingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:jonathan@assistthespirit.com"
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                jonathan@assistthespirit.com
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-white/70">
                <MapPin className="w-4 h-4" />
                Seattle, WA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com/jonathan.vanvalin.9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/50">
              Assist the Spirit Copyright &copy; {new Date().getFullYear()} - All rights reserved.
            </p>
            <p className="font-body text-xs text-white/50">
              Designed with love for spiritual awakening.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
