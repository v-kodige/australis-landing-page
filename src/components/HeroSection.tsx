
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-australis-offWhite to-australis-lightGray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-australis-navy">
              Find the best solar sites.<br />
              <span className="bg-gradient-to-r from-australis-indigo to-australis-aqua bg-clip-text text-transparent">
                In minutes, not months.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Australis is an AI-powered platform that accelerates clean energy development by helping you discover, assess and prioritise high-potential solar sites across the UK — faster, smarter, and with less risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-australis-indigo hover:bg-australis-indigo/90">
                Request Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-australis-indigo text-australis-indigo hover:bg-australis-indigo/10">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-australis-navy/20 via-australis-indigo/20 to-australis-aqua/30 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center text-australis-navy italic">
                  Interactive map visualization
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-australis-aqua/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-australis-indigo/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
