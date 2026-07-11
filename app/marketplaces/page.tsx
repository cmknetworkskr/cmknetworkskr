import { PageIntro } from "../_components/page-intro";
import { Arrow } from "../_components/site-chrome";
import { assetHref, createPageMetadata } from "../_lib/site";

const marketplaces = [
  {
    name: "네이버 스마트스토어",
    description: "국내 최대 포털 사이트인 네이버 쇼핑에 입점되어 있습니다.",
    href: "https://mkt.shopping.naver.com/link/6938ffccb150e663241afc39",
    image: "/naver-smartstore.png",
    imageTone: "naver",
  },
  {
    name: "카카오 톡딜",
    description: "국내 최다 사용자 메신저인 카카오톡 내 톡딜에 입점되어 있습니다.",
    href: "https://store.kakao.com/nintendo",
    image: "/kakao-talkdeal.png",
    imageTone: "talkdeal",
  },
  {
    name: "컬리",
    description: "국내 최대 새벽배송 전문 쇼핑몰인 컬리에 입점되어 있습니다.",
    href: "https://lounge.kurly.com/link/VoVA-THZJ",
    image: "/kurly.png",
    imageTone: "kurly",
  },
];

export const metadata = createPageMetadata({
  title: "입점 사이트",
  description: "씨엠케이네트웍스의 상품과 서비스를 만날 수 있는 입점 사이트를 소개합니다.",
  path: "/marketplaces",
});

export default function MarketplacesPage() {
  return (
    <main id="main" className="inner-page">
      <PageIntro
        index="03"
        label="MARKETPLACES"
        title="입점 사이트"
        description={
          <>
            씨엠케이네트웍스의 상품과 서비스를 만날 수 있는
            다양한 입점 사이트를 소개합니다.
          </>
        }
      />

      <section className="section services page-content-section" aria-labelledby="marketplace-list-title">
        <div className="shell">
          <div className="content-kicker">
            <p className="section-label">PARTNER CHANNELS</p>
            <h2 id="marketplace-list-title">지금 입점 중인 사이트</h2>
          </div>

          <div className="service-grid marketplace-grid">
            {marketplaces.map((marketplace, index) => (
              <article className="service-card commerce-card marketplace-card" key={marketplace.name}>
                <div className="service-card-top">
                  <span className="service-tag">COMMERCE</span>
                  <span className="service-count">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="service-card-copy">
                  <h3>{marketplace.name}</h3>
                  <p>{marketplace.description}</p>
                </div>
                <div
                  className={`service-visual service-brand-visual brand-visual-${marketplace.imageTone} brand-visual-plain`}
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${assetHref(marketplace.image)})` }}
                />
                <a
                  className="service-link"
                  href={marketplace.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${marketplace.name} 새 탭에서 방문`}
                >
                  방문하기
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
