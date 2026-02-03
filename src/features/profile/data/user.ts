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
    "Mid Full Stack Developer",
    "Open Source Contributor",
  ],
  address: "Russei Keo, Phnom Penh, Cambodia",
  phoneNumber: "Kzg1NTkzNTk2MzI2", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "dG9uZ21lbmdsYXlzbWFlNUBnbWFpbC5jb20=", // base64 encoded
  website: "https://j0se.dev",
  jobTitle: "Mid Full Stack Developer",
  jobs: [
    {
      title: "Mid Full Stack Developer",
      company: "Wonderpass",
      website: "https://wonderpass.asia",
    },
    {
      title: "Founder",
      company: "Lumo",
      website: "https://github.com/Joselay/lumo-backend",
    },
  ],
  about: `
Hello, World! I am Smae Tongmenglay (nickname Jose) — a Mid Full Stack Developer passionate about creating seamless, user-centric web and mobile applications with intuitive and engaging designs.

With 2+ years of experience, I specialize in building high-quality applications using Next.js, Vue.js, Flutter, Remix.js, and other modern front-end technologies. Beyond work, I enjoy exploring new frameworks and turning ideas into reality through personal projects.

Currently, I'm working on GO. by Wonderpass, a main service platform that integrates multiple mini-services: [Go-Cinema](https://cinema.go-wonderpass.com) for cinema ticket booking, [Go-Tickets](https://tickets.go-wonderpass.com) for events like concerts, [Go-Dining](https://dining.go-wonderpass.com) for restaurant reservations, [Go-Taxi](https://taxi.go-wonderpass.com) for taxi bookings, [Go-Ferry](https://ferry.go-wonderpass.com) for ferry bookings, [Go-Bus](https://bus.go-wonderpass.com) for bus bookings, and future expansions such as Go-eSIM. All of these projects are built in collaboration with popular banks and fintech companies in Cambodia, including [Bakong](https://bakong.nbc.gov.kh), [Wing](https://www.wingbank.com.kh/en), [Phillip](https://www.phillipbank.com.kh), [U-Pay](https://www.u-pay.com), and [TrueMoney](https://www.truemoney.com.kh).

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
    "full stack developer",
    "wonderpass",
    "lumo",
  ],
  dateCreated: "2025-09-07", // YYYY-MM-DD
};
