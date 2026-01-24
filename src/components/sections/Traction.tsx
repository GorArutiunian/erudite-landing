import { motion } from 'framer-motion';
import { Users, TestTube, Rocket, CheckCircle, TrendingUp, Award, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Traction = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Users,
      title: t('traction.pilot'),
      description: 'Engaged with parents to understand pain points and validate product-market fit.',
      color: 'bg-primary-700',
      bg: 'bg-primary-50',
      stat: '50+',
      statLabel: 'Parent Interviews',
    },
    {
      icon: TestTube,
      title: t('traction.prototype'),
      description: 'Conducted user testing with children and parents to refine UX and learning flow.',
      color: 'bg-primary-700',
      bg: 'bg-primary-50',
      stat: '4.8/5',
      statLabel: 'User Rating',
    },
    {
      icon: Rocket,
      title: t('traction.incubation'),
      description: 'Participating in AUA EPIC incubation program for mentorship and support.',
      color: 'bg-yellow-600',
      bg: 'bg-yellow-50',
      stat: '100%',
      statLabel: 'Program Completion',
    },
  ];

  const achievements = [
    { icon: CheckCircle, text: 'Product-market fit validated', color: 'text-green-600 text-green-400' },
    { icon: TrendingUp, text: 'Positive user feedback', color: 'text-primary-700' },
    { icon: Award, text: 'Incubation program participant', color: 'text-yellow-600' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-950 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-primary-800 text-primary-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700">
            <TrendingUp className="w-4 h-4 fill-green-600 text-green-600" />
            <span>Our Progress</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            {t('traction.title')}
          </h2>
          <p className="text-xl text-primary-700 dark:text-gray-200 max-w-2xl mx-auto">
            Building momentum through validation and user feedback
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-primary-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-all border border-primary-200 dark:border-primary-700 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-10 dark:opacity-20 rounded-full blur-3xl`}></div>
                
                <div className={`w-16 h-16 ${item.bg} ${
                  item.color === 'bg-green-600' ? 'dark:bg-green-600' : 
                  item.color === 'bg-yellow-600' ? 'dark:bg-yellow-600' : 
                  'dark:bg-primary-700'
                } border border-primary-200 dark:border-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6 relative z-10`}>
                  <Icon className={`w-8 h-8 ${item.color} dark:text-white`} />
                </div>
                
                <div className="text-center mb-4 relative z-10">
                  <div className="text-4xl font-bold text-primary-800 dark:text-white mb-1">{item.stat}</div>
                  <div className="text-sm text-primary-600 dark:text-gray-300 font-medium">{item.statLabel}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3 text-center relative z-10">
                  {item.title}
                </h3>
                <p className="text-primary-700 dark:text-gray-200 text-center relative z-10">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700 flex items-center space-x-4"
              >
                <div className={`w-12 h-12 border-2 ${
                  achievement.color.includes('green') ? 'border-green-600 dark:border-green-400' : 
                  achievement.color.includes('yellow') ? 'border-yellow-600 dark:border-yellow-400' : 
                  'border-primary-600 dark:border-primary-400'
                } rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${
                    achievement.color.includes('green') ? 'text-green-600 dark:text-green-400' : 
                    achievement.color.includes('yellow') ? 'text-yellow-600 dark:text-yellow-400' : 
                    'text-primary-600 dark:text-white'
                  }`} />
                </div>
                <span className="text-primary-700 dark:text-gray-200 font-medium">{achievement.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Future-Ready Signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-green-50 dark:from-primary-900/50 dark:to-green-900/30 rounded-lg p-6 mb-12 border border-primary-200 dark:border-primary-700"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white dark:bg-primary-800 rounded-lg flex items-center justify-center shadow-sm border border-primary-100 dark:border-primary-700">
              <Sparkles className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-primary-800 dark:text-white font-medium">
                AI learning exposure is already here: <strong>39%</strong> of parents say kids 5–8 used AI for school-related learning.{' '}
                <a href="#sources" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm">[1]</a>
              </p>
              <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                Erudite is built for this future-ready generation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Note Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-primary-800 rounded-lg p-8 lg:p-12 relative overflow-hidden border border-primary-200 dark:border-primary-700"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 dark:bg-primary-700 rounded-full blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              <h3 className="text-xl font-semibold text-primary-800">Detailed Metrics Available</h3>
            </div>
            <p className="text-lg text-primary-700 text-center mb-6">
              {t('traction.note')}
            </p>
            <div className="flex justify-center">
              <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors">
                <span>Request Full Deck</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
