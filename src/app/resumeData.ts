// /src/data/resumeData.ts

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  program: string;
  field?: string;
  period: string;
};

export type Resume = {
  basics: {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone?: string;
    linkedin?: string;
    website?: string;
    youtube?: string;
    summary: string[];
    skills: string[];
    languages: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
};

export const resumeData: Resume = {
  basics: {
    name: "Rusben Madrigal",
    headline: "Senior Technical SEO & Web Performance",
    location: "San Jose, Costa Rica",
    email: "rusbenmadrigal@gmail.com",
    phone: "87773420",
    linkedin: "https://www.linkedin.com/in/rusmadrigal",
    website: "https://github.com/rusmadrigal",
    youtube: "https://www.youtube.com/watch",
    summary: [
      "Senior SEO professional with over ten years of experience, including a strong focus on Technical SEO.",
      "Solid background in JavaScript, HTML, CSS, and Next.js, with hands-on experience in technical audits, Core Web Vitals optimization, log file analysis, and structured data implementation.",
      "Strong expertise in web analytics and measurement, working with GA4, Google Tag Manager, Adobe Analytics, and Looker Studio to translate data into actionable insights.",
      "Known for a structured, detail-oriented approach and close collaboration with engineering and product teams to drive sustainable organic growth.",
    ],
    skills: [
  // SEO técnico
  "Technical SEO",
  "JavaScript SEO",
  "HTML",
  "CSS",
  "Next.js",
  "Rendering & Indexation",
  "Crawlability & Site Architecture",
  "Core Web Vitals",
  "Structured Data (JSON-LD)",
  "Log File Analysis",

  // Herramientas SEO
  "Google Search Console",
  "Screaming Frog",
  "SEMrush",
  "Ahrefs",
  "Sitebulb",

  // Analítica & data
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Adobe Analytics",
  "Looker Studio",
  "SQL",

  // Performance
  "Web Performance Optimization",
  "Lighthouse",
  "PageSpeed Insights"
],
    languages: ["English (Full Professional)", "Español (Native or Bilingual)"],
  },

  experience: [
    {
      company: "Publicis Groupe",
      role: "SEO Lead (PGD LATAM HUB)",
      location: "Costa Rica",
      period: "February 2023 – Present",
      highlights: [
        "As a Media Delivery Associate Director, I lead the LATAM SEO Delivery team and oversee technical SEO initiatives across large-scale, multilingual websites.",
        "Focus on site architecture, crawlability and indexation, Core Web Vitals optimization, structured data, and rendering behavior across JS/PHP-based environments.",
        "Collaborate with engineering, analytics, and content teams to diagnose complex issues, implement scalable solutions, and drive measurable organic growth for global brands.",
      ],
    },
    {
      company: "Advision Development",
      role: "Technical SEO Manager",
      location: "Costa Rica",
      period: "May 2022 – October 2022",
      highlights: [
        "Solved complex Technical SEO challenges across large-scale, multilingual architectures, including PHP- and JavaScript-based technology stacks.",
        "Led technical audits, Core Web Vitals optimization, structured data implementation, log file analysis, and scalable internal linking models to improve organic visibility and crawl efficiency.",
        "Provided technical SEO guidance for offshore/onshore Sportsbook operations, supporting brands such as SportsbookReview.com, BookmakersReview.com, OddsTrader.com, Predictem.com, and others.",
        "Partnered closely with development teams to implement architecture improvements, ensure correct rendering and indexation, and drive measurable performance growth across high-traffic environments.",
      ],
    },
    {
      company: "Advision Development",
      role: "Senior Technical SEO",
      location: "Santa Ana, San Jose, Costa Rica",
      period: "May 2021 – May 2022",
      highlights: ["In charge of Technical SEO."],
    },
    {
      company: "The Strategic Group",
      role: "Senior Technical SEO",
      location: "San José, Costa Rica",
      period: "May 2020 – April 2021",
      highlights: [
        "Page speed monitoring and improvement.",
        "Code improvement and optimization (PHP and ReactJS).",
        "On-page optimization (metadata, internal links, etc.).",
        "Implementation, improvement and maintenance of Schema Markup.",
        "Sitemaps.xml and .zip structure optimization.",
        "Highlight: recovered a brand website from an algorithmic penalty caused by a low-quality link purchase.",
      ],
    },
    {
      company: "Tripadvisor",
      role: "Senior Technical SEO",
      location: "Remote",
      period: "February 2018 – April 2020",
      highlights: [
        "Code improvement and optimization (PHP).",
        "On-page optimization (metadata, internal links, etc.).",
        "Improved web rendering.",
        "Implementation, improvement and maintenance of Schema Markup.",
        "Sitemaps.xml and .zip structure optimization.",
      ],
    },
    {
      company: "SBR NetMarketing and Consulting S.A",
      role: "Mid SEO & Web Analytics",
      location: "Santa Ana, Costa Rica",
      period: "February 2016 – February 2018",
      highlights: [
        "Code improvement and optimization (PHP).",
        "Migration of old site to ReactJS.",
        "On-page optimization (metadata, internal links, etc.).",
        "Improved web rendering.",
        "Implementation, improvement and maintenance of Schema Markup.",
        "Collaborated on Google Tag Manager implementation and exporting data to Data Studio.",
      ],
    },
    {
      company: "DayStar Properties",
      role: "Junior SEO",
      period: "February 2009 – March 2013",
      highlights: [
        "Basic SEO optimization focused on WP CMS.",
        "Reporting updates to SEO Manager.",
        "Metadata (title/descriptions) optimization.",
        "Competitors audit.",
      ],
    },
  ],

  education: [
    {
      institution: "Universidad Latina de Costa Rica",
      program:
        "Degree of Business Administration with emphasis in Marketing & Sales",
      field: "Marketing",
      period: "2012 – 2014",
    },
    {
      institution: "McKinsey & Company",
      program:
        "Professional Development Program (Leadership, Problem Solving, and Business Skills)",
      period: "October 2025 – April 2026",
    },
    {
      institution: "Universidad de La Sabana",
      program: "Metodologías Ágiles e Innovación en la Organización",
      field: "Marketing",
      period: "October 2023 – February 2024",
    },
    {
      institution: "Le Studio by PGD",
      program: "Management Development Program 2024",
      field: "Marketing",
      period: "April 2024 – May 2024",
    },
    {
      institution: "Universidad Latina de Costa Rica",
      program:
        "Bachelor of Business Administration with emphasis in Marketing & Sales",
      field: "Empresa, gestión, marketing y disciplinas afines",
      period: "2007 – 2010",
    },
  ],
};


