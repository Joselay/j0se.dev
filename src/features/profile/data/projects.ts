import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
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
    link: "#",
    skills: ["Task Management", "Inertia.js", "WebSocket", "Real-time"],
    description:
      "Task management app built on Inertia.js with real-time WebSocket updates in 2025.",
  },
  {
    id: "nextstore-ecommerce",
    title: "NextStore ecommerce",
    period: {
      start: "07.2024",
      end: "05.2025",
    },
    link: "#",
    skills: ["E-commerce", "Digital Products", "Marketplace"],
    description:
      "Digital products marketplace (phones, desktops, MacBooks) built in 2024.",
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
