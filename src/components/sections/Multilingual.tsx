import { motion } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Multilingual = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'am' as const, name: 'Հdelays', flag: '🇦🇲' },
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary-600 dark:text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              {t('multilingual.title')}
            </h2>
            <p className="text-xl text-primary-700 dark:text-gray-200 mb-8">
              {t('multilingual.subtitle')}
            </p>
            <p className="text-lg text-primary-700 dark:text-gray-200">
              {t('multilingual.desc')}
            </p>
          </motion.div>

          {/* Language Switcher Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-primary-800 rounded-lg p-8 shadow-sm border border-primary-200 dark:border-primary-700"
          >
            <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-6 text-center">
              Try it now:
            </h3>
            <div className="flex justify-center space-x-4 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    language === lang.code
                      ? 'bg-primary-700 text-white shadow-md'
                      : 'bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {language === lang.code && <Check className="w-5 h-5" />}
                </button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-primary-700 mb-2">
                Current language: <strong>{languages.find(l => l.code === language)?.name}</strong>
              </p>
              <p className="text-sm text-primary-600">
                Notice how the interface adapts? This is how Erudite works for kids worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
