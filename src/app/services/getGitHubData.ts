'use server';

import { RepoData } from '../types/api';

export const getGitHubData = async (repos: string[]): Promise<RepoData[]> => {
  try {
    const results = await Promise.all(
      repos.map(async repo => {
        const res = await fetch(`https://api.github.com/repos/kai-Mk/${repo}`, {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
          next: { revalidate: 86400 }, // ISR: 1日キャッシュ
        });

        if (!res.ok) {
          throw new Error(`GitHub API error for ${repo}: ${res.status}`);
        }

        const data = await res.json();

        return {
          name: data.name,
          language: data.language,
          description: data.description,
          url: data.html_url,
        };
      })
    );

    return results;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return [];
  }
};
