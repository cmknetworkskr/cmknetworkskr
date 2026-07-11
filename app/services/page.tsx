import { PageIntro } from "../_components/page-intro";
import { Arrow } from "../_components/site-chrome";
import { createPageMetadata } from "../_lib/site";

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
                <p>관심사와 정보를 나누고 서로 연결되는 온라인 커뮤니티입니다.</p>
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
                <p>콘솔 게임과 관련 상품을 만나볼 수 있는 온라인 스토어입니다.</p>
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
