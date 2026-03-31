import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // ── Languages & Runtime ──
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "go",
    title: "Go",
    href: "https://go.dev/",
    categories: ["Language"],
    theme: true,
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },

  // ── Frameworks ──
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    theme: true,
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "vuejs",
    title: "Vue.js",
    href: "https://vuejs.org/",
    categories: ["Framework"],
  },
  {
    key: "remix",
    title: "Remix",
    href: "https://remix.run/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "nestjs",
    title: "NestJS",
    href: "https://nestjs.com/",
    categories: ["Framework"],
  },
  {
    key: "expo",
    title: "Expo",
    href: "https://expo.dev/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "flutter",
    title: "Flutter",
    href: "https://flutter.dev/",
    categories: ["Framework"],
  },

  // ── Styling & UI ──
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },

  // ── Databases & ORM ──
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    theme: true,
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    theme: true,
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
  {
    key: "drizzle",
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    categories: ["Library", "ORM"],
    theme: true,
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Library", "ORM"],
    theme: true,
  },

  // ── Backend Services ──
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Backend", "Database"],
  },
  {
    key: "convex",
    title: "Convex",
    href: "https://www.convex.dev/",
    categories: ["Backend", "Database"],
  },
  {
    key: "better-auth",
    title: "Better Auth",
    href: "https://www.better-auth.com/",
    categories: ["Library", "Authentication"],
    theme: true,
  },
  {
    key: "resend",
    title: "Resend",
    href: "https://resend.com/",
    categories: ["Service", "Email"],
    theme: true,
  },

  // ── AI ──
  {
    key: "vercel-ai-sdk",
    title: "Vercel AI SDK",
    href: "https://sdk.vercel.ai/",
    categories: ["Library", "AI"],
    theme: true,
  },
  {
    key: "mcp",
    title: "MCP",
    href: "https://modelcontextprotocol.io/",
    categories: ["Protocol", "AI"],
    theme: true,
  },

  // ── Cloud & DevOps ──
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Cloud", "Deployment"],
    theme: true,
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
    theme: true,
  },
  {
    key: "railway",
    title: "Railway",
    href: "https://railway.app/",
    categories: ["Cloud", "Deployment"],
    theme: true,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Platform", "Version Control"],
    theme: true,
  },

  // ── Tools ──
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com/",
    categories: ["Tools", "IDE"],
    theme: true,
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    categories: ["Tools", "AI"],
  },
  {
    key: "openai",
    title: "ChatGPT Codex",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
];
