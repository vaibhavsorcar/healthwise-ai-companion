
import React from 'react';
import { 
  ActivitySquare, 
  Brain, 
  CalendarClock, 
  HeartPulse, 
  ShieldCheck, 
  Stethoscope 
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-health-blue" />,
    title: "AI-Powered Diagnosis",
    description: "Advanced algorithms analyze your symptoms against vast medical databases to provide accurate health insights."
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-health-blue" />,
    title: "Real-time Monitoring",
    description: "Connect your health wearables for continuous health tracking and personalized recommendations."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-health-blue" />,
    title: "Privacy Focused",
    description: "Your health data is encrypted and secured with HIPAA-compliant protocols for maximum privacy."
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-health-blue" />,
    title: "Medical Database",
    description: "Access to extensive medical information updated regularly with the latest research and studies."
  },
  {
    icon: <ActivitySquare className="h-8 w-8 text-health-blue" />,
    title: "Health Analytics",
    description: "Detailed insights and trends about your health patterns to make informed lifestyle decisions."
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-health-blue" />,
    title: "24/7 Assistance",
    description: "Get health guidance any time of day with our always-available AI assistant."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Health Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with medical expertise to provide you with the most reliable health assistant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="p-3 bg-health-blue/10 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
