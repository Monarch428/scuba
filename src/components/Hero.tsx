import { Award } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ContactForm } from './ContactForm';
import { motion } from 'motion/react';
import heroBannerImage from 'figma:asset/77e66ee4d9e1c0193f53f808628eb541e52e09ca.png';

export function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay - 100vh height */}
      <div className="absolute inset-0">
        <img
          src={heroBannerImage}
          alt="Scuba diver exploring underwater coral reef"
          className="w-full h-full object-cover"
        />
        {/* 70% opacity gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/65 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-amber-500/90 hover:bg-amber-600 border-0 backdrop-blur-sm px-4 py-1.5" style={{ fontSize: '14px' }}>
                <Award className="w-4 h-4 mr-1.5" />
                PADI Certified • 42+ Years Experience
              </Badge>
            </motion.div>

            {/* H1: Reduced from 80px to 56px */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white mb-6 tracking-wide"
              style={{ 
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '0.01em'
              }}
            >
              Scuba Diving in Triangle Area, NC
            </motion.h1>

            {/* Subheading: Reduced from 32px to 24px */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-blue-100 mb-5"
              style={{
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.3
              }}
            >
              Get Certified & Explore the Underwater World
            </motion.p>

            {/* Body text: Reduced from 20px to 18px */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-slate-200 mb-6"
              style={{
                fontSize: '18px',
                lineHeight: 1.6
              }}
            >
              Over 42 years of experience in scuba diving training & certification in Raleigh, NC. Whether you're a beginner or experienced diver, our PADI-certified instructors offer expert training in a safe environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-2.5 text-slate-200"
              style={{ fontSize: '16px' }}
            >
              <p className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Professional Scuba Diving Training
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Equipment Rentals & Sales
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Exciting Dive Trips Worldwide
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            id="contact-form"
          >
            <div className="mb-5 text-center">
              <h3 className="text-white mb-2" style={{ fontSize: '28px', fontWeight: 700 }}>Quick Enquiry</h3>
              <p className="text-blue-200" style={{ fontSize: '16px' }}>Get started with your diving journey today</p>
            </div>
            <ContactForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
