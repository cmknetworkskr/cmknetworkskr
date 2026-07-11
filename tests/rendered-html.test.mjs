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
  assert.match(html, /class="visual-core" style="background-image:url\(\/favicon\.png\)"/);
  assert.match(html, /INCHEON · KOREA/);
  assert.match(html, /EST\.2007/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/services"/);
  assert.match(html, /href="\/marketplaces"/);
  assert.match(html, /href="\/careers"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /씨엠케이네트웍스\(CMK NETWORKS\)/);
  assert.match(html, /337-59-00837/);
  assert.match(
    html,
    /href="http:\/\/www\.ftc\.go\.kr\/bizCommPop\.do\?wrkr_no=3375900837" target="_blank"/,
  );
  assert.match(html, /2025-인천연수구-1734/);
  assert.equal(
    (
      html.match(
        /href="http:\/\/www\.ftc\.go\.kr\/bizCommPop\.do\?wrkr_no=3375900837" target="_blank"/g,
      ) ?? []
    ).length,
    2,
  );
  assert.match(html, /© 2007 CMK Networks/);
  assert.doesNotMatch(html, /SEOUL · KOREA|EST\. ———|© 2026/);
  assert.match(html, /본문 바로가기/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders each company section as its own route", async () => {
  const routes = [
    ["/about", /연결에서 시작되는/],
    ["/services", /운영 중인 사이트/],
    ["/marketplaces", /지금 입점 중인 사이트/],
    ["/careers", /함께 오래 사랑받는/],
    ["/contact", /이런 제안을/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render successfully`);
    const html = await response.text();
    assert.match(html, expected);
    assert.match(html, /씨엠케이네트웍스\(CMK NETWORKS\)/);
    assert.doesNotMatch(html, />0[1-5] · /);
  }

  const services = await (await render("/services")).text();
  assert.match(services, /운영 중인 사이트/);
  assert.doesNotMatch(services, /지금 운영 중인 서비스|class="service-count"/);
  assert.match(services, /예판넷/);
  assert.match(services, /2007년에 오픈한 국내 최초, 국내 유일의 예약판매 커뮤니티입니다\./);
  assert.match(
    services,
    /게임을 비롯해 IT, 취미, 이슈 상품의 예약판매 소식과 출시 소식을 안내합니다\./,
  );
  assert.match(services, /https:\/\/yepan\.net/);
  assert.match(services, /background-image:url\(\/yepan-net\.png\)/);
  assert.match(services, /brand-visual-yepan brand-visual-plain/);
  assert.match(services, /예판런/);
  assert.match(
    services,
    /2025년 오픈한 예판런은 한국닌텐도의 인증을 받은 Nintendo 정식 판매처입니다\./,
  );
  assert.match(
    services,
    /Nintendo Switch 상품 뿐만 아니라, 콘솔 게임, 수집용 카드 등 다양한 취미 상품을 판매합니다\./,
  );
  assert.match(services, /https:\/\/yepan\.run/);
  assert.match(services, /background-image:url\(\/yepan-run\.png\)/);
  assert.match(services, /brand-visual-run brand-visual-plain/);
  assert.equal((services.match(/>방문하기</g) ?? []).length, 2);
  assert.doesNotMatch(services, /yepan\.(?:net|run) 방문/);

  const marketplaces = await (await render("/marketplaces")).text();
  assert.doesNotMatch(marketplaces, /class="service-count"/);
  assert.match(marketplaces, /입점 사이트/);
  assert.match(marketplaces, /네이버 스마트스토어/);
  assert.match(marketplaces, /국내 최대 포털 사이트인 네이버 쇼핑에 입점되어 있습니다\./);
  assert.match(marketplaces, /https:\/\/mkt\.shopping\.naver\.com\/link\/6938ffccb150e663241afc39/);
  assert.match(marketplaces, /background-image:url\(\/naver-smartstore\.png\)/);
  assert.match(marketplaces, /brand-visual-naver brand-visual-plain/);
  assert.match(marketplaces, /카카오 톡딜/);
  assert.match(marketplaces, /국내 최다 사용자 메신저인 카카오톡 내 톡딜에 입점되어 있습니다\./);
  assert.match(marketplaces, /https:\/\/store\.kakao\.com\/nintendo/);
  assert.match(marketplaces, /background-image:url\(\/kakao-talkdeal\.png\)/);
  assert.match(marketplaces, /brand-visual-talkdeal brand-visual-plain/);
  assert.match(marketplaces, /컬리/);
  assert.match(marketplaces, /국내 최대 새벽배송 전문 쇼핑몰인 컬리에 입점되어 있습니다\./);
  assert.match(marketplaces, /https:\/\/lounge\.kurly\.com\/link\/VoVA-THZJ/);
  assert.match(marketplaces, /background-image:url\(\/kurly\.png\)/);
  assert.match(marketplaces, /brand-visual-kurly brand-visual-plain/);
  assert.equal((marketplaces.match(/>COMMERCE</g) ?? []).length, 3);
  assert.equal((marketplaces.match(/>방문하기</g) ?? []).length, 3);
  assert.doesNotMatch(marketplaces, /예판넷|예판런|yepan\.net|yepan\.run|href="https:\/\/kurly\.com"/);

  const contact = await (await render("/contact")).text();
  assert.match(contact, /href="mailto:admin@cmknetworks\.kr"/);
  assert.match(contact, />admin@cmknetworks\.kr<\/a>/);
  assert.doesNotMatch(contact, /제휴 문의 채널 준비 중|<form/i);
});

test("keeps shared chrome separate and removes starter-only preview code", async () => {
  const [page, layout, chrome, siteConfig, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_components/site-chrome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/_lib/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="hero-visual"/);
  assert.match(page, /assetHref\("\/favicon\.png"\)/);
  assert.doesNotMatch(page, /<span>CMK<\/span>|<small>NETWORKS<\/small>/);
  assert.doesNotMatch(page, /id="about"|id="services"|id="careers"|id="contact"/);
  assert.match(layout, /<SiteHeader \/>/);
  assert.match(layout, /<SiteFooter \/>/);
  assert.match(siteConfig, /og\.png/);
  assert.match(layout, /fonts\.googleapis\.com/);
  assert.match(layout, /Noto\+Sans\+KR/);
  assert.match(styles, /--font-sans: "Noto Sans KR", sans-serif/);
  assert.match(styles, /\.brand-name[\s\S]*?white-space: nowrap/);
  assert.match(
    styles,
    /\.brand-name b,\s*\.brand-name span\s*\{[\s\S]*?color:\s*inherit;[\s\S]*?font-size:\s*19px;[\s\S]*?font-weight:\s*800;/,
  );
  assert.match(
    styles,
    /\.service-card-copy h3\s*\{[\s\S]*?font-size:\s*30px;[\s\S]*?font-weight:\s*800;/,
  );
  assert.doesNotMatch(styles, /\.service-count|\.site-footer \.brand-name span/);
  assert.match(
    styles,
    /\.service-brand-visual\.brand-visual-yepan,\s*\.service-brand-visual\.brand-visual-run\s*\{[\s\S]*?width:\s*160px;[\s\S]*?height:\s*138px;/,
  );
  assert.doesNotMatch(styles, /Pretendard|ui-monospace|SFMono-Regular|Arial/);
  assert.match(chrome, /씨엠케이네트웍스\(CMK NETWORKS\)/);
  assert.match(chrome, /siteHref\(item\.path\)/);
  assert.match(chrome, /assetHref\("\/favicon\.png"\)/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);

  await Promise.all([
    access(new URL("../app/about/page.tsx", import.meta.url)),
    access(new URL("../app/services/page.tsx", import.meta.url)),
    access(new URL("../app/marketplaces/page.tsx", import.meta.url)),
    access(new URL("../app/careers/page.tsx", import.meta.url)),
    access(new URL("../app/contact/page.tsx", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
