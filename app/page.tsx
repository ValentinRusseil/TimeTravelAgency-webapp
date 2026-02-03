'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ManifestoSection } from '@/components/manifesto-section';
import { AboutSection } from '@/components/about-section';
import { DestinationsGallery } from '@/components/destinations-gallery';
import { BookingInterface } from '@/components/booking-interface';
import { ChronosWidget } from '@/components/chronos-widget';
import { Footer } from '@/components/footer';
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
    return (
        <main className='h-screen overflow-y-scroll snap-y snap-mandatory bg-background text-foreground overflow-x-hidden scroll-smooth'>
            <Navigation />
            <section className="snap-start snap-always min-h-screen">
        <HeroSection />
            </section>
      <section className="snap-start snap-always min-h-screen">
        <ScrollReveal>
          <ManifestoSection />
              </ScrollReveal>
      </section>
      <section className="snap-start snap-always min-h-screen">
        <ScrollReveal>
          <AboutSection />
              </ScrollReveal>
      </section>
      <section className="snap-start snap-always min-h-screen">
        <ScrollReveal>
          <DestinationsGallery />
              </ScrollReveal>
      </section>
      <section className="snap-start snap-always min-h-screen">
        <ScrollReveal>
          <BookingInterface />
              </ScrollReveal>
      </section>
      <section className="snap-start">
        <Footer />
            </section>
      <ChronosWidget />
        </main>
    );
}
