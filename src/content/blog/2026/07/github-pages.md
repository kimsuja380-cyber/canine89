---
title: "정적 사이트로 GitHub Pages 배포하기"
description: "빌드 결과물을 GitHub Pages에 올리는 흐름을 짧게 정리합니다"
pubDate: 2026-07-25
category: "개발"
tags: ["GitHub Pages", "배포", "Astro"]
---

이 프로젝트는 정적 빌드를 목표로 합니다.

## 배포 흐름

1. 글을 마크다운으로 추가합니다.
2. `npm run build`로 `dist/`를 만듭니다.
3. GitHub Actions가 Pages에 배포합니다.

저장소가 `username.github.io`라면 `base`는 `/`로 두면 되고,  
프로젝트 저장소라면 `astro.config.mjs`의 `base`를 `/저장소이름`으로 바꾸면 됩니다.
