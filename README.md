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
│   ├── components.css      # 재사용 UI 부품 (버튼 등) - 고정, 안 건드림
│   └── main.css              # 페이지 레이아웃 (섹션 구성) - 프로젝트마다 수정
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

## 컬러 시스템 (variables.css)

| 변수 | 용도 | 프로젝트마다 바뀜? |
|---|---|---|
| `--point-color` | 메인 포인트 (버튼, 링크, 강조) | O |
| `--point-color-dark` | hover, 진한 강조 | O |
| `--point-color-light` | 연한 배경, 배지, 살짝 강조 (카드 hover 배경 등) | O |
| `--secondary-color` | 보조 강조색 - 이벤트 배지 등 필요할 때만 | O |
| `--color-success` / `--color-error` / `--color-warning` | 폼 검증, 알림 메시지 색 | X (보통 고정) |
| `--grayscale01~09` | 배경/텍스트/보더용 무채색 톤 | 필요시만 (보통 고정) |

새 프로젝트 시작할 땐 `--point-color` 계열 3개(기본/진한/연한)만 클라이언트 브랜드 컬러로 바꿔주면 버튼, hover, 배경 톤이 전부 자동으로 맞춰집니다.

## 여백 간격 (spacing scale)
margin/padding/gap에 임의의 숫자를 직접 쓰지 않고, 4px 배수로 통일된 아래 값만 사용합니다. 관계가 가까운 요소일수록 작은 값, 완전히 다른 섹션끼리는 큰 값을 씁니다.

| 변수 | 값 | 주로 쓰는 곳 |
|---|---|---|
| `--space-1` | 4px | 아주 밀접한 텍스트 사이 (예: 라벨-값) |
| `--space-2` | 8px | 제목-바로 아래 설명 |
| `--space-3` | 12px | 팝업/작은 컴포넌트 내부 패딩 |
| `--space-4` | 16px | 기본 내부 패딩, 타이틀 아래 여백 |
| `--space-5` | 20px | 리스트 항목 간격 |
| `--space-6` | 24px | 카드-카드 gap, 섹션 제목 아래 여백 |
| `--space-8` | 32px | 카드 내부 패딩, 컴포넌트 간 큰 간격 |
| `--space-10` | 40px | 모바일 메뉴 여백 |
| `--space-12` | 48px | - |
| `--space-15` | 60px | 푸터 상단 패딩 |
| `--space-16` | 64px | - |
| `--space-25` | 100px | 섹션과 섹션 사이 큰 여백 |

새 값이 필요하면 4px 배수 규칙만 지켜서 `--space-N`(N = px÷4)으로 추가하세요.

## 모서리 둥글기 (border-radius)
| 변수 | 값 | 쓰는 곳 |
|---|---|---|
| `--radius-sm` | 4px | input, 작은 배지 |
| `--radius-md` | 8px | 버튼, 팝업 박스 |
| `--radius-lg` | 12px | 카드, 큰 컨테이너 |
| `--radius-full` | 999px | 알약형 배지, 원형 아바타 |

## 그림자 (box-shadow)
| 변수 | 쓰는 곳 |
|---|---|
| `--shadow-sm` | input focus 등 살짝 뜬 느낌 |
| `--shadow-md` | 카드 hover |
| `--shadow-lg` | 팝업/모달급 요소 |

## 버튼 (components.css)
`.btn`을 기본으로 깔고, 용도에 맞는 클래스 하나를 추가로 붙입니다.

| 클래스 | 용도 | 예시 |
|---|---|---|
| `.btn .btn-primary` | 가장 강조할 액션 (하나만) | "지금 문의하기" |
| `.btn .btn-outline` | 보조 액션 | "전화 문의" |
| `.btn .btn-ghost` | 텍스트형, 덜 중요한 액션 | "자세히 보기" |

```html
<a href="#contact" class="btn btn-primary">지금 문의하기</a>
<a href="tel:0000000000" class="btn btn-outline">전화 문의</a>
<a href="#" class="btn btn-ghost">자세히 보기 &gt;</a>
```
한 화면에 `.btn-primary`는 되도록 1개만 써서 정말 강조하고 싶은 행동이 뭔지 명확하게 하세요.

## z-index 레이어 순서
숫자가 클수록 화면 위쪽에 쌓입니다. 100단위로 넉넉히 띄워놔서 나중에 새 요소(지도, 채팅 버튼 등) 추가할 자리를 남겨뒀어요.

| 변수 | 값 | 쓰는 곳 |
|---|---|---|
| `--z-header` | 100 | 상단 고정 헤더 |
| `--z-mobile-nav` | 200 | 모바일 전체화면 메뉴 |
| `--z-popup` | 300 | 이벤트 팝업 |
| `--z-toast` | 400 | (예약) 알림/토스트 등 나중에 추가될 요소 |

새 요소가 필요하면 "이게 헤더 위여야 하나 팝업 위여야 하나"를 먼저 판단하고, 그 사이 값을 `--z-*` 이름으로 추가하세요. 직접 숫자(예: `z-index: 9999`)를 쓰지 마세요 — 나중에 뭐가 뭘 덮는지 추적 불가능해집니다.

## 이미지 비율 (components.css)
사진 원본 크기가 프로젝트마다 제각각이어도, 화면에서는 항상 정해진 비율로만 보이게 고정합니다. 사용법은 부모 div에 `.ratio-*`, 그 안의 `<img>`에 `.img-cover`를 붙이는 2단 구조예요.

```html
<div class="ratio-landscape">
  <img src="photo.jpg" alt="설명" class="img-cover">
</div>
```

| 클래스 | 비율 | 쓰는 곳 |
|---|---|---|
| `.ratio-video` | 16:9 | 히어로 배너, 와이드 이미지 |
| `.ratio-square` | 1:1 | 팝업 배너, 아이콘형 썸네일 |
| `.ratio-landscape` | 4:3 | 일반 콘텐츠/카드 사진 |
| `.ratio-portrait` | 3:4 | 세로형 인물·제품 사진 |

`.img-cover`가 원본 사진을 비율에 맞게 잘라서 채워주기 때문에, 사진을 정확한 비율로 미리 자를 필요 없이 넉넉한 원본만 있으면 됩니다.

### 이미지 업로드 시 권장 크기
| 용도 | 권장 업로드 크기 | 비율 클래스 | 포맷 |
|---|---|---|---|
| 로고 | 높이 64px 이상, 원본 비율 유지 | - | SVG 권장 (없으면 투명 배경 PNG) |
| 히어로 배너 | 1920×1080px | `.ratio-video` | JPG/WebP |
| 이벤트 팝업 배너 | 640×640px | `.ratio-square` | JPG/WebP |
| 카드/콘텐츠 사진 | 800×600px | `.ratio-landscape` | JPG/WebP |
| 인물·제품 사진 | 900×1200px | `.ratio-portrait` | JPG/WebP |

### 그 외 이미지 규칙
- `alt` 속성은 항상 채우기 (검색엔진 노출 + 접근성)
- 화면 첫 화면 아래에 있는 이미지(카드 사진 등)는 `loading="lazy"` 속성 추가 → 페이지 로딩 속도 개선
- 사진 용량은 되도록 500KB 이하로 압축 (JPG 품질 80% 선, 또는 WebP 변환)
