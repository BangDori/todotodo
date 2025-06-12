### 실행 방법

```bash
npm run start
```

- 개발 서버
  - vite 개발 서버 (default: 3000번 포트)
  - json-server 개발 서버 (default:3001번 포트)

### 요구 사항

1. 사용자는 할 일을 조회할 수 있다.
2. 사용자는 할 일을 생성할 수 있다.
   - 제목 (title) - required, length ≥ 1
   - 내용 (description) - required, length ≥ 10
   - 마감일 (expired_at)
   - 완료 여부 (completed)
3. 사용자는 할 일을 삭제할 수 있다.
4. 사용자는 할 일을 완료할 수 있다.
   - 완료 버튼 클릭 시 완료 목록으로 이동한다.
5. 사용자는 할 일을 수정할 수 있다.
6. 사용자는 등록일과 마감일을 기준으로 정렬할 수 있다.

### 폴더 구조

```
src/
   ㄴ components/ 공통 컴포넌트 (레이아웃, 공통 컴포넌트)
   ㄴ domains/ 도메인 별 파일
   ㄴ hooks/ 공통 훅
   ㄴ styles/ 공통 스타일
   ㄴ types/ 공통 타입
   ㄴ utils/ 공통 유틸리티
   ㄴ App.tsx 메인 애플리케이션
```

### 기술 스택

- **Client** - `React` / `Tailwind` / `Vite` / `Vitest`
- **Storage** - `json-server`
