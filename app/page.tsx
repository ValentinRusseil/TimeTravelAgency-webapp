"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { DestinationsGallery } from "@/components/destinations-gallery"
import { BookingInterface } from "@/components/booking-interface"
import { ChronosChat } from "@/components/chronos-chat"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ManifestoSection />
      <DestinationsGallery />
      <BookingInterface />
      <Footer />
      <ChronosChat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </main>
  )
}
