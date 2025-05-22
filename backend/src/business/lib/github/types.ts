import { z } from "zod";

export const githubAPIResponseSchema = z.object({
  html_url: z.string().url(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number(),
  created_at: z.string().datetime(),
  owner: z.object({
    login: z.string(),
  }),
  name: z.string(),
});

export type GitHubAPIResponse = z.infer<typeof githubAPIResponseSchema>;

export type GitHubSuccess = {
  success: true;
  data: {
    owner: string;
    name: string;
    url: string;
    stars: number;
    forks: number;
    issues: number;
    createdAt: string;
  };
};

export type GitHubFailure = {
  success: false;
};
