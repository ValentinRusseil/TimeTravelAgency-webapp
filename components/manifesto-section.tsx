"use client"

import { Shield, Infinity, Clock, Lock } from "lucide-react"

const safetyBadges = [
  {
    icon: Shield,
    title: "Paradox Prevention",
    description: "Our quantum safeguards ensure your journey never disrupts the timeline. Every action is monitored and corrected in real-time.",
  },
  {
    icon: Infinity,
    title: "Closed Loop Protocol",
    description: "All temporal excursions operate within self-contained causal loops, preventing any butterfly effects from propagating.",
  },
  {
    icon: Clock,
    title: "Temporal Insurance",
    description: "Should anything go wrong, our extraction team operates outside of normal time, ensuring your safe return within milliseconds.",
  },
  {
    icon: Lock,
    title: "Identity Protection",
    description: "Advanced biometric cloaking ensures you remain undetectable to historical records and surveillance.",
  },
]

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-obsidian/50 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs font-mono tracking-[0.3em] text-gold/70 border border-gold/30 rounded-full mb-6">
            OUR MANIFESTO
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground">
            Safety Without Compromise
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At TimeTravel Agency, we believe that exploring the past should never endanger the future. 
            Our commitment to temporal integrity is absolute.
          </p>
        </div>

        {/* Safety badges grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {safetyBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="glass-gold rounded-2xl p-8 hover:border-gold/50 transition-all group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                    <badge.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-gold transition-colors">
                    {badge.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Badge number */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-mono text-6xl text-gold">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-gold rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-mono text-gold tracking-wider">CERTIFIED BY TEMPORAL REGULATORY COMMISSION</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">LICENSE #TRC-2087-0001</span>
          </div>
        </div>
      </div>
    </section>
  )
}
