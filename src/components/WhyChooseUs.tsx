import { Check, Shield, Award, Heart, Users, Anchor } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from experienced PADI-certified professionals guiding you every step of the way.'
    },
    {
      icon: Users,
      title: 'Beginner-Friendly Training',
      description: 'No prior experience required; lessons tailored to all skill levels.'
    },
    {
      icon: Anchor,
      title: 'Premium Dive Gear',
      description: 'Rent or purchase high-quality scuba equipment for maximum comfort and safety.'
    },
    {
      icon: Heart,
      title: 'Exciting Dive Adventures',
      description: 'Explore breathtaking underwater locations with our guided dive trips.'
    },
    {
      icon: Shield,
      title: 'Safety-First Approach',
      description: 'Fully supervised training and dives for a worry-free experience.'
    }
  ];

  return (
    <section id="about" className="bg-white overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '60px' }}>
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Heading: Reduced from 42px to 32px */}
            <h2 className="text-slate-900" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
              Why Choose Us?
            </h2>
            {/* Subtitle: Reduced from 28px to 20px */}
            <p className="text-slate-600" style={{ fontSize: '20px', lineHeight: 1.4, marginBottom: '32px' }}>
              At By The Shore Scuba Instruction, we go above and beyond to provide you with a safe, expert-led, and unforgettable diving experience.
            </p>
            {/* Body: Reduced from 20px to 17px */}
            <p className="text-slate-600" style={{ fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
              Our PADI-certified instructors offer hands-on training with top-of-the-line diving equipment.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex group"
                  style={{ gap: '20px' }}
                >
                  <div className="flex-shrink-0">
                    {/* Icon: Reduced from 56px to 48px */}
                    <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg" style={{ width: '48px', height: '48px' }}>
                      <benefit.icon style={{ width: '24px', height: '24px' }} className="text-white" />
                    </div>
                  </div>
                  <div>
                    {/* Card Title: Reduced from 24px to 20px */}
                    <h3 className="text-slate-900" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{benefit.title}</h3>
                    {/* Body in cards: Reduced from 18px to 16px */}
                    <p className="text-slate-600" style={{ fontSize: '16px', lineHeight: 1.6 }}>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-slate-700 italic"
              style={{ fontSize: '16px', lineHeight: 1.6, marginTop: '32px' }}
            >
              Whether you're looking to get certified, rent scuba gear, or join an amazing dive trip, we're here to make your scuba journey safe, fun, and unforgettable!
            </motion.p>
          </motion.div>

          {/* Right Column - Image: 500-600px width */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745917784199-e5f331064b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyJTIwc3VubGlnaHR8ZW58MXx8fHwxNzYyMTQ4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coral reef underwater"
                className="w-full object-cover"
                style={{ height: '600px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl shadow-2xl"
              style={{ bottom: '-24px', left: '-24px', padding: '24px' }}
            >
              <div className="flex items-center" style={{ gap: '12px' }}>
                <div className="rounded-full bg-white/20 flex items-center justify-center" style={{ width: '48px', height: '48px' }}>
                  <Check style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '2px' }}>Trusted by</div>
                  <div style={{ fontSize: '20px', fontWeight: 700 }}>1000+ Divers</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
