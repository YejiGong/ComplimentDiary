# 칭찬 일기
칭찬하는 습관 들이기를 주제로 하여 기획 및 구현, 배포 하였다.

---
## 구현 기능

1. 로그인

1-1. 회원가입

1-2. 로그아웃

1-3. 로그인 여부에 따른 페이지 접속 제한

2. 스스로에게 칭찬 쓰기

3. 모두에게 칭찬 쓰기

4. 칭찬 확인하기

---
## 사용 기술
front - react

back - node.js+express

DB - mongoDB

---
## 배포
https://compliment-diary.vercel.app
 (pc 환경을 기준으로 합니다)


front, back을 분리하여 배포하였습니다.

front - vercel

back - AWS+nginx

로컬 환경에서도 docker-compose를 이용하여 실행할 수 있으나, 아래와 같이 코드 변경이 필요합니다.
- frontend/package.json에서 proxy -> http://localhost:5000
- frontend/src/setupProxy.js에서 target -> http://localhost:5000
- frontend/src/Setting.js에서 baseURL -> http://localhost:5000
- bakend/server/server.js에서 23-24번쨰 줄 삭제하고 25번쨰 줄에서 mongoDB에 본인의 db URL을 적어줘야합니다.

---
## 회고
https://velog.io/@ydppwljg/series/%EC%B9%AD%EC%B0%AC%EC%9D%BC%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8

---
## 향후 추가 예정 기능
- [ ] 랜덤 칭찬 (오늘의 칭찬) 띄우기
- [ ] 답장 보내기
- [ ] 칭찬 작성 시 금지어 설정
- [ ] 내가 쓴 칭찬과 다른 사람이 보낸 칭찬 구분
