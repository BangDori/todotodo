### 실행 방법

```bash
git clone https://github.com/BangDori/todotodo.git
cd todotodo
npm install
npm run start
```

- 개발 서버
  - vite 개발 서버 (default: 5173번 포트)
  - json-server 개발 서버 (default:3001번 포트)

### 요구사항

1. 사용자는 할 일을 조회할 수 있다.
2. 사용자는 할 일을 생성할 수 있다.
   - 내용 (text) - required, length ≥ 1
   - 완료 여부 (checked)
3. 사용자는 할 일을 삭제할 수 있다.
4. 사용자는 할 일을 완료할 수 있다.
   - 완료 버튼 클릭 시 완료 목록으로 이동한다.
5. 사용자는 할 일을 수정할 수 있다.

### 폴더 구조

```
src/
ㄴ components/ 공통 컴포넌트 (레이아웃, 공통 컴포넌트)
ㄴ domains/ 도메인 별 파일
   ㄴ api/
   ㄴ components/
   ㄴ context/
   ㄴ types/
   ㄴ index.ts 도메인 모듈 내보내기 파일
ㄴ queries/ 리액트 쿼리
ㄴ styles/ 공통 스타일
ㄴ utils/ 공통 유틸리티
ㄴ App.tsx 메인 애플리케이션
```

### 기술 스택

- **Client** - `React` / `Tailwind` / `Vite` / `Vitest`
- **Storage** - `json-server`
