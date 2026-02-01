import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: t('faq.safety.q'),
      a: t('faq.safety.a'),
    },
    {
      q: t('faq.age.q'),
      a: t('faq.age.a'),
    },
    {
      q: t('faq.languages.q'),
      a: t('faq.languages.a'),
    },
    {
      q: t('faq.content.q'),
      a: t('faq.content.a'),
    },
    {
      q: t('faq.privacy.q'),
      a: t('faq.privacy.a'),
    },
    {
      q: t('faq.schools.q'),
      a: t('faq.schools.a'),
    },
    {
      q: t('faq.offline.q'),
      a: t('faq.offline.a'),
    },
  ];

  return (
    <section id="faq" className="py-12 lg:py-20 bg-gray-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
            {t('faq.title')}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-primary-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-primary-800 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-primary-700 dark:text-gray-200 border-t border-primary-200 dark:border-primary-700">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
