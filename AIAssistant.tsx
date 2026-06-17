import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ShoppingBag,
  Search,
  HelpCircle } from
'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
  isTyping?: boolean;
}
export const AIAssistant = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    type: 'ai',
    text: 'Hello! I am your LUXE AI Stylist. How can I help you today?'
  }]
  );
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    const newUserMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    // Simulate AI typing
    const typingId = (Date.now() + 1).toString();
    setMessages((prev) => [
    ...prev,
    {
      id: typingId,
      type: 'ai',
      text: '',
      isTyping: true
    }]
    );
    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.id !== typingId));
      let aiResponse =
      'I can help you find the perfect outfit. What occasion are you shopping for?';
      if (text.toLowerCase().includes('order')) {
        aiResponse =
        'To track your order, please provide your order number (e.g., ORD-123456).';
      } else if (
      text.toLowerCase().includes('jacket') ||
      text.toLowerCase().includes('coat'))
      {
        aiResponse =
        'We have some excellent outerwear options. I recommend checking out our Oversized Wool Coat or the Structured Leather Jacket.';
      } else if (text.toLowerCase().includes('return')) {
        aiResponse =
        'We offer free 30-day returns on all unworn items with tags attached. Would you like me to start a return for you?';
      }
      setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: 'ai',
        text: aiResponse
      }]
      );
    }, 1500);
  };
  const quickActions = [
  {
    icon: <Search size={14} />,
    label: 'Find a product',
    text: 'Can you help me find a specific product?'
  },
  {
    icon: <Sparkles size={14} />,
    label: 'Outfit ideas',
    text: 'I need some outfit inspiration.'
  },
  {
    icon: <ShoppingBag size={14} />,
    label: 'Track order',
    text: 'I want to track my order.'
  },
  {
    icon: <HelpCircle size={14} />,
    label: 'Returns',
    text: 'What is your return policy?'
  }];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 ${language === 'ar' ? 'left-24' : 'right-24'} w-56 h-56 bg-accent text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-accent-hover transition-colors`}>
        
        <Sparkles size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          transition={{
            duration: 0.2
          }}
          className={`fixed bottom-24 ${language === 'ar' ? 'left-24' : 'right-24'} w-[350px] h-[500px] max-h-[80vh] bg-bg-surface border border-border shadow-2xl z-50 flex flex-col overflow-hidden`}>
          
            {/* Header */}
            <div className="bg-bg-surface border-b border-border p-16 flex justify-between items-center">
              <div className="flex items-center gap-8">
                <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">LUXE AI Stylist</h3>
                  <span className="text-xs text-success flex items-center gap-4">
                    <span className="w-6 h-6 bg-success rounded-full animate-pulse"></span>{' '}
                    Online
                  </span>
                </div>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="text-text-secondary hover:text-text-primary">
              
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-16 flex flex-col gap-16">
              {messages.map((msg) =>
            <div
              key={msg.id}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              
                  <div
                className={`max-w-[80%] p-12 text-sm ${msg.type === 'user' ? 'bg-accent text-white rounded-l-xl rounded-tr-xl' : 'bg-bg-surface-hover text-text-primary rounded-r-xl rounded-tl-xl border border-border'}`}>
                
                    {msg.isTyping ?
                <div className="flex gap-4 items-center h-20">
                        <span className="w-4 h-4 bg-text-secondary rounded-full animate-bounce"></span>
                        <span
                    className="w-4 h-4 bg-text-secondary rounded-full animate-bounce"
                    style={{
                      animationDelay: '0.2s'
                    }}>
                  </span>
                        <span
                    className="w-4 h-4 bg-text-secondary rounded-full animate-bounce"
                    style={{
                      animationDelay: '0.4s'
                    }}>
                  </span>
                      </div> :

                msg.text
                }
                  </div>
                </div>
            )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length < 3 &&
          <div className="px-16 pb-16 flex flex-wrap gap-8">
                {quickActions.map((action, idx) =>
            <button
              key={idx}
              onClick={() => handleSend(action.text)}
              className="text-xs border border-border rounded-full px-12 py-6 flex items-center gap-4 hover:border-accent hover:text-accent transition-colors bg-bg-surface">
              
                    {action.icon} {action.label}
                  </button>
            )}
              </div>
          }

            {/* Input Area */}
            <div className="p-16 border-t border-border bg-bg-surface">
              <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-8">
              
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-bg-surface-hover border border-border px-16 py-8 text-sm focus:outline-none focus:border-accent transition-colors" />
              
                <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-36 h-36 bg-accent text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover transition-colors">
                
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};