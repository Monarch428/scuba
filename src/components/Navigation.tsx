import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from "../assets/By-The-Shore-Cursive-white-450.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trips', href: '#trips' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // TOP: translucent blue with subtle blur (glass)
        !scrolled
          ? "bg-blue-100/10 supports-[backdrop-filter]:backdrop-blur-sm"
          // SCROLLED: solid blue card/div (no transparency, no blur)
          : "bg-blue-400 shadow-lg"
      ].join(" ")}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="By The Shore Logo"
              style={{ height: "80px", width: "auto", transition: "all 0.3s ease" }}
              className={[
                !scrolled ? "drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]" : "",
              ].join(" ")}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center" style={{ gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={[
                  "uppercase tracking-wide transition-colors duration-300",
                  // White links both states; slightly dim on hover when scrolled
                  scrolled ? "text-white hover:text-white/80" : "text-white hover:text-blue-100"
                ].join(" ")}
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center" style={{ gap: '16px' }}>
            <Button
              onClick={scrollToForm}
              className={
                scrolled
                  // Solid blue navbar → use white button for contrast
                  ? "bg-white text-blue-700 hover:bg-blue-50"
                  // Top (glass) → white button also works well
                  : "bg-white text-blue-700 hover:bg-blue-50"
              }
              style={{ height: '48px', fontSize: '16px', fontWeight: 600, paddingLeft: '24px', paddingRight: '24px' }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-white' : 'text-white'}`}
          >
            {mobileMenuOpen
              ? <X style={{ width: 24, height: 24 }} />
              : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div
            className="container mx-auto px-4"
            style={{ paddingTop: '24px', paddingBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600"
                style={{ fontSize: '16px', paddingTop: '8px', paddingBottom: '8px' }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <Button
                onClick={scrollToForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
