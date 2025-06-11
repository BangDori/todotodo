### 실행 방법

```bash
npm run start
```

- 개발 서버
  - vite 개발 서버 (default: 3000번 포트)
  - json-server 개발 서버 (default:3001번 포트)

### 요구 사항

1. 사용자는 투두 리스트를 생성할 수 있다.
   - 제목 (title) - required, length ≥ 1
   - 내용 (description) - required, length ≥ 10
   - 마감일 (expired_at)
   - 완료 여부 (completed)
2. 사용자는 투두 리스트를 삭제할 수 있다.
3. 사용자는 완료 버튼을 클릭할 수 있다.
   - 완료 버튼 클릭 시 완료 목록으로 이동한다.
4. 사용자는 투두 리스트를 수정할 수 있다.
5. 사용자는 마감일을 기준으로 정렬할 수 있다.

### 기술 스택

- **Client** - `React` / `Tailwind` / `Vite` / `Vitest`
- **Storage** - `json-server`
