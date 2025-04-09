
import React from 'react';
import { Heart, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-health-blue text-white p-2 rounded-lg">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Healthwise</h3>
                <p className="text-xs text-muted-foreground">AI Health Guardian</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Revolutionizing personal healthcare with AI-powered insights and real-time monitoring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/chat" className="text-muted-foreground hover:text-foreground transition-colors">AI Diagnosis</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Health Monitoring</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Medical Database</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Medical Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Healthwise AI. All rights reserved.</p>
          <p className="mt-2">This application is for informational purposes only and not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
