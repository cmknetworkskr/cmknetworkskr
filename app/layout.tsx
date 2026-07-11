/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./_components/site-chrome";
import { assetHref, canonicalBase, createPageMetadata } from "./_lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: canonicalBase ? new URL(`${canonicalBase}/`) : undefined,
  ...createPageMetadata({
    title: "커뮤니티와 쇼핑몰 운영",
    description: "커뮤니티와 쇼핑몰을 운영하는 씨엠케이네트웍스의 공식 홈페이지입니다.",
    path: "/",
  }),
  title: "씨엠케이네트웍스 | 커뮤니티와 쇼핑몰 운영",
  keywords: ["씨엠케이네트웍스", "CMK Networks", "커뮤니티", "쇼핑몰"],
  icons: {
    icon: assetHref("/favicon.png"),
    shortcut: assetHref("/favicon.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
