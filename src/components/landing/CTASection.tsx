
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 3D-like background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-blue/20 to-health-green/10 z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-health-blue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-health-blue/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to take control of your health?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Start your journey to better health with AI-guided insights and personalized recommendations.
          </p>
          
          <Link to="/chat">
            <Button size="lg" className="bg-health-blue hover:bg-health-blue/90 text-white rounded-full px-8">
              Get Started Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          
          <p className="mt-6 text-muted-foreground">
            No registration required. Start chatting instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
