import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import type { RoadmapItem } from '../../types';
import { Rocket, BookOpen, Globe, Brain, GraduationCap, Download, Users, Link2, CheckCircle2, Circle, Clock } from 'lucide-react';

export const Roadmap = () => {
  const { t } = useLanguage();

  const roadmapItems: RoadmapItem[] = [
    { id: '1', period: 'now', title: 'Core Curriculum Expansion', description: 'Adding more subjects and lessons across age groups', icon: BookOpen },
    { id: '2', period: 'now', title: 'Enhanced Parent Dashboard', description: 'More detailed insights and reporting features', icon: GraduationCap },
    { id: '3', period: 'next', title: 'Additional Languages', description: 'Expanding to Spanish, French, and German', icon: Globe },
    { id: '4', period: 'next', title: 'AI Personalization', description: 'Adaptive learning paths based on individual progress', icon: Brain },
    { id: '5', period: 'next', title: 'Teacher Portal', description: 'Tools for educators to track classroom progress', icon: GraduationCap },
    { id: '6', period: 'later', title: 'Offline Mode', description: 'Download lessons for offline learning', icon: Download },
    { id: '7', period: 'later', title: 'Social Learning', description: 'Safe peer interaction and collaborative activities', icon: Users },
    { id: '8', period: 'later', title: 'Partnership Integrations', description: 'Connect with educational content providers', icon: Link2 },
  ];

  const periods = [
    { 
      id: 'now', 
      label: t('roadmap.now'), 
      color: 'bg-primary-700',
      bg: 'bg-primary-50',
      border: 'border-primary-300',
      icon: Rocket,
      status: 'active'
    },
    { 
      id: 'next', 
      label: t('roadmap.next'), 
      color: 'bg-green-600',
      bg: 'bg-green-50',
      border: 'border-green-300',
      icon: Clock,
      status: 'upcoming'
    },
    { 
      id: 'later', 
      label: t('roadmap.later'), 
      color: 'bg-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      icon: Circle,
      status: 'planned'
    },
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-950 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-primary-800 text-primary-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700">
            <Rocket className="w-4 h-4 fill-primary-600 text-primary-600" />
            <span>Product Roadmap</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 mb-4">
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Our journey to transform kids' learning experience
          </p>
        </motion.div>

        {/* Roadmap Items Grid */}
        <div className="max-w-6xl mx-auto">
          {periods.map((period, periodIdx) => {
            const items = roadmapItems.filter((item) => item.period === period.id);
            const PeriodIcon = period.icon;
            
            return (
              <motion.div
                key={period.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: periodIdx * 0.1 }}
                className="mb-16 last:mb-0"
              >
                {/* Period Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center relative z-10">
                    <PeriodIcon className="w-8 h-8 text-primary-600 dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-800">
                        {period.label}
                      </h3>
                      {period.status === 'active' && (
                        <span className="px-3 py-1 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-gray-200 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary-700 dark:bg-primary-500 rounded-full animate-pulse"></div>
                          <span>In Progress</span>
                        </span>
                      )}
                    </div>
                    <div className={`h-1.5 w-32 ${period.color} rounded-full mt-2`}></div>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, itemIdx) => {
                    const ItemIcon = item.icon || BookOpen;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIdx * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className={`bg-white dark:bg-primary-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border ${period.border} dark:border-primary-700 relative overflow-hidden`}
                      >
                        {/* Decorative element */}
                        <div className={`absolute top-0 right-0 w-24 h-24 ${period.color} opacity-10 dark:opacity-20 rounded-full blur-2xl`}></div>
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center mb-4">
                            <ItemIcon className="w-6 h-6 text-primary-600 dark:text-white" />
                          </div>
                          <h4 className="font-bold text-lg text-primary-800 dark:text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-primary-700 dark:text-gray-200 leading-relaxed">
                            {item.description}
                          </p>
                          {period.status === 'active' && itemIdx === 0 && (
                            <div className="mt-4 flex items-center space-x-2 text-xs text-primary-700 dark:text-gray-300">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Currently in development</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
