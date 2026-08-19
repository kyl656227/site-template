# 사이트 템플릿 사용법

새 프로젝트 시작할 때 이 폴더 전체를 복사해서 시작하세요.

## 폴더 구조
```
site-template/
├── index.html          # 페이지 구조 (헤더/메인/푸터/팝업)
├── css/
│   ├── reset.css        # 브라우저 기본값 초기화 (거의 안 건드림)
│   ├── variables.css     # 색상/폰트/레이아웃 값 - 프로젝트마다 여기만 수정
│   └── main.css          # 실제 디자인 (레이아웃, 컴포넌트)
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
- **거의 안 바뀜**: reset.css, 헤더/모바일메뉴 구조, 팝업 "오늘 하루 보지 않기" 로직
- **매번 바뀜**: variables.css의 컬러/폰트, index.html 콘텐츠, 이미지, 섹션 개수/구성
