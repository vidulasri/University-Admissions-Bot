
import React, { useState, useRef, useEffect } from 'react';
import { getAdmissionsAdvice } from '../services/geminiService.ts';
import { Message } from '../types.ts';

const AdmissionsAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi. I am the EduPath Chatbot. I am ready to help you navigate the admissions process with precision and speed. Whether you are looking for program requirements or need help with your application strategy, I have the data you need. What can I help you with today?",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "Check Deadlines", prompt: "What are the upcoming application deadlines for the top 5 programs?" },
    { label: "Program Match", prompt: "Match my profile with suitable university programs based on CS interests." },
    { label: "Essay Analysis", prompt: "What are the common traits of successful personal statements?" },
    { label: "Requirement Lookup", prompt: "List the standard requirements for international student admissions." }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string = input) => {
    const messageText = text.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const history = messages.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content }));
      const response = await getAdmissionsAdvice(messageText, history);
      
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response || "System error. Please rephrase your query.",
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Chatbot Header */}
      <div className="px-6 md:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100 overflow-hidden">
               <img 
                 src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=EduPath&backgroundColor=4f46e5&eyes=bulging&mouth=smile" 
                 alt="EduPath Chatbot" 
                 className="w-9 h-9 object-contain" 
               />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold text-slate-900 leading-tight">EduPath Chatbot</h2>
              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">v2.1</span>
            </div>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mono-text">System Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button 
             onClick={() => setMessages([messages[0]])}
             className="text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all"
           >
             Reset
           </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8 space-y-6 no-scrollbar" ref={scrollRef}>
        {messages.map((m) => {
          const isUser = m.role === 'user';
          return (
            <div key={m.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              <div className={`max-w-[90%] md:max-w-[85%] px-5 py-4 rounded-2xl text-[14px] leading-relaxed ${
                isUser 
                ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
                : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-200/50'
              }`}>
                {m.content.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? 'h-3' : 'mb-1 last:mb-0'}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-50 px-5 py-3 rounded-2xl rounded-tl-none border border-slate-200/50 flex gap-1.5 items-center">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="px-6 md:px-8 pb-8 pt-2 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => handleSend(action.prompt)}
              className="whitespace-nowrap px-4 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-600 transition-all shadow-sm"
            >
              {action.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about admissions, programs, or requirements..."
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:bg-white focus:border-indigo-600 focus:ring-0 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={isTyping || !input.trim()}
            className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-30 shadow-lg shadow-indigo-100"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsAssistant;
