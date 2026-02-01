import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-800 dark:bg-primary-950 shadow-lg'
          : 'bg-primary-800 dark:bg-primary-950'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-800 font-bold text-lg">E</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white">
              Erudite
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('product')}
              className="text-white hover:text-primary-200 transition-colors"
            >
              {t('nav.product')}
            </button>
            <button
              onClick={() => scrollTo('parents')}
              className="text-white hover:text-primary-200 transition-colors"
            >
              {t('nav.forParents')}
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="text-white hover:text-primary-200 transition-colors"
            >
              {t('nav.forSchools')}
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="text-white hover:text-primary-200 transition-colors"
            >
              {t('nav.pricing')}
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => {
                  const event = new CustomEvent('openModal', { detail: 'deck' });
                  window.dispatchEvent(event);
                }}
                className="px-4 py-2 text-sm font-medium text-white hover:text-primary-200 transition-colors"
              >
                {t('nav.requestDeck')}
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent('openModal', { detail: 'demo' });
                  window.dispatchEvent(event);
                }}
                className="px-6 py-2 bg-red-600 hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-lg"
              >
                {t('nav.bookDemo')}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-primary-700 bg-primary-800"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollTo('product')}
              className="block w-full text-left py-2 text-white hover:text-primary-200"
            >
              {t('nav.product')}
            </button>
            <button
              onClick={() => scrollTo('parents')}
              className="block w-full text-left py-2 text-white hover:text-primary-200"
            >
              {t('nav.forParents')}
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="block w-full text-left py-2 text-white hover:text-primary-200"
            >
              {t('nav.pricing')}
            </button>
            <div className="pt-4 border-t border-primary-700 space-y-3">
              <button
                onClick={() => {
                  const event = new CustomEvent('openModal', { detail: 'deck' });
                  window.dispatchEvent(event);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-white hover:text-primary-200 font-medium"
              >
                {t('nav.requestDeck')}
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent('openModal', { detail: 'demo' });
                  window.dispatchEvent(event);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-red-600 text-white rounded-lg font-medium"
              >
                {t('nav.bookDemo')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
