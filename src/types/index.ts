export interface TimelineItem {
  id: string;
  time: string;
  stageCode?: string;
  phase: string;
  title: string;
  description: string;
  keyObservation: string;
  evidenceCode: string;
  location: string;
  academicTag: string;
  notes?: string;
}

export type NgtVertexKey = 'agriculture' | 'education' | 'experience' | 'integrated';

export interface NgtNodeData {
  key: NgtVertexKey;
  label: string;
  subLabel: string;
  tagline: string;
  elements: string[];
  evidenceCodes: string[];
  imageSrc: string;
  academicQuote: string;
  economicMeaning: string;
}

export interface ValueLayerItem {
  layer: 'agriculture' | 'education' | 'experience';
  title: string;
  subtitle: string;
  description: string;
  mechanism: string;
  evidenceCode: string;
  outcomes: string[];
}

export interface BusinessPillar {
  title: string;
  category: string;
  inputs: string;
  transformation: string;
  outputs: string;
}

export interface CustomerSegment {
  id: string;
  type: 'B2B' | 'B2C';
  targetGroup: string;
  mainValueSought: string;
  needs: string[];
  touchpoints: string[];
  economicContribution: string;
}

export interface JourneyStep {
  id: string;
  order: number;
  stage: string;
  touchpoint: string;
  valueCreated: string;
  potentialFriction: string;
  evidenceLink: string;
  surveyRating: number;
}

export interface SurveyKpi {
  label: string;
  value: string;
  target?: string;
  subtext: string;
  description: string;
}

export interface SurveyChartData {
  id: string;
  title: string;
  subtitle: string;
  chartType: 'bar' | 'radar' | 'horizontal_bar' | 'donut';
  items: { label: string; score: number; percentage?: number; unit?: string }[];
  insight: string;
}

export interface TriangulationCase {
  id: string;
  caseName: string;
  topic: string;
  businessSaid: {
    code: string;
    source: string;
    quote: string;
    implication: string;
  };
  observed: {
    code: string;
    source: string;
    fact: string;
    image: string;
  };
  studentsReported: {
    code: string;
    source: string;
    metric: string;
    dataPoint: string;
  };
  conclusion: string;
  politicalEconomyTakeaway: string;
}

export interface ChallengeItem {
  title: string;
  aspect: string;
  description: string;
  operationalRisk: string;
  businessContext: string;
}

export interface RecommendationCard {
  id: string;
  number: string;
  title: string;
  evidenceBasis: string;
  recommendation: string;
  implementation: string[];
  expectedEffect: string;
}

export interface GalleryItem {
  id: string;
  code: string;
  title: string;
  category: 'EVENT' | 'SEMINAR' | 'FIELD' | 'seminar' | 'agriculture' | 'experience' | 'space';
  date: string;
  location: string;
  caption: string;
  academicNotes: string;
  imageUrl: string;
  filename?: string;
  label?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type FontFamilyMode = 'vietnam' | 'jakarta' | 'serif';
export type FontSizeMode = 'sm' | 'md' | 'lg' | 'xl';
export type LineHeightMode = 'standard' | 'relaxed';
export type ContrastMode = 'natural' | 'high';
