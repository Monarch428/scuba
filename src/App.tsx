import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { FeaturedTrips } from './components/FeaturedTrips';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <Services />
      <FeaturedTrips />
      <FAQ />
      <CTASection />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
