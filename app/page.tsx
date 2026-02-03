'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ManifestoSection } from '@/components/manifesto-section';
import { AboutSection } from '@/components/about-section';
import { DestinationsGallery } from '@/components/destinations-gallery';
import { BookingInterface } from '@/components/booking-interface';
import { ChronosWidget } from '@/components/chronos-widget';
import { Footer } from '@/components/footer';

export default function HomePage() {
    return (
        <main className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <Navigation />
            <HeroSection />
            <ManifestoSection />
            <AboutSection />
            <DestinationsGallery />
            <BookingInterface />
            <Footer />
            <ChronosWidget />
        </main>
    );
}
