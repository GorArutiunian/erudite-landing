import { motion } from 'framer-motion';
import { Shield, Database, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Security = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('security.kidSafe'),
      description: 'Designed with child safety as the top priority, following COPPA guidelines.',
    },
    {
      icon: Database,
      title: t('security.minimalData'),
      description: 'We collect only what\'s necessary for learning progress, nothing more.',
    },
    {
      icon: Eye,
      title: t('security.transparency'),
      description: 'Parents have full visibility and control over their child\'s data.',
    },
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
            {t('security.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-primary-800 rounded-lg p-8 text-center shadow-sm border border-primary-200 dark:border-primary-700"
              >
                <div className="w-16 h-16 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-700 dark:text-gray-200">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
