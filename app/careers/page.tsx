import { PageIntro } from "../_components/page-intro";
import { createPageMetadata } from "../_lib/site";

export const metadata = createPageMetadata({
  title: "채용",
  description: "씨엠케이네트웍스와 함께 더 나은 서비스를 만들어갈 동료를 기다립니다.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main id="main" className="inner-page">
      <PageIntro
        index="04"
        label="CAREERS"
        title={
          <>
            함께 더 나은 서비스를
            <br />
            만들어갈 동료를 기다립니다.
          </>
        }
        description={
          <>
            커뮤니티와 쇼핑몰의 다음을 함께 고민하고 만들어갈 분을 기다립니다.
            새로운 채용 소식은 이 페이지에서 안내하겠습니다.
          </>
        }
      />

      <section className="section careers careers-page-section" aria-labelledby="careers-panel-title">
        <div className="shell">
          <div className="careers-panel">
            <div className="careers-accent" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="careers-copy">
              <p className="section-label section-label-light">WORK WITH US</p>
              <h2 id="careers-panel-title">
                함께 오래 사랑받는
                <br />
                서비스를 만듭니다.
              </h2>
              <p>
                사용자의 목소리를 가까이에서 듣고, 데이터와 감각을 함께 활용하며,
                작은 개선을 꾸준히 쌓는 동료를 기다립니다.
              </p>
              <ul className="career-values" aria-label="함께 일하는 방식">
                <li>문제를 끝까지</li>
                <li>데이터와 감각</li>
                <li>투명한 협업</li>
              </ul>
            </div>
            <div className="careers-action">
              <span className="status-kicker">CURRENT STATUS</span>
              <strong>채용 공고 준비 중</strong>
              <span className="button button-disabled" aria-disabled="true">
                채용 문의 채널 준비 중
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
