# 서재 · 나만의 블로그

Astro 기반 **정적 블로그**입니다. 마크다운으로 글을 쓰고 `dist/`를 GitHub Pages에 호스팅합니다.

## 메뉴

- **HOME** — 소개와 최근 글
- **About** — 블로그 소개
- **Blog** — 글 목록, 카테고리·태그·월별 아카이브

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 표시된 주소(보통 `http://localhost:4321`)로 확인합니다.

## 글 작성

월별 폴더에 마크다운을 추가합니다.

```text
src/content/blog/2026/07/my-post.md
```

예시 frontmatter:

```md
---
title: "글 제목"
description: "한 줄 요약"
pubDate: 2026-07-29
category: "일상"
tags: ["태그1", "태그2"]
---

본문을 마크다운으로 작성합니다.
```

## 빌드

```bash
npm run build
```

결과물은 `dist/` 폴더입니다.

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다.
3. `main`에 push하면 `.github/workflows/deploy.yml`이 자동 배포합니다.

### 주소에 맞춘 설정

`astro.config.mjs`를 저장소 종류에 맞게 수정하세요.

| 종류 | 예시 URL | 설정 |
|------|----------|------|
| 사용자 사이트 | `https://아이디.github.io` | `site`만 맞추고 `base: '/'` |
| 프로젝트 사이트 | `https://아이디.github.io/저장소이름` | `base: '/저장소이름'` |

현재 설정 (저장소 `canine89`):

```js
site: 'https://kimsuja380-cyber.github.io'
base: '/canine89'
```

배포 주소: https://kimsuja380-cyber.github.io/canine89/
