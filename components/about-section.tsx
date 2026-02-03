"use client"

import { Shield, Drama, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/20 to-background" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 195) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-xs font-mono tracking-[0.3em] text-cyan-glow/70 border border-cyan-glow/30 rounded-full mb-6">
            NOTRE MANIFESTE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-foreground">
            Le Futur a enfin un Passé.
          </h2>
        </div>

        {/* Main Text */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Chez <span className="text-cyan-glow font-medium">TimeTravel Agency</span>, nous ne croyons pas aux limites de la montre. Depuis notre fondation en 2154 (selon le calendrier de départ), notre mission est de transformer l'Histoire, d'un simple récit scolaire, en une expérience sensorielle brute. Nous ne vendons pas des billets, nous ouvrons des brèches.
            </p>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              Que vous souhaitiez sentir l'odeur du pétrole et du parfum à l'Exposition Universelle de 1889, observer l'ombre d'un prédateur millénaire au Crétacé, ou discuter perspective avec Léonard de Vinci, nous garantissons une immersion totale, invisible et sécurisée.
            </p>
          </div>
        </div>

        {/* La Charte Éthique */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
            La Charte Éthique
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sécurité Temporelle */}
            <div className="glass rounded-2xl p-8 hover:border-cyan-glow/30 transition-all group">
              <div className="w-14 h-14 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center mb-6 group-hover:bg-cyan-glow/20 transition-all">
                <Shield className="w-7 h-7 text-cyan-glow" />
              </div>
              <h4 className="font-sans text-xl font-medium text-foreground mb-4">
                Sécurité Temporelle
              </h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Grâce à nos stabilisateurs de réalité, vos actions n'ont aucun impact sur le présent. Vous pouvez observer, mais l'Histoire reste immuable. Adieu, l'effet papillon.
              </p>
            </div>

            {/* Camouflage Holographique */}
            <div className="glass rounded-2xl p-8 hover:border-cyan-glow/30 transition-all group">
              <div className="w-14 h-14 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center mb-6 group-hover:bg-cyan-glow/20 transition-all">
                <Drama className="w-7 h-7 text-cyan-glow" />
              </div>
              <h4 className="font-sans text-xl font-medium text-foreground mb-4">
                Camouflage Holographique
              </h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Notre technologie "Mimic" adapte instantanément vos vêtements et vos accessoires à l'époque de destination. Vous ne serez pas un touriste, vous serez un témoin.
              </p>
            </div>

            {/* Préservation de la Timeline */}
            <div className="glass rounded-2xl p-8 hover:border-cyan-glow/30 transition-all group">
              <div className="w-14 h-14 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center mb-6 group-hover:bg-cyan-glow/20 transition-all">
                <Clock className="w-7 h-7 text-cyan-glow" />
              </div>
              <h4 className="font-sans text-xl font-medium text-foreground mb-4">
                Préservation de la Timeline
              </h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Nous respectons le protocole Chronos-Alpha. Aucun objet moderne n'est autorisé au-delà du portail, et aucun souvenir physique ne peut être rapporté (à l'exception de vos souvenirs neurologiques).
              </p>
            </div>
          </div>
        </div>

        {/* Le mot du Fondateur */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="text-cyan-glow">
                <text x="0" y="80" fontSize="120" fill="currentColor" fontFamily="serif">"</text>
              </svg>
            </div>
            
            <div className="relative">
              <p className="font-serif text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-6 italic">
                Le temps est la seule frontière que l'humanité n'avait pas encore franchie avec élégance. C'est désormais chose faite.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-gradient-to-r from-cyan-glow/50 to-transparent" />
                <div className="text-right">
                  <p className="font-sans text-sm font-medium text-cyan-glow">Elias Thorne</p>
                  <p className="font-mono text-xs text-muted-foreground">Pionnier de la Chrono-Navigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
