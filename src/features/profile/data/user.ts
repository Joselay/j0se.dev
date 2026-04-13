import meImage from "@/assets/images/me.jpg";
import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Jose",
  lastName: "",
  displayName: "Jose",
  username: "Joselay",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Full-Stack Engineer",
    "Open Source Contributor",
  ],
  address: "Russei Keo, Phnom Penh, Cambodia",
  phoneNumber: "Kzg1NTkzNTk2MzI2", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "dG9uZ21lbmdsYXlzbWFlNUBnbWFpbC5jb20=", // base64 encoded
  website: "https://j0se.dev",
  jobTitle: "Full-Stack Engineer",
  jobs: [
    {
      title: "Full-Stack Engineer",
      company: "Haystack Labs",
      website: "https://haystack.global",
    },
    {
      title: "Founder",
      company: "Lumo",
      website: "https://github.com/Joselay/lumo-app",
    },
  ],
  about: `
Hello, World! I am Smae Tongmenglay (nickname Jose) — a Full-Stack Engineer passionate about creating seamless, user-centric web and mobile applications with intuitive and engaging designs.

With 3+ years of experience, I specialize in building high-quality applications using Next.js, React Native, Vue.js, Shopify Hydrogen, Go, and other modern technologies — spanning frontend, backend, mobile, and DevOps.

Currently, I'm working at Haystack Labs, where I build and maintain a range of products including Haystack Hub (an AI-powered email marketing command center), SV Agent (an AI chatbot for internal operations powered by Claude and Gemini), Fuyez (an educational platform), OnDeck (a mobile attendance gamification app), J-Keydge (a premium fashion e-commerce on Shopify), and more.

Beyond work, I'm an active open source contributor and enjoy exploring new frameworks, integrating AI into real-world tools, and turning ideas into reality through personal projects.

Let's connect and collaborate!
  `,
  avatar: meImage.src,
  ogImage: "/icons/j.png",
  namePronunciationUrl: "/voices/jose.mp3",
  keywords: [
    "jose",
    "joselay",
    "smae tongmenglay",
    "j0se.dev",
    "full-stack engineer",
    "haystack labs",
    "haystack",
    "lumo",
  ],
  dateCreated: "2025-09-07", // YYYY-MM-DD
};
