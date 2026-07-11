import { PageIntro } from "../_components/page-intro";
import { Arrow } from "../_components/site-chrome";
import { assetHref, createPageMetadata } from "../_lib/site";

export const metadata = createPageMetadata({
  title: "운영 사이트",
  description: "씨엠케이네트웍스가 운영하는 예판넷과 예판런을 소개합니다.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main" className="inner-page">
      <PageIntro
        index="02"
        label="OUR SERVICES"
        title="운영 사이트"
        description={
          <>
            사람과 정보가 만나는 커뮤니티부터 좋은 상품을 발견하는 쇼핑몰까지,
            씨엠케이네트웍스가 운영하는 서비스를 소개합니다.
          </>
        }
      />

      <section className="section services page-content-section" aria-labelledby="service-list-title">
        <div className="shell">
          <div className="content-kicker">
            <p className="section-label">LIVE PLATFORMS</p>
            <h2 id="service-list-title">지금 운영 중인 서비스</h2>
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
                  2007년에 오픈한 국내 최초, 국내 유일의 예약판매 커뮤니티입니다.
                  게임을 비롯해 IT, 취미, 이슈 상품의 예약판매 소식과 출시 소식을 안내합니다.
                </p>
              </div>
              <div
                className="service-visual service-brand-visual brand-visual-yepan"
                aria-hidden="true"
                style={{ backgroundImage: `url(${assetHref("/yepan-net.jpg")})` }}
              />
              <a
                className="service-link"
                href="https://yepan.net"
                target="_blank"
                rel="noreferrer"
                aria-label="예판넷 새 탭에서 방문"
              >
                방문하기
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
              <div
                className="service-visual service-brand-visual brand-visual-run"
                aria-hidden="true"
                style={{ backgroundImage: `url(${assetHref("/yepan-run.png")})` }}
              />
              <a
                className="service-link"
                href="https://yepan.run"
                target="_blank"
                rel="noreferrer"
                aria-label="예판런 새 탭에서 방문"
              >
                방문하기
                <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
