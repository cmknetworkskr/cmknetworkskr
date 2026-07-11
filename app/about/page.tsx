import { PageIntro } from "../_components/page-intro";
import { createPageMetadata } from "../_lib/site";

const principles = [
  {
    number: "01",
    title: "사용자 중심",
    description: "이용하는 사람의 관점에서 서비스를 살피고 더 나은 경험을 고민합니다.",
  },
  {
    number: "02",
    title: "꾸준한 운영",
    description: "일상의 작은 불편을 발견하고 의미 있는 개선을 차곡차곡 쌓아갑니다.",
  },
  {
    number: "03",
    title: "함께하는 성장",
    description: "사용자와 파트너가 오래 함께 성장할 수 있는 연결을 지향합니다.",
  },
];

export const metadata = createPageMetadata({
  title: "회사 소개",
  description: "커뮤니티와 쇼핑몰을 운영하는 씨엠케이네트웍스를 소개합니다.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main" className="inner-page">
      <PageIntro
        index="01"
        label="ABOUT US"
        title={
          <>
            연결에서 시작되는
            <br />
            온라인 경험
          </>
        }
        description={
          <>
            커뮤니티에는 대화가, 쇼핑에는 새로운 발견이 있습니다.
            씨엠케이네트웍스는 각 서비스의 목적과 이용자 맥락을 살피며
            오래 사랑받는 플랫폼을 운영합니다.
          </>
        }
      />

      <section className="section about page-content-section" aria-labelledby="principles-title">
        <div className="shell">
          <div className="content-kicker">
            <p className="section-label">HOW WE WORK</p>
            <h2 id="principles-title">
              좋은 플랫폼은
              <br />
              매일의 운영에서 완성됩니다.
            </h2>
          </div>

          <div className="principles">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div className="principle-icon" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
