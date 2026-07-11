import { Arrow } from "./_components/site-chrome";
import { assetHref, siteHref } from "./_lib/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow">COMMUNITY · COMMERCE · CONNECTION</p>
            <h1 id="hero-title">
              사람과 취향,
              <br />
              좋은 상품을
              <br />
              <span>연결합니다.</span>
            </h1>
            <p className="hero-description">
              씨엠케이네트웍스는 커뮤니티와 쇼핑몰을 운영하며,
              사람들이 소통하고 발견하고 선택하는 온라인 경험을 만들어갑니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={siteHref("/services")}>
                운영 사이트 보기
                <Arrow />
              </a>
              <a className="text-link" href={siteHref("/contact")}>
                제휴 문의하기
                <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="orbit orbit-one">
              <i className="node node-coral" />
              <i className="node node-white" />
            </div>
            <div className="orbit orbit-two">
              <i className="node node-mint" />
              <i className="node node-indigo" />
            </div>
            <div
              className="visual-core"
              style={{ backgroundImage: `url(${assetHref("/favicon.png")})` }}
            />
            <i className="free-node free-node-one" />
            <i className="free-node free-node-two" />
          </div>
        </div>

        <div className="hero-index shell" aria-hidden="true">
          <span>INCHEON · KOREA</span>
          <span>EST.2007</span>
        </div>
      </section>
    </main>
  );
}
