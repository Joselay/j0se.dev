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
        description: `- Develop [Cigardash](https://cigardash.netlify.app) web application using [Next.js](https://nextjs.org), [Zustand](https://zustand-demo.pmnd.rs), [nuqs](https://nuqs.dev), [SWR](https://swr.vercel.app), and modern frontend technologies.
- Develop **GO. by Wonderpass**, a mini-service platform that integrates with banking and payment services, serving as the parent ecosystem for multiple child services:
  - **[GO-Cinema](https://cinema.go-wonderpass.com)**: Cinema ticket booking service with seamless user experience
  - **[GO-Tickets](https://tickets.go-wonderpass.com)**: Event ticketing service for concerts and entertainment bookings  
  - **GO-Taxi**: Ride-hailing and transportation booking solutions
  - **GO-Ferry**: Ferry ticketing services for public transportation
  - **GO-Bus**: Bus ticketing services for public transportation
  - **GO-Dining**: Restaurant reservation and dining experience services
  - **GO-eSIM**: Digital SIM card management and telecommunications services
- Implement robust frontend solutions using Vue.js, shadcn vue, and motion vue for animations, ensure UI/UX consistency and adherence to design standards across all GO services, and integrate with banking and payment providers including Bakong (central bank digital currency), Wing Bank, U-Pay (fintech/PSP), Phillip Bank, and TrueMoney (e-wallet service) for seamless payment processing.`,
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
        description: `- Developed Goody Ecommerce application with comprehensive shopping features and user experience.
- Built Jelly Cinema application for movie streaming and entertainment services.
- Implemented cross-platform mobile solutions using Flutter framework.
- Ensured UI/UX consistency and adherence to mobile design standards.
- Developed and maintained core features to enhance app functionality and user experience.
- Integrated APIs and backend services for seamless data flow.
- Optimized app performance and implemented responsive design patterns.
- Collaborated with design and backend teams to deliver high-quality mobile applications.`,
        skills: [
          "Flutter",
          "Dart",
          "Mobile Development",
          "Cross-platform",
          "API Integration",
          "UI/UX Implementation",
          "Performance Optimization",
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
