export type Language = 'en';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.forParents': 'For Parents',
    'nav.forSchools': 'For Schools',
    'nav.whyErudite': 'Why Erudite',
    'nav.pricing': 'Pricing',
    'nav.roadmap': 'Roadmap',
    'nav.faq': 'FAQ',
    'nav.requestDeck': 'Request Investor Deck',
    'nav.bookDemo': 'Book a Demo',
    
    // Hero
    'hero.headline': 'Make Learning Joyful, Measurable, and Safe',
    'hero.subheadline': 'Interactive educational platform that kids love and parents trust. Structured lessons, gamified progress, and transparent insights—all in one multilingual app.',
    'hero.trust.multilingual': 'Structured Learning',
    'hero.trust.gamified': 'Gamified Learning',
    'hero.trust.parentInsights': 'Parent Insights',
    'hero.trust.safeDesign': 'Safe-by-Design',
    'hero.cta.deck': 'Request Investor Deck',
    'hero.cta.product': 'View Product',
    
    // Problem/Opportunity
    'problem.title': 'The Problem → The Opportunity',
    'problem.engagement': 'Low Engagement',
    'problem.engagement.desc': 'Kids lose interest in passive learning. Traditional methods fail to maintain attention.',
    'problem.visibility': 'Parent Blind Spots',
    'problem.visibility.desc': 'Parents lack visibility into their child\'s learning progress and struggles.',
    'problem.fragmented': 'Fragmented Content',
    'problem.fragmented.desc': 'Educational content is scattered across platforms without structure or measurement.',
    'opportunity.title': 'Market Opportunity',
    'opportunity.text': 'The global edtech market continues to grow, driven by demand for personalized, measurable learning outcomes and parent involvement in education.',
    'whyNow.title': 'Why Now',
    'whyNow.ai': 'AI-powered personalization is becoming mainstream',
    'whyNow.parents': 'Parents increasingly pay for measurable educational outcomes',
    'whyNow.mobile': 'Mobile-first learning is the new standard',
    
    // Product
    'product.title': 'Product Overview',
    'product.tab.lessons': 'Lessons',
    'product.tab.games': 'Games & Quizzes',
    'product.tab.rewards': 'Rewards',
    'product.tab.parents': 'Parents',
    'product.lessons.desc': 'Structured, age-appropriate lessons that adapt to each child\'s learning pace.',
    'product.lessons.f1': '3-5 minute interactive lessons',
    'product.lessons.f2': 'Age-appropriate content (4-9 years)',
    'product.lessons.f3': 'Progressive skill building',
    'product.lessons.f4': 'Multilingual support',
    'product.games.desc': 'Engaging quizzes and games that reinforce learning through play.',
    'product.games.f1': 'Memory matching games',
    'product.games.f2': 'Interactive quizzes',
    'product.games.f3': 'Skill-based challenges',
    'product.games.f4': 'Real-time progress tracking',
    'product.rewards.desc': 'Gamification that motivates continuous learning and achievement.',
    'product.rewards.f1': 'Badge collection system',
    'product.rewards.f2': 'Daily streak rewards',
    'product.rewards.f3': 'Level progression',
    'product.rewards.f4': 'Celebration animations',
    'product.parents.desc': 'Comprehensive dashboard for parents to track and guide their child\'s learning.',
    'product.parents.f1': 'Real-time progress tracking',
    'product.parents.f2': 'Learning time insights',
    'product.parents.f3': 'Skill mastery reports',
    'product.parents.f4': 'Parental controls',
    
    // Parent Dashboard
    'parent.title': 'Parent Dashboard',
    'parent.subtitle': 'Transparency, Control, and Insights',
    'parent.metrics.weekly': 'Weekly Learning Minutes',
    'parent.metrics.mastery': 'Mastery %',
    'parent.metrics.streak': 'Current Streak',
    'parent.controls.title': 'Parental Controls',
    'parent.controls.session': 'Session time limits',
    'parent.controls.content': 'Content preferences',
    'parent.controls.language': 'Language selection',
    'parent.controls.reports': 'Progress reports',
    
    // Learning Experience
    'learning.title': 'Learning Experience',
    'learning.flow.discover': 'Discover',
    'learning.flow.learn': 'Learn',
    'learning.flow.practice': 'Practice',
    'learning.flow.reward': 'Reward',
    'learning.gamification.title': 'Gamification Mechanics',
    'learning.gamification.badges': 'Badges',
    'learning.gamification.streaks': 'Streaks',
    'learning.gamification.levels': 'Levels',
    
    // Multilingual
    'multilingual.title': 'Multilingual & Global Expansion',
    'multilingual.subtitle': 'Built for global reach from day one',
    'multilingual.desc': 'Our architecture supports seamless localization. Currently available in English, Armenian, and Russian, with more languages coming soon.',
    
    // Differentiation
    'differentiation.title': 'Why Erudite',
    'differentiation.subtitle': 'What sets us apart',
    'differentiation.vs.video': 'vs Generic Video Content',
    'differentiation.vs.worksheets': 'vs Random Worksheets',
    'differentiation.vs.quizzes': 'vs Simple Quiz Apps',
    'differentiation.structure': 'Structured Curriculum',
    'differentiation.measurement': 'Measurable Outcomes',
    'differentiation.kidUX': 'Kid-First UX',
    'differentiation.parentVisibility': 'Parent Visibility',
    
    // Traction
    'traction.title': 'Traction & Validation',
    'traction.pilot': 'Pilot interviews with parents',
    'traction.prototype': 'Prototype testing feedback',
    'traction.incubation': 'Incubation / Mentorship',
    'traction.note': 'Metrics available on request / in deck',
    
    // Business Model
    'pricing.title': 'Business Model',
    'pricing.starter': 'Starter',
    'pricing.starter.price': 'Free',
    'pricing.starter.desc': 'Limited lessons, basic rewards',
    'pricing.family': 'Family',
    'pricing.family.price': 'Subscription',
    'pricing.family.desc': 'Full curriculum + parent dashboard + multi-device',
    'pricing.school': 'School',
    'pricing.school.price': 'Contact us',
    'pricing.school.desc': 'Dashboards + classroom features + reporting',
    
    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.now': 'Now',
    'roadmap.next': 'Next',
    'roadmap.later': 'Later',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.safety.q': 'Is Erudite safe for kids?',
    'faq.safety.a': 'Yes. Erudite is designed with child safety as a priority. We follow COPPA guidelines, collect minimal data, and provide full parental transparency.',
    'faq.age.q': 'What age range is Erudite for?',
    'faq.age.a': 'Erudite is designed for children ages 4-9, with content also suitable for 6-12 year olds.',
    'faq.languages.q': 'What languages are supported?',
    'faq.languages.a': 'Currently English, Armenian, and Russian. More languages are in development.',
    'faq.content.q': 'Who creates the content?',
    'faq.content.a': 'Our content is created by educators and curriculum experts, aligned with educational standards.',
    'faq.privacy.q': 'How is data privacy handled?',
    'faq.privacy.a': 'We collect minimal data necessary for learning progress. All data is encrypted and parents have full control over their child\'s information.',
    'faq.schools.q': 'Can schools use Erudite?',
    'faq.schools.a': 'Yes. We offer school plans with classroom dashboards, reporting, and administrative features.',
    'faq.offline.q': 'Does Erudite work offline?',
    'faq.offline.a': 'Offline mode is on our roadmap. Currently, an internet connection is required.',
    
    // Security
    'security.title': 'Security & Privacy',
    'security.kidSafe': 'Kid-safe UX',
    'security.minimalData': 'Minimal data collection',
    'security.transparency': 'Parental transparency',
    
    // CTA
    'cta.title': 'Build the Future of Playful, Measurable Learning',
    'cta.deck': 'Request Investor Deck',
    'cta.demo': 'Book a Demo',
    
    // Footer
    'footer.email': 'hello@erudite.app',
    'footer.copyright': '© 2024 Erudite. All rights reserved.',
    
    // Modals
    'modal.deck.title': 'Request Investor Deck',
    'modal.deck.name': 'Name',
    'modal.deck.email': 'Email',
    'modal.deck.role': 'Role',
    'modal.deck.role.investor': 'Investor',
    'modal.deck.role.partner': 'Partner',
    'modal.deck.role.press': 'Press',
    'modal.deck.role.other': 'Other',
    'modal.deck.message': 'Message',
    'modal.deck.submit': 'Submit Request',
    'modal.deck.success': 'Thank you! We\'ll be in touch soon.',
    'modal.demo.title': 'Book a Demo',
    'modal.demo.organization': 'Organization',
    'modal.demo.date': 'Preferred Date',
    'modal.demo.submit': 'Book Demo',
    'modal.demo.success': 'Demo request received! We\'ll confirm the date shortly.',
    'modal.close': 'Close',
    'modal.pressKit.title': 'Press Kit',
    'modal.pressKit.desc': 'Download assets and information for media use.',
    'modal.pressKit.logo': 'Logo (SVG)',
    'modal.pressKit.screenshots': 'Screenshots',
    'modal.pressKit.factSheet': 'Fact Sheet',
  },
};

export const getTranslation = (_lang: Language, key: string): string => {
  return translations.en[key] ?? key;
};
