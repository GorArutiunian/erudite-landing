import { motion } from 'framer-motion';
import { Trophy, Globe, Shield, Star, Zap, Target, Users, Coins, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 lg:pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-primary-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200"
            >
              <Star className="w-4 h-4 fill-primary-700 text-primary-700" />
              <span>Trusted by 10,000+ families worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-800 dark:text-white leading-tight"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl lg:text-2xl text-primary-700 dark:text-gray-200 leading-relaxed"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* Credibility stat line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm text-primary-500 dark:text-primary-400"
            >
              Kids 5–8 average 3:28/day on screens.{' '}
              <a href="#sources" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">[1]</a>
            </motion.p>

            {/* Trust Indicators with Icons - Professional muted style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Globe, text: t('hero.trust.multilingual'), color: 'text-primary-700', bg: 'bg-primary-50' },
                { icon: Zap, text: t('hero.trust.gamified'), color: 'text-primary-700', bg: 'bg-primary-50' },
                { icon: Target, text: t('hero.trust.parentInsights'), color: 'text-primary-700', bg: 'bg-primary-50' },
                { icon: Shield, text: t('hero.trust.safeDesign'), color: 'text-primary-700', bg: 'bg-primary-50' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center space-x-3 bg-white dark:bg-primary-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-primary-200 dark:border-primary-700"
                >
                  <div className={`w-10 h-10 ${item.bg} dark:bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-200 dark:border-primary-600`}>
                    <item.icon className={`w-5 h-5 ${item.color} dark:text-gray-300`} />
                  </div>
                  <span className="font-medium text-primary-700 dark:text-gray-200 text-sm lg:text-base">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs - Professional style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  const event = new CustomEvent('openModal', { detail: 'deck' });
                  window.dispatchEvent(event);
                }}
                className="px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>{t('hero.cta.deck')}</span>
              </button>
              <button
                onClick={() => scrollTo('product')}
                className="px-8 py-4 bg-white border-2 border-primary-700 hover:border-primary-800 text-primary-700 rounded-lg font-semibold text-lg transition-all hover:bg-primary-50 shadow-sm"
              >
                {t('hero.cta.product')}
              </button>
            </motion.div>
            
            {/* Watch Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                onClick={() => {
                  const event = new CustomEvent('openVideoModal');
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors group"
                aria-label="Watch 60-second product demo"
              >
                <span className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-700 transition-colors">
                  <Play className="w-4 h-4 text-primary-700 dark:text-primary-300 ml-0.5" />
                </span>
                Watch 60s Demo
              </button>
            </motion.div>

            {/* Stats - Professional muted style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { number: '50K+', label: 'Active Learners', icon: Users },
                { number: '15+', label: 'Languages', icon: Globe },
                { number: '4.9★', label: 'Parent Rating', icon: Star },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className="text-center bg-white dark:bg-primary-800 p-4 rounded-lg shadow-sm border border-primary-200 dark:border-primary-700"
                  >
                    <Icon className="w-5 h-5 text-primary-700 dark:text-gray-400 mx-auto mb-2" />
                    <div className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-white">{stat.number}</div>
                    <div className="text-xs lg:text-sm text-primary-600 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup with Kids App (Centered in Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block flex items-center justify-center"
          >
            {/* Phone Frame - Centered */}
            <div className="relative w-80 h-[600px] mx-auto">
              {/* Phone Outer Frame */}
              <div className="absolute inset-0 bg-primary-800 dark:bg-primary-800 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="h-full w-full bg-white dark:bg-primary-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-primary-800 dark:bg-primary-800 h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content - Kids App Home Screen */}
                  <div className="p-4 h-[calc(100%-3rem)] bg-white dark:bg-primary-600 overflow-y-auto">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl">🦉</div>
                        <div className="h-4 bg-primary-200 dark:bg-primary-500 rounded w-16"></div>
                      </div>
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-500 rounded-full"></div>
                    </div>

                    {/* Hero Card - Welcome Section */}
                    <div className="bg-primary-700 dark:bg-primary-600 rounded-2xl p-4 mb-4 text-white shadow-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-3xl">🦉</div>
                        <div>
                          <div className="h-3 bg-white/30 rounded w-20 mb-1"></div>
                          <div className="h-4 bg-white/40 rounded w-24"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="h-3 bg-white/30 rounded w-16"></div>
                        <div className="h-8 bg-white/20 rounded-lg w-20"></div>
                      </div>
                    </div>

                    {/* Daily Quests */}
                    <div className="mb-4">
                      <div className="h-4 bg-primary-200 dark:bg-primary-500 rounded w-24 mb-3"></div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { icon: '🔢', color: 'bg-primary-700 dark:bg-primary-600' },
                          { icon: '📚', color: 'bg-primary-600 dark:bg-primary-500' },
                        ].map((quest, idx) => (
                          <div key={idx} className={`${quest.color} rounded-xl p-3 text-white`}>
                            <div className="text-2xl mb-1">{quest.icon}</div>
                            <div className="h-2 bg-white/30 rounded w-full mb-1"></div>
                            <div className="h-2 bg-white/20 rounded w-3/4"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="mb-4">
                      <div className="h-4 bg-primary-200 dark:bg-primary-500 rounded w-20 mb-2"></div>
                      <div className="flex gap-2 overflow-x-auto">
                        {['🔢', '📚', '🔬', '🎨'].map((icon, idx) => (
                          <div key={idx} className="flex-shrink-0 w-12 h-12 bg-white dark:bg-primary-500 border-2 border-primary-200 dark:border-primary-400 rounded-xl flex items-center justify-center text-xl shadow-sm">
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lesson Cards */}
                    <div className="space-y-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-white dark:bg-primary-500 border-2 border-primary-200 dark:border-primary-400 rounded-xl p-3 shadow-md">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary-700 dark:bg-primary-600 rounded-lg"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-primary-200 dark:bg-primary-400 rounded w-3/4 mb-2"></div>
                              <div className="h-2 bg-primary-100 dark:bg-primary-500 rounded w-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Coins/Stats at Bottom */}
                    <div className="mt-4 flex items-center justify-center space-x-4 bg-white dark:bg-primary-500 border-2 border-primary-200 dark:border-primary-400 rounded-xl p-3">
                      <div className="flex items-center space-x-1">
                        <Coins className="w-4 h-4 text-primary-700 dark:text-white" />
                        <span className="text-sm font-bold text-primary-700 dark:text-white">250</span>
                      </div>
                      <div className="w-px h-4 bg-primary-200 dark:bg-primary-400"></div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-primary-700 dark:text-white fill-primary-700 dark:fill-white" />
                        <span className="text-sm font-bold text-primary-700 dark:text-white">12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Subtle */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
