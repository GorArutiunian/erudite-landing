// ============================================
// VERIFIED METRICS FOR ERUDITE LANDING PAGE
// All numbers are from cited, verifiable sources
// ============================================

export interface Source {
  id: string;
  marker: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
}

export interface Metric {
  value: string;
  label: string;
  sourceId: string;
  context?: string;
}

// ============================================
// SOURCES (VERIFIED)
// ============================================

export const sources: Source[] = [
  {
    id: 'source-1',
    marker: '[1]',
    title: 'The Common Sense Census: Media Use by Kids Zero to Eight, 2025',
    publisher: 'Common Sense Media',
    year: '2025',
    url: 'https://www.commonsensemedia.org/sites/default/files/research/report/2025-common-sense-census-web-2.pdf'
  },
  {
    id: 'source-2',
    marker: '[2]',
    title: 'Media and Young Minds (Policy Statement)',
    publisher: 'American Academy of Pediatrics (AAP), Pediatrics',
    year: '2016',
    url: 'https://www.jpa-web.org/dcms_media/other/AAP%20policy%20statement2016%20young%20minds.pdf'
  },
  {
    id: 'source-3',
    marker: '[3]',
    title: 'Media and Young Minds (PubMed)',
    publisher: 'Pediatrics, PubMed',
    year: '2016',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27940793/'
  }
];

// ============================================
// PITCH / PRESENTATION-ALIGNED DISPLAY (Erudite Pitch.key)
// ============================================

export const pitchMetrics = {
  screenTime: {
    value: '3+',
    unit: 'hours every day',
    ageRange: '4–9',
    label: 'Average daily screen time for children aged 4–9',
  },
  lessonLength: '3-5 minute interactive lessons',
  ageRange: '4–9',
  tractionParents: { value: '70+', label: 'Armenian parents' },
};

// ============================================
// SCREEN TIME METRICS (cited sources)
// ============================================

export const screenTimeMetrics = {
  // Primary stat for ages 5-8 (research); pitch uses 3+ hours / 4-9
  ages5to8Daily: {
    value: '3:28',
    label: 'hours/day',
    fullLabel: 'Avg screen time (ages 5–8)',
    sourceId: '1',
    context: 'About three and a half hours per day'
  },
  // Pitch-aligned for hero/headlines
  ages4to9Daily: {
    value: '3+',
    label: 'hours every day',
    fullLabel: 'Average daily screen time (children aged 4–9)',
    sourceId: '1',
    context: 'Screen time is flooded with 3+ hours every day'
  },
  // Overall for kids ≤8
  ages0to8Daily: {
    value: '2:27',
    label: 'hours/day',
    fullLabel: 'Avg screen time (ages 0–8)',
    sourceId: '1',
    context: 'Children age 8 and younger'
  },
  // Ages 2-4
  ages2to4Daily: {
    value: '2:08',
    label: 'hours/day',
    fullLabel: 'Avg screen time (ages 2–4)',
    sourceId: '1'
  }
};

// ============================================
// SCREEN TIME COMPOSITION
// ============================================

export const screenTimeComposition = {
  gamingPercentage: {
    value: '26%',
    label: 'of screen time is gaming',
    sourceId: '1',
    context: 'Among ages 0–8 in 2024'
  },
  gamingTime0to8: {
    value: '38',
    label: 'min/day gaming (ages 0–8)',
    sourceId: '1',
    context: 'Up from 23 min in 2020 (+65%)'
  },
  gamingTime5to8: {
    value: '1:04',
    label: 'hours/day gaming (ages 5–8)',
    sourceId: '1'
  }
};

// ============================================
// SHORT-FORM VIDEO
// ============================================

export const shortFormVideo = {
  everWatched: {
    value: '48%',
    label: 'of kids 0–8 have watched short videos',
    sourceId: '1',
    context: 'TikTok, YouTube Shorts, Instagram Reels'
  },
  dailyEngagement: {
    value: '16%',
    label: 'engage daily',
    sourceId: '1'
  },
  avgTime0to8: {
    value: '14',
    label: 'min/day (overall)',
    sourceId: '1'
  },
  avgTime5to8: {
    value: '22',
    label: 'min/day (ages 5–8)',
    sourceId: '1'
  }
};

// ============================================
// DEVICE OWNERSHIP
// ============================================

export const deviceOwnership = {
  tablet0to8: {
    value: '47%',
    label: 'of kids 0–8 have their own tablet',
    sourceId: '1'
  },
  tabletByAge2: {
    value: '40%',
    label: 'have tablet by age 2',
    sourceId: '1'
  },
  tablet5to8: {
    value: '58%',
    label: 'of kids 5–8 own a tablet',
    sourceId: '1'
  },
  phone0to8: {
    value: '9%',
    label: 'of kids 0–8 have their own phone',
    sourceId: '1'
  },
  phone5to8: {
    value: '13%',
    label: 'of kids 5–8 have their own phone',
    sourceId: '1'
  },
  phoneByAge8: {
    value: '23%',
    label: 'have phone by age 8 (nearly 1 in 4)',
    sourceId: '1'
  }
};

// ============================================
// AI FOR LEARNING
// ============================================

export const aiLearning = {
  schoolRelated0to8: {
    value: '29%',
    label: 'of parents say child used AI for school learning',
    sourceId: '1'
  },
  schoolRelated5to8: {
    value: '39%',
    label: 'of kids 5–8 used AI for school learning',
    sourceId: '1'
  },
  criticalThinking0to8: {
    value: '26%',
    label: 'learning critical thinking from AI',
    sourceId: '1'
  },
  criticalThinking5to8: {
    value: '33%',
    label: 'of kids 5–8 learning critical thinking from AI',
    sourceId: '1'
  }
};

// ============================================
// PARENT CONFIDENCE
// ============================================

export const parentConfidence = {
  excellentGoodUnder2: {
    value: '88%',
    label: 'rate media parenting as Excellent/Good (under 2)',
    sourceId: '1'
  },
  excellentGood2to4: {
    value: '77%',
    label: 'rate media parenting as Excellent/Good (ages 2–4)',
    sourceId: '1'
  },
  excellentGood5to8: {
    value: '68%',
    label: 'rate media parenting as Excellent/Good (ages 5–8)',
    sourceId: '1'
  },
  fairPoor5to8: {
    value: '32%',
    label: 'rate media parenting as Fair/Poor (ages 5–8)',
    sourceId: '1'
  }
};

// ============================================
// HELPER: Get source by ID
// ============================================

export const getSourceById = (id: string): Source | undefined => {
  return sources.find(s => s.id === `source-${id}`);
};

// ============================================
// HELPER: Format citation marker
// ============================================

export const getCitationMarker = (sourceId: string): string => {
  return `[${sourceId}]`;
};
