# 📚 새 PC에서 바로 시작하는 Git & GitHub 협업 가이드

본 가이드는 노트북에서 진행하던 설정을 **새 개인 PC**에서 그대로 이어서 진행하고, 깃허브 협업을 바로 시작할 수 있도록 정리한 가이드라인입니다.

---

## 1. ⚙️ 새 PC에서 최초 1회 세팅

새 PC에서는 Git 프로그램 설치 및 사용자 정보 등록이 필요합니다.

### ① Git 설치 및 초기 설정
1. **[Git 공식 홈페이지](https://git-scm.com/)**에 접속하여 Windows용 Git을 다운로드 후 설치합니다. (설정값은 기본값으로 진행하시면 됩니다.)
2. 설치가 끝나면 **Git Bash**를 실행하고 아래 두 명령어를 입력하여 깃허브 사용자 정보를 등록합니다. (노트북에 등록하셨던 동일 계정 정보입니다.)
   ```bash
   git config --global user.name "hoppangm3"
   git config --global user.email "hoppangm3@gmail.com"
   ```

### ② 내 컴퓨터에 프로젝트 폴더 가져오기 (Clone)
1. 새 PC에서 작업할 폴더(예: `C:\Users\User\Desktop\mini4`)를 만듭니다.
2. 해당 폴더 안에서 마우스 우클릭 후 **[Git Bash Here]**를 클릭합니다.
3. 내 계정의 깃허브 저장소(Fork 복사본)를 다운로드합니다.
   ```bash
   git clone https://github.com/hoppangm3/KT_AIVLE_MiniProject4_PTH.git .
   ```
   *(끝에 ` .` 한 칸 띄우고 점을 찍으면 현재 폴더 안에 바로 파일들이 다운로드됩니다.)*

### ③ 조장님 원본 저장소 연결하기 (Remote)
다른 팀원들이 조장님 원본에 올린 최신 코드를 내 컴퓨터로 다운로드받기 위해 원본 주소를 등록합니다. (교안의 `project`와 관례적인 `upstream` 둘 다 등록해 두었습니다.)
```bash
git remote add project https://github.com/Youngyoung1/KT_AIVLE_MiniProject4.git
git remote add upstream https://github.com/Youngyoung1/KT_AIVLE_MiniProject4.git
```

*   **등록 확인:** `git remote -v`를 입력했을 때 `origin`(내꺼), `project`(조장님꺼), `upstream`(조장님꺼) 주소가 제대로 나타나면 성공입니다.

---

## 2. 🔄 매일 작업할 때의 루틴 (실전 매뉴얼)

### 🌅 출근 (작업 시작 전): 최신 코드 가져오기 & 내 방 만들기
1. 기본 브랜치(`main`)로 이동합니다.
   ```bash
   git checkout main
   ```
2. 조장님(`project`)의 최신 코드를 다운로드받습니다.
   ```bash
   git pull project main
   ```
   *(실전에서 `develop` 브랜치가 생기면 `main` 대신 `develop`으로 입력하시면 됩니다. 예: `git checkout develop` ➡ `git pull project develop`)*
3. (추천) 가져온 최신 코드를 내 깃허브 저장소에도 동기화(백업)해 둡니다.
   ```bash
   git push origin main
   ```
4. **[핵심]** 오늘 내가 작업할 기능의 방(개인 브랜치)을 새로 만듭니다.
   *   **형식:** `feature/이름-기능제목#이슈번호`
   ```bash
   git checkout -b feature/hoppang-login#1
   ```

---

### 🌃 퇴근 (작업 완료 후): 내 깃허브에 올리고 PR 보내기
1. 오늘 작업한 코드 파일들을 저장(Commit)합니다. (조장님이 정해주신 커밋 규칙을 준수합니다.)
   *   **형식:** `#이슈번호 깃모지 태그: 메시지`
   ```bash
   git add .
   git commit -m "#1 ✨ feat: 로그인 화면 UI 완성"
   ```
2. 내가 작업한 방(개인 브랜치)을 내 깃허브 저장소(`origin`)에 업로드(Push)합니다.
   ```bash
   git push origin feature/hoppang-login#1
   ```
3. 인터넷 브라우저로 **[내 깃허브 저장소(hoppangm3/KT_AIVLE_MiniProject4_PTH)](https://github.com/hoppangm3/KT_AIVLE_MiniProject4_PTH)**에 접속합니다.
4. 상단 노란색 알림창의 **[Compare & pull request]** 초록색 버튼을 누릅니다.
5. **방향 설정**을 확인하고 PR을 생성합니다.
   *   **base repository:** `Youngyoung1/KT_AIVLE_MiniProject4` (조장님 원본)
   *   **base:** `develop` (또는 `main`)
   *   **head repository:** `hoppangm3/KT_AIVLE_MiniProject4_PTH` (내 복사본)
   *   **compare:** `feature/hoppang-login#1` (내가 올린 브랜치)
6. 제목과 내용을 작성한 후 **[Create pull request]** 버튼을 클릭하면 완료됩니다! (팀원들에게 PR 올렸다고 알리기)

---

## 💡 꼭 기억해야 하는 핵심 정리
*   **Fork를 했어도 개인 브랜치는 꼭 만들어야 합니다.** 
    *   `main` 브랜치는 조장님 원본 코드를 가져와서 섞는 용도로만 깨끗하게 쓰고, 내 실제 코딩은 무조건 개인 브랜치(`feature/...`)에서 따로 해야 코드가 뒤엉키지 않습니다.
*   **`pull`은 가져오기(다운로드), `push`는 올리기(업로드)**입니다.
    *   조장님 최신 파일 다운로드: `git pull project main`
    *   내가 작업한 코드 내 저장소에 업로드: `git push origin 브랜치명`
