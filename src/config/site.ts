import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://j0se.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [];

export const SOURCE_CODE_GITHUB_REPO = "Joselay/j0se.dev";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Joselay/j0se.dev";

export const GITHUB_USERNAME = "Joselay";

export const UTM_PARAMS = {
  utm_source: "j0se.dev",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
