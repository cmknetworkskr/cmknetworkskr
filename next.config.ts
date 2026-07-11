import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ownerName = process.env.GITHUB_REPOSITORY_OWNER;
const isUserOrOrgPage =
  repositoryName?.toLowerCase() === `${ownerName?.toLowerCase()}.github.io`;
const inferredBasePath = repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : "";
const basePath = isGitHubPages
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath)
  : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages ? true : undefined,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: isGitHubPages ? { tsconfigPath: "tsconfig.pages.json" } : undefined,
};

export default nextConfig;
