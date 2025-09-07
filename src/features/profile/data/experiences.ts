import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "wonderpass",
    companyName: "Wonderpass",
    companyLogo: "/icons/wonderpass.jpg",
    positions: [
      {
        id: "wonderpass-mid-frontend",
        title: "Mid Frontend Developer",
        employmentPeriod: {
          start: "03.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop Cigardash web application using [Next.js](https://nextjs.org), [Zustand](https://zustand-demo.pmnd.rs), [nuqs](https://nuqs.dev), [SWR](https://swr.vercel.app), and modern frontend technologies.
- Develop GO. by Wonderpass service platform with multiple integrated mini-services including Cinema, Tickets, Taxi, Ferry, Bus, Dining, and eSIM.
  - Build cinema ticket booking service with seamless user experience.
  - Build event ticketing service for concerts and entertainment bookings.
  - Build ride-hailing and transportation booking solutions.
  - Build ferry and bus ticketing services for public transportation.
  - Build restaurant reservation and dining experience services.
  - Build digital SIM card management and telecommunications services.
- Implement robust frontend solutions using Vue.js, shadcn vue, and motion vue for animations.
- Ensure UI/UX consistency and adherence to design standards across all services.
- Collaborate with banks and fintech companies for payment integration and financial services.`,
        skills: [
          "TypeScript",
          "React",
          "Frontend Development",
          "Teamwork",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "coolbeans",
    companyName: "Coolbeans Digital",
    companyLogo: "/icons/coolbeans.jpg",
    positions: [
      {
        id: "coolbeans-developer",
        title: "Flutter Developer",
        employmentPeriod: {
          start: "06.2024",
          end: "03.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed frontend applications and user interfaces.
- Worked on digital projects in Phnom Penh, Cambodia.
- Collaborated with international teams and clients.`,
        skills: [
          "Frontend Development",
          "JavaScript",
          "React",
          "International Collaboration",
          "Digital Solutions",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2025",
        },
        employmentType: "Part-time",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Flutter Developer",
        employmentPeriod: {
          start: "2018",
          end: "2025",
        },
        employmentType: "Part-time",
        description:
          "Developed cross-platform mobile applications using Flutter.",
        icon: "code",
        skills: [
          "Flutter",
          "Dart",
          "Mobile Development",
          "Cross-platform",
          "Firebase",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "setec-institute",
        title: "SETEC Institute",
        employmentPeriod: {
          start: "2022",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Management Information Systems.
- Advanced English proficiency level.
- Completed several projects, including:
  - FoodFarm Ecommerce — Food selling platform built in 2023
  - NextStore ecommerce — Digital products marketplace (phones, desktops, MacBooks) built in 2024
  - Jelly Task Management — Task management app built on Inertia.js with real-time WebSocket updates in 2025
  - Lumo Cinema — Cinema ticket booking app that uses MCP built in 2025`,
        skills: [
          "Dart",
          "PHP",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
        isExpanded: true,
      },
      {
        id: "preah-sihanouk-secondary",
        title: "Preah Sihanouk Secondary School",
        employmentPeriod: {
          start: "2015",
          end: "2021",
        },
        icon: "education",
        description: `- Completed secondary education.
- Participated in math outstanding competition during Grade 12.
- Graduated with BACII (Baccalauréat II) final exam grades: Math A, Chemistry A, Physics B.`,
        skills: ["Mathematics", "Chemistry", "Physics", "Self-learning"],
      },
      {
        id: "toul-thmor-primary",
        title: "Toul Thmor Primary School",
        employmentPeriod: {
          start: "2009",
          end: "2014",
        },
        icon: "education",
        description: "Completed primary education.",
        skills: ["Self-learning"],
      },
    ],
  },
];
