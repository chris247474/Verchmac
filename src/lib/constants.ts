import type { NavLink, HeroSlide, SolutionCard, ValuePillar, Stat, Testimonial } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Enterprise", href: "#" },
  { label: "SMB", href: "#" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Education Solutions", href: "/education" },
      { label: "Enterprise Solutions", href: "#" },
      { label: "SMB Solutions", href: "#" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    alt: "Business professionals collaborating with Apple devices",
    headline: "One Apple ecosystem.\nOne trusted partner for your\norganization.",
    subtext: "Apple-first solutions for education, enterprise, and growing businesses delivered and supported by Power Mac Center.",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    alt: "Modern classroom with technology",
    headline: "Transform education\nwith Apple technology.",
    subtext: "Empower educators and students with integrated Apple solutions designed for the modern classroom.",
  },
  {
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80",
    alt: "Enterprise office environment",
    headline: "Enterprise solutions\nbuilt for scale.",
    subtext: "Deploy and manage Apple devices at scale with enterprise-grade tools, security, and support.",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
    alt: "Growing business team",
    headline: "Helping small teams\nscale smarter.",
    subtext: "Flexible Apple solutions designed for startups and growing businesses in the Philippines.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80",
    alt: "Team working with Apple products",
    headline: "Your trusted Apple\npartner since 1994.",
    subtext: "Over 108 locations nationwide. The premier Apple Premium Partner in the Philippines.",
  },
];

export const SOLUTION_CARDS: SolutionCard[] = [
  {
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80",
    category: "EDUCATION",
    categoryColor: "text-[#0071E3]",
    title: "Empowering educators.\nInspiring lifelong learning.",
    description: "Apple solutions designed to enhance teaching, learning, and student outcomes.",
    href: "/education",
    linkLabel: "View Education Solutions",
  },
  {
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    category: "ENTERPRISE",
    categoryColor: "text-[#0071E3]",
    title: "Built for modern,\nsecure workforces.",
    description: "Deploy and manage Apple devices at scale with enterprise-grade tools and support.",
    href: "#",
    linkLabel: "View Enterprise Solutions",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    category: "SMB",
    categoryColor: "text-[#0071E3]",
    title: "Helping small teams\nscale smarter.",
    description: "Flexible Apple solutions designed for startups and growing businesses.",
    href: "#",
    linkLabel: "View SMB Solutions",
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80",
    title: "Empower Educators",
    description: "Give teachers the tools and training they need to deliver engaging, modern learning experiences.",
  },
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    title: "Engage Students",
    description: "Encourage creativity, collaboration, and active participation with iPad-powered learning.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "Simplify IT & Deployment",
    description: "Deploy, manage, and support devices with minimal disruption to learning environments.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Support Long-Term Outcomes",
    description: "Solutions designed to scale with your institution's needs, today and into the future.",
  },
];

export const STATS: Stat[] = [
  { value: "20+", label: "years Apple education partnership and deployment experience across diverse learning environments" },
  { value: "Hundreds\nof schools", label: "Supported across public and private education institutions nationwide" },
  { value: "Thousands of\neducators", label: "Trained and supported through Apple-recognized education programs" },
  { value: "Apple Authorized\nEducation Partner", label: "Officially recognized by Apple for education solutions and programs" },
];

export const TESTIMONIAL: Testimonial = {
  quote: "\u201CApple, ADB and Power Mac Center there all organization that bounds sustainability and minimize our environmental footprint.\u201D",
  author: "Edward Hughes",
  role: "ITDW- ITO, ADB",
  company: "Asian Development Bank",
  logo: "/images/logo-adb.svg",
  image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
};

export const INQUIRY_TYPES = [
  { value: "", label: "Inquiry type" },
  { value: "education", label: "Education" },
  { value: "enterprise", label: "Enterprise" },
  { value: "smb", label: "SMB" },
  { value: "other", label: "Other" },
];

export const CHATBOT_SYSTEM_PROMPT = `You are the Power Mac Center Business assistant. You specialize in Apple solutions for education institutions in the Philippines. You can discuss:
- Apple School Manager and Classroom app
- 1:1 iPad and Mac deployment programs
- MDM (Mobile Device Management) solutions
- Apple Teacher and Apple Professional Learning
- Device financing and leasing options
- AppleCare for Education
Always be professional, helpful, and direct users to speak with a specialist for detailed pricing or custom deployments.`;

export const CHATBOT_GREETING = "Hi! I'm the Power Mac Center Business assistant. I can help you learn about our Apple solutions for education, enterprise, and SMB. What would you like to know?";
