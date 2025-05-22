import { BadRequestError, NotFoundError } from "../error";
import { githubAPIResponseSchema, GitHubFailure, GitHubSuccess } from "./types";

const BASE_URL = "https://api.github.com";

export const getProjectByPath = async ({
  path,
}: {
  path: string;
}): Promise<GitHubSuccess | GitHubFailure> => {
  const [owner, name] = path.split("/");

  if (!owner || !name) {
    throw new BadRequestError("Invalid repo path format");
  }

  const url = `${BASE_URL}/repos/${owner}/${name}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new NotFoundError("Repository not found on GitHub");
    }
  }

  const raw = await response.json();

  try {
    const repo = githubAPIResponseSchema.parse(raw);

    return {
      success: true,
      data: {
        owner: repo.owner.login,
        name: repo.name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        issues: repo.open_issues_count,
        createdAt: repo.created_at,
      },
    };
  } catch {
    return { success: false };
  }
};
