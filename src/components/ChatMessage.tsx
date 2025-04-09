
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Message } from '@/types/chat';
import { Heart, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={cn('flex', isAssistant ? 'justify-start' : 'justify-end')}>
      <div className={cn('flex items-start gap-2', isAssistant ? 'flex-row' : 'flex-row-reverse')}>
        <div className="flex-shrink-0 mt-1">
          <Avatar className={cn(
            'h-8 w-8 border', 
            isAssistant ? 'bg-health-blue text-white border-health-blue/20' : 'bg-health-green text-white border-health-green/20'
          )}>
            {isAssistant ? (
              <Heart size={14} className="animate-pulse" />
            ) : (
              <User size={14} />
            )}
          </Avatar>
        </div>
        
        <div className={cn(
          'px-4 py-2 rounded-lg max-w-[80%]',
          isAssistant ? 'bg-health-light-blue text-foreground rounded-tl-none' : 'bg-health-light-green text-foreground rounded-tr-none'
        )}>
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
