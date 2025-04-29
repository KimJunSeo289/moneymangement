# 가계부 관리 웹 애플리케이션

이 프로젝트는 개인 가계부 관리를 위한 웹 애플리케이션입니다. 사용자들이 자신의 수입과 지출을 효율적으로 관리하고 분석할 수 있도록 도와줍니다.

## 주요 기능

- 수입/지출 내역 추가, 수정, 삭제
- 카테고리별 지출 분석
- 월별/연도별 수입/지출 통계
- 사용자 친화적인 UI/UX

## 기술 스택

### Frontend

- React 19
- Redux Toolkit (상태 관리)
- React Router (라우팅)
- Bootstrap 5 (UI 컴포넌트)
- Bootstrap Icons (아이콘)

### Development Tools

- Vite (빌드 도구)
- ESLint (코드 린팅)
- Prettier (코드 포맷팅)
- JSON Server (API 모킹)

## 프로젝트 구조

```
src/
├── assets/      # 정적 파일 (이미지, 폰트 등)
├── component/   # 재사용 가능한 컴포넌트
├── layout/      # 레이아웃 관련 컴포넌트
├── Page/        # 페이지 컴포넌트
├── store/       # Redux 상태 관리
└── utils/       # 유틸리티 함수
```

## 설치 및 실행 방법

1. 저장소 클론

```bash
git clone [repository-url]
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 빌드

```bash
npm run build
```

## 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

```bash
npm run deploy
```

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.
