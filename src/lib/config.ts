// ============================================================
//  PORTFOLIO CONFIG
//  Edit ONLY this file to personalise your portfolio.
//  No other files need touching for content changes.
// ============================================================

export const PLAYER = {
  name: "BRYAN NICHOLAS",
  title: "FRONTEND WEB DEVELOPER",
  origin: "JAKARTA, ID",
  class: "DEVELOPER",
  status: "OPEN TO OFFERS" as "AVAILABLE" | "BUSY" | "OPEN TO OFFERS",
  healthBars: [
    { label: "FRONTEND", value: 80 },
    { label: "BACKEND", value: 20 },
  ],
}

export const DIALOGS = [
  "Hi! I'm Bryan, a Frontend Web Developer from Jakarta, Indonesia. I'm a Computer Science graduate from Bina Nusantara University.",
  "I specialize in building responsive, interactive web interfaces using React, Next.js, TypeScript, and TailwindCSS.",
  "Beyond the frontend, I'm also comfortable on the backend; I have hands-on experience with Laravel, PHP, MySQL, and Firebase, so I can work across the full stack when needed.",
  "Currently open to new opportunities. Let's build something great! ▶",
]

export const FRONTEND_STACK: {
  label: string
  color: "blue" | "pink" | "yellow" | "green"
}[] = [
  { label: "REACT", color: "blue" },
  { label: "NEXT.JS", color: "green" },
  { label: "TYPESCRIPT", color: "blue" },
  { label: "TAILWINDCSS", color: "yellow" },
  { label: "INERTIA.JS", color: "pink" },
  { label: "HTML5", color: "pink" },
  { label: "CSS", color: "blue" },
]

export const BACKEND_STACK: {
  label: string
  color: "blue" | "pink" | "yellow" | "green"
}[] = [
  { label: "LARAVEL", color: "pink" },
  { label: "PHP", color: "blue" },
  { label: "MySQL", color: "green" },
  { label: "FIREBASE", color: "yellow" },
  { label: "REST API", color: "blue" },
]

export const TOOLS_STACK: {
  label: string
  color: "blue" | "pink" | "yellow" | "green"
}[] = [
  { label: "GIT", color: "pink" },
  { label: "FIGMA", color: "pink" },
  { label: "VSCODE", color: "blue" },
]

export const LANGUAGES = [
  { label: "INDONESIAN", level: "NATIVE" },
  { label: "ENGLISH", level: "PROFICIENT" },
  { label: "CHINESE", level: "ADVANCED" },
  { label: "HOKKIEN", level: "ADVANCED" },
  { label: "HAKKA", level: "BEGINNER" },
  { label: "KOREAN", level: "BEGINNER" },
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
    name: "Spendora",
    tag: "NEXTJS + TYPESCRIPT + TAILWINDCSS + FIREBASE + NETLIFY",
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
    name: "Bry's Atelier",
    tag: "NEXTJS + TYPESCRIPT + TAILWIND + VERCEL",
    year: "2026",
    desc: [
      {
        text: "Bry's Atelier is a personal frontend training project built to sharpen my skills in interactive UI development and 2D canvas visualization. The core experience is a workspace design tool where users can freely place and arrange furniture assets on a 2D canvas to visualize and personalize their ideal workshop or workplace setup.",
      },
      {
        text: "Beyond the visual builder, the project features a rental pricing system where users select a rental duration that dynamically calculates the total cost. What makes it engaging is a gamified discount mechanic on which every furniture item placed carries its own XP value, and as users build out their space, XP accumulates on a progress bar. The more thoughtfully designed the workspace, the greater the discount earned, capped at 30% off the rental price.",
      },
      {
        text: "The project was built with NEXTJS, TAILWIND, and TYPESCRIPT, and deployed via VERCEL serving as a hands-on playground for practicing modern frontend architecture, canvas interaction, and stateful UI logic.",
      },
      {
        text: "Live Demo →",
        link: {
          label: "bry-atelier-workshop.vercel.app",
          href: "https://bry-atelier-workshop.vercel.app/",
        },
      },
    ],
    images: [
      {
        src: "/images/project/bry-atelier/homepage.png",
        caption: "Main dashboard",
      },
      {
        src: "/images/project/bry-atelier/bill.png",
        caption: "Payment bill",
      },
      {
        src: "/images/project/bry-atelier/loading.png",
        caption: "Loading modal popup",
      },
      {
        src: "/images/project/bry-atelier/receipt.png",
        caption: "Billing receipt",
      },
    ],
  },
  {
    name: "Faux Vêtements",
    tag: "REACTJS + TAILWINDCSS",
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
          label: "faux-vetements.netlify.app",
          href: "https://faux-vetements.netlify.app/",
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
    name: "Text Editor",
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
    name: "Pacman",
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
        text: "Live Demo →",
        link: {
          label: "pacman-by-bry.netlify.app",
          href: "https://pacman-by-bry.netlify.app/",
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
    name: "Swordmasters",
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
        text: "Live Demo →",
        link: {
          label: "swordmasters-by-bry.netlify.app",
          href: "https://swordmasters-by-bry.netlify.app",
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

export const CONTACT = {
  instagram: "https://instagram.com/bry_nicholas",
  linkedin: "https://www.linkedin.com/in/bryan-n-9b9927223/",
  github: "https://github.com/BryIsNotHere",
  email: "mailto:bryannicholasliu@email.com",
}

// The Shining easter egg text (bottom of contact page)
export const EASTER_EGG = "ALL WORK AND NO PLAY MAKES BRYAN A DULL DEV"

export const GHOSTFACE_QUOTES = [
  "Hello, Sidney.",
  "Do you like scary movies?",
  "What's your favorite scary movie?",
  "I want to know who I'm looking at.",
]

export const GHOSTFACE_FAREWELL = "You can't hide forever!"
