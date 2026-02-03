# TimeTravel Agency - Webapp Interactive

Application web pour une agence de voyage temporel fictive de luxe, créée avec l'aide de l'IA générative.

## 📖 Description

TimeTravel Agency est une expérience web immersive qui propose des voyages à travers le temps vers trois destinations
historiques exceptionnelles. Le site combine un design futuriste avec une interface utilisateur intuitive et un
assistant IA conversationnel nommé Chronos pour guider les voyageurs temporels.

## 🛠️ Stack Technique

- **Framework** : Next.js 15.1.7 (React 19)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **UI Components** : Radix UI
- **Icons** : Lucide React
- **IA** : Groq SDK (llama-3.3-70b-versatile)
- **Analytics** : Vercel Analytics
- **Déploiement** : Vercel

## ✨ Features Implémentées

### Interface Utilisateur

- 🎨 **Landing Page Interactive** : Section hero avec animation de portail quantique
- 🧭 **Navigation Responsive** : Menu adaptatif mobile-first avec burger menu
- 📱 **Design Mobile-First** : Interface entièrement responsive sur tous les écrans
- 🌙 **Thème Sombre Élégant** : Palette obsidian avec accents cyan lumineux

### Sections Principales

- ✈️ **Galerie de Destinations** : 3 destinations temporelles avec cartes interactives
    - Paris 1889 (Belle Époque) - 45 000€
    - Crétacé (66 millions d'années) - 125 000€
    - Florence 1504 (Haute Renaissance) - 78 000€
- 📋 **Système de Réservation** : Interface de booking avec timeline interactive
- 📜 **Section Manifeste** : Garanties de sécurité temporelle
- ℹ️ **About** : Charte éthique et présentation de l'agence
- 👤 **Footer** : Informations de contact et liens utiles

### Chatbot IA - Chronos

- 🤖 **Assistant Virtuel Intelligent** : Propulsé par Groq AI
- 💬 **Widget Flottant** : Bulle de chat en bas à droite
- 🎯 **Recommandations Personnalisées** : Suggestions selon les intérêts du client
- 📚 **Expertise Historique** : Anecdotes et détails sur chaque destination
- ⚡ **Réponses en Temps Réel** : Streaming avec llama-3.3-70b-versatile
- 💰 **Informations Tarifaires** : Prix et services détaillés

### Services Add-ons

- 👔 **Pack Camouflage** : Vêtements d'époque (2 500€)
- 🛡️ **Assurance Paradoxe** : Couverture complète (5 000€)
- 🗣️ **Traducteur Universel** : Implant neural (3 500€)

## 🤖 IA Utilisées

### Développement

- **Code & Architecture** : GitHub Copilot (Claude Sonnet 4.5)
    - Génération de composants React/Next.js
    - Structure du projet et routing
    - Styling avec Tailwind CSS
    - Configuration TypeScript

### Chatbot Conversationnel

- **Modèle** : Groq - llama-3.3-70b-versatile
- **API** : Groq SDK
- **Personnalité** : Chronos, guide temporel expert
- **Capacités** : Recommandations, informations historiques, support client

## 📦 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

```bash
git clone https://github.com/ValentinRusseil/TimeTravelAgency-webapp.git
cd TimeTravelAgency-webapp
```

2. **Installer les dépendances**

```bash
npm install --legacy-peer-deps
```

3. **Configurer les variables d'environnement** Créez un fichier `.env.local` à la racine :

```env
GROQ_API_KEY=votre_clé_api_groq
```

Pour obtenir une clé API Groq gratuite : https://console.groq.com

4. **Lancer le serveur de développement**

```bash
npm run dev
```

5. **Ouvrir dans le navigateur** Accédez à http://localhost:3000

### Build pour production

```bash
npm run build
npm start
```

## 🎨 Design System

### Palette de Couleurs

- **Background** : Obsidian (#0a0a0f)
- **Navy Deep** : #0f1729
- **Cyan Glow** : oklch(0.75 0.18 195)
- **Foreground** : #e8e8e8

### Typographie

- **Serif** : Playfair Display (titres)
- **Sans** : Inter (corps de texte)
- **Mono** : JetBrains Mono (détails techniques)

## 📁 Structure du Projet

```
TimeTravelAgency-webapp/
├── app/
│   ├── api/chat/route.ts      # API Groq pour le chatbot
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Page d'accueil
│   └── globals.css            # Styles globaux
├── components/
│   ├── navigation.tsx         # Menu de navigation
│   ├── hero-section.tsx       # Section hero
│   ├── manifesto-section.tsx  # Section safety
│   ├── about-section.tsx      # Section à propos
│   ├── destinations-gallery.tsx # Galerie destinations
│   ├── booking-interface.tsx  # Interface de réservation
│   ├── chronos-widget.tsx     # Widget chatbot
│   └── footer.tsx             # Pied de page
├── public/                    # Assets statiques
└── package.json               # Dépendances
```

## 🙏 Crédits

### APIs & Services

- **Groq Cloud** : API IA pour le chatbot conversationnel
- **Vercel** : Hébergement et déploiement
- **Radix UI** : Composants UI accessibles

### Assets & Design

- **Icons** : Lucide React
- **Fonts** : Google Fonts (Inter, Playfair Display, JetBrains Mono)

### Outils de Développement

- **GitHub Copilot** : Assistance au développement
- **Next.js** : Framework React
- **Tailwind CSS** : Framework CSS utility-first

## 📄 Licence

Projet pédagogique - M1/M2 Digital & IA  
YNOV - 2026

---

**Développé avec** ❤️ **et** 🤖 **IA** <br>
**Supervisé par Mattéo Pereira et Valentin Russeil.**
