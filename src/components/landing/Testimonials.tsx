
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Healthwise helped me understand my symptoms when I was too busy to see a doctor. The AI gave me valuable insights that turned out to be spot-on.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "As someone with chronic conditions, having Healthwise on my phone gives me peace of mind. It helps me track symptoms and know when I need to seek medical attention.",
    author: "Michael Chen",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The app's ability to connect with my smartwatch and track health metrics over time has been invaluable. It caught a pattern I wouldn't have noticed myself.",
    author: "Elena Rodriguez",
    role: "Fitness Instructor",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Healthwise for their health concerns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.667 13.334H5.33366C5.33366 13.334 5.33366 8.00033 10.667 8.00033M10.667 13.334C10.667 18.6673 5.33366 18.6673 5.33366 18.6673M10.667 13.334H13.3337M26.667 13.334H21.3337C21.3337 13.334 21.3337 8.00033 26.667 8.00033M26.667 13.334C26.667 18.6673 21.3337 18.6673 21.3337 18.6673M26.667 13.334H29.3337" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 mr-4">
                      <img src={testimonial.avatar} alt={testimonial.author} />
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
