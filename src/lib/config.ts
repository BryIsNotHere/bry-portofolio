// ============================================================
//  PORTFOLIO CONFIG
//  Edit ONLY this file to personalise your portfolio.
//  No other files need touching for content changes.
// ============================================================

export const PLAYER = {
  name: "Bryan Nicholas",
  title: "WEB DEVELOPER",
  origin: "JAKARTA, ID",
  class: "DEVELOPER",
  level: "22",
  projectsCleared: "05",
  status: "OPEN TO OFFERS" as "AVAILABLE" | "BUSY" | "OPEN TO OFFERS",
  healthBars: [
    { label: "FRONTEND", value: 80 },
    { label: "BACKEND", value: 20 },
  ],
}

export const DIALOGS = [
  "Hi there, I'm Bryan! a Web Developer from Jakarta, Indonesia. I was a Computer Science Bachelor graduating from Bina Nusantara University with a passion of continuous growth!",
  "I'm currently focused on Web Development, I'm proficient in REACT, HTML, TAILWIND, LARAVEL, and MySQL, alongside with traditional CSS using Styled Components. I’m also expanding my skills currently in NEXTJS. Additionally, I have experience in using Git for web deployments and Figma for UI/UX design.",
  "I care about clean architecture, audit trails, and systems that scale.",
  "When I'm not coding I'm probably obsessing over retro games or 2000s movies... or the whole pop cultures in general... or even reading classic fictions! (I'm such a nerd)",
  "I'm currently open towards new opportunities. Let's build something cool! ▶",
]

export const TECH_STACK: {
  label: string
  color: "blue" | "pink" | "yellow" | "green"
}[] = [
  { label: "NEXTJS", color: "green" },
  { label: "REACT", color: "blue" },
  { label: "TYPESCRIPT", color: "blue" },
  { label: "INERTIA.JS", color: "pink" },
  { label: "LARAVEL", color: "pink" },
  { label: "TAILWIND", color: "yellow" },
  { label: "HTML5", color: "pink" },
  { label: "CSS", color: "blue" },
  { label: "PHP", color: "blue" },
  { label: "MySQL", color: "green" },
  { label: "FIREBASE", color: "yellow" },
  { label: "REST API", color: "blue" },
  { label: "GIT", color: "pink" },
  { label: "POSTMAN", color: "yellow" },
  { label: "NETLIFY", color: "blue" },
  { label: "VERCEL", color: "blue" },
  { label: "FIGMA", color: "pink" },
]

export const SPECIAL_MOVES: {
  label: string
  color: "blue" | "pink" | "yellow" | "green"
}[] = [
  { label: "UI/UX DESIGN", color: "blue" },
  { label: "AUTH SYSTEMS", color: "yellow" },
  { label: "API DESIGN", color: "yellow" },
  { label: "DB ARCHITECTURE", color: "green" },
  { label: "RESPONSIVE DESIGN", color: "green" },
]

export interface Project {
  name: string
  tag: string
  year: string
  desc: string[]
  images: { src: string; caption: string }[]
}

export const PROJECTS: Project[] = [
  {
    name: "SPENDORA",
    tag: "NEXTJS + TAILWIND + FIREBASE",
    year: "2026",
    desc: [
      "Spendora is a full-stack web app that helps users track recurring subscriptions in one dashboard — solving the problem of unnoticed monthly expenses.",
      "Built with NEXTJS, TAILWINDCSS, and FIREBASE. Delivers real-time data sync, secure authentication, and a fast responsive UI.",
      "Key features: Secure signup/login with protected routes, Personalized subscription dashboard, Profile management, Production-ready static pages (Terms, Privacy, About), and an Integrated user feedback system.",
      "Deployed on Netlify. Live demo → https://spendora-tracks.netlify.app/",
    ],
    images: [
      {
        src: "/images/spendora/dashboard.png",
        caption: "Dashboard overview showing key metrics and navigation",
      },
      {
        src: "/images/spendora/subscription-analytics.png",
        caption: "Detailed subscription analytics overview for statistics",
      },
      {
        src: "/images/spendora/your-subscription.png",
        caption: "Detailed subscriptions overview for a certain user",
      },
      {
        src: "/images/spendora/profile.png",
        caption: "Edit profile menu overview",
      },
      {
        src: "/images/spendora/dark-mode.png",
        caption: "Dashboard overview in dark mode",
      },
    ],
  },
  {
    name: "PROJECT BETA",
    tag: "Next.js + Tailwind",
    year: "2024",
    desc: [
      "Modern SSR frontend with optimised images and responsive design. Replace with your real description.",
    ],
    images: [
      { src: "", caption: "Landing page with animated hero section" },
      { src: "", caption: "Mobile responsive project showcase grid" },
    ],
  },
  {
    name: "PROJECT GAMMA",
    tag: "REST API",
    year: "2023",
    desc: [
      "RESTful API backend serving multiple clients. Laravel + JWT auth + full documentation. Replace with your real description.",
    ],
    images: [
      { src: "", caption: "API documentation via Postman / Swagger" },
      { src: "", caption: "Database schema diagram" },
    ],
  },
  {
    name: "PROJECT DELTA",
    tag: "Full Stack",
    year: "2023",
    desc: [
      "Document management system with version control and permission-based access. Replace with your real description.",
    ],
    images: [
      { src: "", caption: "Document upload and management interface" },
      { src: "", caption: "Version history and comparison view" },
    ],
  },
  {
    name: "PROJECT EPSILON",
    tag: "React + TypeScript",
    year: "2022",
    desc: [
      "Interactive data visualisation dashboard with charts, filters, and export. Replace with your real description.",
    ],
    images: [
      { src: "", caption: "Main analytics dashboard with live charts" },
      { src: "", caption: "Export and reporting feature" },
    ],
  },
  {
    name: "PROJECT ZETA",
    tag: "Mobile + Web",
    year: "2022",
    desc: [
      "Cross-platform app serving web and mobile from a single Laravel API. Replace with your real description.",
    ],
    images: [
      { src: "", caption: "Mobile app home screen" },
      { src: "", caption: "Web companion interface" },
    ],
  },
]

export const LEADERBOARD = [
  {
    rank: "1ST",
    initials: "BRY",
    achievement: "Shipped Spendora — Full Stack App",
    sub: "Production — 2026",
    score: "999,999",
  },
  {
    rank: "2ND",
    initials: "BRY",
    achievement: "Computer Science Bachelor",
    sub: "Bina Nusantara University — 2025",
    score: "850,000",
  },
  {
    rank: "3RD",
    initials: "BRY",
    achievement: "Mastered Laravel + Inertia Stack",
    sub: "Full Stack — 2024",
    score: "720,000",
  },
  {
    rank: "4TH",
    initials: "BRY",
    achievement: "First Firebase Deployment",
    sub: "Cloud — 2024",
    score: "580,000",
  },
  {
    rank: "5TH",
    initials: "BRY",
    achievement: "First React Project Shipped",
    sub: "Frontend — 2023",
    score: "440,000",
  },
  {
    rank: "6TH",
    initials: "BRY",
    achievement: "Learned Git + Figma Workflow",
    sub: "Tooling — 2023",
    score: "280,000",
  },
  {
    rank: "7TH",
    initials: "BRY",
    achievement: "Wrote First Line of Code",
    sub: "Origin Story — 2021",
    score: "100,000",
  },
]

export const CONTACT = {
  instagram: "https://instagram.com/bry_nicholas",
  linkedin: "https://www.linkedin.com/in/bryan-n-9b9927223/",
  github: "https://github.com/BryIsNotHere",
  email: "mailto:bryannicholasliu@email.com",
}

// The Shining easter egg text (bottom of contact page)
export const EASTER_EGG = "ALL WORK AND NO PLAY MAKES BRYAN A DULL DEV"
