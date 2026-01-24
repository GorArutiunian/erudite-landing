import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-primary-800 dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => {
                const event = new CustomEvent('openModal', { detail: 'deck' });
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 bg-white hover:bg-primary-50 text-primary-800 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('cta.deck')}
            </button>
            <button
              onClick={() => {
                const event = new CustomEvent('openModal', { detail: 'demo' });
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 bg-red-600 hover:bg-red-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('cta.demo')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
