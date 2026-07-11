import { assetHref, navigation, siteHref } from "../_lib/site";

export function Brand() {
  return (
    <span className="brand" aria-label="CMK Networks">
      <span
        className="brand-mark"
        aria-hidden="true"
        style={{ backgroundImage: `url(${assetHref("/favicon.png")})` }}
      />
      <span className="brand-name">
        <b>CMK</b>
        <span>NETWORKS</span>
      </span>
    </span>
  );
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="brand-link" href={siteHref("/")} aria-label="CMK Networks 홈">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a key={item.path} href={siteHref(item.path)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={siteHref("/contact")}>
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
              <a key={item.path} href={siteHref(item.path)}>
                {item.label}
                <Arrow />
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <a href={siteHref("/")} aria-label="CMK Networks 홈">
          <Brand />
        </a>
        <nav aria-label="하단 메뉴">
          {navigation.map((item) => (
            <a key={item.path} href={siteHref(item.path)}>
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
            <dd>
              <a
                href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=3375900837"
                target="_blank"
                rel="noreferrer"
                aria-label="사업자등록정보 새 탭에서 확인"
              >
                337-59-00837
              </a>
            </dd>
          </div>
          <div className="business-item">
            <dt>통신판매업신고</dt>
            <dd>
              <a
                href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=3375900837"
                target="_blank"
                rel="noreferrer"
                aria-label="통신판매업 신고정보 새 탭에서 확인"
              >
                2025-인천연수구-1734
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="shell footer-bottom">
        <span>COMMUNITY &amp; COMMERCE</span>
        <span>© 2007 CMK Networks. All rights reserved.</span>
      </div>
    </footer>
  );
}
