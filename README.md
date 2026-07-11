# CMK Networks 홈페이지

커뮤니티와 쇼핑몰을 운영하는 씨엠케이네트웍스의 한 페이지 기업 홈페이지입니다.

- 회사 소개
- 운영 사이트
- 채용
- 제휴 문의
- 데스크톱·태블릿·모바일 반응형 화면
- 키보드 탐색과 모션 축소 설정 지원
- GitHub Pages 자동 배포

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

## 내용 바꾸기

주요 문구와 메뉴는 `app/page.tsx`, 색상과 레이아웃은 `app/globals.css`에서 수정할 수 있습니다.

공개 전에 다음 정보를 실제 값으로 교체해 주세요.

1. 커뮤니티 사이트명과 URL
2. 쇼핑몰 사이트명과 URL
3. 채용 공고 URL 또는 채용 문의 이메일
4. 제휴 문의 이메일
5. 필요한 경우 사업자 정보와 회사 주소

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소의 `main` 브랜치에 올립니다.
2. 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 선택합니다.
3. 이후 `main` 또는 `master` 브랜치에 변경 사항을 올리면 `.github/workflows/deploy-pages.yml`이 정적 사이트를 자동으로 배포합니다.

프로젝트형 Pages 주소(`/저장소명`)와 사용자·조직 루트 주소, 커스텀 도메인의 경로 차이는 배포 과정에서 자동으로 반영됩니다.

## 빌드

```bash
npm run build        # Sites용 빌드
npm run build:pages  # GitHub Pages용 정적 빌드(out/)
```
