import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { FormData } from '../types';
import { sendDeckRequest, sendDemoRequest } from '../api/formspree';

interface InvestorDeckFormProps {
  onSubmit: (data: FormData) => void;
}

export const InvestorDeckForm = ({ onSubmit }: InvestorDeckFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'investor',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setSubmitting(true);
    const result = await sendDeckRequest({
      name: formData.name,
      email: formData.email,
      role: formData.role,
      message: formData.message,
    });
    setSubmitting(false);
    if (result.ok) {
      onSubmit(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', role: 'investor', message: '' });
      }, 3000);
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <p className="text-lg font-semibold text-primary-500 dark:text-white">
          {t('modal.deck.success')}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-primary-700 dark:text-gray-200 mb-2">
          {t('modal.deck.name')}
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-500 mb-2">
          {t('modal.deck.email')}
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-700 mb-2">
          {t('modal.deck.role')}
        </label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="investor">{t('modal.deck.role.investor')}</option>
          <option value="partner">{t('modal.deck.role.partner')}</option>
          <option value="press">{t('modal.deck.role.press')}</option>
          <option value="other">{t('modal.deck.role.other')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-700 mb-2">
          {t('modal.deck.message')}
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {submitError && (
        <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white rounded-lg font-semibold transition-colors"
      >
        {submitting ? 'Sending…' : t('modal.deck.submit')}
      </button>
    </form>
  );
};

interface DemoFormProps {
  onSubmit: (data: FormData) => void;
}

export const DemoForm = ({ onSubmit }: DemoFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    setSubmitting(true);
    const result = await sendDemoRequest({
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      date: formData.date,
      message: formData.message,
    });
    setSubmitting(false);
    if (result.ok) {
      onSubmit(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', organization: '', date: '', message: '' });
      }, 3000);
    } else {
      setSubmitError(result.error ?? 'Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <p className="text-lg font-semibold text-primary-500">
          {t('modal.demo.success')}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-primary-700 dark:text-gray-200 mb-2">
          {t('modal.deck.name')}
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-500 mb-2">
          {t('modal.deck.email')}
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-700 mb-2">
          {t('modal.demo.organization')}
        </label>
        <input
          type="text"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-700 mb-2">
          {t('modal.demo.date')}
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-700 mb-2">
          {t('modal.deck.message')}
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border-2 border-primary-200 dark:border-primary-700 rounded-lg bg-white dark:bg-primary-800 text-primary-500 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {submitError && (
        <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white rounded-lg font-semibold transition-colors"
      >
        {submitting ? 'Sending…' : t('modal.demo.submit')}
      </button>
    </form>
  );
};
