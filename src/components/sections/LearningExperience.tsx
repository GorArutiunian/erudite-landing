import { motion } from 'framer-motion';
import { Search, BookOpen, Target, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LearningExperience = () => {
  const { t } = useLanguage();

  const flow = [
    { icon: Search, label: t('learning.flow.discover') },
    { icon: BookOpen, label: t('learning.flow.learn') },
    { icon: Target, label: t('learning.flow.practice') },
    { icon: Award, label: t('learning.flow.reward') },
  ];

  const mechanics = [
    { title: t('learning.gamification.badges'), color: 'bg-yellow-600' },
    { title: t('learning.gamification.streaks'), color: 'bg-primary-700' },
    { title: t('learning.gamification.levels'), color: 'bg-green-600' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            {t('learning.title')}
          </h2>
          <p className="text-sm text-primary-500 dark:text-primary-400 mt-2">
            Short-form video is already reaching young kids (48% ever; 16% daily).{' '}
            <a href="#sources" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">[1]</a>
            {' '}Erudite transforms this behavior into learning.
          </p>
        </motion.div>

        {/* Learning Flow - Perfectly Symmetric */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="relative flex items-center justify-center">
            {/* Connecting Lines Background */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-primary-300 dark:bg-primary-700 opacity-30"></div>
            
            <div className="relative flex items-center justify-between w-full">
              {flow.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="flex flex-col items-center text-center w-full"
                    >
                      {/* Icon Container - Same size for all */}
                      <div className="w-20 h-20 bg-primary-700 dark:bg-primary-600 rounded-lg flex items-center justify-center mb-4 shadow-md mx-auto">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Label - Same styling for all */}
                      <h3 className="text-lg font-semibold text-primary-800 dark:text-white text-center">
                        {step.label}
                      </h3>
                    </motion.div>
                    
                    {/* Arrow between items (except last) */}
                    {idx < flow.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5">
                        <div className="relative w-full h-full">
                          <div className="absolute left-0 top-0 w-full h-0.5 bg-primary-700 dark:bg-primary-600"></div>
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <ArrowRight className="w-4 h-4 text-primary-700 dark:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gamification Mechanics - Perfectly Symmetric Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-primary-800 dark:text-white text-center mb-8">
            {t('learning.gamification.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanics.map((mechanic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${mechanic.color} dark:opacity-90 rounded-lg p-8 text-center text-white shadow-md h-full flex flex-col items-center justify-center`}
              >
                <h4 className="text-xl font-bold mb-2">{mechanic.title}</h4>
                <p className="text-white/90 text-sm">
                  Motivate continuous learning through engaging rewards and achievements.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
