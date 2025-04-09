
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDModel from '@/components/3d/ThreeDModel';

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ThreeDModel />
      </div>
      
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
      
      {/* Chat Interface */}
      <div className="flex-1 relative z-10">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Chat;
