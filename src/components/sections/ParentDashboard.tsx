import { motion } from 'framer-motion';
import { Clock, TrendingUp, Flame, Settings, BarChart3, PieChart, Calendar, Bell, Shield, Globe, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ParentDashboard = () => {
  const { t } = useLanguage();

  const metrics = [
    { icon: Clock, label: t('parent.metrics.weekly'), value: '120', unit: 'min', color: 'bg-primary-700', bg: 'bg-primary-50' },
    { icon: TrendingUp, label: t('parent.metrics.mastery'), value: '85', unit: '%', color: 'bg-green-600', bg: 'bg-green-50' },
    { icon: Flame, label: t('parent.metrics.streak'), value: '7', unit: 'days', color: 'bg-yellow-600', bg: 'bg-yellow-50' },
  ];

  const controls = [
    { icon: Clock, text: t('parent.controls.session'), color: 'text-primary-700' },
    { icon: BookOpen, text: t('parent.controls.content'), color: 'text-primary-700' },
    { icon: Globe, text: t('parent.controls.language'), color: 'text-green-600' },
    { icon: BarChart3, text: t('parent.controls.reports'), color: 'text-yellow-600' },
  ];

  const weeklyData = [65, 80, 45, 90, 70, 85, 75];

  return (
    <section id="parents" className="py-12 lg:py-20 bg-gray-50 dark:bg-primary-950 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200">
            <Shield className="w-4 h-4 fill-primary-600 text-primary-600" />
            <span>For Parents</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            {t('parent.title')}
          </h2>
          <p className="text-xl text-primary-700 dark:text-gray-200 max-w-2xl mx-auto">
            {t('parent.subtitle')}
          </p>
          <p className="text-sm text-primary-500 dark:text-primary-400 mt-3">
            58% of kids 4–9 already own a tablet.{' '}
            <a href="#sources" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">[1]</a>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary-800 dark:text-white mb-6 flex items-center space-x-2">
              <BarChart3 className="w-6 h-6 text-primary-700 dark:text-gray-300" />
              <span>Learning Insights</span>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-primary-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-primary-200 dark:border-primary-700"
                  >
                    <div className={`w-16 h-16 border-2 ${
                      metric.color === 'bg-green-600' ? 'border-green-600 dark:border-green-400' : 
                      metric.color === 'bg-yellow-600' ? 'border-yellow-600 dark:border-yellow-400' : 
                      'border-primary-600 dark:border-primary-400'
                    } rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${
                        metric.color === 'bg-green-600' ? 'text-green-600 dark:text-green-400' : 
                        metric.color === 'bg-yellow-600' ? 'text-yellow-600 dark:text-yellow-400' : 
                        'text-primary-600 dark:text-white'
                      }`} />
                    </div>
                    <div className="text-4xl font-bold text-primary-800 dark:text-white mb-1">
                      {metric.value}
                      <span className="text-xl text-primary-600 dark:text-gray-300">
                        {metric.unit}
                      </span>
                    </div>
                    <div className="text-sm text-primary-600 dark:text-gray-300 font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced Dashboard Preview */}
            <div className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm border border-primary-200 dark:border-primary-700">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-primary-800 dark:text-white">Weekly Activity</h4>
                <Calendar className="w-5 h-5 text-primary-600 dark:text-gray-300" />
              </div>
              <div className="space-y-4">
                {/* Chart bars */}
                <div className="flex items-end justify-between h-32 space-x-2">
                  {weeklyData.map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex-1 bg-primary-700 dark:bg-primary-600 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary-800 dark:bg-primary-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {value} min
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Day labels */}
                <div className="flex justify-between text-xs text-primary-600 dark:text-gray-300">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Chart */}
            <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <PieChart className="w-6 h-6 text-primary-700 dark:text-gray-300" />
                  <span className="font-semibold text-primary-800 dark:text-white">Subject Mastery</span>
                </div>
                <span className="text-2xl font-bold text-primary-700 dark:text-white">85%</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Math', progress: 90, color: 'bg-primary-700' },
                  { name: 'Science', progress: 85, color: 'bg-green-600' },
                  { name: 'Language', progress: 80, color: 'bg-primary-700' },
                  { name: 'Arts', progress: 75, color: 'bg-yellow-600' },
                ].map((subject, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-700 dark:text-gray-200">{subject.name}</span>
                      <span className="font-semibold text-primary-800 dark:text-white">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-primary-100 dark:bg-primary-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${subject.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        className={`${subject.color} h-2 rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white border border-primary-200 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-700" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-800 dark:text-white">
                {t('parent.controls.title')}
              </h3>
            </div>

            <div className="space-y-4">
              {controls.map((control, idx) => {
                const Icon = control.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-white dark:bg-primary-800 rounded-lg p-6 shadow-sm flex items-center space-x-4 border border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-pointer"
                  >
                    <div className={`w-12 h-12 border-2 ${
                      control.color.includes('green') ? 'border-green-600 dark:border-green-400' : 
                      control.color.includes('yellow') ? 'border-yellow-600 dark:border-yellow-400' : 
                      'border-primary-600 dark:border-primary-400'
                    } rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${
                        control.color.includes('green') ? 'text-green-600 dark:text-green-400' : 
                        control.color.includes('yellow') ? 'text-yellow-600 dark:text-yellow-400' : 
                        'text-primary-600 dark:text-white'
                      }`} />
                    </div>
                    <span className="text-primary-700 dark:text-gray-200 font-medium flex-1">{control.text}</span>
                    <div className="w-10 h-6 bg-primary-50 dark:bg-primary-700 border border-primary-200 dark:border-primary-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-primary-700 dark:bg-primary-500 rounded-full"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Notification Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-primary-200"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 border-2 border-green-600 dark:border-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">Real-time Updates</h4>
                  <p className="text-primary-700 text-sm">
                    Get instant notifications about your child's achievements, progress milestones, and learning streaks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-primary-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-primary-800">Privacy First</h4>
              </div>
              <p className="text-primary-700 text-sm">
                Full transparency into your child's learning journey with real-time updates and comprehensive reports. All data is encrypted and secure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
