import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.desc'),
      icon: Star,
      features: [
        'Limited lessons',
        'Basic rewards',
        'Single device',
        'Community support',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'bg-primary-400',
      bg: 'bg-primary-100',
    },
    {
      name: t('pricing.family'),
      price: t('pricing.family.price'),
      description: t('pricing.family.desc'),
      icon: Crown,
      features: [
        'Full curriculum',
        'Parent dashboard',
        'Multi-device access',
        'Progress tracking',
        'Priority support',
        'Advanced analytics',
      ],
      cta: 'Subscribe',
      popular: true,
      color: 'bg-primary-500',
      bg: 'bg-primary-100',
    },
    {
      name: t('pricing.school'),
      price: t('pricing.school.price'),
      description: t('pricing.school.desc'),
      icon: Building2,
      features: [
        'Classroom dashboards',
        'Student reporting',
        'Administrative tools',
        'Custom curriculum',
        'Dedicated support',
        'Bulk licensing',
      ],
      cta: 'Contact Us',
      popular: false,
      color: 'bg-green-600',
      bg: 'bg-green-50',
    },
  ];

  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gray-50 dark:bg-primary-950 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200">
            <Zap className="w-4 h-4 fill-primary-700 text-primary-700" />
            <span>Flexible Plans</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-primary-700 dark:text-gray-200 max-w-2xl mx-auto">
            Choose the perfect plan for your family or institution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
                className={`relative bg-white dark:bg-primary-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-all border ${
                  plan.popular
                    ? 'ring-2 ring-primary-300 dark:ring-primary-600 border-primary-400 dark:border-primary-600 scale-105 z-10'
                    : 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600'
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md flex items-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-700 opacity-20 rounded-full blur-3xl"></div>
                  </>
                )}

                <div className={`w-16 h-16 ${plan.bg} dark:bg-primary-700 rounded-lg flex items-center justify-center mb-6 border border-primary-200 dark:border-primary-700`}>
                  <Icon className={`w-8 h-8 ${plan.color} dark:text-white`} />
                </div>

                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="text-5xl font-bold text-primary-800 dark:text-white mb-1">
                    {plan.price}
                  </div>
                  {plan.price !== 'Free' && plan.price !== 'Contact us' && (
                    <div className="text-sm text-primary-600 dark:text-gray-300">per month</div>
                  )}
                </div>
                <p className="text-primary-700 dark:text-gray-200 mb-8 min-h-[3rem]">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + fIdx * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 border-2 border-primary-600 dark:border-primary-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary-600 dark:text-white" />
                      </div>
                      <span className="text-primary-500 dark:text-gray-200 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-primary-700 hover:bg-primary-800 text-white shadow-md hover:shadow-lg'
                      : 'bg-white hover:bg-primary-50 text-primary-700 border border-primary-200'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-primary-700'}`} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-primary-700 dark:text-gray-200 mb-4">
            All plans include a 14-day free trial • Cancel anytime • No credit card required
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-primary-700 dark:text-gray-200">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary-700" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary-700" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary-700" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
