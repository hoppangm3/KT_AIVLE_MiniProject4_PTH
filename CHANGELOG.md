# 프로젝트 변경 이력 (CHANGELOG)

본 문서에는 AI 이미지 생성 오류 해결 및 시스템 고도화를 위해 진행된 주요 수정 사항을 기록합니다.

---

## 1. AI 이미지 저장 오류 해결 및 최적화
*   **수정 내용:** AI 이미지 생성 후 서버 저장 시 발생하는 오류(Payload Too Large) 해결
*   **수정 방법:**
    *   `src/utils/imageUtils.js`: HTML5 Canvas를 이용한 클라이언트 사이드 이미지 압축 유틸리티 도입
    *   `src/App.jsx`: 서버 응답 에러 로그 강화 및 상세 메시지 출력 로직 추가
*   **효과:** 수 MB에 달하는 고해상도 Base64 이미지를 수백 KB로 압축하여 서버 용량 제한(413 Error) 없이 안정적으로 저장 가능. 웹 로딩 속도 대폭 향상.

## 2. 컴포넌트 구조 재설계 (Refactoring)
*   **수정 내용:** 중복 코드 제거 및 컴포넌트 재사용성 강화
*   **수정 방법:**
    *   `src/components/BookCover.jsx`: 목록, 상세, 수정 화면에서 공통으로 사용하는 표지 컴포넌트 독립
    *   `src/components/BookItem.jsx`: 도서 목록의 개별 카드 아이템 분리 (PostItem 패턴 적용)
    *   `src/screens/BookListScreen.jsx`: 반복문 로직을 `BookItem` 호출 방식으로 간소화
*   **효과:** 코드 중복 최소화, 디자인 수정 시 한 곳만 수정하면 되는 유지보수 편의성 확보.

## 3. 서비스 계층(Service Layer) 도입
*   **수정 내용:** UI 컴포넌트와 데이터 처리 로직의 분리
*   **수정 방법:**
    *   `src/services/apiService.js`: 모든 도서 CRUD(조회, 등록, 수정, 삭제) `fetch` 로직 집약
    *   `src/services/aiService.js`: OpenAI API 호출 및 이미지 처리 로직 독립
*   **효과:** 화면(Screen) 코드가 간결해지고 읽기 쉬워짐. 향후 API 주소나 서버 환경이 바뀌어도 서비스 파일만 수정하면 됨.

## 4. 검색 기능 고도화 (Debouncing)
*   **수정 내용:** 검색창 입력 시 성능 최적화
*   **수정 방법:**
    *   `src/screens/BookListScreen.jsx`: `useEffect`와 `setTimeout`을 이용해 사용자의 입력을 감지하고 0.3초 후에 검색 실행
*   **효과:** 불필요한 필터링 연산을 줄여 타자 입력 시 버벅임 현상 제거 및 부드러운 UX 제공.

## 5. 리액트 라우터(React Router) 도입
*   **수정 내용:** 조건부 렌더링 방식에서 실제 URL 기반 라우팅으로 전환
*   **수정 방법:**
    *   `react-router-dom` 라이브러리 설치
    *   `src/main.jsx`: `BrowserRouter` 적용
    *   `src/App.jsx`: `currentScreen` 상태를 삭제하고 `<Routes>`, `<Route>` 기반 주소 체계 구축
    *   `useNavigate`, `useParams` 훅을 이용한 페이지 이동 및 데이터 연동
*   **효과:** 브라우저 '뒤로 가기/앞으로 가기' 완벽 지원. 특정 페이지(예: 상세페이지)로 직접 접속 가능. 전문적인 웹 앱 구조 확보.

## 6. 개발 환경 설정 강화
*   **수정 내용:** 서버 실행 옵션 최적화 및 편의성 증대
*   **수정 방법:**
    *   `package.json`: `json-server` 실행 시 `--limit 10mb` 옵션 추가 (서버 측 용량 제한 확장)
    *   `npm run server` 스크립트 추가 및 `concurrently`를 이용한 서버 동시 실행 환경 준비
*   **효과:** 개발 단계에서 대용량 데이터를 다룰 때 발생할 수 있는 제약을 사전에 방지.

## 7. 로컬 스토리지 한계 극복 및 UI/UX 버그 수정
*   **수정 내용:** Base64 이미지 저장 시 로컬 스토리지 한도 초과 문제 및 네비게이션 버그 수정
*   **수정 방법:**
    *   `src/App.jsx`: `mock_books`에는 도서 정보만, `book_images`에는 이미지 Base64 데이터만 분리 저장하여 5MB 용량 한도 초과 문제 회피. 로드 시 두 데이터를 병합하여 복원.
    *   `src/App.jsx`: 새 글 작성 시 이전에 보았던 도서 정보가 폼에 남아있는 버그 수정 (`handleNavigate`에서 `bookId` 초기화 보장).
*   **효과:** 오프라인 모드에서도 용량 초과 에러 없이 안전하게 다수의 AI 생성 이미지 저장 및 복원 가능. 새 글 작성 시 깔끔한 빈 폼 제공.

## 8. AI 표지 생성 프롬프트 고도화 및 커스터마이징 기능
*   **수정 내용:** AI 표지 생성 시 사용자가 직접 프롬프트를 입력할 수 있도록 UI 추가 및 지시어 개선
*   **수정 방법:**
    *   `src/screens/BookFormScreen.jsx`: 작품 본문 하단에 'AI 표지 이미지 생성 프롬프트' 입력 칸 추가.
    *   사용자 입력 프롬프트와 작품 제목, 본문을 결합하여 AI에게 복합적인 맥락 전달.
    *   `src/screens/BookFormScreen.jsx`, `src/screens/BookDetailScreen.jsx`: AI가 생성하는 이미지에 책 제목을 텍스트로 포함하도록 지시어 변경 (`Include the book title...`).
    *   상세 화면에서 `db.json`에 정의된 한국어 프롬프트를 우선적으로 적용하도록 수정.
*   **효과:** 표지 생성 결과물의 퀄리티 향상, 사용자 의도를 명확하게 반영한 맞춤형 표지 제작 가능 및 실제 책 표지 같은 타이포그래피 포함 효과.

---
**최종 업데이트 일자:** 2026년 5월 26일
**수정자:** Gemini CLI (Auto-Edit Mode) & Antigravity Assistant
