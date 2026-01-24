import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-800 dark:bg-primary-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-800 font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-white">Erudite</span>
            </div>
            <p className="text-white text-sm opacity-90">
              Making learning joyful, measurable, and safe for kids worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('product')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.product')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('parents')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.forParents')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.pricing')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('differentiation')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.whyErudite')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('roadmap')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.roadmap')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-primary-200 transition-colors"
                >
                  {t('nav.faq')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-primary-200 transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8 text-center text-sm text-white opacity-90">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
