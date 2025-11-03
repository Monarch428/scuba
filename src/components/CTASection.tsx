import { ContactForm } from './ContactForm';
import { motion } from 'motion/react';
import ctaBackgroundImage from 'figma:asset/bcd9c198291377efc4cea27296af0ae8ddd1599c.png';

export function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      {/* Underwater scuba diving background image */}
      <div className="absolute inset-0">
        <img
          src={ctaBackgroundImage}
          alt="Scuba diver underwater with sun rays"
          className="w-full h-full object-cover"
        />
        {/* Light overlay to make image visible while keeping text readable */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          {/* Section Heading: Reduced from 42px to 32px */}
          <h2 className="text-black" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
            Ready to Start Your Scuba Adventure?
          </h2>
          {/* Subtitle: Reduced from 28px to 20px */}
          <p className="text-slate-800 max-w-4xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.4 }}>
            Join us for professional scuba diving training in Raleigh, NC. Contact us today to get started on your underwater journey and become part of our community of certified divers!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
          id="footer-contact-form"
        >
          <div className="mb-6 text-center">
            {/* Form Title: Reduced from 36px to 28px */}
            <h3 className="text-slate-900" style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
              Send Us an Enquiry
            </h3>
            <p className="text-slate-800" style={{ fontSize: '16px' }}>
              We'll get back to you within 24 hours
            </p>
          </div>
          <ContactForm variant="footer" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
          style={{ marginTop: '40px' }}
        >
          {/* <div className="inline-flex flex-col sm:flex-row items-center text-slate-700" style={{ gap: '24px', fontSize: '16px' }}>
            <div className="flex items-center" style={{ gap: '10px' }}>
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>📞 919-247-0356</span>
            </div>
            <div className="hidden sm:block bg-slate-300" style={{ width: '1px', height: '24px' }}></div>
            <div className="flex items-center" style={{ gap: '10px' }}>
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>📧 scubainfo@scubadivingraleigh.com</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
