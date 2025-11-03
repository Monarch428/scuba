import { GraduationCap, Plane, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Services() {
  const scrollToForm = () => {
    const formElement = document.getElementById('footer-contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const services = [
    {
      icon: GraduationCap,
      title: 'Scuba Diving Classes',
      image: 'https://images.unsplash.com/photo-1683885666954-7b7264589994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGluc3RydWN0b3IlMjBwb29sfGVufDF8fHx8MTc2MjE0NDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Learn from professional instructors in a safe and controlled environment',
        'Ideal for beginners and experienced divers looking to enhance their skills',
        'Step-by-step training, from basic diving techniques to open-water dives'
      ],
      cta: 'Enroll in a Class Today'
    },
    {
      icon: Plane,
      title: 'Scuba Diving Trips',
      image: 'https://images.unsplash.com/photo-1568558490322-78fbc203f898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRpdmluZyUyMGNvcmFsJTIwcmVlZnxlbnwxfHx8fDE3NjIxNDQwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Explore breathtaking dive locations including the Florida Keys, Cozumel, and the Caribbean',
        'Join custom charter dive trips designed for an unforgettable underwater adventure',
        'Dive into crystal-clear waters and experience vibrant marine life'
      ],
      cta: 'Book a Diving Trip'
    },
    {
      icon: ShoppingBag,
      title: 'Equipment Rentals & Sales',
      image: 'https://images.unsplash.com/photo-1758968412134-94d3e50d78b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGVxdWlwbWVudCUyMGdlYXJ8ZW58MXx8fHwxNzYyMTQ0MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'High-quality scuba gear available for rent or purchase',
        'Get diving masks, wetsuits, regulators, fins, and more',
        'All equipment is well-maintained and safety-checked before each dive'
      ],
      cta: 'Rent or Buy Scuba Gear'
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '60px' }}
        >
          {/* Section Heading: Reduced from 42px to 32px */}
          <h2 className="text-slate-900" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
            Our Scuba Diving Services
          </h2>
          {/* Subtitle: Reduced from 28px to 20px */}
          <p className="text-slate-600 max-w-3xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.4 }}>
            From beginner training to advanced certification and exciting dive trips around the world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3" style={{ gap: '32px' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Icon Badge: Reduced from 64px to 56px */}
                  <div className="absolute top-5 left-5">
                    <div className="rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl" style={{ width: '56px', height: '56px' }}>
                      <service.icon style={{ width: '28px', height: '28px' }} className="text-cyan-600" />
                    </div>
                  </div>
                </div>

                {/* Content - Card padding: Reduced from 40px to 32px */}
                <div style={{ padding: '32px' }}>
                  {/* Card Title: Reduced from 24px to 20px */}
                  <h3 className="text-slate-900" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>
                    {service.title}
                  </h3>
                  
                  <ul style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex" style={{ fontSize: '16px', lineHeight: 1.6, gap: '10px' }}>
                        <span className="text-cyan-600 flex-shrink-0" style={{ marginTop: '2px', fontSize: '18px' }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button: Reduced from 56px to 48px height, 18px to 16px font */}
                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white group"
                    style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" style={{ width: '18px', height: '18px' }} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
