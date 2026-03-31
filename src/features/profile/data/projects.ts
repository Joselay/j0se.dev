import type { Project } from "../types/projects";

const parseDate = (dateStr: string) => {
  const [month, year] = dateStr.split(".");
  return new Date(parseInt(year), parseInt(month) - 1);
};

const sortProjects = (projects: Project[]) => {
  return [...projects].sort((a, b) => {
    const aOngoing = !a.period.end;
    const bOngoing = !b.period.end;

    // Ongoing projects come first
    if (aOngoing && !bOngoing) return -1;
    if (!aOngoing && bOngoing) return 1;

    // Within the same category (both ongoing or both completed), sort by newest start date
    const aStart = parseDate(a.period.start);
    const bStart = parseDate(b.period.start);
    return bStart.getTime() - aStart.getTime();
  });
};

const PROJECTS_RAW: Project[] = [
  {
    id: "haystack-hub",
    title: "Haystack Hub",
    period: {
      start: "03.2026",
    },
    link: "#",
    skills: ["SaaS", "Email Marketing", "AI", "CRM", "Next.js"],
    description:
      "Centralized SaaS command center for managing email marketing across multiple projects, featuring contact CRM, drip campaigns, broadcast emails, blog CMS, AI-powered content generation, and analytics dashboard.",
    logo: "/icons/haystack.jpg",
  },
  {
    id: "sv-agent",
    title: "SV Agent",
    period: {
      start: "03.2026",
    },
    link: "#",
    skills: ["AI Chatbot", "Claude", "Gemini", "Vercel AI SDK", "Next.js"],
    logo: "/icons/sv-agent.png",
    description:
      "AI chatbot assistant for internal operations, powered by Claude and Gemini with tool use for querying production MySQL databases, sending bulk emails, and monitoring service health.",
  },
  {
    id: "fuyez",
    title: "Fuyez",
    period: {
      start: "02.2026",
    },
    link: "https://www.fuyez.ca/",
    skills: ["Educational Platform", "Multi-language", "AI", "Next.js"],
    logo: "/icons/fuyez.svg",
    description:
      "Educational platform about economic pressure and systemic inequality, with multi-language blog (EN/FR), email capture surveys, and admin dashboard.",
  },
  {
    id: "ondeck-app",
    title: "OnDeck",
    period: {
      start: "12.2025",
    },
    link: "#",
    skills: ["Mobile App", "React Native", "Expo", "Gamification", "Convex"],
    logo: "/icons/ondeck.png",
    description:
      "Mobile attendance and gamification platform with QR code clock-in/out, points/levels/badges system, streak multipliers, and Hall of Fame/Wall of Shame leaderboards.",
  },
  {
    id: "j-keydge",
    title: "J-Keydge",
    period: {
      start: "11.2025",
    },
    link: "https://jkeydge.com/",
    skills: ["E-commerce", "Shopify Hydrogen", "Remix", "Multi-language"],
    logo: "/icons/j-keydge.svg",
    description:
      "Premium fashion e-commerce storefront for a French slack jacket brand with wholesale platform, multi-language support (EN/FR), customer accounts, and order management.",
  },

  {
    id: "cigardash",
    title: "Cigardash",
    period: {
      start: "06.2025",
      end: "10.2025",
    },
    link: "#",
    skills: ["Web App", "Dashboard", "Analytics", "Business Intelligence"],
    description:
      "Business dashboard application providing comprehensive analytics and data visualization for cigar retail management.",
    logo: "/icons/cigardash.png",
  },
  {
    id: "lumo-cinema",
    title: "Lumo Cinema",
    period: {
      start: "08.2025",
      end: "10.2025",
    },
    link: "https://github.com/Joselay/lumo-app",
    skills: ["Cinema", "Ticket Booking", "MCP"],
    description: "Cinema ticket booking app that uses MCP built in 2025.",
    logo: "/icons/lumo.png",
  },
  {
    id: "jelly-task-management",
    title: "Jelly Task Management",
    period: {
      start: "12.2024",
      end: "04.2025",
    },
    link: "https://github.com/Joselay/jelly-saas",
    skills: ["Task Management", "Inertia.js", "WebSocket", "Real-time"],
    description:
      "Task management app built on Inertia.js with real-time WebSocket updates in 2025.",
  },
  {
    id: "goody-shop",
    title: "GOODY SHOP",
    period: {
      start: "08.2024",
      end: "02.2025",
    },
    link: "https://apps.apple.com/kh/app/goody-shop/id1617240445",
    skills: ["Mobile App", "E-commerce", "iOS", "Android"],
    description:
      "Mobile e-commerce app available on both App Store and Google Play Store. [Play Store](https://play.google.com/store/apps/details?id=com.coolbeans.goody&hl=en)",
    logo: "/icons/goody.jpg",
  },
  {
    id: "nextstore-ecommerce",
    title: "NextStore ecommerce",
    period: {
      start: "07.2024",
      end: "05.2025",
    },
    link: "https://github.com/Joselay/nextstore",
    skills: ["E-commerce", "Digital Products", "Marketplace"],
    description:
      "Digital products marketplace (phones, desktops, MacBooks) built in 2024.",
  },
  {
    id: "jelly-cinema",
    title: "Jelly Cinema",
    period: {
      start: "10.2024",
      end: "03.2025",
    },
    link: "#",
    skills: ["Mobile App", "Flutter", "Cinema", "Movie Streaming"],
    description:
      "Movie streaming and entertainment mobile application built with Flutter for comprehensive cinema experience.",
    logo: "/icons/jelly.svg",
  },
  {
    id: "foodfarm",
    title: "FoodFarm Ecommerce",
    period: {
      start: "06.2024",
      end: "10.2024",
    },
    link: "https://github.com/Joselay/FoodFarm",
    skills: ["E-commerce", "Food Delivery"],
    description: "Food selling platform built in 2024.",
  },
];

export const PROJECTS: Project[] = sortProjects(PROJECTS_RAW);
