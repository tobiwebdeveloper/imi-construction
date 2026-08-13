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
    'Construction, extensions, renovations and refurbishments delivered with quality workmanship and careful attention to detail.',
  phone: '07525 103911',
  email: 'info@imiconstruction.com',
  whatsappNumber: '07525 103911',
  location: 'Stevenage, Hertfordshire',
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
  eyebrow: 'Construction & Building Services',

  heading: 'Construction built around your project.',

  description:
    'Extensions, renovations, refurbishments and building work delivered with quality workmanship, clear communication, and attention to detail.',

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
  'Extensions',
  'Renovations',
  'Refurbishments',
  'Building',
  'Construction',
],

  // ==========================================================
  // STATEMENT
  // ==========================================================

  statement: {
    eyebrow: 'What we believe',

    heading: 'Construction services for every stage of your project.',

    description:
  'From home extensions and renovations to refurbishments and general building work, we deliver practical construction solutions with quality workmanship.',
  },

  // ==========================================================
  // SERVICES
  // ==========================================================

  services: {
  eyebrow: 'What we do',

  heading: 'Construction services built around your project.',

  description:
    'From new construction and additions to renovations and repairs, we deliver quality workmanship with careful attention to detail.',

  items: [
    {
      id: 'new-construction',
      number: '01',
      title: 'New Construction',
      description:
        'Building new spaces from the ground up with careful planning, quality workmanship, and attention to detail.',
    },

    {
      id: 'renovation',
      number: '02',
      title: 'Renovation',
      description:
        'Transforming existing spaces through considered planning, quality workmanship, and a focus on the finished result.',
    },

    {
      id: 'addition',
      number: '03',
      title: 'Extensions & Additions',
      description:
        'Creating additional space that works naturally with the existing property and the way you use it.',
    },

    {
      id: 'repair',
      number: '04',
      title: 'Building Repairs',
      description:
        'Reliable repair work to restore, improve, and maintain residential properties.',
    },
  ],
},

  // ==========================================================
  // ABOUT / ALTERNATING CONTENT
  // ==========================================================

  about: {
    eyebrow: 'How we work',
    heading: 'Good construction starts with getting the details right.',

    description:
      'IMI Construction combines experience, careful planning, and quality workmanship to deliver construction projects with confidence.',

    sections: [
            {
        id: 'quality',
        eyebrow: 'Quality workmanship',
        heading: 'Every detail matters.',
        description:
          'From the initial work through to the finishing details, we focus on doing the job properly and delivering work built to last.',
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

    heading: 'Recent construction projects.',

   description:
  'Explore a selection of extensions, renovations and refurbishment work completed to a high standard.',

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

    heading: 'Get an initial construction estimate.',
    description:
  'Choose the type and approximate size of your project to get an indicative price range.',

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
    phone: '4407525103911',
    email: 'info@imiconstruction.com',
    whatsapp: '4407525103911',
  },
} as const