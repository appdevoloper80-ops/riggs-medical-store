import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  MapPin, 
  Truck, 
  AlertCircle, 
  Sparkles,
  Bot
} from 'lucide-react';
import { 
  ChatMessage, 
  QUICK_CHIPS, 
  getInitialBotMessage, 
  processUserChatQuery 
} from '../utils/chatEngine.ts';
import { STORE_CONFIG } from '../config/storeConfig.ts';

/**
 * CODE COMMENT FOR CLIENT / AI BACKEND INTEGRATION:
 * This widget currently runs on a deterministic rule-based assistant to ensure reliable,
 * prompt answers during the demonstration without incurring LLM latency or hallucination risks.
 * 
 * To connect a live Google Gemini AI agent in production:
 * 1. Implement a server route: POST /api/chat with streaming response
 * 2. Supply system instructions with store catalogue embeddings and grounding
 * 3. Enforce the emergency 999 rule and strict no-clinical-advice compliance check
 */

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([getInitialBotMessage()]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setIsTyping(true);

    // Simulate natural assistant reading/typing delay
    setTimeout(() => {
      const botResponse = processUserChatQuery(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50">
      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-[22px] shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 mb-3"
          role="dialog"
          aria-labelledby="chat-heading"
          aria-modal="false"
        >
          {/* Header */}
          <div className="bg-[#0B2545] p-4 text-white flex items-center justify-between border-b border-[#0FA3A3]/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#0FA3A3] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0B2545]" aria-label="Online"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="chat-heading" className="text-sm font-bold leading-tight">
                    Riggs Assistant
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E6F6F4] text-[#0A7C7C]">
                    Demo assistant
                  </span>
                </div>
                <span className="text-[11px] text-gray-300">
                  Open 24/7 &bull; Instant Store Help
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Emergency / Disclaimer Sticky Banner */}
          <div className="bg-amber-50 px-3 py-1.5 border-b border-amber-200 text-[11px] text-amber-900 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
            <span>In an emergency call 999. Assistant cannot give medical advice.</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#EAF3FB]/20">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#0FA3A3] text-white rounded-br-xs'
                        : 'bg-white text-[#1C2B3A] border border-gray-200 shadow-2xs rounded-bl-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                    
                    {/* Action button if attached */}
                    {msg.action && (
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        {msg.action.type === 'call' && (
                          <a
                            href={msg.action.target}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0FA3A3] text-white text-xs font-bold shadow-xs hover:bg-[#0A7C7C] transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{msg.action.label}</span>
                          </a>
                        )}

                        {msg.action.type === 'directions' && (
                          <a
                            href={msg.action.target}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B2545] text-white text-xs font-bold hover:bg-[#0FA3A3] transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{msg.action.label}</span>
                          </a>
                        )}

                        {msg.action.type === 'delivery' && (
                          <a
                            href={msg.action.target}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0FA3A3] text-white text-xs font-bold hover:bg-[#0A7C7C] transition-colors"
                          >
                            <Truck className="w-3.5 h-3.5" />
                            <span>{msg.action.label}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3A3] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3A3] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3A3] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="p-2.5 bg-white border-t border-gray-100 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleSendMessage(chip)}
                className="text-xs bg-[#E6F6F4] hover:bg-[#0FA3A3] text-[#0A7C7C] hover:text-white px-2.5 py-1 rounded-full font-medium transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about opening, delivery, or location..."
                className="flex-1 px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#0FA3A3]"
                aria-label="Type message for Riggs Assistant"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-10 h-10 rounded-xl bg-[#0FA3A3] hover:bg-[#0A7C7C] disabled:opacity-40 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0FA3A3] hover:bg-[#0A7C7C] text-white shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#0FA3A3]/40 min-h-[48px] min-w-[48px]"
        aria-label={isOpen ? "Close Riggs Assistant chat" : "Open Riggs Assistant chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></span>
          </>
        )}
      </button>
    </div>
  );
};
