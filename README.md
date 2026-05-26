# 📚 걷기의 서재 (Walk & Study)

> AI가 책 표지를 생성해주는 독서 큐레이션 플랫폼

KT AIVLE School 미니프로젝트 4차 — React + OpenAI API 기반 도서 추천 웹앱

---

## 🖼️ 프로젝트 소개

**걷기의 서재**는 사용자가 책을 탐색하고, AI가 OpenAI DALL·E API를 활용해 각 책의 줄거리와 시각적 프롬프트를 기반으로 **고유한 표지 이미지를 자동 생성**해주는 웹 애플리케이션입니다.

### 주요 기능

| 기능 | 설명 |
|------|------|
| 📖 도서 목록 | 50권의 실제 도서 카드 형식으로 탐색 |
| 🔍 도서 상세 | 줄거리, 저자, 조회수, 좋아요 확인 |
| 🤖 AI 표지 생성 | DALL·E로 책 표지 자동 생성 (title + content + prompt 조합) |
| ❤️ 좋아요 | 관심 도서 좋아요 기능 |
| ✏️ 도서 등록/수정 | 새 도서 추가 및 기존 도서 수정 |
| 🔐 로그인/회원가입 | 사용자 인증 화면 |

---

## 🛠️ 기술 스택

- **Frontend**: React 19, Vite
- **UI Library**: MUI (Material UI) v5
- **AI API**: OpenAI DALL·E (이미지 생성)
- **상태 관리**: React useState / LocalStorage
- **폰트**: tvN 즐거운 이야기체, Noto Serif KR, Inter

---

## 🚀 시작하기

### 사전 요구사항

- [Node.js](https://nodejs.org) 18 이상
- OpenAI API 키 ([발급받기](https://platform.openai.com/api-keys))

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/hoppangm3/KT_AIVLE_MiniProject4_PTH.git
cd KT_AIVLE_MiniProject4_PTH

# 2. 의존성 설치
npm install

# 3. API 키 설정 (아래 참고)

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### API 키 설정

`public/api_key.txt` 파일을 직접 생성하고 아래 내용을 입력하세요:

```
OPENAI_API_KEY=sk-proj-여기에_API_키_입력
```

> ⚠️ `public/api.txt`, `public/api_key.txt` 파일은 보안상 `.gitignore`에 포함되어 있습니다. 직접 생성해야 합니다.

---

## 📁 프로젝트 구조

```
mini4/
├── public/
│   └── api_key.txt          # API 키 (gitignore됨, 직접 생성 필요)
├── src/
│   ├── components/
│   │   └── Header.jsx       # 상단 네비게이션
│   ├── screens/
│   │   ├── Home.jsx         # 홈 화면
│   │   ├── BookListScreen.jsx   # 도서 목록
│   │   ├── BookDetailScreen.jsx # 도서 상세
│   │   ├── BookFormScreen.jsx   # 도서 등록/수정
│   │   ├── LoginSignup.jsx      # 로그인/회원가입
│   │   └── HowToUse.jsx         # 사용 방법
│   ├── App.jsx              # 라우팅 및 상태 관리
│   ├── config.js            # API 설정
│   ├── index.css            # 전역 스타일 및 폰트
│   └── main.jsx             # 진입점
├── db.json                  # 도서 데이터 (50권)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔄 다른 기기에서 이어서 작업하기

```bash
# 최신 코드 받기
git pull origin main

# 작업 후 저장
git add .
git commit -m "작업 내용 설명"
git push origin main
```

---

## 👥 팀원

| 이름 | GitHub |
|------|--------|
| hoppangm3 | [@hoppangm3](https://github.com/hoppangm3) |

---

## 📝 라이선스

KT AIVLE School 미니프로젝트 과제용
