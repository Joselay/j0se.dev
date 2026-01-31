import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  total: Record<string, number>;
  contributions: Activity[];
};

type GitHubContributionsYearResponse = {
  contributions: Activity[];
};

export type GitHubContributionsData = {
  contributions: Activity[];
  bestYear: string;
  bestYearCount: number;
};

export const getGitHubContributions = unstable_cache(
  async (): Promise<GitHubContributionsData> => {
    const allRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
    );
    const allData = (await allRes.json()) as GitHubContributionsResponse;

    const [bestYear, bestYearCount] = Object.entries(allData.total).reduce(
      (max, entry) => (entry[1] > max[1] ? entry : max),
      ["", 0]
    );

    const yearRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${bestYear}`
    );
    const yearData =
      (await yearRes.json()) as GitHubContributionsYearResponse;

    return {
      contributions: yearData.contributions,
      bestYear,
      bestYearCount,
    };
  },
  ["github-contributions"],
  { revalidate: 86400 }
);
