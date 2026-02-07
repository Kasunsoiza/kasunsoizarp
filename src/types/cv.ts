export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
  photo: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Declaration {
  enabled: boolean;
  text: string;
}

export interface CVData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
  declaration: Declaration;
}

export const defaultCVData: CVData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
    photo: '',
  },
  experience: [],
  education: [],
  skills: [],
  declaration: {
    enabled: false,
    text: 'I hereby declare that all the information provided above is true and accurate to the best of my knowledge.',
  },
};

export type TemplateType = 
  | 'modern' 
  | 'classic' 
  | 'ats' 
  | 'onyx' 
  | 'pikachu' 
  | 'glalie' 
  | 'gengar' 
  | 'leafish';

export interface Template {
  id: TemplateType;
  name: string;
  description: string;
  color: string;
}

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean two-column layout with sidebar',
    color: '#4169E1',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional centered design',
    color: '#c9a227',
  },
  {
    id: 'ats',
    name: 'ATS-Friendly',
    description: 'Optimized for applicant tracking systems',
    color: '#333333',
  },
  {
    id: 'onyx',
    name: 'Onyx',
    description: 'Bold black and white design',
    color: '#000000',
  },
  {
    id: 'pikachu',
    name: 'Pikachu',
    description: 'Vibrant yellow accent design',
    color: '#fbbf24',
  },
  {
    id: 'glalie',
    name: 'Glalie',
    description: 'Cool blue professional layout',
    color: '#93c5fd',
  },
  {
    id: 'gengar',
    name: 'Gengar',
    description: 'Bold purple creative design',
    color: '#9333ea',
  },
  {
    id: 'leafish',
    name: 'Leafish',
    description: 'Fresh green nature-inspired',
    color: '#10b981',
  },
];
