import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPage =
  githubRepository?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;
const githubPagesUrl =
  process.env.GITHUB_PAGES === "true" && githubOwner && githubRepository
    ? `https://${githubOwner}.github.io${isUserOrOrgPage ? "" : `/${githubRepository}`}`
    : undefined;
const canonicalUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl)?.replace(/\/$/, "");
const socialImageUrl = canonicalUrl ? `${canonicalUrl}/og.png` : "/og.png";

export const metadata: Metadata = {
  metadataBase: canonicalUrl ? new URL(`${canonicalUrl}/`) : undefined,
  title: "씨엠케이네트웍스 | 커뮤니티와 쇼핑몰 운영",
  description: "커뮤니티와 쇼핑몰을 운영하는 씨엠케이네트웍스의 공식 홈페이지입니다.",
  keywords: ["씨엠케이네트웍스", "CMK Networks", "커뮤니티", "쇼핑몰"],
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonicalUrl,
    title: "씨엠케이네트웍스 | CMK Networks",
    description: "사람과 취향, 좋은 상품을 연결합니다.",
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: "CMK Networks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "씨엠케이네트웍스 | CMK Networks",
    description: "사람과 취향, 좋은 상품을 연결합니다.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
