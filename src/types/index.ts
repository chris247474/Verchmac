export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface HeroSlide {
  image: string;
  alt: string;
  headline: string;
  subtext: string;
}

export interface SolutionCard {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface ValuePillar {
  image: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  image: string;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  organization: string;
  inquiryType: string;
  message: string;
}
