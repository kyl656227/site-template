# 사이트 템플릿 사용법

새 프로젝트 시작할 때 이 폴더 전체를 복사해서 시작하세요.

## 폴더 구조
```
site-template/
├── index.html          # 페이지 구조 (헤더/메인/푸터/팝업)
├── css/
│   ├── reset.css        # 브라우저 기본값 초기화 (거의 안 건드림)
│   ├── variables.css     # 색상/폰트/레이아웃 값 - 프로젝트마다 여기만 수정
│   ├── typography.css     # 폰트 크기 위계 (메인타이틀/중간타이틀/본문 등) - 고정, 안 건드림
│   └── main.css            # 실제 디자인 (레이아웃, 컴포넌트)
├── js/
│   └── main.js            # 모바일 메뉴 토글, 이벤트 팝업 로직
└── img/                    # 로고, 배너 등 이미지 (logo.svg, popup-banner.jpg 필요)
```

## 새 프로젝트에 적용하는 순서
1. 폴더 복사 → 새 repo 이름으로 저장 (예: `client-name-site`)
2. `css/variables.css`에서 `--point-color`, 폰트 등 브랜드 톤 교체
3. `index.html`의 텍스트/섹션/메뉴 구성을 실제 콘텐츠로 교체
4. `img/` 폴더에 로고, 배너 이미지 채우기
5. `footer` 안 사업자 정보(상호명/사업자번호/주소/전화) 실제 값으로 교체

## GitHub Pages로 배포하기
1. 새 repo 생성 후 이 폴더 내용을 push
2. repo → Settings → Pages → Source를 `main` 브랜치로 설정
3. `https://계정명.github.io/repo명` 으로 접속 확인
4. 커스텀 도메인 쓰려면 최상단에 `CNAME` 파일 추가 (`www.도메인.com` 한 줄만 적기) 후 도메인 등록처에서 DNS 설정

## 자주 바뀌는 요소 vs 거의 안 바뀌는 요소
- **거의 안 바뀜**: reset.css, 헤더/모바일메뉴 구조, 팝업 "오늘 하루 보지 않기" 로직, typography.css의 폰트 크기 위계
- **매번 바뀜**: variables.css의 컬러/폰트, main.css의 레이아웃, index.html 콘텐츠, 이미지, 섹션 개수/구성

## 폰트 크기 위계 (typography.css)
디자인이 프로젝트마다 달라져도 폰트 크기 체계는 고정해서 사이트마다 통일감을 줍니다.

| 용도 | 클래스 | 기본 태그 | 크기 |
|---|---|---|---|
| 메인 타이틀 (히어로) | `.text-display` | `h1` | 40px (모바일 28px) |
| 중간 타이틀 (섹션 제목) | `.text-title` | `h2` | 28px (모바일 22px) |
| 소제목 | `.text-subtitle` | `h3` | 20px (모바일 17px) |
| 서브카피 / 강조 본문 | `.text-body-lg` | - | 18px |
| 본문 | `.text-body` | `p` | 16px |
| 보조 설명 | `.text-small` | - | 14px |
| 캡션 / 카피라이트 | `.text-caption` | - | 12px |

`h1`, `h2`, `h3`, `p` 태그는 클래스 없이도 기본값이 자동 적용됩니다. 기본값과 다른 크기가 필요한 곳(서브카피, 카드 설명, 캡션 등)에만 위 클래스를 붙이세요. 크기 자체를 바꾸고 싶으면 `variables.css`의 `--fs-*` 값만 수정하면 전체에 반영됩니다.
