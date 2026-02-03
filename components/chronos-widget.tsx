'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export function ChronosWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Bonjour, voyageur temporel ! Je suis Chronos, votre guide IA à travers les âges. Comment puis-je vous aider aujourd'hui ?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputValue,
                    history: messages.map((msg) => ({
                        role: msg.isUser ? 'user' : 'assistant',
                        content: msg.text,
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la communication avec Chronos');
            }

            const data = await response.json();

            const botMessage: Message = {
                id: messages.length + 2,
                text: data.response,
                isUser: false,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: messages.length + 2,
                text: 'Désolé, je rencontre un problème temporel. Veuillez réessayer dans un instant.',
                isUser: false,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className='fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-glow to-cyan-glow/70 shadow-[0_0_30px_oklch(0.75_0.18_195_/_0.3)] hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.5)] transition-all flex items-center justify-center group animate-pulse hover:animate-none'
                >
                    <MessageCircle className='w-7 h-7 text-obsidian' />
                    <div className='absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-ping' />
                    <div className='absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full' />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className='fixed bottom-6 right-6 z-50 w-[400px] h-[600px] glass rounded-2xl shadow-[0_0_50px_oklch(0.75_0.18_195_/_0.2)] flex flex-col overflow-hidden border border-cyan-glow/30'>
                    {/* Header */}
                    <div className='bg-gradient-to-r from-obsidian to-navy-deep p-4 border-b border-cyan-glow/30'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='relative'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-cyan-glow to-cyan-glow/70 flex items-center justify-center'>
                                        <span className='text-obsidian font-mono text-lg font-bold'>C</span>
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-obsidian' />
                                </div>
                                <div>
                                    <h3 className='font-sans font-semibold text-foreground'>Chronos</h3>
                                    <p className='text-xs text-cyan-glow/70 font-mono'>Guide Temporel IA</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='w-8 h-8 rounded-full hover:bg-cyan-glow/10 flex items-center justify-center transition-colors'
                            >
                                <X className='w-5 h-5 text-muted-foreground hover:text-cyan-glow transition-colors' />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-obsidian/30'>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                                        message.isUser
                                            ? 'bg-gradient-to-br from-cyan-glow/20 to-cyan-glow/10 border border-cyan-glow/30 rounded-br-md'
                                            : 'bg-secondary border border-border/50 rounded-bl-md'
                                    }`}
                                >
                                    <p
                                        className={`text-sm leading-relaxed whitespace-pre-line ${
                                            message.isUser ? 'text-cyan-glow' : 'text-foreground'
                                        }`}
                                    >
                                        {message.text}
                                    </p>
                                    <p className='text-[10px] text-muted-foreground/70 mt-2'>
                                        {formatTime(message.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className='flex justify-start'>
                                <div className='bg-secondary border border-border/50 rounded-2xl rounded-bl-md px-4 py-3'>
                                    <Loader2 className='w-5 h-5 text-cyan-glow animate-spin' />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className='p-4 border-t border-border/50 bg-obsidian/50'>
                        <div className='flex gap-2'>
                            <input
                                type='text'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder='Posez-moi vos questions sur les voyages temporels...'
                                className='flex-1 px-4 py-3 bg-background border border-border/50 rounded-full text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-glow/50 transition-colors'
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim() || isLoading}
                                className='w-12 h-12 rounded-full bg-cyan-glow/20 border border-cyan-glow/50 flex items-center justify-center hover:bg-cyan-glow/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)]'
                            >
                                <Send className='w-5 h-5 text-cyan-glow' />
                            </button>
                        </div>
                        <p className='text-[10px] text-muted-foreground/50 text-center mt-2 font-mono'>
                            Propulsé par Groq AI • Chronos v2.1
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
