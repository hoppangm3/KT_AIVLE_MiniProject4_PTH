# AI 미니프로젝트 4차 교안 내용 추출

## Page 1

KT AIVLE School
Make it possible
도서관리시스템 개발
(AI를 활용한 도서표지 이미지 생성)
AI 트랙 미니프로젝트 4차

## Page 2

Contents
01. 미니프로젝트 안내
02. 프로젝트 개요
03. 도메인 이해
04. 프로젝트 활용 기술 소개
05. 프로젝트 목표 및 진행 방법
06. 수행 가이드
07. 부록

## Page 3

미니프로젝트 안내
01.

## Page 4

미니 프로젝트
미니프로젝트 안내
이론 강의/실습
이론 강의로 배우고
실습을 통해
익히는 시간
빅 프로젝트
STEP1~2를 종합,
스스로 과제를 직접
발굴/기획/개발하는
시간
배운 강의를 토대로
스스로 
실제 사례에
적용해보는 시간
4

## Page 5

프로젝트 안내 – 당부 사항
1
모두가 모여 있을 때 마이크 OFF, 카메라 ON
실습 중 강의장 채팅은 NO
5

## Page 6

1
✓ 참여는 적극적으로
✓ 쉬는 시간에는 충분한 휴식 필수
✓ 조별 과제 제출의 주어진 기한 및 양식 준수
✓ 자기주도적 학습 및 자기성장을 위해 1:1 문의 되도록 지양
프로젝트 안내 – Ground Rule
6

## Page 7

프로젝트 안내 – 진행 순서
※ 궁금한 점은 구글, GPT 등 검색을 통해 주도적으로 찾아봅니다
조별과제를 통해
주어진 시간 내 미션을
스스로 해결합니다
개별과제를 통해
주어진 시간 내 미션을
스스로 해결합니다
조별과제를 통해
부족한 부분을 서로
배우고 공동과제를 
수행합니다
프로젝트에 따라 
조별 과제 제출 
및 Self-Test로 
마무리합니다
STEP1
 STEP2
 STEP3
 STEP4
7

## Page 8

프로젝트 안내 – 실습 안내
장소 교육용 노트북 (에이블 강의장은 켜두기)
과제 수행 주어진 과제를 스스로 해결하거나 찾아보기 (검색, GPT 등 활용 가능)
개요 스스로 문제를 해결해보고, 조원들과 상호 학습과 토론으로 미션을 완성하는 시간
미션 가이드에 따라 프로젝트를 완성하고, 발표 자료(PPT) 제작
① 조별 과제 수행 → ② 조별 토의 및 검증 → ③ 미션 해결 → ④ 발표자료 작성 및 공유
※ 참여 방법 : AIVLE-EDU > 조별 프로젝트 > 참가하기 (조별 줌 미팅룸)
조별 실습
제출 경로 AIVLE-EDU 강의실 > 과제 > 제출
8

## Page 9

프로젝트 안내
미니프로젝트에서 중요한 것은 무엇인가요?
제한된 시간 안에서 문제를 해결하는 연습을 통해
문제 해결 역량을 스스로 키워보세요.
부족한 부분은 조별 모임이나 전체 발표 시간을 통해
서로 배우며 함께 성장하세요.
매 미니프로젝트마다 한 단계씩 성장하길 응원합니다! 
9

## Page 10

미니프로젝트 개요
02.

## Page 11

일차별 목표는 가이드일 뿐, 팀의 속도에 따라 유연하게 조정됩니다
프로젝트 개요 - 안내
일차별 목표 ‘제시’
단계별 점진적 ‘완성’
11

## Page 12

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장)
• 미니프로젝트 설명
• 기술 스택 소개 (React + json-server + OpenAI)
• 팀 빌딩 및 R&R 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별) • 팀 내 R&R 확정
• db.json 구조 · API 엔드포인트 목록 초안 작성
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 13:50 AIVLE EDU (조별) • UI 스케치 작성 (목록 / 상세 / 등록 / 수정)
• db.json 최종 확정
5 조별 미팅 14:00 ~ 17:00 AIVLE EDU(조별)
• Vite+React 프로젝트 생성
• json-server 세팅 
• Mock 데이터 UI 렌더링
• Git 초기 커밋
• 1일차 결과물(기획서, db.json, README.md)정리
6 마무리 17:10 ~ 17:40 AIVLE EDU(강의장) • 1일차 정리
프로젝트 개요 – 일정(1일차)
12

## Page 13

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장) • M3(조회) 과제 안내
• M4(등록·수정·삭제) 과제 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별) • fetch로 GET 요청 구현
• useEffect로 도서 목록·상세 페이지 데이터 로딩
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 17:00 AIVLE EDU(조별)
• POST/PATCH/DELETE 연동
• 폼 상태관리 + 불변성 3패턴
• 브라우저 개발자 도구로 확인
5 마무리 17:10 ~ 17:40 AIVLE EDU(강의장) • 2일차 정리
프로젝트 개요 – 일정(2일차)
13

## Page 14

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장) • M5(OpenAI 표지 생성)
• M6(저장·발표 준비) 과제 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별)
• 상세 페이지에 'AI 표지 생성' 버튼 + API Key 입력 UI
• fetch로 gpt-image 모델 호출
• b64_json 추출 및 Data URL 변환
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 14:50 AIVLE EDU(조별) • 받은 Data URL을 json-server에 PATCH로 저장
• 화면 즉시 반영 · 에러 처리
5 조별 미팅 15:00 ~ 16:00 AIVLE EDU(조별)
• 발표자료 준비
• 조별 제출 : 통합 소스코드, 발표자료 ppt, 
README.md
6 전체 미팅 16:10 ~ 17:20 AIVLE EDU(전체) • 전체 발표 및 리뷰 : 5~6개 팀 선정
7 셀프테스트, 설문 17:25 ~ 17:50 AIVLE EDU(강의장) • 셀프테스트, 설문
프로젝트 개요 – 일정(3일차)
14

## Page 15

프로젝트 개요 – 기술 스택
이 프로젝트는 fetch 사용 — 별도 설치 불필요 |   이후 Backend 미니프로젝트에서 json-server → Spring Boot 로 교체 예정
Frontend 중심 구성 — Backend는 json-server가 대신 (코드 작성 불필요)
주제 AI 표지 생성을 지원하는 도서관리 시스템 (Frontend)
학습 목표 강의에서 배운 React + fetch + CRUD를 실전 프로젝트에 적용 + 외부 API(OpenAI) 연동 경험
중점 사항 ① 강의→프로젝트 전환 ② CRUD→AI 단계별 ③ 팀 협업 ④ 발표 시연
기술 스택
Frontend
React 19 · Vite ·
fetch
 데이터
json-server
(로컬 REST API)
 AI
OpenAI API
(GPT Image 모델)
 협업
GitHub
Vercel (선택)
15

## Page 16

프로젝트 개요 – 서비스 구성도
기본 흐름 CRUD - 도서 데이터 관리
React
브라우저
GET / POST / PATCH / DELETE
json-server
localhost:3000
db.json
파일 저장
AI 흐름 표지 자동 생성
React
버튼 클릭
POST + prompt①
OpenAI
GPT Image 모델
b64_json 응답 ②
json-server
PATCH books/${id}PATCH 
(coverImageUrl 필드만 업데이트)
이후 Backend 미니프로젝트에서 json-server 자리를 Spring Boot로 교체 → 풀스택 완성
응답(b64_json)을 React가 Data URL로 변환③
④
16

## Page 17

프로젝트 개요 – 3일 일정
일차별 목표는 "가이드", 팀의 속도에 따라 "유연하게" 조정됩니다
1일차
기획 + 기본 CRUD
오전
오프닝 / OT
팀 R&R
db.json 설계
오후
Vite+React + json-server 세팅
UI 뼈대 작성
json-server 동작 확인 + 도서 CRUD 완료
2일차
CRUD 완성 + AI
오전
조회 연동
fetch + GET
useEffect 로딩
오후
등록·수정·삭제
POST / PATCH / DELETE
폼 + 불변성 3패턴
도서 CRUD + AI 표지 생성 동작
3일차
UI/UX + 발표
오전
OpenAI 연동
GPT Image 모델 호출
API Key 입력 UI
오후
PATCH 저장
README + 발표자료
최종 발표
AI 표지 생성 도서관리 시스템 Frontend 완성
단계별 점진적 완성 — 1일차 CRUD → 2일차 CRUD+AI → 3일차 UI/발표
17

## Page 18

프로젝트 개요 – 난이도 계층
[필수 1]
도서 CRUD
GET · POST · PATCH · DELETE
강의에서 배운 내용을 활용해
도서 CRUD 제작
1~2일차 오전 완성
[필수 2]
AI 표지 생성
OpenAI API + fetch
CRUD가 완성되어야
AI 연동 가능
2일차 오후 ~ 3일차 오전
[권장]
저장·UX·발표
coverImageUrl PATCH + README
AI 응답을 서버에 저장
화면 반영 + 발표
3일차
[도전]
확장 기능
검색·필터·유효성
검색·필터 UI
폼 유효성 검사
여유 시 도전
단계별 점진적 완성 — CRUD → AI 연동 → 저장·발표 순서
18

## Page 19

도메인 이해
03.

## Page 20

서비스 소개
국내 최대 독서 플랫폼, “걷기가 서재”
걷기가 서재의 “작가의 산책” 서비스는 누구나 
작가가 되어 자유롭게 글을 집필하고 공개할 
수 있는 창작 플랫폼입니다.
작가의 산책의 특징은 작가의 감성과 
이야기가 그대로 표지에 닿도록 설계된, 표지 
제작 기능입니다.
기획자에게 가장 가까운 창작자의 시선을제
공합니다.
표지 디자인의 중요성
독자(User)
“끌리는 표지일수록 클릭하고 싶다”
표지디자인
책 내용
CTR,구매 전환율, 
SNS공유율 증가
“내용에 맞는 시각적 연출＂
“장르와 메시지를 시각적으로 전달”
책의 장르, 분위기,
핵심 메시지 등 
텍스트 기반 콘텐츠
시각적 첫인상,
독자의 클릭 유도
감성적 인상 등으로
구매 여부를 
결정하는 소비자
CTR : Click-Through Rate(클릭률)
배경설명
20

## Page 21

① 도서목록확인
-웹 애플리케이션에 접속하여 내가 등록한 도서를 한눈에 
확인할 수 있어야 한다.
② 신규 도서 등록
-필요에 따라 새로운 도서를 등록할 수 있으며, 
이때 도서의 제목과 내용을 입력한다.
③ 도서 상세 정보 조회
-등록된 도서의 상세 내용을 클릭 한 번으로 열람 할 수 
있어야 한다.
④ 도서 수정 및 삭제
-도서 정보를 수정하거나, 더 이상 필요 없는  도서를 삭제 할 
수 있다.
⑤ AI 표지 이미지생성
-AI가 도서내용을분석하여어울리는표지이미지를
자동생성해주며, 해당표지는도서정보와함께
직관적으로확인할수 있어야한다.
요구사항
고객 관점에서의 요구사항 요구사항 분석
항목 기능 요구사항
도서 목록 확인 • 목록에는 최소한 도서 제목, 등록일표시
신규 도서 등록
• 신규 도서 등록 버튼 제공
• 제목, 내용 입력 필드 구성
• 유효성 검사(공백 금지 등)
도서 상세 정보 조회 • 도서 목록에는 카드 또는 리스트 클릭 시 상세 페이지로 이동
• 표지, 작성일, 수정일, 본문 내용 포함
도서 수정 및 삭제
• [수정] 버튼 클릭 시 기존 정보 자동 불러오기 및 수정 후 저장 가능
• [삭제] 버튼 클릭 시 확인 알림 후 제거
• 삭제 시 목록에서도 즉시 반영
AI 표지 이미지 생성
• AI 이미지 생성 버튼 또는 자동 생성 트리거
• 도서 내용 기반 키워드 추출 -> 이미지 생성
• 표지 미리보기 및 재생성 기능
• 생성된 표지는 상세 페이지 및 목록에 자동 반영
요구사항
21

## Page 22

▪ 기존의 텍스트 중심 도서 관리는 직관성이 떨어질 수 있음
▪ 수동으로 표지 이미지를 찾아 등록하는 것은 번거로운 작업
▪ 프론트엔드 개발 및 외부 API 연동 경험이 부족한 학습자에게 실습 기회가 필요
프로젝트 최종 목표
▪ json-server와 React를 사용하여 안정적이고 확장 가능한 도서 관리 시스템을 구축
▪ 사용자가 손쉽게 도서를 등록, 조회, 수정, 삭제할 수 있는 CRUD 기능을 제공
▪ OpenAI API를 연동하여, 도서 제목이나 내용에 기반한 표지를 자동으로 생성하는 기능을 구현
▪ React 컴포넌트로 사용자 친화적인 기본 UI를 제공
프로젝트 목표
프로그램의 개요 및 활용
▪ 누구나 글을 쓰고, AI의 도움으로 나만의 작품을 완성할 수 있도록 설계된 창작 플랫폼
▪ 단순한 글 관리 도구를 넘어, AI와 함께 만드는 시각적 상상력을 제공
▪ 일기부터 소설까지, AI는 사용자의 감정이 담긴 글에 어울리는 표지를 생성하며 감성적인 창작 경험을 완성
문제정의
22

## Page 23

프로젝트 활용 기술 소개
04.

## Page 24

기술 소개 – json-server db.json설계
강의: 게시판 모델 (post)
{ id, title, author, likes }
id      : 식별자
title   : 게시글 제목
author  : 작성자
likes   : 좋아요 수 (PATCH 패턴 학습)
+
content
+
coverImageUrl
+
createdAt
프로젝트: 도서 모델 (book)
{id, title, author, content, coverImageUrl, createdAt, updatedAt }
content: 도서 내용, AI 프롬프트 생성에 활용, 
coverImageUrl: 이미지 URL 또는 Data URL, 
createdAt/updatedAt: 등록·수정일
db.json 예시
{
"books": [
{ "id": 1, "title": "별빛 아래의 서점", "author": "홍길동",
"content": "작은 마을 서점의 1년을 담은 에세이",
"coverImageUrl": "",
"createdAt": "2026-04-24T09:00:00.000Z",
"updatedAt": "2026-04-24T09:00:00.000Z" }
]
}
실행 방법
$ npx json-server@0.17.4  --watch db.json
→ http://localhost:3000/books
→ 자동으로 GET / POST / PATCH /
DELETE 엔드포인트 제공
Frontend 강의 모델에서 필요한 부분은 재사용하고, 사용할 필드만 추가하면 도서 모델 완성!
24

## Page 25

✓ Vite
▪ Vite란?
• 빠르고 간결한 웹 프로젝트 개발에 초점을 맞춰 탄생한 빌드 도구
• Esbuild의 빠른 속도와 브라우저 모듈의 장점을 결합
• HMR(Hot Module Replacement)를 포함하여 간단한 개발 서버 제공
• 주요 특징
• 화면 호출 시, 필요한 파일만 즉시 로딩하는 방식 사용
• Vue, React, Preact 등 다양한 프론트엔드 프레임워크 지원
• npm run dev 명령어를 통한 실행
기술 소개 – Vite
25

## Page 26

✓ OpenAI API (          GPT image 2 )
• GPT image 모델 중 하나로
• 다국어 텍스트/이미지 입력과 이미지 출력을 지원
• 사용 시 조직 인증이 필요할 수 있음
• 문맥 흐름을 파악하며, 추상적인 표현 이해 가능
• 주요 특징
▪ 해상도 : 표준크기로 1024x1024, 1024x1536 등을 지원
▪ 성능 : GPT Image 1에 비해 텍스트 렌더링 성능 개선 
API(Application Programming Interface)
async function 
loadBookDetail
(
bookId
) {
// 
1
. 
json
-
server
에서 
도서 
정보 
가져오기 
(GET)
//  
2
. 
가져온 
도서 
정보를 
화면 
상태에 
저장
}
async function 
handleGenerateCover
(book) {
// 
1
. 
도서 
제목과 
내용으로 
프롬프트 
구성
// 
2
. OpenAI
로 
표지 
이미지 
생성 
요청 
(POST)
// 
3
. 
응답의 
b
64
_json
을 
Data URL
로 
변환
// 
예
: 
data:image
/png;base
64
,${b
64
_json}
// 
4
. 
변환한 
Data URL
을 
json
-
server
에 
저장 
(PATCH)
// 
coverImageUrl
 상태 
업데이트로 
화면 
즉시 
반영
// 
5
. 
화면 
상태 
업데이트
26

## Page 27

OpenAI API 호출 흐름도
1. React → OpenAI
사용자가 입력한 API 키와
`prompt`를 `fetch`의 헤더와
바디에 담아 OpenAI 서버로 직접
`POST` 요청을 보냅니다.
2. OpenAI → React
OpenAI가 이미지를 생성하고,
응답 JSON의 data[0].b64_json에
base64 이미지 문자열을 담아
React로 반환합니다.
3. React → json-server
React는 받은 b64_json을
data:image/png;base64,... 형태의
Data URL로 변환합니다.
이 값을 fetch(PATCH)로 
json-server의 /books/${id}에 보내
coverImageUrl 필드에 저장합니다.
API(Application Programming Interface)
유의사항
API Key를 코드에 하드코딩하거나 GitHub에 업로드하면 외부에 유출될 수 있습니다.
본 실습은 프론트엔드 단독 구조이므로 학습용으로 API Key를 구현한 화면의 입력창에 직접 입력합니다.
27

## Page 28

OpenAI API 요청 명세서
API 엔드포인트
1. `fetch` 헤더 (Headers)
fetch의 `headers` 객체에 두 값을 포함해야 합니다.
2. `fetch` 바디 (Body)
fetch의 `body`에 `JSON.stringify()`로 변환하여 보낼 객체입니다.
Method `POST`
URL `https://api.openai.com/v1/images/generations`
`'Content-Type'` `'application/json'`
`'Authorization'` `'Bearer ' + userApiKey` 
(
 'Bearer'와 띄어쓰기를 꼭 포함해야 합니다!)
`prompt` (필수) 도서 제목이나 내용을 기반으로 생성 (예: "A book cover for...")
`model` (필수) UI에서 고정 (예: “gpt-image-2”)
`n` (필수) `1` (생성할 이미지 개수)
`size` (필수) UI에서 선택 또는 고정 (예: "1024x1536")
`quality` (선택) UI에서 선택 (예: “low” / “medium” / “high” / “auto”)
`output_format` (선택) UI에서 선택 (예: “png" / “jpeg” / “webp”)
API(Application Programming Interface)
28

## Page 29

시나리오: 사용자가 특정 도서의 “AI 표지 생성" 버튼을 클릭 — 여기서 id는 해당 도서의 id이며, title/content로 프롬프트를 구성합니다.
코드 (fetch + PATCH)
// 1. OpenAI 이미지 생성 요청
const res = await fetch(OPENAI_IMAGE_API_URL, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${userApiKey}`,
},
body: JSON.stringify({
model: 'gpt-image-2',
prompt,
n: 1,
size: '1024x1536',
quality: selectedQuality,
output_format: 'png',
}),
});
if (!res.ok) throw new Error('OpenAI 요청 실패');
핵심 포인트
①
요청 구성
도서의 title/content로 만든 prompt를OpenAI 
이미지 생성 API에 POST 요청으로 전달
②
이미지 생성 옵션
model, size, quality, output_format 지정
본 실습에서는 1024x1536, png 형식 사용 권장
③
에러 처리
Authorization 헤더에 사용자 API Key 전달
res.ok 체크 필수
예) 401: API Key 확인, 429: 사용량/Rate Limit
OpenAI에서 옵션을 지정해, 이미지 생성을 요청하고 응답(res.ok)을 확인합니다. 
API(Application Programming Interface)
29

## Page 30

시나리오: 사용자가 특정 도서의 “AI 표지 생성" 버튼을 클릭 — 여기서 id는 해당 도서의 id이며, title/content로 프롬프트를 구성합니다.
코드 (fetch + PATCH)
// 2. OpenAI 응답 파싱 후 b64_json 추출
const data = await res.json();
const b64Json = data.data?.[0]?.b64_json;
// b64_json을 Data URL 형태로 변환합니다.
const imageSrc = `data:image/png;base64,${b64Json}`;
// 3. json-server에 coverImageUrl만 PATCH
// 바뀔 필드만 body에 담아 전송합니다.
await fetch(`http://localhost:3000/books/${id}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
coverImageUrl: imageSrc,
}),
});
핵심 포인트
①
응답 파싱
OpenAI 응답 파싱 후 b64_json 추출,
data:image/png;base64,... 형태로 변환 필요
②
PATCH 패턴
강의 Chapter 5 Unit 5에서 배운 PATCH와 같음
— 변환한 Data URL(imageSrc)을
바꿀 필드(coverImageUrl)만 body에 담기
③
강의 Chapter 5 Unit 5에서 배운 PATCH와 같은 패턴 — 바꿀 필드만 body에 담으면 됩니다
API(Application Programming Interface)
30

## Page 31

Data URL 저장
마지막: json-server에 URL 저장하기
OpenAI API로부터 b64_json 문자열을 성공적으로 받아왔다면, 
React에서 data:image/png;base64,... 형태의 Data URL로 변환한 뒤,
json-server에 저장할 차례입니다.
강의 Chapter 5에서 배운 PATCH 패턴 그대로 — fetch로 PATCH /books/${id} 호출 
body: {  
coverImageUrl: imageSrc
}
이 요청이 성공하면, setBooks (React의 useState)를 사용하여 화면의 표지 이미지를 즉시 업데이트합니다.
API(Application Programming Interface)
31

## Page 32

프로젝트 목표 및 진행 방법
05.

## Page 33

프로젝트 목표 – 프로젝트 수행 목표
이번 프로젝트 수행 목표는!
AI 이미지 생성 기술 을 활용해 
도서 표지를 자동 생성하는 기능을 
포함한 도서 관리 시스템 개발 
33

## Page 34

브라우저
React App
(Vite)
fetch (GET/POST/PATCH/DELETE)
JSON 응답
json-server
db.json (파일 기반)
fetch (POST, API Key + prompt)
b64_json 응답
React 내부 변환
b64_json → Data URL
OpenAI API
GPT Image (이미지 생성)
서비스 구성도
프로젝트 목표
▪ React SPA가 json-server와 OpenAI를 각각 호출하는 구조
중요 — 별도의 백엔드 서버 없이 json-server가 가짜 REST API 역할을 하고, OpenAI는 브라우저에서 직접 호출합니다.
34

## Page 35

프로젝트 진행 과정
프로젝트 목표
▪ 매일 기능이 쌓이는 점진 확장 방식
어제 만든 것 위에, 오늘의 한 단계를 더합니다
UI 뼈대
D A Y  1
UI 뼈대
+ CRUD
D A Y  2
UI 뼈대
+ CRUD
+ AI 표지
D A Y  3
매일의 성취
1 설계 & UI 뼈대
요구사항 · json-server · Mock UI
2 데이터 연동 추가
fetch로 CRUD 전체 연결
3 AI 결합 + 마무리
OpenAI · 저장 · 발표
최종 산출물 — 소스코드(GitHub) + README.md + 발표자료(PPT)
35

## Page 36

미션과제– 1일차
미션 수행 과제 주요내용 산출물
미션 1. 조별 기획/설계
• 요구사항 정의 및 기능 명세 작성 (핵심 기능 · 부가 기능 구분)
• 주요 사용자 시나리오 정리 (도서 조회 → 상세 → 수정 → 표지 생성 등)
• db.json데이터 구조 설계 (도서 필드 정의 · 예시 데이터 준비)
• API 엔드포인트 목록 정의 (/books, /books/:id 등 · 메서드 매핑)
• 화면 구성 스케치 (목록 / 상세 / 등록 · 수정 · 화면 전환 흐름)
• 팀 내 역할 분담 확정
(개별 제출 없음)
미션 2. 조별 환경설정
• Vite + React 프로젝트 생성 · 폴더 구조 정비
• json-server 설치 + db.json생성 (1일차 설계 구조 반영)
• 페이지 컴포넌트 구조 작성 (목록 / 상세 / 등록 / 수정)
• 공통 레이아웃 (헤더 · 네비게이션) + 기본 스타일 작성
• Mock 데이터로 목록 · 상세 화면 렌더링 확인
• Git 저장소 생성 · 초기 커밋 (README.md 기본 구조 포함)
소스코드 저장소 내
README.md에
 서비스 기본 구조 및 
실행 방법 명시
(3일차에  제출)
1일차 미션
36

## Page 37

미션과제– 2일차
미션 수행 과제 주요내용 산출물
미션 3. 조별 조회 기능 연동 
(Read)
• fetch로 json-server GET 요청 구현 (/books, /books/:id)
• API URL 상수 정리 및 fetch 호출 구조 통일 (중복 제거)
• useEffect로 컴포넌트 마운트 시 · 의존성 변경 시 데이터 로딩
• 도서 목록 · 도서 상세 페이지를 실제 데이터로 렌더링
• [심화] 검색 · 필터 UI 추가 (Array.filter활용)
• 로딩 · 에러 · 빈 목록 상태 처리 (try-catch)
소스코드 저장소 내
README.md에
 API 기능 명시
(3일차에  제출)
미션 4. 조별
등록 · 수정 · 삭제 연동
(Create / Update / 
Delete)
• 도서 등록 폼 → POST 요청 (새 도서 필드 전체 전송)
• 도서 수정 폼 → PATCH 요청 (변경된 필드만 부분 업데이트)
• 삭제 버튼 → DELETE 요청 (삭제 전 사용자 확인 권장)
• 폼 입력 상태관리 + 불변성 3패턴 적용 (...spread 활용)
• [심화] 폼 유효성 검사 (필수 입력 · 길이 제한 등) 및 에러 메시지 표시
• 성공 · 실패 피드백 UI + 완료 후 목록 화면으로 전환
소스코드 저장소 내
README.md에
 API 기능 명시
(3일차에  제출)
2일차 미션
37

## Page 38

미션과제– 3일차
미션 수행 과제 주요내용 산출물
미션 5. 조별 OpenAI 표지
생성 연동
• 상세 페이지에 'AI 표지 생성' 버튼 및 생성 모달/영역 추가
• API Key 입력 UI (password 타입 · 조별 키 사용)
• 프롬프트 템플릿 구성 (도서 제목 · 저자 · 내용 조합 등)
• 생성 모델 · 이미지 크기 등 옵션 선택 UI (GPT Image 2)
• fetch로 GPT Image API 호출 → b64_json 추출 → Data URL 변환
• 로딩 · 에러 상태 처리 + 생성 시 비용 발생 안내
소스코드 저장소 내
README.md에
 OpenAI 표지 생성 기능 및 
실행 방법 명시
(3일차에 제출)
미션 6. 조별 저장 · UX 완성 + 
발표 준비
• OpenAI 응답에서 변환된 Data URL을 json-server에 PATCH로 저장
• 생성된 표지를 상세 페이지에 즉시 반영 (상태 업데이트)
• E2E 시나리오 검증 + 버그 수정 (등록 → 표지 생성 → 저장 플로우)
• 데모 시나리오 정리 + 발표자료(PPT) 작성
• README.md에 주요 화면 스크린샷 · 실행 방법 가이드 포함
• 최종 코드 정리 · 불필요한 주석 · console.log 제거
최종 산출물
node_modules 폴더 제외 
소스코드(AI_##조.zip),
결과보고서(AI_##조.pptx), 
README.md를 포함하여
압축 후 제출
3일차 미션
38

## Page 39

주요 미션별 힌트 — 1일차 (1/2)
1일차 · 기획 / 설계  — M1
db.json 구조 설계
▪ json-server는 db.json을 읽어 REST API를 자동 생성합니다.
▪ 최상위 키 → 리소스 이름 (복수형 권장, 예: books)
▪ 각 객체는 id 필드가 있어야 하고, json-server가 자동 증가시킵니다.
▪ 도서에 필요한 필드: id / title / author / content / coverImageUrl
/ createdAt / updatedAt 등
▪ coverImageUrl은 처음엔 비어 있고, OpenAI 호출 후 채워 넣습니다.
db.json 예시
{
"books": [
{
"id": 1,
"title": "별빛 아래의 서점",
"author": "홍길동",
" content": "...",
"coverImageUrl": "",  // 처음엔 빈 문자열
"createdAt": "2026-04-24T09:00:00.000Z",
"updatedAt": "2026-04-24T09:00:00.000Z"
}
]
}
39

## Page 40

주요 미션별 힌트 — 1일차 (2/2)
1일차 · 개발환경 + UI 뼈대  — M2
json-server 설치 & 실행
▪ npm install -g json-server (전역 설치 권장)
▪ 프로젝트 루트에 db.json 파일 생성
▪ json-server --watch db.json --port 3000
▪ 기본 주소: http://localhost:3000/books
Vite + React 프로젝트 생성
▪ npm create vite@latest my-app -- --template react
▪ cd my-app && npm install
▪ npm run dev (기본 포트 5173)
▪ 두 서버를 동시에 실행해야 합니다 (터미널 2개).
실행 예시 (터미널 2개 필요)
# 터미널 1 — json-server 실행
$ json-server --watch db.json --port 3000
# 확인
→ http://localhost:3000/books
# 터미널 2 — React 개발서버 실행
$ cd my-app
$ npm run dev
# 확인
→ http://localhost:5173
40

## Page 41

주요 미션별 힌트 — 2일차 (1/2)
2일차 · 조회 기능 (Read)  — M3
fetch + useEffect 패턴
▪ useEffect는 컴포넌트가 화면에 나타난 직후 실행됩니다.
▪ 의존성 배열이 []이면 최초 1회만 실행됩니다.
▪ fetch는 비동기 함수 → async/await 사용.
▪ res.json()으로 응답 본문을 파싱합니다.
▪ 실패 대비 try-catch 필수.
→ Chapter 5 Unit 3 참고
도서 목록 로딩 (GET /books)
① useState로 books 배열 상태를 빈 배열로 초기화
② useEffect 내부에 비동기 함수를 정의하고 즉시 호출
③ try-catch 블록 안에서 fetch로 GET 요청
④ res.ok 확인 후 res.json()으로 응답 파싱
⑤ setBooks로 상태 업데이트 (렌더링 트리거)
⑥ 의존성 배열 [] 지정 — 왜 이렇게 하는지 생각해보기
41

## Page 42

주요 미션별 힌트 — 2일차 (2/2)
2일차 · 등록·수정·삭제 (C/U/D)  — M4
POST  ·  등록
① URL은 /books (id 없음)
② body에 새 도서 전체 필드 전달
③ 응답으로 id 포함된 객체 수신
④ 목록 state에 새 항목 추가
URL은 /books (id 없음)
json-server가 id 자동 부여
PATCH  ·  수정
① URL에 /books/:id 형태로 id 포함
② body에 변경된 필드만 전달
③ 응답으로 업데이트된 객체 수신
④ 목록 state의 해당 항목 교체
URL에 id 포함 필수
PATCH는 변경된 필드만 전달
DELETE  ·  삭제
① URL에 /books/:id 형태로 id 포함
② headers·body 없음 (method만)
③ 응답 본문 없음 (200/204 상태만 확인)
④ 목록 state에서 해당 항목 제거
삭제 전 확인창 권장
성공 후 상태 갱신
42

## Page 43

주요 미션별 힌트 — 3일차 (1/2)
3일차 · OpenAI 표지 생성  — M5
OpenAI GPT Image 호출 규칙
▪ 엔드포인트: https://api.openai.com/v1/images/generations
▪ 헤더: Authorization: Bearer <API_KEY>
▪ 헤더: Content-Type: application/json
▪  요청 본문: { model, prompt, n, size, quality, output_format }
▪ 프롬프트는 도서 제목·내용을 조합해 구성
▪ 응답: b64_json에는 순수 base64 문자열이 들어 있고, 
프론트에서 data:image/png;base64,... 형태의 Data URL로 직접 
변환해야 함
▪ API Key는 password 타입 input으로 입력받기
GPT Image 호출 예시
// GPT Image 2 호출 뼈대 — TODO 채우기
const handleGenerateCover = async () => {
try {
// TODO 1: API Key 확인
    // TODO 2: book.title, book.content로 prompt 구성
    // TODO 3: OpenAI Image API 호출
    // model, size, quality, output_format 등)
// TODO 4: 응답 확인 및 JSON 파싱
    // TODO 5: b64_json 추출 후 Data URL로 변환
  } catch (err) {
// TODO 6: 에러 처리
  }
};
43

## Page 44

주요 미션별 힌트 — 3일차 (2/2)
3일차 · 저장 + UX 완성  — M6
전체 플로우 (표지 생성 버튼 클릭 시)
▪ ① API Key 유효성 검사 (빈 값 체크)
▪ ② 로딩 상태 ON → 버튼 비활성화 & '생성 중...' 표시
▪ ③ OpenAI 호출 → b64_json 추출 → Data URL 변환
▪ ④ json-server PATCH → coverImageUrl 저장
▪ ⑤ 상태 갱신 → 화면에 표지 즉시 반영
예외 처리 포인트
▪ 네트워크 오류 → catch 블록에서 사용자 알림
▪ 401 Unauthorized → API Key 확인 유도
▪ 429 Rate Limit → 잠시 후 재시도 안내
▪ 응답 형식이 예상과 다를 때 → JSON 파싱 에러 처리
OpenAI → json-server 저장 (PATCH)
① URL에 도서 id 포함 — /books/:id 형태로 대상 지정
② method: 'PATCH' + Content-Type 헤더 설정
    (도서 수정과 동일 패턴)
③ body는 변경된 필드만 — coverImageUrl 한 필드만 전송
④ 성공 후 state 업데이트 → 화면에 즉시 반영 (불변성 map 패턴)
44

## Page 45

팀 미션 진행 시 역할 분담 예시
발표 · 문서
✓ README.md 정리
✓ 발표자료 작성
✓ 데모 시연 준비
스타일링 · QA
✓ CSS 마감
✓ 반응형 대응
✓ E2E 시나리오 테스트
OpenAI 연동
✓ GPT Image API 
호출 및 응답 변환
✓ API Key UI
✓ 에러 · 로딩 처리
CRUD 연동
✓ json-server 세팅
✓ 목록 / 상세 / 등록 / 
수정 / 삭제 API 연동
UI · 레이아웃
✓ 페이지 구조 설계
✓ 공통 컴포넌트 제작
✓ 전체 디자인 톤 관리
PM · 기획
✓ 과제 총괄 진행
✓ 요구사항 정의
✓ 기능 명세서 작성
TIP — 역할은 '전담'보다 '주담당'. 진행 중 서로 도와주고, 미션이 끝나면 자연스럽게 다음 역할로 합류하세요.
45

## Page 46

과제 수행 전략
프로젝트 진행 방법
계획 우선 Plan First
각 일차 오전/오후 목표를 명확히 하고, 제출 기한부터 역산해서 시간 관리 계획을 세웁니다.
점진적 개발 Incremental Development
처음부터 완벽한 시스템을 만들려고 하기보다, 작은 기능 단위로 나누어 개발하고 각 기능이 완료될 때마다 테스트합니다. 
예를 들어, fetch 호출 하나 만들고 브라우저 콘솔에서 응답 확인, 이후 컴포넌트에서 해당 API 연동하는 방식입니다.
문서 적극 활용 Utilize Documentation
React, json-server, fetch, OpenAI 공식 문서를 적극 참고하세요. 제공된 강의 자료와 예제 코드도 꼼꼼히 살펴보세요.
페어 프로그래밍 · 팀워크 Pair Programming
혼자 해결하기 어려운 문제는 동료와 함께 고민하고 해결책을 찾아봅니다 (페어 프로그래밍).
서로의 진행 상황을 공유하고 도움을 주고받으세요.
오류 메시지 분석 Analyze Error Messages
오류 발생 시 당황하지 말고, 콘솔(브라우저 개발자 도구, IDE 콘솔)의 메시지를 찬찬히 읽으세요. 문제 해결의 실마리가 거기 있습니다.
46

## Page 47

과제 수행 가이드 – 산출물 예시
47

## Page 48

수행 가이드
06.

## Page 49

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장)
• 미니프로젝트 설명
• 기술 스택 소개 (React + json-server + OpenAI)
• 팀 빌딩 및 R&R 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별) • 팀 내 R&R 확정
• db.json 구조 · API 엔드포인트 목록 초안 작성
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 13:50 AIVLE EDU (조별) • UI 스케치 작성 (목록 / 상세 / 등록 / 수정)
• db.json 최종 확정
5 조별 미팅 14:00 ~ 17:00 AIVLE EDU(조별)
• Vite+React 프로젝트 생성
• json-server 세팅 
• Mock 데이터 UI 렌더링
• Git 초기 커밋
• 1일차 결과물(기획서, db.json, README.md)정리
6 마무리 17:10 ~ 17:40 AIVLE EDU(강의장) • 1일차 정리
프로젝트 개요 – 일정(1일차)
49

## Page 50

과제 수행 가이드 - 1일차 조별 과제 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   
조원들과 
함께 
주어진 
미션을 
해결해 
보는 
시간
AIVLE-EDU 강의실 > 학습자료 > [템플릿] 조별산출물_##반_##조.pptx준비사항
R&R · 프로젝트 이해 및 정리 · db.json 구조 · API 엔드포인트 목록 · UI 스케치 작성(M1 수행)내용
10:20~13:50 (약 2시간 30분) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M1 (기획서 / db.json 구조 / UI 스케치) (13:50 까지)순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 14:00까지 미팅 참여다음 일정
50

## Page 51

과제 수행 가이드 - 1일차 조별 과제 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   
조원들과 
함께 
주어진 
미션을 
해결해 
보는 
시간
AIVLE-EDU 강의실 > 학습자료 > [템플릿] 조별산출물_##반_##조.pptx준비사항
R&R · 프로젝트 이해 및 정리 · db.json 구조 · API 엔드포인트 목록 · UI 스케치 작성(M1 수행)내용
10:20~13:50 (약 2시간 30분) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M1 (기획서 / db.json 구조 / UI 스케치) (13:50 까지)순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 14:00까지 미팅 참여다음 일정
조별 
과제 
권장 
진도
M1(
기획
/
설계
) 
미션 
구현 
13:50
까지 
조별 
완성

## Page 52

과제 수행 가이드 - 1일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
오전에 작성한 조별 산출물 ppt 파일준비사항
기본 프로젝트 구조(Vite+React, json-server) 세팅 및 UI 뼈대 작성 (M2 수행)내용
14:00~17:00 (약 3시간) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
Vite+React 생성 → json-server 세팅 → Mock 데이터 UI 렌더링 → Git 업로드 (17:00 까지)순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘강의장’에 17:10까지 미팅 참여다음 일정
52

## Page 53

과제 수행 가이드 - 1일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
오전에 작성한 조별 산출물 ppt 파일준비사항
기본 프로젝트 구조(Vite+React, json-server) 세팅 및 UI 뼈대 작성 (M2 수행)내용
14:00~17:00 (약 3시간)시간
Vite+React 생성 → json-server 세팅 → Mock 데이터 UI 렌더링 → Git 업로드 (17:00 까지)순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘강의장’에 17:10까지 미팅 참여다음 일정
조별 
과제 
권장 
진도
M2(
개발환경
/UI 
뼈대
) 
미션 
구현 
17:00
까지 
조별 
완성

## Page 54

Summary(1일차)
목표 달성 완료 하셨나요~? 스스로 적용해보는 프로젝트!
Complete!
Upgrade!
1프로젝트 기획 완료 + React + json-server 뼈대 세팅 완성!
오늘의 목표
54

## Page 55

Make it possible


## Page 56

Make it possible
AI 트랙 미니프로젝트 4차
도서관리시스템 개발(2일차)
(AI를 활용한 도서표지 이미지 생성)

## Page 57

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장) • M3(조회) 과제 안내
• M4(등록·수정·삭제) 과제 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별) • fetch로 GET 요청 구현
• useEffect로 도서 목록·상세 페이지 데이터 로딩
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 17:00 AIVLE EDU(조별)
• POST/PATCH/DELETE 연동
• 폼 상태관리 + 불변성 3패턴
• 브라우저 개발자 도구로 확인
5 마무리 17:10 ~ 17:40 AIVLE EDU(강의장) • 2일차 정리
프로젝트 개요 – 일정(2일차)
57

## Page 58

과제 수행 가이드 - 2일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
1일차 완성 기획서 · db.json · 프로젝트 뼈대 (GitHub 저장소)준비사항
fetch로 GET 요청 구현 / useEffect로 도서 목록·상세 페이지 데이터 로딩 (M3 수행)내용
10:20~12:00 (약 2시간)  쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M3 수행 완료순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 13:00까지 미팅 참여다음 일정
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
58

## Page 59

과제 수행 가이드 - 2일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
1일차 완성 기획서 · db.json · 프로젝트 뼈대 (GitHub 저장소)준비사항
fetch로 GET 요청 구현 / useEffect로 도서 목록·상세 페이지 데이터 로딩 (M3 수행)내용
10:20~12:00 (약 2시간)  쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M3 수행 완료순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 13:00까지 미팅 참여다음 일정
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
조별 
과제 
권장 
진도
M3(
조회
) 
미션 
구현 
12:00
까지 
조별 
완성

## Page 60

과제 수행 가이드 - 2일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
M3(조회) 소스코드준비사항
POST/PATCH/DELETE 연동 및 폼 상태관리 + 불변성 3패턴 (M4 수행)내용
13:00~17:00 (약 4시간)  쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M3(조회) + M4(등록·수정·삭제) 연동 구현순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘강의장’에 17:10까지 미팅 참여다음 일정
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
60

## Page 61

과제 수행 가이드 - 2일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
M3(조회) 소스코드준비사항
POST/PATCH/DELETE 연동 및 폼 상태관리 + 불변성 3패턴 (M4 수행)내용
13:00~17:00 (약 4시간)  쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M3(조회) + M4(등록·수정·삭제) 연동 구현순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > ‘강의장’에 17:10까지 미팅 참여다음 일정
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
조별 
과제 
권장 
진도
M
4
(
등록
·
 수정
·
 삭제
) 
연동 
구현 
17:00
까지 
조별 
완성

## Page 62

Summary(2일차)
목표 달성 완료 하셨나요~? 스스로 적용해보는 프로젝트!
Complete!
Upgrade!
1fetch로 조회 · 등록 · 수정 · 삭제 기본 기능 완성!
오늘의 목표
62

## Page 63

Make it possible


## Page 64

Make it possible
AI 트랙 미니프로젝트 4차
도서관리시스템 개발(3일차)
(AI를 활용한 도서표지 이미지 생성)

## Page 65

No 활동 시간 플랫폼 내용
1 개요 09:20 ~ 10:10 AIVLE EDU(강의장) • M5(OpenAI 표지 생성)
• M6(저장·발표 준비) 과제 안내
2 조별 미팅 10:20 ~ 12:00 AIVLE EDU(조별)
• 상세 페이지에 'AI 표지 생성' 버튼 + API Key 입력 UI
• fetch로 gpt-image 모델 호출
• b64_json 추출 및 Data URL 변환
3 점심 12:00 ~ 13:00
4 조별 미팅 13:00 ~ 14:50 AIVLE EDU(조별) • 받은 Data URL을 json-server에 PATCH로 저장
• 화면 즉시 반영 · 에러 처리
5 조별 미팅 15:00 ~ 16:00 AIVLE EDU(조별)
• 발표자료 준비
• 조별 제출 : 통합 소스코드, 발표자료 ppt, 
README.md
6 전체 미팅 16:10 ~ 17:20 AIVLE EDU(전체) • 전체 발표 및 리뷰 : 5~6개 팀 선정
7 셀프테스트, 설문 17:25 ~ 17:50 AIVLE EDU(강의장) • 셀프테스트, 설문
프로젝트 개요 – 일정(3일차)
65

## Page 66

과제 수행 가이드 - 3일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
2일차까지 완료된 CRUD 통합 소스 코드준비사항
상세 페이지에 'AI 표지 생성' 버튼 + API Key 입력 UI
fetch로 GPT Image 호출 · base64 추출 및 Data URL 변환 (M5 수행)내용
10:20~12:00 (약 2시간) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M5 OpenAI 연동 (12:00까지)순서/권장진도
제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 13:00까지 미팅 참여다음 일정
제출 없음
66

## Page 67

과제 수행 가이드 - 3일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
2일차까지 완료된 CRUD 통합 소스 코드준비사항
상세 페이지에 'AI 표지 생성' 버튼 + API Key 입력 UI
fetch로 GPT Image 호출 · base64 추출 및 Data URL 변환 (M5 수행)내용
10:20~12:00 (약 2시간) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M5 OpenAI 연동 (12:00까지)순서/권장진도
제출
AIVLE-EDU 메인화면 > ‘조별 미팅’에 13:00까지 미팅 참여다음 일정
제출 없음
조별 
과제 
권장 
진도
M5(OpenAI 
표지 
생성
) 
구현 
12:00
까지 
조별 
완성

## Page 68

과제 수행 가이드 - 3일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
M5까지 완료된 CRUD 통합 소스 코드준비사항
M6(저장·UX 완성), 최종 산출물(PPT, README.md) 작성 및 마무리내용
13:00~16:00 (약 3시간) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M6 저장·발표자료 작성 (16:00까지 제출)순서/권장진도
제출
AIVLE-EDU 메인화면 > ‘전체 미팅’에 16:10까지 미팅 참여다음 일정
조별 node_modules 폴더를 제외한 코드파일(AI_##조.zip)과 결과보고서(AI_##조.pptx), README.md 
파일을 압축하여(AI_##반_##조.zip) 16:00까지 AIVLE-EDU > 강의실 > 과제에 제출 
68

## Page 69

과제 수행 가이드 - 3일차 조별 미팅 수행
AIVLE-EDU 메인화면 > 조별 미팅 > 참가하기 (조별 줌 미팅룸)장소
이 시간은?   조원들과 함께 주어진 미션을 완성하는 시간
M5까지 완료된 CRUD 통합 소스 코드준비사항
M6(저장·UX 완성), 최종 산출물(PPT, README.md) 작성 및 마무리내용
13:00~16:00 (약 3시간) 쉬는 시간은 각자 알아서 분배해서 쉬어주세요.시간
M6 저장·발표자료 작성 (16:00까지 제출)순서/권장진도
제출
AIVLE-EDU 메인화면 > ‘전체 미팅’에 16:10까지 미팅 참여다음 일정
조별 1개의 통합 코드파일(AI_##조.zip)과 ppt 파일, README.md 파일을
압축하여(AI_##반_##조.zip) 16:00까지 AIVLE-EDU > 강의실 > 과제에 제출 
조별 
과제 
권장 
진도
M6(
저장
·UX 
완성
)
최종 
산출물
(PPT, README.md) 
작성 
및 
마무리
조별 
node_modules
 폴더를 
제외한 
코드파일
(AI_##
조
.zip)
과 
결과보고서
(AI_##
조
.pptx), README.md  
파일을
압축하여
(AI_##
반
_##
조
.zip)
16:00
까지 
AIVLE
-
EDU > 
강의실 
> 
과제에 
제출

## Page 70

AIVLE-EDU 메인화면 > 전체 미팅방장소
이 시간은?  다른 조의 발표를 들으며 자기 조와 비교해보는 시간
발표자료 ppt, 발표자준비사항
• 다른 조의 발표를 들으며 자기 조와 비교해보는 시간입니다.
• 과정 중 발생한 문제점을 공유하고, 다른 조의 문제 해결 방법을 학습합니다.내용
16:10~17:20 (약 1시간 10분) 시간
조별 발표 신청 > 조별 발표 > 마무리순서/권장진도
제출 없음제출
AIVLE-EDU 메인화면 > 셀프 테스트에 응시, 설문 참여다음 일정
과제 수행 가이드 - 3일차 전체 미팅 수행
70

## Page 71

Summary(3일차)
목표 달성 완료 하셨나요~? 스스로 적용해보는 프로젝트!
Complete!
Upgrade!
1AI 자동 표지 생성을 지원하는 도서관리 시스템 완성!
오늘의 목표
71

## Page 72

부록
07.

## Page 73

✓ @MUI(Material UI)
▪ MUI란?
• Google의 Material Design을 구현하는 오픈 소스 
• HTML-CSS의 컴포넌트를 불러와 사용하는 CSS 라이브러리
• Emotion을 접목시켜 컴포넌트 안에서 내장된 스타일 기능 적용 가능
• 주요 특징
• 디자인 컨벤션을 활용한 UI 구조 사용
• 4버전: Material UI, 5버전: MUI
• npm install @mui/material @mui/icons-material @emotion/react @emotion/styled  명령어를 통한 설치
• 공식 문서에서 수십 가지 컴포넌트 제공 (mui.com/material-ui)
기술 소개 – MUI
73

## Page 74

Box: 만능 <div>의 진화
기술 소개 – MUI
전통 방식: <div> + CSS
스타일을 적용하기 위해 별도의 .css 파일을 작
성하고 className으로 연결합니다.
<!-- MyComponent.jsx -->
<div className="my-box">
Hello CSS
</div>
/* MyComponent.css */
.my-box {
padding: 16px;
margin-top: 8px;
background-color: #f5f5f5;
}
MUI 방식: <Box>
컴포넌트에 sx prop을 사용하여 CSS 속성을 직접 
전달합니다. 스타일이 컴포넌트와 함께 있습니다.
<!-- MyMuiComponent.jsx -->
<Box
sx={{
p: 2,       // padding: 16px (2 * 8px)
mt: 1,      // margin-top: 8px (1 * 8px)
bgcolor: 'grey.100'
}}
>
Hello MUI Box
</Box>
핵심: sx prop 하나로 모든 CSS 속성(약어 포함)을
제어하여 생산성이 극대화됩니다.
74

## Page 75

Button: 기능이 포함된 <button>
기술 소개 – MUI
전통 방식: <button>
버튼 하나를 만들어도 background-color, color, 
border, :hover 상태를 모두 직접 구현해야 합니다.
<!-- MyComponent.jsx -->
<button className="my-button">
Click Me
</button>
/* MyComponent.css */
.my-button {
background-color: #1976d2;
color: white;
padding: 6px 16px;
border-radius: 4px;
/* ...etc */
}
.my-button:hover {
background-color: #1565c0;
}
MUI 방식: <Button>
variant와 color 만으로 모든 스타일
(hover, disabled, 클릭 효과)이 자동 적용됩니다.
<!-- MyMuiComponent.jsx -->
<!-- 꽉 찬 파란색(primary) 버튼 -->
<Button variant="contained" color="primary">
Click Me
</Button>
<!-- 테두리만 있는 버튼 -->
<Button variant="outlined" color="secondary">
Click Me
</Button>
핵심: variant (`contained`, `outlined`)으로 스타일을, 
color (`primary`)으로 테마 색상을 쉽게 지정합니다.
75

## Page 76

AppBar: 완성형 <header>
기술 소개 – MUI
전통 방식: <header>
상단 바를 구현하려면 flexbox 정렬, z-index, 
box-shadow, min-height 등 복잡한 CSS가 필요합니다.
<!-- MyComponent.jsx -->
<header className="my-app-bar">
<div className="my-toolbar">
<h6>도서 관리 시스템</h6>
</div>
</header>
/* MyComponent.css */
.my-app-bar {
z-index: 1100;
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.my-toolbar {
display: flex;
min-height: 64px;
padding: 0 16px;
}
MUI 방식: <AppBar>
<AppBar>와 <Toolbar> 조합으로 완성됩니다. 
`Toolbar`가 자식 요소의 정렬과 패딩을 자동으로 
처리합니다.
<!-- MyMuiComponent.jsx -->
<AppBar position="static">
<Toolbar>
<Typography 
variant="h6" 
sx={{ flexGrow: 1 }}
>
도서 관리 시스템
    </Typography>
<Button color="inherit">Login</Button>
</Toolbar>
</AppBar>
핵심: AppBar는 그림자와 z-index를, Toolbar는 높이와 
정렬을 자동으로 관리해줍니다.
76

## Page 77

왜 MUI를 사용하는가?
기술 소개 – MUI
빠른 생산성
• 강의에서 배운 CSS를 수십 줄 작성하는 대신, variant="contained" 같은 Prop 한 줄로 완성된 컴포넌트를 즉시 사용합니다.
디자인 일관성
• color="primary“ 처럼 테마를 기반으로 스타일을 적용하므로, 앱 전체의 버튼, 앱 바, 텍스트가 일관된 디자인을 유지합니다.
CSS보다 React에 집중
• flexbox 정렬, hover 효과 등 복잡한 CSS 처리를 MUI에 맡기고, 우리는 API 연동, 상태 관리 등 React 로직에
더 집중할 수 있습니다.
77

## Page 78

Make it possible


