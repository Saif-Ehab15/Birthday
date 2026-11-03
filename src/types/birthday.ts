export interface SaraPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  featured?: boolean;
  objectPosition?: string;
}

export interface MomentPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  date?: string;
  rotationDeg?: number;
  location?: string;
  aspectClass?: string;
  objectPosition?: string;
}

export interface SpecialQuality {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Sparkles' | 'Sun' | 'Smile' | 'Heart' | 'Flower' | 'Star' | 'Gem';
  compliment: string;
  detailText: string;
}

export interface BirthdayMessageConfig {
  sectionIntro: string;
  buttonText: string;
  envelopeTitle: string;
  letterSalutation: string;
  paragraphs: string[];
  closing: string;
  signOff: string;
  dateText: string;
}

export interface FinalSurpriseConfig {
  headline: string;
  subheadline: string;
  buttonText: string;
  modalTitle: string;
  modalSubtitle: string;
  photoSrc?: string;
  paragraphs: string[];
  highlightWishes: string[];
}

export interface FinalSecretConfig {
  tooltip: string;
  secretTitle: string;
  secretBadge: string;
  secretMessage: string;
  authorNote: string;
}

export interface BirthdayConfig {
  herName: string;
  birthdayDate: string;
  landingScreenText: {
    greeting: string;
    question: string;
    subtext: string;
    ctaText: string;
    footerText: string;
  };
  heroText: {
    badge: string;
    mainTitle: string;
    highlightSubtitle: string;
    message: string;
    featuredPortrait: string;
  };
  musicSrc: string;
  musicTitle: string;
  musicStartTime?: number;
  herGallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    photos: SaraPhoto[];
  };
  ourMoments: {
    sectionTitle: string;
    sectionSubtitle: string;
    photos: MomentPhoto[];
  };
  birthdayMessage: BirthdayMessageConfig;
  specialThings: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: SpecialQuality[];
  };
  finalMessage: FinalSurpriseConfig;
  finalSecret: FinalSecretConfig;
}
