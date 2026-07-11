import { PageIntro } from "../_components/page-intro";
import { Arrow } from "../_components/site-chrome";
import { createPageMetadata } from "../_lib/site";

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

          <div className="service-grid">
            <article className="service-card community-card">
              <div className="service-card-top">
                <span className="service-tag">COMMUNITY</span>
                <span className="service-count">01</span>
              </div>
              <div className="service-card-copy">
                <h3>예판넷</h3>
                <p>
                  2010년에 오픈한 국내 최초, 국내 유일의 예약판매 커뮤니티입니다.
                  게임을 비롯해 IT, 취미, 이슈 상품의 예약판매 소식과 출시 소식을 안내합니다.
                </p>
              </div>
              <div className="service-visual community-visual" aria-hidden="true">
                <span className="bubble bubble-one" />
                <span className="bubble bubble-two" />
                <i />
                <i />
                <i />
              </div>
              <a
                className="service-link"
                href="https://yepan.net"
                target="_blank"
                rel="noreferrer"
                aria-label="예판넷 새 탭에서 방문"
              >
                yepan.net 방문
                <Arrow />
              </a>
            </article>

            <article className="service-card commerce-card">
              <div className="service-card-top">
                <span className="service-tag">COMMERCE</span>
                <span className="service-count">02</span>
              </div>
              <div className="service-card-copy">
                <h3>예판런</h3>
                <p>
                  2025년 오픈한 예판런은 한국닌텐도의 인증을 받은 Nintendo 정식 판매처입니다.
                  Nintendo Switch 상품 뿐만 아니라, 콘솔 게임, 수집용 카드 등 다양한 취미 상품을 판매합니다.
                </p>
              </div>
              <div className="service-visual commerce-visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <a
                className="service-link"
                href="https://yepan.run"
                target="_blank"
                rel="noreferrer"
                aria-label="예판런 새 탭에서 방문"
              >
                yepan.run 방문
                <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
