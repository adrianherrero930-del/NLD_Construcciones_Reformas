export type ScreenMode = 'habita' | 'nld' | 'comparador' | 'calculadora';

export interface ServiceItem {
  id: string;
  title: string;
  categoryTag?: string;
  iconName: string;
  shortDesc: string;
  bullets?: string[];
  fullDesc: string;
  keyFeatures: string[];
  materials?: string[];
  estimatedTimeline?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  beforeDesc: string;
  afterDesc: string;
  fullStory: string;
  materialsUsed: string[];
  investmentRange: string;
  gallery: string[];
  architect: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  timeAgo?: string;
  initials?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CoverageZone {
  name: string;
  label: string;
  description: string;
  activeProjects: number;
}

export interface BudgetCalculatorState {
  propertyType: 'atico' | 'piso' | 'villa' | 'local';
  areaSqm: number;
  qualityTier: 'alta' | 'exclusiva' | 'museistica';
  services: {
    demolicion: boolean;
    cocina: boolean;
    banos: boolean;
    climatizacion: boolean;
    carpinteria: boolean;
    domotica: boolean;
    exterior: boolean;
  };
  numBanos: number;
  openConcept: boolean;
}

export interface ConsultationBooking {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  projectDescription: string;
  preferredDate?: string;
  preferredTime?: string;
  meetingType: 'presencial' | 'estudio' | 'online';
}
