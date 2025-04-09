
import React from 'react';
import { MessageCircle, Search, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={32} className="text-white" />,
    title: "Describe Your Symptoms",
    description: "Tell our AI about what you're experiencing using natural language just like talking to a doctor."
  },
  {
    icon: <Search size={32} className="text-white" />,
    title: "AI Analysis",
    description: "Our advanced algorithms analyze your symptoms against our extensive medical database."
  },
  {
    icon: <FileText size={32} className="text-white" />,
    title: "Receive Insights",
    description: "Get personalized health insights, potential conditions, and recommended next steps."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-health-light-blue/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Healthwise Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate health insights in just a few simple steps
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="bg-health-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-0 right-0" style={{ left: `${(100 / steps.length) * (index + 0.5)}%`, width: `${100 / steps.length}%` }}>
                  <ArrowRight size={24} className="text-health-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
