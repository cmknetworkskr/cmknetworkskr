import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the animated homepage with shared navigation and business footer", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /씨엠케이네트웍스 \| 커뮤니티와 쇼핑몰 운영/);
  assert.match(html, /사람과 취향,/);
  assert.match(html, /class="hero-visual"/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/services"/);
  assert.match(html, /href="\/careers"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /씨엠케이네트웍스\(CMK NETWORKS\)/);
  assert.match(html, /337-59-00837/);
  assert.match(html, /2025-인천연수구-1734/);
  assert.match(html, /본문 바로가기/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders each company section as its own route", async () => {
  const routes = [
    ["/about", /연결에서 시작되는/],
    ["/services", /지금 운영 중인 서비스/],
    ["/careers", /함께 오래 사랑받는/],
    ["/contact", /이런 제안을/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render successfully`);
    const html = await response.text();
    assert.match(html, expected);
    assert.match(html, /씨엠케이네트웍스\(CMK NETWORKS\)/);
  }

  const services = await (await render("/services")).text();
  assert.match(services, /예판넷/);
  assert.match(services, /https:\/\/yepan\.net/);
  assert.match(services, /예판런/);
  assert.match(services, /https:\/\/yepan\.run/);
});

test("keeps shared chrome separate and removes starter-only preview code", async () => {
  const [page, layout, chrome, siteConfig, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/site-chrome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_lib/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="hero-visual"/);
  assert.doesNotMatch(page, /id="about"|id="services"|id="careers"|id="contact"/);
  assert.match(layout, /<SiteHeader \/>/);
  assert.match(layout, /<SiteFooter \/>/);
  assert.match(siteConfig, /og\.png/);
  assert.match(chrome, /씨엠케이네트웍스\(CMK NETWORKS\)/);
  assert.match(chrome, /siteHref\(item\.path\)/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);

  await Promise.all([
    access(new URL("../app/about/page.tsx", import.meta.url)),
    access(new URL("../app/services/page.tsx", import.meta.url)),
    access(new URL("../app/careers/page.tsx", import.meta.url)),
    access(new URL("../app/contact/page.tsx", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
