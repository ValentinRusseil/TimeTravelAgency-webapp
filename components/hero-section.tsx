"use client"

import { Play, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-navy-deep to-background" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 195) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Quantum Portal Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-glow/20 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute inset-4 rounded-full border border-cyan-glow/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 rounded-full border border-cyan-glow/40 animate-spin" style={{ animationDuration: '20s' }} />
          
          {/* Portal center with video placeholder */}
          <div className="absolute inset-16 rounded-full bg-obsidian/80 portal-glow flex items-center justify-center overflow-hidden">
            {/* Scan line effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-glow/10 to-transparent"
              style={{
                animation: 'scan-line 3s linear infinite'
              }}
            />
            
            {/* Play button */}
            <button className="relative z-10 w-20 h-20 rounded-full bg-cyan-glow/20 border border-cyan-glow/50 flex items-center justify-center hover:bg-cyan-glow/30 transition-all group">
              <Play className="w-8 h-8 text-cyan-glow ml-1 group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Video placeholder text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="text-xs font-mono text-cyan-glow/50 tracking-widest">QUANTUM PORTAL VISUALIZATION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-32">
        {/* Subtitle */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1 text-xs font-mono tracking-[0.3em] text-cyan-glow/70 border border-cyan-glow/30 rounded-full">
            ESTABLISHED 2087 • TEMPORAL LICENSE #0001
          </span>
        </div>

        {/* Main headline with glitch effect */}
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 glitch-text text-foreground"
          data-text="The Future Has a Past."
        >
          The Future Has a Past.
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience history firsthand. Walk the streets of ancient Rome. 
          Witness the Renaissance. Touch the untouched.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-cyan-glow text-obsidian font-sans font-medium rounded-full hover:shadow-[0_0_30px_oklch(0.75_0.18_195_/_0.5)] transition-all">
            Explore Destinations
          </button>
          <button className="px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-sans rounded-full hover:border-cyan-glow/50 hover:text-cyan-glow transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float-animation">
        <ChevronDown className="w-6 h-6 text-cyan-glow/50" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 text-xs font-mono text-cyan-glow/30 tracking-widest">
        <div>LAT: 40.7128° N</div>
        <div>LONG: 74.0060° W</div>
        <div>TIME: {new Date().toLocaleTimeString()}</div>
      </div>
      
      <div className="absolute top-24 right-8 text-xs font-mono text-cyan-glow/30 tracking-widest text-right">
        <div>TEMPORAL FLUX: STABLE</div>
        <div>PARADOX RISK: 0.001%</div>
        <div>QUANTUM STATE: READY</div>
      </div>
    </section>
  )
}
