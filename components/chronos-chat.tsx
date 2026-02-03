'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

interface ChronosChatProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function ChronosChat({ isOpen, onToggle }: ChronosChatProps) {
    // Format time consistently for SSR
    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: 'Greetings, temporal traveler. I am Chronos, your AI guide through the ages. How may I assist you today?',
            isUser: false,
            timestamp: new Date(),
        },
        {
            id: 2,
            text: 'What should I wear for 1504 Florence?',
            isUser: true,
            timestamp: new Date(),
        },
        {
            id: 3,
            text: "Excellent question! For Renaissance Florence in 1504, I recommend:\n\n• Men: A doublet (fitted jacket), hose, and a soft cap. Rich colors like burgundy or deep blue will help you blend with the merchant class.\n\n• Women: A gamurra (fitted gown) with a camicia (underdress). Avoid bright white—it wasn't common then.\n\nOur Camouflage Pack includes historically accurate attire tailored to your measurements. Shall I add it to your booking?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "I'm processing your temporal query. One moment while I consult the chronicles...",
                'Fascinating question! Let me access the historical archives for you.',
                'The timelines are aligning... I have information that may help you.',
            ];
            const aiResponse: Message = {
                id: messages.length + 2,
                text: responses[Math.floor(Math.random() * responses.length)],
                isUser: false,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1000);
    };

    return (
        <>
            {/* Chat bubble trigger */}
            <button
                onClick={onToggle}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                        ? 'bg-muted-foreground/20 rotate-0'
                        : 'bg-cyan-glow shadow-[0_0_30px_oklch(0.75_0.18_195_/_0.4)] hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.6)]'
                }`}
            >
                {isOpen ? (
                    <X className='w-6 h-6 text-foreground' />
                ) : (
                    <MessageCircle className='w-6 h-6 text-obsidian' />
                )}
            </button>

            {/* Chat panel */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
                    isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                <div className='glass rounded-2xl overflow-hidden shadow-2xl'>
                    {/* Header */}
                    <div className='p-4 border-b border-border/50 bg-obsidian/50'>
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <div className='w-10 h-10 rounded-full bg-cyan-glow/20 border border-cyan-glow/50 flex items-center justify-center'>
                                    <Sparkles className='w-5 h-5 text-cyan-glow' />
                                </div>
                                <div className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-obsidian' />
                            </div>
                            <div>
                                <h3 className='font-sans font-medium text-foreground'>Chronos</h3>
                                <p className='text-xs text-muted-foreground'>AI Temporal Guide • Online</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className='h-[350px] overflow-y-auto p-4 space-y-4 bg-obsidian/30'>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                                        message.isUser
                                            ? 'bg-cyan-glow/20 border border-cyan-glow/30 rounded-br-md'
                                            : 'bg-secondary border border-border rounded-bl-md'
                                    }`}
                                >
                                    <p
                                        className={`text-sm leading-relaxed whitespace-pre-line ${
                                            message.isUser ? 'text-cyan-glow' : 'text-foreground'
                                        }`}
                                    >
                                        {message.text}
                                    </p>
                                    <p className='text-[10px] text-muted-foreground mt-2'>
                                        {formatTime(message.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className='p-4 border-t border-border/50 bg-obsidian/50'>
                        <div className='flex gap-2'>
                            <input
                                type='text'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder='Ask Chronos anything...'
                                className='flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-glow/50 transition-colors'
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className='w-10 h-10 rounded-full bg-cyan-glow flex items-center justify-center hover:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                <Send className='w-4 h-4 text-obsidian' />
                            </button>
                        </div>
                        <p className='text-[10px] text-muted-foreground text-center mt-3'>
                            Powered by Quantum Neural Networks • Response time: 0.003 temporal units
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
