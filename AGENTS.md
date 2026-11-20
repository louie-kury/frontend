# 프런트엔드 작업 지침

프런트엔드 소스, 테스트, 도구 설정을 변경하기 전에 [공식 프런트엔드 코드 컨벤션](https://github.com/louie-kury/louie-kury-document/blob/dev/docs/convension/FRONTEND_CODE_CONVENTIONS.md)을 확인합니다. 공통 문서 저장소가 같은 상위 폴더에 있으면 `../louie-kury-document/docs/convension/FRONTEND_CODE_CONVENTIONS.md`에서 읽을 수 있습니다.

- Next.js App Router에서는 서버 컴포넌트를 기본으로 사용하고 도메인 기능은 `src/features/`에 배치합니다.
- npm과 `package-lock.json`을 사용하고, 환경변수의 실제 비밀값은 커밋하지 않습니다.
- PR 전에 포맷, 린트, 타입 검사와 프로덕션 빌드를 확인합니다.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
