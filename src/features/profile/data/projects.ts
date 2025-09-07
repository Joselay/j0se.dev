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
    id: "go-by-wonderpass",
    title: "GO. by Wonderpass",
    period: {
      start: "03.2025",
    },
    link: "#",
    skills: ["Mobile App", "Flutter", "Banking", "Financial Services"],
    description:
      "Mobile banking application integrating comprehensive financial services and digital payment solutions built with Flutter.",
    logo: "/icons/go.jpg",
  },
  {
    id: "lumo-cinema",
    title: "Lumo Cinema",
    period: {
      start: "08.2025",
      end: "10.2025",
    },
    link: "#",
    skills: ["Cinema", "Ticket Booking", "MCP"],
    description: "Cinema ticket booking app that uses MCP built in 2025.",
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
