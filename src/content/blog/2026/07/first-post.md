---
title: "첫 글을 쓰며"
description: "Astro와 마크다운으로 시작하는 나만의 정적 블로그 이야기"
pubDate: 2026-07-28
category: "일상"
tags: ["시작", "Astro", "블로그"]
---

안녕하세요. **서재**에 오신 것을 환영합니다.

이 블로그는 마크다운 파일만 추가하면 글이 되고, `astro build`로 정적 사이트가 됩니다. GitHub Pages에 올려 언제든 공유할 수 있어요.

## 이렇게 글을 씁니다

1. `src/content/blog/YYYY/MM/` 폴더에 `.md` 파일을 만듭니다.
2. 맨 위에 `title`, `description`, `pubDate`, `category`, `tags`를 적습니다.
3. 본문은 일반 마크다운으로 작성합니다.

```bash
npm run build
```

빌드가 끝나면 `dist/` 폴더가 GitHub Pages에 올라갈 결과물입니다.

> 글은 월별 폴더로 정리하면 나중에 찾기가 훨씬 쉽습니다.
