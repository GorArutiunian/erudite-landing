# Erudite Landing Page

A premium, investor-grade landing page for Erudite - an interactive kids' learning platform.

## Features

- 🎨 **Modern Design**: Clean, professional design with premium aesthetics
- 🌓 **Dark Mode**: Full dark mode support with system preference detection
- 🌍 **Multilingual**: Support for English, Armenian, and Russian
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with Vite and modern React
- ♿ **Accessible**: Semantic HTML and ARIA labels for accessibility
- 🎭 **Smooth Animations**: Subtle, professional animations with Framer Motion

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
erudite-landing/
├── src/
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Modal.tsx      # Modal component
│   │   ├── Forms.tsx      # Form components
│   │   └── Footer.tsx      # Footer component
│   ├── context/
│   │   ├── ThemeContext.tsx    # Dark mode context
│   │   └── LanguageContext.tsx  # i18n context
│   ├── i18n/
│   │   └── dictionary.ts       # Translation dictionary
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Key Sections

1. **Hero**: Main value proposition with app preview
2. **Problem/Opportunity**: Market context and opportunity
3. **Product Overview**: Interactive tabs showing features
4. **Parent Dashboard**: Parent-focused features and controls
5. **Learning Experience**: Learning flow and gamification
6. **Multilingual**: Language support showcase
7. **Differentiation**: Competitive comparison
8. **Traction**: Validation and milestones
9. **Pricing**: Business model presentation
10. **Roadmap**: Product roadmap
11. **Security**: Privacy and safety features
12. **FAQ**: Frequently asked questions
13. **Final CTA**: Investor-focused call-to-action

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `primary`: Deep indigo/royal blue
- `accent`: Warm gold/amber
- `secondary`: Mint/teal

### Content

- Translations: Edit `src/i18n/dictionary.ts`
- Section content: Edit individual section components in `src/components/sections/`

### Branding

- Logo: Update the logo in `Navbar.tsx` and `Footer.tsx`
- Meta tags: Update `index.html` with your SEO information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved
