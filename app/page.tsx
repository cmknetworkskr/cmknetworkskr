const navigation = [
  { label: "회사 소개", href: "#about" },
  { label: "운영 사이트", href: "#services" },
  { label: "채용", href: "#careers" },
  { label: "제휴 문의", href: "#contact" },
];

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

const contactTypes = [
  "사업 제휴",
  "입점 · 판매",
  "광고 · 마케팅",
  "콘텐츠 · 커뮤니티",
];

function Brand() {
  return (
    <span className="brand" aria-label="CMK Networks">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="brand-name">
        <b>CMK</b>
        <span>NETWORKS</span>
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <header className="site-header">
        <div className="header-inner shell">
          <a className="brand-link" href="#top" aria-label="CMK Networks 홈">
            <Brand />
          </a>

          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            제휴 문의
            <Arrow />
          </a>

          <details className="mobile-menu">
            <summary aria-label="메뉴 열기">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="모바일 주요 메뉴">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                  <Arrow />
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

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
                <a className="button button-primary" href="#services">
                  운영 사이트 보기
                  <Arrow />
                </a>
                <a className="text-link" href="#contact">
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
              <div className="visual-core">
                <span>CMK</span>
                <small>NETWORKS</small>
              </div>
              <i className="free-node free-node-one" />
              <i className="free-node free-node-two" />
            </div>
          </div>

          <div className="hero-index shell" aria-hidden="true">
            <span>SEOUL · KOREA</span>
            <span>EST. ———</span>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="shell">
            <div className="section-heading about-heading">
              <div>
                <p className="section-label">01 · ABOUT US</p>
                <h2 id="about-title">
                  연결에서 시작되는
                  <br />
                  온라인 경험
                </h2>
              </div>
              <p>
                커뮤니티에는 대화가, 쇼핑에는 새로운 발견이 있습니다.
                씨엠케이네트웍스는 각 서비스의 목적과 이용자 맥락을 살피며
                오래 사랑받는 플랫폼을 운영합니다.
              </p>
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

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading services-heading">
              <div>
                <p className="section-label">02 · OUR SERVICES</p>
                <h2 id="services-title">운영 사이트</h2>
              </div>
              <p>
                사람과 정보가 만나는 커뮤니티부터 좋은 상품을 발견하는 쇼핑몰까지,
                씨엠케이네트웍스가 운영하는 서비스를 소개합니다.
              </p>
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

        <section className="section careers" id="careers" aria-labelledby="careers-title">
          <div className="shell">
            <div className="careers-panel">
              <div className="careers-accent" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="careers-copy">
                <p className="section-label section-label-light">03 · CAREERS</p>
                <h2 id="careers-title">
                  함께 더 나은 서비스를
                  <br />
                  만들어갈 동료를 기다립니다.
                </h2>
                <p>
                  커뮤니티와 쇼핑몰의 다음을 함께 고민하고 만들어갈 분을 기다립니다.
                  새로운 채용 소식은 이곳에서 안내하겠습니다.
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

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="section-label">04 · PARTNERSHIP</p>
              <h2 id="contact-title">
                함께 만들 수 있는
                <br />
                가능성을 들려주세요.
              </h2>
              <p>
                서비스 제휴, 입점, 광고, 공동 프로젝트 등 씨엠케이네트웍스와
                함께하고 싶은 제안이라면 편하게 이야기를 시작해 주세요.
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
                <div>
                  <span>CONTACT</span>
                  <strong>제휴 문의 채널 준비 중</strong>
                </div>
                <span className="round-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <Brand />
          <nav aria-label="하단 메뉴">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="shell footer-business" aria-label="사업자 정보">
          <dl>
            <div className="business-item business-name">
              <dt>상호명</dt>
              <dd>씨엠케이네트웍스(CMK NETWORKS)</dd>
            </div>
            <div className="business-item">
              <dt>대표자</dt>
              <dd>권규원</dd>
            </div>
            <div className="business-item business-address">
              <dt>주소</dt>
              <dd>(22007) 인천 연수구 인천타워대로 323 송도 센트로드, B동 30층 브이477호</dd>
            </div>
            <div className="business-item">
              <dt>전화</dt>
              <dd>
                <a href="tel:070-8949-4860">070-8949-4860</a>
              </dd>
            </div>
            <div className="business-item">
              <dt>개인정보관리책임자</dt>
              <dd>정문권</dd>
            </div>
            <div className="business-item">
              <dt>사업자등록번호</dt>
              <dd>337-59-00837</dd>
            </div>
            <div className="business-item">
              <dt>통신판매업신고</dt>
              <dd>2025-인천연수구-1734</dd>
            </div>
          </dl>
        </div>
        <div className="shell footer-bottom">
          <span>COMMUNITY &amp; COMMERCE</span>
          <span>© {new Date().getFullYear()} CMK Networks. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
