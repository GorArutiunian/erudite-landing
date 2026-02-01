import { motion } from 'framer-motion';
import { 
  Monitor, 
  Brain, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight,
  BookOpen,
  BarChart3,
  Target,
  Lightbulb,
  ExternalLink,
  Gamepad2,
  Tv
} from 'lucide-react';

// Import verified metrics
import {
  sources,
  pitchMetrics,
  screenTimeComposition,
  parentConfidence
} from '../../content/metrics';

// ============================================
// CITATION LINK COMPONENT
// ============================================

interface CitationProps {
  sourceId: string;
}

const Citation = ({ sourceId }: CitationProps) => (
  <a
    href={`#sources`}
    className="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-xs font-medium ml-0.5 align-super"
    title={`See source [${sourceId}]`}
  >
    [{sourceId}]
  </a>
);

// ============================================
// BLURRED DASHBOARD MOCK COMPONENT
// ============================================

const BlurredDashboardMock = () => (
  <div className="relative bg-white dark:bg-primary-800 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-700 overflow-hidden">
    {/* Blur overlay */}
    <div className="absolute inset-0 bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm z-10 flex items-center justify-center">
      <div className="text-center">
        <HelpCircle className="w-12 h-12 text-primary-400 dark:text-primary-500 mx-auto mb-2" />
        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">No visibility</p>
      </div>
    </div>
    
    {/* Mock dashboard content */}
    <div className="space-y-4 opacity-50">
      <div className="flex items-center justify-between">
        <div className="h-4 bg-primary-200 dark:bg-primary-600 rounded w-24"></div>
        <div className="h-4 bg-primary-100 dark:bg-primary-700 rounded w-16"></div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="h-16 bg-primary-100 dark:bg-primary-700 rounded-lg"></div>
        <div className="h-16 bg-primary-100 dark:bg-primary-700 rounded-lg"></div>
        <div className="h-16 bg-primary-100 dark:bg-primary-700 rounded-lg"></div>
      </div>
      <div className="h-24 bg-primary-50 dark:bg-primary-800 rounded-lg"></div>
    </div>
  </div>
);

// ============================================
// SCREEN TIME BAR VISUALIZATION
// ============================================

const ScreenTimeBar = () => (
  <div className="mt-8">
    <div className="flex items-center justify-between text-sm text-primary-600 dark:text-primary-400 mb-3">
      <span className="font-medium flex items-center gap-2">
        <Gamepad2 className="w-4 h-4" />
        Gaming: {screenTimeComposition.gamingPercentage.value}<Citation sourceId="1" />
      </span>
      <span className="font-medium flex items-center gap-2">
        <Tv className="w-4 h-4" />
        Other screen media (majority)<Citation sourceId="1" />
      </span>
    </div>
    <div className="relative h-10 bg-primary-100 dark:bg-primary-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '26%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-0 h-full bg-primary-500 dark:bg-primary-400 rounded-l-full flex items-center justify-center"
      >
        <span className="text-xs font-bold text-white px-2">26%</span>
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '74%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute right-0 top-0 h-full bg-primary-300 dark:bg-primary-600 rounded-r-full flex items-center justify-center"
      >
        <span className="text-xs font-bold text-primary-800 dark:text-white px-2">74%</span>
      </motion.div>
    </div>
    <p className="text-xs text-primary-500 dark:text-primary-400 mt-2 text-center">
      Screen time composition for ages 4–9 (2024)
    </p>
  </div>
);

// ============================================
// SOURCES BLOCK COMPONENT
// ============================================

const SourcesBlock = () => (
  <motion.div
    id="sources"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mt-16 pt-8 border-t border-primary-200 dark:border-primary-700"
  >
    <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
      Sources
    </h4>
    <div className="space-y-3">
      {sources.map((source) => (
        <div
          key={source.id}
          className="flex items-start gap-3 p-4 bg-white dark:bg-primary-800 rounded-lg border border-primary-100 dark:border-primary-700"
        >
          <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center text-sm font-bold text-primary-700 dark:text-primary-300">
            {source.marker.replace('[', '').replace(']', '')}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary-800 dark:text-white">
              {source.title}
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400 mt-0.5">
              {source.publisher} — {source.year}
            </p>
            <a 
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-1"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              View source
            </a>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const ProblemStorySection = () => {
  const openModal = (type: 'deck' | 'demo') => {
    const event = new CustomEvent('openModal', { detail: type });
    window.dispatchEvent(event);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="problem-story" 
      className="py-12 lg:py-20 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-primary-950 dark:via-primary-900/30 dark:to-primary-950 relative overflow-hidden"
      aria-labelledby="problem-story-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-primary-800 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700">
            <AlertCircle className="w-4 h-4" />
            <span>The Reality</span>
          </div>
          <h2 
            id="problem-story-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4"
          >
            The Reality of Kids' Screen Time
          </h2>
          <p className="text-xl text-primary-700 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding how children actually use screens today
          </p>
        </motion.div>

        {/* Story Blocks */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* BLOCK 1: Hook with Real Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                Kids grow up on screens.
              </h3>
              <p className="text-xl text-primary-600 dark:text-gray-300 mb-8">
                But not all screen time supports learning.
              </p>
              
              {/* Primary Stat (presentation-aligned: 3+ hours every day, ages 4–9) */}
              <div className="inline-flex flex-col bg-white dark:bg-primary-800 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-700">
                <div className="flex items-baseline">
                  <span className="text-5xl lg:text-6xl font-bold text-primary-700 dark:text-white">
                    {pitchMetrics.screenTime.value}
                  </span>
                  <span className="text-lg text-primary-600 dark:text-gray-300 ml-2">
                    {pitchMetrics.screenTime.unit}
                  </span>
                  <Citation sourceId="1" />
                </div>
                <span className="text-sm text-primary-500 dark:text-primary-400 mt-1">
                  {pitchMetrics.screenTime.label}
                </span>
              </div>
              
              {/* Supporting stat */}
              <p className="text-sm text-primary-600 dark:text-gray-400 mt-4">
                Average daily screen time for children aged 4–9.<Citation sourceId="1" />
              </p>
            </div>
            
            {/* Illustration placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-primary-100 dark:bg-primary-800 rounded-full opacity-50"></div>
                <div className="absolute inset-4 bg-primary-200 dark:bg-primary-700 rounded-full opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-primary-400 dark:text-primary-500" strokeWidth={1} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* BLOCK 2: Core Problem with Real Composition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-primary-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-primary-100 dark:border-primary-700"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-white mb-8">
              How kids spend their screen time
            </h3>
            
            <ul className="space-y-4 mb-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gamepad2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-lg text-primary-700 dark:text-gray-200">
                  Gaming accounts for <strong>{screenTimeComposition.gamingPercentage.value}</strong> of total screen time<Citation sourceId="1" />
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-lg text-primary-700 dark:text-gray-200">
                  Ages 4–9 spend <strong>{screenTimeComposition.gamingTime5to8.value}</strong>/day on games alone<Citation sourceId="1" />
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-lg text-primary-700 dark:text-gray-200">
                  Parents rarely see what was learned—if anything
                </span>
              </motion.li>
            </ul>
            
            <ScreenTimeBar />
          </motion.div>

          {/* BLOCK 3: Why It Matters (AAP Evidence) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-white mb-8 text-center">
              Not all screen time is equal
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Active vs. Passive",
                  description: "Interactive, developmentally appropriate media differs significantly from passive consumption."
                },
                {
                  icon: Target,
                  title: "Learning Outcomes",
                  description: "Research shows educational media can support learning when designed appropriately."
                },
                {
                  icon: BarChart3,
                  title: "Measurable Progress",
                  description: "Without tracking, parents have no visibility into whether screen time is beneficial."
                }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-primary-800 rounded-xl p-6 shadow-md border border-primary-100 dark:border-primary-700 transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-700 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">
                      {card.title}
                    </h4>
                    <p className="text-primary-600 dark:text-gray-300 text-sm">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-sm text-primary-500 dark:text-primary-400 mt-6">
              Based on AAP "Media and Young Minds" policy guidelines<Citation sourceId="2" /><Citation sourceId="3" />
            </p>
          </motion.div>

          {/* BLOCK 4: Parent Blind Spot with Real Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-white mb-6">
                Parents are left without answers.
              </h3>
              
              {/* Parent confidence stat */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6 border border-red-200 dark:border-red-800">
                <p className="text-lg text-red-800 dark:text-red-300 font-medium">
                  <strong>{parentConfidence.fairPoor5to8.value}</strong> of parents of 4–9-year-olds rate their media parenting as fair or poor.<Citation sourceId="1" />
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "What did my child learn today?",
                  "Did they make progress?",
                  "Is this helping—or just filling time?"
                ].map((question, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                    </div>
                    <p className="text-lg font-medium text-primary-700 dark:text-gray-200 italic">
                      "{question}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <BlurredDashboardMock />
            </div>
          </motion.div>

          {/* BLOCK 5: Transition to Product */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center bg-gradient-to-r from-primary-50 to-green-50 dark:from-primary-900/50 dark:to-green-900/30 rounded-2xl p-10 lg:p-14"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white dark:bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-primary-100 dark:border-primary-700">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                Screen time should be measurable, meaningful, and transparent.
              </h3>
              <p className="text-xl text-primary-600 dark:text-gray-300 mb-8">
                That's what Erudite is built for.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollTo('product')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Product
                </button>
                <button
                  onClick={() => openModal('deck')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-primary-800 border-2 border-primary-700 text-primary-700 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-700 rounded-lg font-semibold text-lg transition-all"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Request Investor Deck
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sources Block */}
        <SourcesBlock />
      </div>
    </section>
  );
};

export default ProblemStorySection;
