'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const destinations = [
    {
        id: 'paris-1889',
        title: 'Paris 1889',
        subtitle: 'Belle Époque',
        description:
            "Witness the grand unveiling of the Eiffel Tower during the World's Fair. Stroll along gaslit boulevards as artists and dreamers forge a new artistic movement.",
        era: '19th Century',
        duration: '3-7 Days',
        difficulty: 'Beginner',
        price: 'From $45,000',
        theme: 'belle-epoque',
        gradient: 'from-amber-900/40 via-orange-800/30 to-rose-900/40',
        accentColor: 'oklch(0.75 0.15 60)',
        icon: (
            <svg className='w-12 h-12' viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.5'>
                <path d='M24 4L24 44M24 4L12 20M24 4L36 20M12 20L12 44M36 20L36 44M8 44H40M16 28H32M18 36H30' />
            </svg>
        ),
    },
    {
        id: 'cretaceous',
        title: 'Cretaceous',
        subtitle: 'Age of Giants',
        description:
            'Journey 66 million years into the past. Observe the magnificent dinosaurs in their natural habitat from the safety of our quantum-shielded observation domes.',
        era: 'Mesozoic Era',
        duration: '1-3 Days',
        difficulty: 'Advanced',
        price: 'From $125,000',
        theme: 'prehistoric',
        gradient: 'from-emerald-900/40 via-green-800/30 to-teal-900/40',
        accentColor: 'oklch(0.65 0.15 160)',
        icon: (
            <svg className='w-12 h-12' viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.5'>
                <path d='M8 32C8 32 12 28 16 28C20 28 24 32 24 32C24 32 28 28 32 28C36 28 40 32 40 32' />
                <path d='M10 36L14 28L18 36' />
                <path d='M30 36L34 28L38 36' />
                <ellipse cx='24' cy='16' rx='8' ry='6' />
                <path d='M20 14L18 10M28 14L30 10M22 18L26 18' />
            </svg>
        ),
    },
    {
        id: 'florence-1504',
        title: 'Florence 1504',
        subtitle: 'High Renaissance',
        description:
            "Stand in Michelangelo's workshop as he completes David. Attend private gatherings where Da Vinci unveils his latest inventions to the Medici court.",
        era: '16th Century',
        duration: '5-14 Days',
        difficulty: 'Intermediate',
        price: 'From $78,000',
        theme: 'renaissance',
        gradient: 'from-stone-800/40 via-amber-900/30 to-red-900/40',
        accentColor: 'oklch(0.70 0.12 45)',
        icon: (
            <svg className='w-12 h-12' viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.5'>
                <circle cx='24' cy='18' r='10' />
                <path d='M18 16L20 14M28 14L30 16M22 22C22 22 24 24 26 22' />
                <path d='M14 28L24 44L34 28' />
                <path d='M18 32L24 38L30 32' />
            </svg>
        ),
    },
];

export function DestinationsGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollTo = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const cardWidth = 400;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id='destinations' className='relative py-32 overflow-hidden'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-b from-background via-obsidian to-background' />

            <div className='relative'>
                {/* Section header */}
                <div className='max-w-6xl mx-auto px-6 mb-16'>
                    <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
                        <div>
                            <span className='inline-block px-4 py-1 text-xs font-mono tracking-[0.3em] text-cyan-glow/70 border border-cyan-glow/30 rounded-full mb-6'>
                                TEMPORAL DESTINATIONS
                            </span>
                            <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground'>
                                Choose Your Era
                            </h2>
                        </div>

                        {/* Navigation arrows */}
                        <div className='flex gap-3'>
                            <button
                                onClick={() => scrollTo('left')}
                                className='w-12 h-12 rounded-full glass flex items-center justify-center hover:border-cyan-glow/50 transition-all group'
                            >
                                <ChevronLeft className='w-5 h-5 text-muted-foreground group-hover:text-cyan-glow transition-colors' />
                            </button>
                            <button
                                onClick={() => scrollTo('right')}
                                className='w-12 h-12 rounded-full glass flex items-center justify-center hover:border-cyan-glow/50 transition-all group'
                            >
                                <ChevronRight className='w-5 h-5 text-muted-foreground group-hover:text-cyan-glow transition-colors' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal scroll gallery */}
                <div
                    ref={scrollRef}
                    className='flex gap-6 overflow-x-auto px-6 pb-8 snap-x snap-mandatory scrollbar-hide'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Spacer for centering first card */}
                    <div className='flex-shrink-0 w-[calc((100vw-1152px)/2)] max-w-[200px] hidden lg:block' />

                    {destinations.map((destination, index) => (
                        <div
                            key={destination.id}
                            className='flex-shrink-0 w-[350px] md:w-[400px] snap-start group'
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div
                                className={`relative h-[520px] rounded-3xl overflow-hidden glass hover:border-cyan-glow/30 transition-all duration-500`}
                            >
                                {/* Gradient background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} opacity-60`}
                                />

                                {/* Pattern overlay based on theme */}
                                <div
                                    className='absolute inset-0 opacity-10'
                                    style={{
                                        backgroundImage:
                                            destination.theme === 'belle-epoque'
                                                ? `radial-gradient(circle at 20% 80%, ${destination.accentColor} 1px, transparent 1px)`
                                                : destination.theme === 'prehistoric'
                                                  ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L45 15 L37 22 L40 32 L30 26 L20 32 L23 22 L15 15 L25 15 Z' fill='none' stroke='%2322c55e' strokeWidth='0.5'/%3E%3C/svg%3E")`
                                                  : destination.theme === 'renaissance'
                                                    ? `radial-gradient(circle at 50% 50%, ${destination.accentColor} 1px, transparent 1px)`
                                                    : `linear-gradient(45deg, transparent 40%, ${destination.accentColor} 40%, ${destination.accentColor} 60%, transparent 60%)`,
                                        backgroundSize:
                                            destination.theme === 'belle-epoque' ? '30px 30px' : '40px 40px',
                                    }}
                                />

                                {/* Content */}
                                <div className='relative h-full p-8 flex flex-col'>
                                    {/* Era badge */}
                                    <div className='flex items-center justify-between mb-6'>
                                        <span
                                            className='px-3 py-1 text-xs font-mono tracking-wider rounded-full'
                                            style={{
                                                backgroundColor: `color-mix(in oklch, ${destination.accentColor} 20%, transparent)`,
                                                color: destination.accentColor,
                                                border: `1px solid color-mix(in oklch, ${destination.accentColor} 40%, transparent)`,
                                            }}
                                        >
                                            {destination.era}
                                        </span>
                                        <div
                                            className='text-muted-foreground'
                                            style={{ color: destination.accentColor }}
                                        >
                                            {destination.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className='mb-4'>
                                        <h3 className='font-serif text-3xl mb-1 text-foreground group-hover:text-cyan-glow transition-colors'>
                                            {destination.title}
                                        </h3>
                                        <p
                                            className='text-sm font-sans italic'
                                            style={{ color: destination.accentColor }}
                                        >
                                            {destination.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className='font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-grow'>
                                        {destination.description}
                                    </p>

                                    {/* Stats */}
                                    <div className='grid grid-cols-2 gap-4 mb-6'>
                                        <div>
                                            <span className='text-xs font-mono text-muted-foreground'>Duration</span>
                                            <p className='text-sm font-sans text-foreground'>{destination.duration}</p>
                                        </div>
                                        <div>
                                            <span className='text-xs font-mono text-muted-foreground'>Difficulty</span>
                                            <p className='text-sm font-sans text-foreground'>
                                                {destination.difficulty}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price and CTA */}
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <span className='text-xs font-mono text-muted-foreground'>Starting</span>
                                            <p className='font-serif text-xl text-foreground'>{destination.price}</p>
                                        </div>
                                        <a
                                            href='#booking'
                                            className='px-5 py-2 rounded-full text-sm font-sans transition-all flex items-center gap-2'
                                            style={{
                                                backgroundColor: `color-mix(in oklch, ${destination.accentColor} 20%, transparent)`,
                                                color: destination.accentColor,
                                                border: `1px solid color-mix(in oklch, ${destination.accentColor} 40%, transparent)`,
                                            }}
                                        >
                                            <Sparkles className='w-4 h-4' />
                                            Explore
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Spacer for centering last card */}
                    <div className='flex-shrink-0 w-[calc((100vw-1152px)/2)] max-w-[200px] hidden lg:block' />
                </div>

                {/* Pagination dots */}
                <div className='flex justify-center gap-2 mt-8'>
                    {destinations.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === activeIndex
                                    ? 'w-8 bg-cyan-glow'
                                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                            onClick={() => {
                                setActiveIndex(index);
                                if (scrollRef.current) {
                                    const cardWidth = 406; // card width + gap
                                    scrollRef.current.scrollTo({
                                        left: index * cardWidth,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
