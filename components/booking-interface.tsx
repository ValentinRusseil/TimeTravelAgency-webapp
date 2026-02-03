'use client';

import { useState } from 'react';
import { motion } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, Users, Calendar, Shield, Languages, Shirt } from 'lucide-react';

const timelineEras = [
    { year: '65M BC', label: 'Cretaceous', available: true, price: 125000 },
    { year: '1504', label: 'Renaissance', available: true, price: 78000 },
    { year: '1889', label: 'Belle Époque', available: true, price: 45000 },
];

const addOns = [
    {
        id: 'camouflage',
        icon: Shirt,
        title: 'Camouflage Pack',
        description: 'Period-accurate clothing, accessories, and grooming kit tailored to your destination.',
        price: '$2,500',
    },
    {
        id: 'insurance',
        icon: Shield,
        title: 'Paradox Insurance',
        description: 'Full coverage for any timeline anomalies, plus priority extraction services.',
        price: '$5,000',
    },
    {
        id: 'translator',
        icon: Languages,
        title: 'Universal Translator',
        description: 'Neural implant allowing real-time translation of any historical language.',
        price: '$3,500',
    },
];

export function BookingInterface() {
    const [selectedEra, setSelectedEra] = useState(1); // Renaissance
    const [travelers, setTravelers] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['insurance']);
    const [timelineOffset, setTimelineOffset] = useState(0);

    const toggleAddOn = (id: string) => {
        setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    const visibleEras = 5;
    const maxOffset = Math.max(0, timelineEras.length - visibleEras);

    // Get base price for selected destination
    const basePrice = timelineEras[selectedEra]?.price || 78000;

    // Calculate total price
    const totalPrice =
        basePrice * travelers +
        selectedAddOns.reduce((sum, id) => {
            const addon = addOns.find((a) => a.id === id);
            return sum + (addon ? parseInt(addon.price.replace(/\D/g, '')) : 0);
        }, 0);

    // Format number with commas
    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <section id='booking' className='relative py-32 px-6'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-b from-background via-navy-deep/30 to-background' />

            <div className='relative max-w-5xl mx-auto'>
                {/* Section header */}
                <div className='text-center mb-16'>
                    <span className='inline-block px-4 py-1 text-xs font-mono tracking-[0.3em] text-cyan-glow/70 border border-cyan-glow/30 rounded-full mb-6'>
                        BOOK YOUR JOURNEY
                    </span>
                    <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground'>
                        Select Your Timeline
                    </h2>
                    <p className='font-sans text-lg text-muted-foreground max-w-2xl mx-auto'>
                        Choose your destination era and customize your temporal expedition.
                    </p>
                </div>

                {/* Horizontal Timeline Selector */}
                <div className='mb-16'>
                    <div className='glass rounded-2xl p-8'>
                        {/* Timeline navigation */}
                        <div className='flex items-center justify-between mb-6'>
                            <h3 className='font-mono text-sm text-cyan-glow tracking-wider'>TEMPORAL COORDINATES</h3>
                            <div className='flex gap-2'>
                                <button
                                    onClick={() => setTimelineOffset(Math.max(0, timelineOffset - 1))}
                                    disabled={timelineOffset === 0}
                                    className='w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-cyan-glow/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed'
                                >
                                    <ChevronLeft className='w-4 h-4 text-muted-foreground' />
                                </button>
                                <button
                                    onClick={() => setTimelineOffset(Math.min(maxOffset, timelineOffset + 1))}
                                    disabled={timelineOffset >= maxOffset}
                                    className='w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-cyan-glow/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed'
                                >
                                    <ChevronRight className='w-4 h-4 text-muted-foreground' />
                                </button>
                            </div>
                        </div>

                        {/* Timeline track */}
                        <div className='relative'>
                            {/* Track line */}
                            <div className='absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent -translate-y-1/2' />

                            {/* Era markers */}
                            <div className='relative flex justify-between overflow-hidden'>
                                <div
                                    className='flex transition-transform duration-500 ease-out w-full'
                                    style={{
                                        transform: `translateX(-${timelineOffset * (100 / visibleEras)}%)`,
                                    }}
                                >
                                    {timelineEras.map((era, index) => (
                                        <button
                                            key={era.year}
                                            onClick={() => era.available && setSelectedEra(index)}
                                            disabled={!era.available}
                                            className={`flex-shrink-0 flex flex-col items-center gap-3 transition-all group`}
                                            style={{ width: `${100 / visibleEras}%` }}
                                        >
                                            {/* Marker */}
                                            <div
                                                className={`relative w-4 h-4 rounded-full border-2 transition-all ${
                                                    selectedEra === index
                                                        ? 'border-cyan-glow bg-cyan-glow shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.5)]'
                                                        : era.available
                                                          ? 'border-muted-foreground/50 bg-background hover:border-cyan-glow/50'
                                                          : 'border-muted-foreground/20 bg-background/50'
                                                }`}
                                            >
                                                {selectedEra === index && (
                                                    <div className='absolute inset-0 rounded-full bg-cyan-glow animate-ping opacity-50' />
                                                )}
                                            </div>

                                            {/* Label */}
                                            <div className='text-center'>
                                                <p
                                                    className={`font-mono text-sm transition-colors ${
                                                        selectedEra === index
                                                            ? 'text-cyan-glow'
                                                            : era.available
                                                              ? 'text-foreground group-hover:text-cyan-glow'
                                                              : 'text-muted-foreground/40'
                                                    }`}
                                                >
                                                    {era.year}
                                                </p>
                                                <p
                                                    className={`text-xs mt-1 transition-colors ${
                                                        selectedEra === index
                                                            ? 'text-cyan-glow/70'
                                                            : era.available
                                                              ? 'text-muted-foreground'
                                                              : 'text-muted-foreground/30'
                                                    }`}
                                                >
                                                    {era.label}
                                                </p>
                                                {!era.available && (
                                                    <span className='text-[10px] font-mono text-muted-foreground/40 mt-1 block'>
                                                        COMING SOON
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Timeline track */}
            <div className="relative max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
              {/* Track line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent -translate-y-1/2" />
              
              {/* Era markers */}
              <div className="relative flex justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-40 overflow-hidden py-3 md:py-4 lg:py-6">
                <div 
                  className="flex gap-8 sm:gap-16 md:gap-24 lg:gap-40 transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateX(-${timelineOffset * (100 / visibleEras)}%)`,
                  }}
                >
                  {timelineEras.map((era, index) => (
                    <button
                      key={era.year}
                      onClick={() => era.available && setSelectedEra(index)}
                      disabled={!era.available}
                      className={`flex-shrink-0 flex flex-col items-center gap-2 md:gap-3 lg:gap-4 transition-all group min-w-[80px] md:min-w-[120px] lg:min-w-[140px]`}
                    >
                      {/* Marker */}
                      <div className={`relative w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 rounded-full border-2 transition-all ${
                        selectedEra === index 
                          ? "border-cyan-glow bg-cyan-glow shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.5)]" 
                          : era.available
                          ? "border-muted-foreground/50 bg-background hover:border-cyan-glow/50"
                          : "border-muted-foreground/20 bg-background/50"
                      }`}>
                        {selectedEra === index && (
                          <div className="absolute inset-0 rounded-full bg-cyan-glow animate-ping opacity-50" />
                        )}
                      </div>
                      
                      {/* Label */}
                      <div className="text-center">
                        <p className={`font-mono text-xs md:text-sm lg:text-lg transition-colors ${
                          selectedEra === index 
                            ? "text-cyan-glow font-medium" 
                            : era.available 
                            ? "text-foreground group-hover:text-cyan-glow" 
                            : "text-muted-foreground/40"
                        }`}>
                          {era.year}
                        </p>
                        <p className={`text-[10px] md:text-xs lg:text-sm mt-0.5 md:mt-1 transition-colors ${
                          selectedEra === index 
                            ? "text-cyan-glow/70" 
                            : era.available 
                            ? "text-muted-foreground" 
                            : "text-muted-foreground/30"
                        }`}>
                          {era.label}
                        </p>
                        {!era.available && (
                          <span className="text-[10px] font-mono text-muted-foreground/40 mt-1 block">
                            COMING SOON
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Configuration grid */}
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                    {/* Travelers selector */}
                    <div className='glass rounded-2xl p-6'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Users className='w-5 h-5 text-cyan-glow' />
                            <h3 className='font-mono text-sm text-cyan-glow tracking-wider'>TRAVELERS</h3>
                        </div>
                        <div className='flex items-center gap-4'>
                            <motion.button
                                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                                className='w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-cyan-glow/50 transition-all text-foreground'
                              whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                                -
                            </motion.button>
                            <span className='font-serif text-3xl text-foreground w-12 text-center'>{travelers}</span>
                            <motion.button
                                onClick={() => setTravelers(Math.min(6, travelers + 1))}
                                className='w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-cyan-glow/50 transition-all text-foreground'
                              whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                                +
                            </motion.button>
                            <span className='text-sm text-muted-foreground ml-2'>
                                {travelers === 1 ? 'Solo expedition' : `Group of ${travelers}`}
                            </span>
                        </div>
                    </div>

                    {/* Duration display */}
                    <div className='glass rounded-2xl p-6'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Calendar className='w-5 h-5 text-cyan-glow' />
                            <h3 className='font-mono text-sm text-cyan-glow tracking-wider'>DURATION</h3>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='font-serif text-3xl text-foreground'>5-7</span>
                            <span className='text-sm text-muted-foreground'>
                                days recommended for {timelineEras[selectedEra]?.label}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Add-ons */}
                <div className='mb-8'>
                    <h3 className='font-mono text-sm text-cyan-glow tracking-wider mb-4'>EXPEDITION ADD-ONS</h3>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {addOns.map((addon, index) => (
                            <motion.button
                                key={addon.id}
                                onClick={() => toggleAddOn(addon.id)}
                                className={`glass rounded-xl p-5 text-left transition-all ${
                                    selectedAddOns.includes(addon.id)
                                        ? 'border-cyan-glow/50 bg-cyan-glow/5'
                                        : 'hover:border-cyan-glow/30'
                                }`}
                              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                                <div className='flex items-start justify-between mb-3'>
                                    <addon.icon
                                        className={`w-5 h-5 ${
                                            selectedAddOns.includes(addon.id)
                                                ? 'text-cyan-glow'
                                                : 'text-muted-foreground'
                                        }`}
                                    />
                                    <div
                                        className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                                            selectedAddOns.includes(addon.id)
                                                ? 'border-cyan-glow bg-cyan-glow'
                                                : 'border-muted-foreground/50'
                                        }`}
                                    >
                                        {selectedAddOns.includes(addon.id) && (
                                            <Check className='w-3 h-3 text-obsidian' />
                                        )}
                                    </div>
                                </div>
                                <h4 className='font-sans font-medium text-foreground mb-1'>{addon.title}</h4>
                                <p className='text-xs text-muted-foreground mb-3 leading-relaxed'>
                                    {addon.description}
                                </p>
                                <p className='font-mono text-sm text-cyan-glow'>{addon.price}</p>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Summary and CTA */}
                <div className='glass rounded-2xl p-8'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                        <div>
                            <p className='text-sm text-muted-foreground mb-1'>Estimated Total</p>
                            <p className='font-serif text-4xl text-foreground'>${formatPrice(totalPrice)}</p>
                            <p className='text-xs text-muted-foreground mt-1'>
                                {timelineEras[selectedEra]?.label} • {travelers} traveler{travelers > 1 ? 's' : ''} •{' '}
                                {selectedAddOns.length} add-on{selectedAddOns.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                        <motion.button 
              className='px-10 py-4 bg-cyan-glow text-obsidian font-sans font-medium rounded-full hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.5)] transition-all text-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                            Initialize Booking
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
