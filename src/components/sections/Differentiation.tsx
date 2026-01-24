import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, BookOpen, BarChart3, Smile, Eye, Video, FileText, HelpCircle, Layers, Target } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Differentiation = () => {
  const { t } = useLanguage();

  const comparisons = [
    {
      category: t('differentiation.vs.video'),
      icon: Video,
      erudite: [
        { text: t('differentiation.structure'), icon: BookOpen },
        { text: t('differentiation.measurement'), icon: BarChart3 },
        { text: t('differentiation.kidUX'), icon: Smile },
        { text: t('differentiation.parentVisibility'), icon: Eye },
      ],
      other: [
        { text: 'Passive viewing', icon: Video },
        { text: 'No progress tracking', icon: XCircle },
        { text: 'Generic content', icon: Layers },
        { text: 'No parent insights', icon: XCircle },
      ],
    },
    {
      category: t('differentiation.vs.worksheets'),
      icon: FileText,
      erudite: [
        { text: t('differentiation.structure'), icon: BookOpen },
        { text: t('differentiation.measurement'), icon: BarChart3 },
        { text: t('differentiation.kidUX'), icon: Smile },
        { text: t('differentiation.parentVisibility'), icon: Eye },
      ],
      other: [
        { text: 'Random exercises', icon: FileText },
        { text: 'No structure', icon: XCircle },
        { text: 'No engagement', icon: XCircle },
        { text: 'No tracking', icon: XCircle },
      ],
    },
    {
      category: t('differentiation.vs.quizzes'),
      icon: HelpCircle,
      erudite: [
        { text: t('differentiation.structure'), icon: BookOpen },
        { text: t('differentiation.measurement'), icon: BarChart3 },
        { text: t('differentiation.kidUX'), icon: Smile },
        { text: t('differentiation.parentVisibility'), icon: Eye },
      ],
      other: [
        { text: 'Simple Q&A', icon: HelpCircle },
        { text: 'No curriculum', icon: XCircle },
        { text: 'Limited engagement', icon: XCircle },
        { text: 'No parent dashboard', icon: XCircle },
      ],
    },
  ];

  return (
    <section id="differentiation" className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-primary-800 text-primary-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200 dark:border-primary-700">
            <Target className="w-4 h-4 fill-primary-600 text-primary-600" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 mb-4">
            {t('differentiation.title')}
          </h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            {t('differentiation.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {comparisons.map((comparison, idx) => {
            const CategoryIcon = comparison.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-primary-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-primary-200 dark:border-primary-700"
              >
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-12 h-12 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-primary-600 dark:text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-800 dark:text-white text-center">
                    Erudite {comparison.category}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Erudite Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-4 h-4 bg-primary-700 rounded-full"></div>
                      <h4 className="font-bold text-lg text-primary-800 dark:text-white">Erudite</h4>
                    </div>
                    <ul className="space-y-3">
                      {comparison.erudite.map((feature, fIdx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.li
                            key={fIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fIdx * 0.1 }}
                            className="flex items-start space-x-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 p-3 rounded-lg"
                          >
                            <div className="w-8 h-8 border-2 border-green-600 dark:border-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex items-center space-x-2 flex-1">
                              <FeatureIcon className="w-4 h-4 text-primary-700 dark:text-gray-300 flex-shrink-0" />
                              <span className="text-primary-700 dark:text-gray-200 font-medium">{feature.text}</span>
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Others Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-4 h-4 bg-primary-300 dark:bg-primary-600 rounded-full"></div>
                      <h4 className="font-bold text-lg text-primary-800 dark:text-white">Others</h4>
                    </div>
                    <ul className="space-y-3">
                      {comparison.other.map((feature, fIdx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.li
                            key={fIdx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fIdx * 0.1 }}
                            className="flex items-start space-x-3 bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 p-3 rounded-lg"
                          >
                            <div className="w-8 h-8 border-2 border-red-600 dark:border-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                            </div>
                            <div className="flex items-center space-x-2 flex-1">
                              <FeatureIcon className="w-4 h-4 text-primary-400 dark:text-primary-500 flex-shrink-0" />
                              <span className="text-primary-700 dark:text-gray-200 font-medium">{feature.text}</span>
                            </div>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
