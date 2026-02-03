import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/about-you', label: 'About You' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/events', label: 'Events' },
  { href: '/retreats', label: 'Retreats' },
  { href: '/teachings', label: 'Teachings' },
  { href: '/contact', label: 'Connect' },
];

export default function Navigation() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
      style={{
        transitionTimingFunction: 'var(--ease-ethereal)',
      }}
    >
      <nav className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-display text-xl tracking-wider transition-transform duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            ASSIST THE SPIRIT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 group ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-px bg-gold transition-all duration-300 -translate-x-1/2 ${
                    isActive(link.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/sessions"
            className="hidden lg:inline-flex btn-primary text-xs"
          >
            Book a Session
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-cream border-l border-charcoal/10"
            >
              <div className="flex flex-col h-full pt-12">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`font-display text-2xl tracking-wide transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-gold translate-x-2'
                          : 'text-charcoal hover:text-gold hover:translate-x-2'
                      }`}
                      style={{
                        animationDelay: `${index * 80}ms`,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Link to="/sessions" className="btn-primary w-full">
                    Book a Session
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
