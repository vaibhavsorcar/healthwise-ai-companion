
import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { diagnosisEngine } from '@/lib/diagnosis-engine';
import { Message } from '@/types/chat';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Healthwise, your AI health assistant. How can I help you today? Please describe any symptoms you're experiencing.",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (!scrollAreaRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = scrollAreaRef.current;
    const isBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isBottom);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0 && !isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Process the user's message and get a response
      const response = await diagnosisEngine(userMessage.content, messages);
      
      // Add the assistant's response to the messages
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Add an error message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error processing your request. Please try again.",
        role: 'assistant',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-grow">
        <ScrollArea 
          className="h-[calc(100vh-12rem)]" 
          ref={scrollAreaRef as any}
          onScroll={handleScroll}
        >
          <div className="flex flex-col gap-4 p-4">
            {messages.map(message => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {showScrollButton && (
          <Button 
            className="absolute right-4 bottom-4 rounded-full w-10 h-10 p-0 shadow-md"
            onClick={scrollToBottom}
            variant="secondary"
          >
            <ArrowDown size={20} />
          </Button>
        )}
      </div>

      <form 
        onSubmit={handleSendMessage} 
        className="flex gap-2 p-4 border-t bg-card"
      >
        <Input
          placeholder="Describe your symptoms..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !inputValue.trim()}>
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
