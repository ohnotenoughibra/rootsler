export interface App {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  icon: string;
  gradient: string;
  stack: string[];
  status: "live" | "beta" | "coming-soon";
  url?: string;
  github?: string;
}

export const apps: App[] = [
  {
    id: "roots-gains",
    name: "Roots Gains",
    description: "Science-based strength training for martial artists",
    longDescription:
      "Generates periodized lifting programs with Daily Undulating Periodization. Combat-aware scheduling, 50+ exercise database, HRV monitoring, nutrition tracking, and gamification.",
    category: "Fitness",
    icon: "💪",
    gradient: "from-orange-500 to-red-600",
    stack: ["Next.js", "TypeScript", "Zustand", "PWA"],
    status: "beta",
  },
  {
    id: "grappling-roadmap",
    name: "GrapplingRoadMap",
    description: "BJJ technique tracking & 3D skill visualization",
    longDescription:
      "Track 134 techniques across 19 positions. Earn badges and milestones as you progress. Interactive 3D graph visualization of your skill journey. Coach dashboard for tracking students.",
    category: "Martial Arts",
    icon: "🥋",
    gradient: "from-blue-500 to-indigo-600",
    stack: ["Next.js", "Prisma", "React Force Graph 3D"],
    status: "beta",
  },
  {
    id: "events-booker",
    name: "EventsBooker",
    description: "Event booking with SEPA QR code payments",
    longDescription:
      "Book events at your gym or training center. SEPA QR code payment generation, user and admin dashboards, CSV export, and attendance tracking. Mobile-responsive with dark/light mode.",
    category: "Business",
    icon: "📅",
    gradient: "from-emerald-500 to-teal-600",
    stack: ["Next.js", "Supabase", "shadcn/ui"],
    status: "beta",
  },
  {
    id: "roots-online",
    name: "Roots Online Academy",
    description: "Subscription-based martial arts learning platform",
    longDescription:
      "Multi-creator courses for MMA, Kickboxing, and Grappling. HD video with signed URLs, subscription tiers, progress tracking, and role-based access for students, coaches, and admins.",
    category: "Education",
    icon: "🎓",
    gradient: "from-purple-500 to-pink-600",
    stack: ["Next.js", "Prisma", "Stripe", "Clerk"],
    status: "coming-soon",
  },
  {
    id: "roots-buddy",
    name: "RootsBuddy",
    description: "Gamified grappling coaching platform",
    longDescription:
      "Full-stack coaching platform with real-time updates, analytics dashboards, drag-and-drop interfaces, and CSV import/export. Combines grappling training with gamification.",
    category: "Martial Arts",
    icon: "🤝",
    gradient: "from-amber-500 to-orange-600",
    stack: ["React", "Express", "MongoDB", "Socket.io"],
    status: "beta",
  },
  {
    id: "ecogram",
    name: "Ecogram",
    description: "Constraints-Led Approach game library for nogi",
    longDescription:
      "CLA-based game rules and training constraint scenarios for nogi grappling. Gamified drills designed to develop specific skills through play.",
    category: "Martial Arts",
    icon: "🎮",
    gradient: "from-cyan-500 to-blue-600",
    stack: ["Next.js", "TypeScript"],
    status: "beta",
  },
  {
    id: "mvmtcv",
    name: "Movement Cave",
    description: "Fitness coach portfolio & booking site",
    longDescription:
      "Modern portfolio site for fitness coach Clemens Pichler. Responsive design with animations, contact form, Google Maps integration, and image carousel.",
    category: "Business",
    icon: "🏋️",
    gradient: "from-zinc-600 to-zinc-800",
    stack: ["Next.js 15", "Framer Motion", "EmailJS"],
    status: "beta",
  },
];

export const categories = [...new Set(apps.map((a) => a.category))];
