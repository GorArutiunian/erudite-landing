import { motion } from 'framer-motion';
import { TrendingDown, Eye, Layers, ArrowRight, Lightbulb, Rocket, Users, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ProblemOpportunity = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: TrendingDown,
      title: t('problem.engagement'),
      description: t('problem.engagement.desc'),
      color: 'bg-red-600',
      bg: 'bg-red-50',
      stat: '40%',
      statLabel: 'drop-off rate',
    },
    {
      icon: Eye,
      title: t('problem.visibility'),
      description: t('problem.visibility.desc'),
      color: 'bg-yellow-600',
      bg: 'bg-yellow-50',
      stat: '0%',
      statLabel: 'visibility',
    },
    {
      icon: Layers,
      title: t('problem.fragmented'),
      description: t('problem.fragmented.desc'),
      color: 'bg-yellow-600',
      bg: 'bg-yellow-50',
      stat: '15+',
      statLabel: 'platforms',
    },
  ];

  const opportunities = [
    { icon: Lightbulb, text: t('whyNow.ai'), color: 'text-primary-500' },
    { icon: DollarSign, text: t('whyNow.parents'), color: 'text-green-600' },
    { icon: Rocket, text: t('whyNow.mobile'), color: 'text-primary-500' },
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50 dark:bg-primary-950 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200">
            <TrendingDown className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            {t('problem.title')}
          </h2>
        </motion.div>

        {/* Enhanced Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white dark:bg-primary-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-all border border-primary-200 dark:border-primary-700 relative overflow-hidden"
            >
              {/* Subtle decorative element */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${problem.color} opacity-5 dark:opacity-10 rounded-full blur-2xl`}></div>
              
              <div className="w-16 h-16 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <problem.icon className="w-8 h-8 text-primary-600 dark:text-white" />
              </div>
              
              <div className="mb-4 relative z-10">
                <div className="text-4xl font-bold text-primary-800 dark:text-white mb-1">{problem.stat}</div>
                <div className="text-sm text-primary-600 dark:text-gray-300">{problem.statLabel}</div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3 relative z-10">
                {problem.title}
              </h3>
              <p className="text-primary-700 dark:text-gray-200 relative z-10">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 border-2 border-primary-600 dark:border-primary-400 rounded-full flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 text-primary-600 dark:text-white" />
            </motion.div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent w-32"></div>
          </div>
        </motion.div>

        {/* Enhanced Opportunity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-primary-800 rounded-lg p-8 lg:p-12 relative overflow-hidden border border-primary-200 dark:border-primary-700"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-300 dark:bg-primary-700 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 border-2 border-yellow-600 dark:border-yellow-400 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-white">
                {t('opportunity.title')}
              </h3>
            </div>
            
            <p className="text-lg lg:text-xl text-primary-700 dark:text-gray-200 mb-8 leading-relaxed">
              {t('opportunity.text')}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary-800 dark:text-white mb-6 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-primary-700 dark:text-gray-300" />
                <span>{t('whyNow.title')}</span>
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {opportunities.map((opp, idx) => {
                  const Icon = opp.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700"
                    >
                      <div className="w-12 h-12 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-white" />
                      </div>
                      <p className="text-primary-700 dark:text-gray-200 font-medium">{opp.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Market Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: DollarSign, value: '$250B+', label: 'Global EdTech Market', color: 'text-primary-700' },
                { icon: Users, value: '1.5B+', label: 'Students Worldwide', color: 'text-primary-700' },
                { icon: Rocket, value: '25%', label: 'Annual Growth Rate', color: 'text-primary-700' },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white dark:bg-primary-800 rounded-lg p-6 text-center border border-primary-200 dark:border-primary-700"
                  >
                    <Icon className={`w-8 h-8 ${stat.color} dark:text-gray-300 mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-primary-800 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-primary-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
