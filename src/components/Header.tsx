
import React from 'react';
import { Heart, Stethoscope } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-2">
        <div className="bg-health-blue text-white p-2 rounded-lg">
          <Stethoscope size={24} />
        </div>
        <div>
          <h1 className="font-bold text-xl flex items-center">
            Healthwise <Heart size={16} className="ml-1 text-health-blue animate-pulse" />
          </h1>
          <p className="text-sm text-muted-foreground">AI Health Assistant</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="bg-green-100 px-3 py-1 rounded-full text-xs text-green-700 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Active
        </div>
      </div>
    </header>
  );
};

export default Header;
