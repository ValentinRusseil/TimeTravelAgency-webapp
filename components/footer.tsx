"use client"

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-cyan-glow/20" />
                <div className="absolute inset-1 rounded-full bg-obsidian border border-cyan-glow/50 flex items-center justify-center">
                  <span className="text-cyan-glow font-mono text-xs">TT</span>
                </div>
              </div>
              <span className="font-serif text-xl tracking-wider text-foreground">
                TimeTravel
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering temporal tourism since 2087. Licensed by the Temporal Regulatory Commission.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs text-cyan-glow tracking-wider mb-4">DESTINATIONS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Ancient World</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Medieval Era</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Renaissance</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Industrial Age</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Prehistoric</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-cyan-glow tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-cyan-glow tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Temporal Liability</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors">Paradox Waiver</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2087 TimeTravel Agency. All rights reserved across all timelines.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">All Systems Operational</span>
            </div>
            <span className="text-xs text-muted-foreground">TRC License #2087-0001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
