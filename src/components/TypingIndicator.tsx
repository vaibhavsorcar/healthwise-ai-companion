
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Heart } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0 mt-1">
        <Avatar className="h-8 w-8 border bg-health-blue text-white border-health-blue/20">
          <Heart size={14} />
        </Avatar>
      </div>
      <div className="px-4 py-2 rounded-lg bg-health-light-blue text-foreground rounded-tl-none">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
