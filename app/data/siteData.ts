// ============================================================
// IMI CONSTRUCTION — SITE DATA
// ============================================================

export const siteData = {
  // ==========================================================
  // SITE INFORMATION
  // ==========================================================

  siteInfo: {
    businessName: 'IMI Construction',
    businessType: 'Construction',
    description:
      'Professional construction solutions delivered with quality craftsmanship, precision, and attention to detail.',
    phone: '(555) 123-4567',
    email: 'info@imiconstruction.com',
    whatsappNumber: '+1 (555) 123-4567',
    location: 'Phoenix, Arizona',
  },

  // ==========================================================
  // MEDIA
  // ==========================================================

  media: {
    images: {
      img1: '/images/imi/img-1.jpg',
      img2: '/images/imi/img-2.jpg',
      img3: '/images/imi/img-3.jpg',
      img4: '/images/imi/img-4.jpg',
      img5: '/images/imi/img-5.jpg',
      img6: '/images/imi/img-6.jpg',
    },

    video: '/video/imi-project.mp4',
  },

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  navigation: [
    {
      id: 'home',
      label: 'Home',
      href: '#hero',
    },
    {
      id: 'services',
      label: 'Services',
      href: '#services',
    },
    {
      id: 'about',
      label: 'About',
      href: '#about',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '#projects',
    },
  ],

  // ==========================================================
  // HERO
  // ==========================================================

  hero: {
    eyebrow: 'IMI Construction',

    heading: 'Built with purpose.',

    description:
      'Professional construction delivered with precision, quality, and attention to every detail.',

    primaryCTA: {
      label: 'Get an estimate',
      href: '#estimate',
    },

    secondaryCTA: {
      label: 'View projects',
      href: '#projects',
    },

    image: 'img1',
  },

  // ==========================================================
  // MARQUEE
  // ==========================================================

  marquee: [
    'Construction',
    'Quality',
    'Precision',
    'Reliability',
    'Craftsmanship',
  ],

  // ==========================================================
  // STATEMENT
  // ==========================================================

  statement: {
    eyebrow: 'What we believe',

    heading: 'Construction should be built to last.',

    description:
      'From the first conversation to the final detail, we approach every project with care, clarity, and a commitment to doing the work properly.',
  },

  // ==========================================================
  // SERVICES
  // ==========================================================

  services: {
    eyebrow: 'What we do',

    heading: 'Built for the way you build.',

    description:
      'Reliable construction solutions delivered with precision, clear communication, and quality workmanship.',

    items: [
      {
        id: 'residential',
        number: '01',
        title: 'Residential Construction',
        description:
          'Thoughtful construction and renovation work designed around the people who use the space.',
      },

      {
        id: 'commercial',
        number: '02',
        title: 'Commercial Construction',
        description:
          'Reliable construction solutions for commercial spaces, delivered with precision and clear project management.',
      },

      {
        id: 'renovation',
        number: '03',
        title: 'Renovation',
        description:
          'Transforming existing spaces through considered planning, quality workmanship, and attention to detail.',
      },

      {
        id: 'contracting',
        number: '04',
        title: 'General Contracting',
        description:
          'End-to-end project coordination, keeping every moving part aligned from beginning to completion.',
      },
    ],
  },

  // ==========================================================
  // ABOUT / ALTERNATING CONTENT
  // ==========================================================

  about: {
    eyebrow: 'About IMI',

    heading: 'Built on experience.',

    description:
      'IMI Construction combines experience, careful planning, and quality workmanship to deliver construction projects with confidence.',

    sections: [
      {
        id: 'quality',
        eyebrow: 'Quality first',
        heading: 'Every detail matters.',
        description:
          'Good construction is found in the details. Our approach combines experienced workmanship with careful planning to deliver results that stand up over time.',
        image: 'img2',
        imagePosition: 'right',
      },

      {
        id: 'experience',
        eyebrow: 'Experience',
        heading: 'Experience you can build on.',
        description:
          'We understand what it takes to move a project from an idea to a finished space, keeping communication clear and the work moving forward.',
        image: 'img3',
        imagePosition: 'left',
      },
    ],
  },

  // ==========================================================
  // PROJECT SHOWCASE
  // ==========================================================

  projects: {
    eyebrow: 'Selected work',

    heading: 'Projects worth looking at.',

    description:
      'A selection of work demonstrating the standard we bring to every project.',

   items: [
  {
    id: 'project-01',
    title: 'Residential Extension',
    category: 'Extension',
    location: 'Stevenage',
    image: 'img4',
  },

  {
    id: 'project-02',
    title: 'Home Renovation',
    category: 'Renovation',
    location: 'Hertfordshire',
    image: 'img5',
  },

  {
    id: 'project-03',
    title: 'Property Refurbishment',
    category: 'Refurbishment',
    location: 'Stevenage',
    image: 'img6',
  },
],

    video: {
      source: 'video',
      label: 'See the work',
    },
  },

  // ==========================================================
  // PRICE CALCULATOR
  // ==========================================================

  calculator: {
    eyebrow: 'Estimate',

    heading: 'What could your project cost?',

    description:
      'Tell us a little about your project to get an initial estimate.',

     pricing: {
  'new-construction': {
    residential: {
      small: {
        min: 15000,
        max: 25000,
      },
      medium: {
        min: 40000,
        max: 60000,
      },
      large: {
        min: 120000,
        max: 180000,
      },
    },
  },

  renovation: {
    residential: {
      small: {
        min: 10000,
        max: 18000,
      },
      medium: {
        min: 30000,
        max: 50000,
      },
      large: {
        min: 75000,
        max: 110000,
      },
    },
  },

  addition: {
    residential: {
      small: {
        min: 20000,
        max: 30000,
      },
      medium: {
        min: 50000,
        max: 70000,
      },
      large: {
        min: 100000,
        max: 140000,
      },
    },
  },

  repair: {
    residential: {
      small: {
        min: 5000,
        max: 10000,
      },
      medium: {
        min: 15000,
        max: 25000,
      },
      large: {
        min: 40000,
        max: 60000,
      },
    },
  },
},

    projectTypes: [
      {
        id: 'new-construction',
        label: 'New Construction',
        value: 'new-construction',
      },
      {
        id: 'renovation',
        label: 'Renovation',
        value: 'renovation',
      },
      {
        id: 'addition',
        label: 'Addition',
        value: 'addition',
      },
      {
        id: 'repair',
        label: 'Repair',
        value: 'repair',
      },
    ],

    propertyTypes: [
  {
    id: 'residential',
    label: 'Residential',
    value: 'residential',
  },
],

    projectSizes: [
  {
    id: 'small',
    label: 'Small',
    description: 'Under 1,000 sq ft',
    value: 'small',
  },
  {
    id: 'medium',
    label: 'Medium',
    description: '1,000–5,000 sq ft',
    value: 'medium',
  },
  {
    id: 'large',
    label: 'Large',
    description: '5,000+ sq ft',
    value: 'large',
  },
],

    additionalOptions: [
      {
        id: 'permits',
        label: 'Permit & Compliance',
        value: 'permits',
      },
      {
        id: 'design',
        label: 'Design Consultation',
        value: 'design',
      },
      {
        id: 'materials',
        label: 'Premium Materials',
        value: 'materials',
      },
      {
        id: 'timeline',
        label: 'Expedited Timeline',
        value: 'timeline',
      },
      {
        id: 'warranty',
        label: 'Extended Warranty',
        value: 'warranty',
      },
    ],
  },

  // ==========================================================
  // FINAL CTA
  // ==========================================================

  finalCTA: {
    eyebrow: 'Start your project',

    heading: 'Ready to build something better?',

    description:
      'Tell us what you are planning and let’s talk about how we can help.',

    primaryCTA: {
      label: 'Get an estimate',
      href: '#estimate',
    },

    secondaryCTA: {
      label: 'WhatsApp us',
      href: 'https://wa.me/15551234567',
    },
  },

  // ==========================================================
  // CONTACT
  // ==========================================================

  contact: {
    phone: '(555) 123-4567',
    email: 'info@imiconstruction.com',
    whatsapp: '+1 (555) 123-4567',
  },
} as const