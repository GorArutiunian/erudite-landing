import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Gamepad2, Award, Users, CheckCircle, Play, BarChart3, Sparkles, Star, Zap, Trophy, Medal, Crown, Gem, Coins, Gift, Puzzle, Brain, Target, Timer, Flame } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ProductOverview = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('lessons');

  const tabs = [
    { id: 'lessons', label: t('product.tab.lessons'), icon: BookOpen, color: 'bg-primary-500' },
    { id: 'games', label: t('product.tab.games'), icon: Gamepad2, color: 'bg-primary-500' },
    { id: 'rewards', label: t('product.tab.rewards'), icon: Award, color: 'bg-yellow-600' },
    { id: 'parents', label: t('product.tab.parents'), icon: Users, color: 'bg-green-600' },
  ];

  // Different icons for rewards
  const rewardIcons = [Trophy, Medal, Crown, Gem, Coins, Gift];
  // Different icons for games
  const gameIcons = [Puzzle, Brain, Target, Timer];

  const features: Record<string, { desc: string; features: string[]; visual: React.ReactNode }> = {
    lessons: {
      desc: t('product.lessons.desc'),
      features: [
        t('product.lessons.f1'),
        t('product.lessons.f2'),
        t('product.lessons.f3'),
        t('product.lessons.f4'),
      ],
      visual: (
        <div className="relative">
          <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-8">
            <div className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="h-4 bg-primary-200 dark:bg-primary-700 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-primary-100 dark:bg-primary-600 rounded w-16"></div>
                  </div>
                </div>
                <div className="w-10 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-600 dark:text-white" />
                </div>
              </div>
              <div className="h-40 bg-primary-700 dark:bg-primary-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <BookOpen className="w-20 h-20 text-white opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-primary-100 dark:bg-primary-700 rounded w-full"></div>
                <div className="h-3 bg-primary-100 dark:bg-primary-700 rounded w-3/4"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-primary-100 dark:bg-primary-700 rounded-full">
                  <div className="h-2 bg-primary-700 dark:bg-primary-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-semibold text-primary-700 dark:text-white">65%</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    games: {
      desc: t('product.games.desc'),
      features: [
        t('product.games.f1'),
        t('product.games.f2'),
        t('product.games.f3'),
        t('product.games.f4'),
      ],
      visual: (
        <div className="relative">
          <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-8">
            <div className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="h-4 bg-primary-200 rounded w-28 mb-2"></div>
                    <div className="h-3 bg-primary-100 rounded w-20"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                  <span className="text-sm font-bold text-primary-700">4.8</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {gameIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-primary-700 dark:bg-primary-600 rounded-lg p-4 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                ))}
              </div>
              <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-700 dark:text-gray-200">Score</span>
                  <span className="text-2xl font-bold text-primary-700 dark:text-white">850</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    rewards: {
      desc: t('product.rewards.desc'),
      features: [
        t('product.rewards.f1'),
        t('product.rewards.f2'),
        t('product.rewards.f3'),
        t('product.rewards.f4'),
      ],
      visual: (
        <div className="relative">
          <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-8">
            <div className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="h-4 bg-primary-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-primary-100 rounded w-24"></div>
                  </div>
                </div>
                <div className="w-10 h-10 bg-yellow-50 border border-primary-200 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {rewardIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-yellow-600 dark:bg-yellow-600 rounded-lg p-4 flex flex-col items-center justify-center space-y-2 group"
                  >
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    <div className="h-1.5 bg-white/30 rounded w-full"></div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-yellow-600 dark:bg-yellow-600 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Flame className="w-5 h-5 text-white" />
                  <div className="text-white font-bold text-lg">7 Day Streak!</div>
                </div>
                <div className="text-white/90 text-sm">Keep it up! 🔥</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    parents: {
      desc: t('product.parents.desc'),
      features: [
        t('product.parents.f1'),
        t('product.parents.f2'),
        t('product.parents.f3'),
        t('product.parents.f4'),
      ],
      visual: (
        <div className="relative">
          <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-8">
            <div className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="h-4 bg-primary-200 rounded w-28 mb-2"></div>
                    <div className="h-3 bg-primary-100 rounded w-20"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-4">
                <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-700 dark:text-gray-200">Today</span>
                    <span className="text-sm font-bold text-green-600">45 min</span>
                  </div>
                  <div className="w-full bg-primary-100 dark:bg-primary-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-3 text-center">
                    <BarChart3 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-primary-600 dark:text-gray-300">Progress</div>
                    <div className="text-lg font-bold text-primary-800 dark:text-white">85%</div>
                  </div>
                  <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-3 text-center">
                    <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                    <div className="text-xs text-primary-600 dark:text-gray-300">Streak</div>
                    <div className="text-lg font-bold text-primary-800 dark:text-white">7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <section id="product" className="py-12 lg:py-20 bg-gray-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200">
            <Star className="w-4 h-4 fill-primary-500 text-primary-500" />
            <span>Explore Our Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            {t('product.title')}
          </h2>
          <p className="text-xl text-primary-700 dark:text-gray-200 max-w-2xl mx-auto">
            Everything your child needs for joyful, measurable learning
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all shadow-md ${
                  activeTab === tab.id
                    ? `${tab.color} text-white shadow-lg scale-105`
                    : 'bg-white dark:bg-primary-800 text-primary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-800 border-2 border-primary-200 dark:border-primary-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-primary-700 dark:text-gray-200 leading-relaxed">
                {features[activeTab].desc}
              </p>
              <ul className="space-y-4">
                {features[activeTab].features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4 bg-white dark:bg-primary-800 p-4 rounded-xl shadow-sm border-2 border-primary-200 dark:border-primary-700"
                  >
                    <div className="w-8 h-8 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-white" />
                    </div>
                    <span className="text-primary-700 dark:text-gray-200 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {features[activeTab].visual}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
