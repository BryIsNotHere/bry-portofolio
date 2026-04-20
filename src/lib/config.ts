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
  projectsCleared: "5+",
  status: "OPEN TO OFFERS" as "AVAILABLE" | "BUSY" | "OPEN TO OFFERS",
  healthBars: [
    { label: "FRONTEND", value: 80 },
    { label: "BACKEND", value: 20 },
  ],
}

export const DIALOGS = [
  "Hi there, I'm Bryan! a Web Developer from Jakarta, Indonesia. I was a Computer Science Bachelor graduating from Bina Nusantara University with a passion of continuous growth!",
  "I'm currently focused on Web Development, I'm proficient in REACT, HTML, TAILWINDCSS, LARAVEL, and MySQL, alongside with traditional CSS using STYLED. I’m also expanding my skills currently in NEXTJS. Additionally, I have experience in using Git for web deployments and Figma for UI/UX design.",
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
  { label: "INERTIAJS", color: "pink" },
  { label: "LARAVEL", color: "pink" },
  { label: "TAILWINDCSS", color: "yellow" },
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

export const LANGUAGES = [
  { label: "INDONESIAN", level: "NATIVE", value: 100 },
  { label: "ENGLISH", level: "PROFICIENT", value: 85 },
  { label: "CHINESE", level: "ADVANCED", value: 65 },
  { label: "HOKKIEN", level: "ADVANCED", value: 50 },
  { label: "HAKKA", level: "BEGINNER", value: 15 },
  { label: "KOREAN", level: "BEGINNER", value: 10 },
]

export interface ProjectParagraph {
  text: string
  link?: { label: string; href: string }
}

export interface Project {
  name: string
  tag: string
  year: string
  desc: ProjectParagraph[]
  images: { src: string; caption: string }[]
}

export const PROJECTS: Project[] = [
  {
    name: "SPENDORA",
    tag: "NEXTJS + TAILWINDCSS + FIREBASE + NETLIFY",
    year: "2026",
    desc: [
      {
        text: "Spendora is a full-stack web app designed to help users track and manage recurring subscriptions in one centralized dashboard.",
      },
      {
        text: "Built with Next.js, TailwindCSS, and Firebase. Real-time data sync, secure authentication, fast responsive UI deployed on Netlify.",
      },
      {
        text: "Key features: secure signup/login with protected routes, personalized subscription dashboard, profile management, and an integrated feedback system.",
      },
      {
        text: "Live demo →",
        link: {
          label: "spendora-tracks.netlify.app",
          href: "https://spendora-tracks.netlify.app/",
        },
      },
    ],
    images: [
      {
        src: "/images/project/spendora/dashboard.png",
        caption: "Dashboard overview showing key metrics and navigation",
      },
      {
        src: "/images/project/spendora/subscription-analytics.png",
        caption: "Detailed subscription analytics overview for statistics",
      },
      {
        src: "/images/project/spendora/your-subscription.png",
        caption: "Detailed subscriptions overview for a certain user",
      },
      {
        src: "/images/project/spendora/profile.png",
        caption: "Edit profile menu overview",
      },
      {
        src: "/images/project/spendora/dark-mode.png",
        caption: "Dashboard overview in dark mode",
      },
    ],
  },
  {
    name: "Faux Vêtements",
    tag: "NEXTJS + TAILWINDCSS",
    year: "2025",
    desc: [
      {
        text: "This conceptual clothing brand website was created to showcase my skills in React and TailwindCSS.",
      },
      {
        text: "Features a Homepage, About page, Kids/Female/Male clothing pages, and an Order form modal popup.",
      },
      {
        text: "Fully responsive and supports Dark Mode for a seamless user experience.",
      },
      {
        text: "Github →",
        link: {
          label: "Faux-Vetements",
          href: "https://github.com/BryIsNotHere/Faux-Vetements.git",
        },
      },
    ],
    images: [
      {
        src: "/images/project/faux-vetements/homepage.png",
        caption: "Homepage overview with navbar and hero component",
      },
      {
        src: "/images/project/faux-vetements/dark-mode.png",
        caption: "Homepage overview in dark mode",
      },
      {
        src: "/images/project/faux-vetements/products.png",
        caption: "Products overview with product cards",
      },
      {
        src: "/images/project/faux-vetements/best-products.png",
        caption: "Best products overview with 3D product cards",
      },
      {
        src: "/images/project/faux-vetements/testimonials.png",
        caption: "Testimonials overview with cards",
      },
      {
        src: "/images/project/faux-vetements/order.png",
        caption: "Order popup modal",
      },
      {
        src: "/images/project/faux-vetements/order-dark.png",
        caption: "Order popup modal in dark mode",
      },
    ],
  },
  {
    name: "TEXT EDITOR",
    tag: "FLET + PYTHON + FLUTTER",
    year: "2025",
    desc: [
      {
        text: "After completing my internship, I took on this side project to explore new skills. Using FLET, I developed a simple text editor with save functionality and essential editing features.",
      },
      {
        text: "Github →",
        link: {
          label: "Text-Editor",
          href: "https://github.com/BryIsNotHere/Text-Editor.git",
        },
      },
    ],
    images: [
      { src: "/images/project/text-editor/editor.png", caption: "Text Editor" },
    ],
  },
  {
    name: "PACMAN",
    tag: "HTML + CSS + JAVASCRIPT",
    year: "2023",
    desc: [
      {
        text: "Created as part of my JavaScript learning journey. Recreates classic Pacman with a traditional scoring system and core gameplay mechanics.",
      },
      {
        text: "The map uses boundary images as walls. Pellets grant 20 points each. Power-ups turn ghosts blue and vulnerable — touching one removes it permanently. A ghost touching Pacman in normal state ends the game, shown via an AlertBox.",
      },
      { text: "Controls: W, A, S, D for movement." },
      {
        text: "Github →",
        link: {
          label: "Pacman",
          href: "https://github.com/BryIsNotHere/Pacman.git",
        },
      },
    ],
    images: [
      {
        src: "/images/project/pacman/pacman.png",
        caption: "Pacman in-game interface",
      },
    ],
  },
  {
    name: "SWORDMASTERS",
    tag: "HTML + CSS + JAVASCRIPT",
    year: "2022",
    desc: [
      {
        text: "A basic 2D fighting game built during my JavaScript learning journey. Features health bars, a 60-second timer, and two controllable fighters. Character assets sourced from itch.io.",
      },
      {
        text: "Two players battle to deplete each other's HP before time runs out. The winner is displayed on screen and the game restarts on refresh.",
      },
      {
        text: "Controls — P1: A/D to move, W to jump, S to attack. P2: ←/→ to move, ↑ to jump, ↓ to attack.",
      },
      {
        text: "Github →",
        link: {
          label: "FG-Project",
          href: "https://github.com/BryIsNotHere/FG-Project.git",
        },
      },
    ],
    images: [
      {
        src: "/images/project/swordmasters/swordmasters.png",
        caption: "Swordmasters in-game interface",
      },
    ],
  },
  {
    name: "TOBA APP",
    tag: "UI/UX DESIGN + FIGMA",
    year: "2022",
    desc: [
      {
        text: "UI/UX design of a Traveling App Guide for Lake Toba — created as my final exam project in semester 2 using Figma.",
      },
      {
        text: "Includes: Login Page, Home Page (local time + recommendations + carousel), Trending Page (popular destinations), Locations Page (destination details), Explore Page (two travel options with like/dislike), and Education Page (gamified trivia about Lake Toba).",
      },
      {
        text: "Figma →",
        link: {
          label: "View Prototype",
          href: "https://www.figma.com/file/9P4HdLGeMLPuLAxFUwxNy0/Prototype-HCI-UAS-SEM-2?type=design&node-id=0%3A1&mode=design&t=6Vc8KFqVmfNBhMw0-1",
        },
      },
    ],
    images: [
      { src: "/images/project/toba/login.png", caption: "Toba login page" },
      {
        src: "/images/project/toba/homepage.png",
        caption: "Toba homepage dashboard",
      },
      { src: "/images/project/toba/trending.png", caption: "Toba trend page" },
      {
        src: "/images/project/toba/location.png",
        caption: "Toba location page",
      },
      { src: "/images/project/toba/explore.png", caption: "Toba explore page" },
      {
        src: "/images/project/toba/explore-details.png",
        caption: "Toba place details",
      },
      {
        src: "/images/project/toba/education.png",
        caption: "Toba education page",
      },
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
