"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-cyan-glow/20 portal-glow" />
              <div className="absolute inset-1 rounded-full bg-obsidian border border-cyan-glow/50 flex items-center justify-center">
                <span className="text-cyan-glow font-mono text-xs">TT</span>
              </div>
            </div>
            <span className="font-serif text-xl tracking-wider text-foreground">
              TimeTravel
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
              Destinations
            </a>
            <a href="#manifesto" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
              Safety
            </a>
            <a href="#booking" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
              Book Now
            </a>
            <a href="#" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-cyan-glow/10 border border-cyan-glow/50 text-cyan-glow text-sm font-sans rounded-full hover:bg-cyan-glow/20 transition-all hover:shadow-[0_0_20px_oklch(0.75_0.18_195_/_0.3)]">
              Begin Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#destinations" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
                Destinations
              </a>
              <a href="#manifesto" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
                Safety
              </a>
              <a href="#booking" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
                Book Now
              </a>
              <a href="#" className="text-sm font-sans text-muted-foreground hover:text-cyan-glow transition-colors">
                About
              </a>
              <button className="px-6 py-2 bg-cyan-glow/10 border border-cyan-glow/50 text-cyan-glow text-sm font-sans rounded-full hover:bg-cyan-glow/20 transition-all w-fit">
                Begin Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
