import { MapPin, ArrowRight, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function FeaturedTrips() {
  const scrollToForm = () => {
    const formElement = document.getElementById('footer-contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const trips = [
    {
      title: 'Caribbean Adventures',
      location: 'Caribbean Islands',
      image: 'https://images.unsplash.com/photo-1608209957132-587daea098f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMGRpdmluZ3xlbnwxfHx8fDE3NjIxNDQwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Experience crystal-clear waters and vibrant coral reefs in the Caribbean.',
      duration: '7 Days',
      groupSize: 'Max 12 divers',
      featured: true
    },
    {
      title: 'Florida Keys Expedition',
      location: 'Florida Keys, FL',
      image: 'https://images.unsplash.com/photo-1707067019080-8b2d7e9b892a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwa2V5cyUyMGRpdmluZ3xlbnwxfHx8fDE3NjIxNDQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Discover the underwater beauty and diverse marine life of the Florida Keys.',
      duration: '5 Days',
      groupSize: 'Max 10 divers',
      featured: false
    },
    {
      title: 'Hawaii Deep Dives',
      location: 'Hawaii',
      image: 'https://images.unsplash.com/photo-1480095491029-1fdd52e30af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXdhaWklMjBvY2VhbiUyMGRpdmluZ3xlbnwxfHx8fDE3NjIxNDQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Explore volcanic formations and tropical fish in the pristine waters of Hawaii.',
      duration: '10 Days',
      groupSize: 'Max 8 divers',
      featured: false
    }
  ];

  return (
    <section id="trips" className="relative text-white overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759414458312-c27b2b6baa79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBkaXZpbmd8ZW58MXx8fHwxNzYyMTQ4MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tropical fish diving"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '60px' }}
        >
          {/* Section Heading: Reduced from 42px to 32px */}
          <h2 className="text-white" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
            Scuba Diving Trips
          </h2>
          {/* Subtitle: Reduced from 28px to 20px */}
          <p className="text-slate-300 max-w-3xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.4 }}>
            Custom Charter Trips to Dive in Florida, Florida Keys, Cozumel, the Caribbean, and Hawaii!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3" style={{ gap: '32px' }}>
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-slate-800 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl">
                {/* Image: Reduced height from 400px to 340px */}
                <div className="relative overflow-hidden" style={{ height: '340px' }}>
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {trip.featured && (
                    <Badge className="absolute bg-amber-500 hover:bg-amber-600 border-0" style={{ top: '20px', right: '20px', fontSize: '14px', padding: '6px 12px' }}>
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Content - Card padding: Reduced from 40px to 32px */}
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: '32px' }}>
                  <div className="flex items-center mb-3" style={{ gap: '6px' }}>
                    <MapPin style={{ width: '16px', height: '16px' }} className="text-cyan-400" />
                    <span className="text-cyan-400" style={{ fontSize: '14px' }}>{trip.location}</span>
                  </div>
                  
                  {/* Card Title: Reduced from 24px to 20px */}
                  <h3 className="text-white" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                    {trip.title}
                  </h3>
                  {/* Body in cards: Reduced from 18px to 16px */}
                  <p className="text-slate-300" style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {trip.description}
                  </p>
                  
                  <div className="flex items-center text-slate-400" style={{ fontSize: '14px', gap: '20px', marginBottom: '20px' }}>
                    <div className="flex items-center" style={{ gap: '6px' }}>
                      <Calendar style={{ width: '16px', height: '16px' }} />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center" style={{ gap: '6px' }}>
                      <Users style={{ width: '16px', height: '16px' }} />
                      <span>{trip.groupSize}</span>
                    </div>
                  </div>

                  {/* Button: Reduced from 56px to 48px height */}
                  <Button 
                    onClick={scrollToForm}
                    // variant="outline" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white group"
                    style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" style={{ width: '18px', height: '18px' }} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
          style={{ marginTop: '48px' }}
        >
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 border-0 text-white shadow-2xl"
            style={{ height: '48px', fontSize: '16px', fontWeight: 600, paddingLeft: '32px', paddingRight: '32px' }}
          >
            View All Dive Trips
            <ArrowRight className="ml-2" style={{ width: '18px', height: '18px' }} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
