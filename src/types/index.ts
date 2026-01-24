export type Language = 'en' | 'am' | 'ru';

export interface FormData {
  name: string;
  email: string;
  role?: string;
  organization?: string;
  date?: string;
  message: string;
}

export interface RoadmapItem {
  id: string;
  period: 'now' | 'next' | 'later';
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  features: string[];
}
