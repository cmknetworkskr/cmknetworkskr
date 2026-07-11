import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPage =
  githubRepository?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;
const githubPagesUrl =
  process.env.GITHUB_PAGES === "true" && githubOwner && githubRepository
    ? `https://${githubOwner}.github.io${isUserOrOrgPage ? "" : `/${githubRepository}`}`
    : undefined;

export const canonicalBase = (process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl)?.replace(
  /\/$/,
  "",
);

const socialImageUrl = canonicalBase ? `${canonicalBase}/og.png` : "/og.png";

export const navigation = [
  { label: "회사 소개", path: "/about" },
  { label: "운영 사이트", path: "/services" },
  { label: "채용", path: "/careers" },
  { label: "제휴 문의", path: "/contact" },
];

export function siteHref(path: string) {
  if (path === "/") return basePath ? `${basePath}/` : "/";
  return `${basePath}${path}`;
}

export function canonicalHref(path = "/") {
  if (!canonicalBase) return undefined;
  if (path === "/") return canonicalBase;
  return `${canonicalBase}${path}`;
}

export function assetHref(path: string) {
  return `${basePath}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | 씨엠케이네트웍스`;
  const url = canonicalHref(path);

  return {
    title: fullTitle,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "CMK Networks",
      url,
      title: fullTitle,
      description,
      images: [{ url: socialImageUrl, width: 1200, height: 630, alt: "CMK Networks" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImageUrl],
    },
  };
}
