import { Award, Users, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StatsBar() {
  const stats = [
    { icon: Award, value: '42+', label: 'Years of Experience' },
    { icon: Users, value: '1,000+', label: 'Certified Divers' },
    { icon: MapPin, value: '50+', label: 'Dive Locations' },
    { icon: Star, value: '100%', label: 'PADI Certified' }
  ];

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640809007069-7bd03ade65aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NjIwNjI0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ocean waves underwater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Icon: Reduced from 64px to 56px */}
              <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-5 shadow-xl" style={{ width: '56px', height: '56px' }}>
                <stat.icon style={{ width: '28px', height: '28px' }} className="text-white" />
              </div>
              {/* H2: Reduced from 48px to 36px */}
              <div className="text-slate-900 mb-2" style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.1 }}>{stat.value}</div>
              {/* Subtitle: Reduced from 24px to 18px */}
              <div className="text-slate-600" style={{ fontSize: '18px', lineHeight: 1.3 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
