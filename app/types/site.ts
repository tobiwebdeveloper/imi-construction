/**
 * Type definitions for IMI Construction website content
 * Single source of truth for all site data structures
 */

// ============================================================================
// SITE INFORMATION
// ============================================================================

export interface SiteInfo {
  businessName: string;
  businessType: string;
  description: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  location: string;
  serviceArea: string[];
}

// ============================================================================
// NAVIGATION
// ============================================================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Navigation {
  items: NavItem[];
}

// ============================================================================
// HERO SECTION
// ============================================================================

export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroSection {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  imageRef?: string;
  videoRef?: string;
}

// ============================================================================
// SERVICES
// ============================================================================

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageRef?: string;
  href: string;
}

export interface ServicesSection {
  heading: string;
  description: string;
  services: Service[];
}

// ============================================================================
// PROJECTS
// ============================================================================

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  shortDescription?: string;
  imageRefs?: string[];
  videoRef?: string;
  featured: boolean;
  href: string;
}

export interface ProjectsSection {
  heading: string;
  description: string;
  projects: Project[];
}

// ============================================================================
// ABOUT SECTION
// ============================================================================

export interface KeyPoint {
  title: string;
  description: string;
}

export interface AboutSection {
  heading: string;
  description: string;
  imageRef?: string;
  keyPoints: KeyPoint[];
}

// ============================================================================
// ESTIMATE CALCULATOR
// ============================================================================

export interface CalculatorOption {
  id: string;
  label: string;
  value: string;
}

export interface CalculatorCategory {
  id: string;
  name: string;
  options: CalculatorOption[];
}

export interface CalculatorData {
  projectTypes: CalculatorOption[];
  propertyTypes: CalculatorOption[];
  projectSizes: CalculatorOption[];
  additionalOptions: CalculatorOption[];
}

// ============================================================================
// CONTACT SECTION
// ============================================================================

export interface ContactSection {
  phone: string;
  email: string;
  whatsapp: string;
  primaryCTALabel: string;
  secondaryCTALabel: string;
}

// ============================================================================
// COMPLETE SITE DATA
// ============================================================================

export interface SiteData {
  siteInfo: SiteInfo;
  navigation: Navigation;
  hero: HeroSection;
  services: ServicesSection;
  projects: ProjectsSection;
  about: AboutSection;
  calculator: CalculatorData;
  contact: ContactSection;
}
