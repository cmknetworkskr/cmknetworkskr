import { PageIntro } from "../_components/page-intro";
import { createPageMetadata } from "../_lib/site";

const contactTypes = [
  "사업 제휴",
  "입점 · 판매",
  "광고 · 마케팅",
  "콘텐츠 · 커뮤니티",
];

export const metadata = createPageMetadata({
  title: "제휴 문의",
  description: "사업 제휴, 입점, 광고, 공동 프로젝트 등 씨엠케이네트웍스에 제안해 주세요.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <PageIntro
        index="05"
        label="PARTNERSHIP"
        title={
          <>
            함께 만들 수 있는
            <br />
            가능성을 들려주세요.
          </>
        }
        description={
          <>
            서비스 제휴, 입점, 광고, 공동 프로젝트 등 씨엠케이네트웍스와
            함께하고 싶은 제안이라면 편하게 이야기를 시작해 주세요.
          </>
        }
      />

      <section className="section contact contact-page-section" aria-labelledby="contact-types-title">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="section-label">INQUIRY TYPES</p>
            <h2 id="contact-types-title">
              이런 제안을
              <br />
              기다리고 있습니다.
            </h2>
            <p>
              제안 배경과 기대하는 협업 방식, 관련 자료를 함께 보내주시면
              확인 후 답변드리겠습니다.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-header">
              <span>PARTNERSHIP INQUIRY</span>
              <i aria-hidden="true" />
            </div>
            <div className="contact-types">
              {contactTypes.map((type, index) => (
                <span key={type}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  {type}
                </span>
              ))}
            </div>
            <div className="contact-ready">
              <a href="mailto:admin@cmknetworks.kr">admin@cmknetworks.kr</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
