import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Footer: Reduced padding from 80px to 60px */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '48px', marginBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <h3 className="text-white" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>
              By The Shore
            </h3>
            <p className="text-slate-400" style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              PADI-certified scuba diving training and certification in Raleigh, NC with over 42 years of experience.
            </p>
            <div className="flex" style={{ gap: '12px' }}>
              <a href="#" className="rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" style={{ width: '40px', height: '40px' }}>
                <Facebook style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="#" className="rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" style={{ width: '40px', height: '40px' }}>
                <Instagram style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="#" className="rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" style={{ width: '40px', height: '40px' }}>
                <Twitter style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors" style={{ fontSize: '15px' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors" style={{ fontSize: '15px' }}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#trips" className="text-slate-400 hover:text-cyan-400 transition-colors" style={{ fontSize: '15px' }}>
                  Diving Trips
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-cyan-400 transition-colors" style={{ fontSize: '15px' }}>
                  FAQ
                </a>
              </li>
              <li>
                <button onClick={scrollToForm} className="text-slate-400 hover:text-cyan-400 transition-colors" style={{ fontSize: '15px' }}>
                  Contact Form
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Our Services
            </h4>
            <ul className="text-slate-400" style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <li>Beginner Training</li>
              <li>Advanced Certification</li>
              <li>Open Water Dives</li>
              <li>Equipment Rentals</li>
              <li>Dive Trip Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <a href="tel:919-247-0356" className="flex items-start text-slate-400 hover:text-cyan-400 transition-colors" style={{ gap: '10px', fontSize: '15px' }}>
                  <Phone style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }} />
                  <span>919-247-0356</span>
                </a>
              </li>
              <li>
                <a href="mailto:scubainfo@scubadivingraleigh.com" className="flex items-start text-slate-400 hover:text-cyan-400 transition-colors" style={{ gap: '10px', fontSize: '15px' }}>
                  <Mail style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }} />
                  <span>scubainfo@scubadivingraleigh.com</span>
                </a>
              </li>
              <li className="flex items-start text-slate-400" style={{ gap: '10px', fontSize: '15px' }}>
                <MapPin style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }} />
                <span>Triangle Area<br />Raleigh, NC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800" style={{ paddingTop: '32px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400" style={{ gap: '12px', fontSize: '14px' }}>
            <p>&copy; {new Date().getFullYear()} By The Shore Scuba Instruction. All rights reserved.</p>
            <div className="flex" style={{ gap: '24px' }}>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
