# 202130414 심민우
## 3월 13일
### node.js의 장단점
- 장점 
  - 비동기 논 블로킹 I/O로 높은 성능 제공   
  - javascript 풀스택 개발이 가능하며 생산성이 향상됨   
  - npm의 방대한 생태계를 활용 가능   
  - 경량 서버 개발에 적합   
  - 실시간 데이터 처리가 강력함   
   
- 단점  
  - CPU 집약적인 작업에 부적합 : 싱글 스레드 기반이라 멀티스레딩 성능이 부족함   
  - 콜백지옥 문제 : 해결책으로 async/await와 Promise 사용 

### React 프로젝트 생성
  - 터미널에 npx create-react-app [이름]

### React 서버구동 및 서버중지
  - 서버시작 : npm start   
  - 서버중지 : ctrl+c

### React Project 의 구조 및 역할
  - node modules
  - public/ : 정적 static 파일을 저장하는 폴더로 , 빌드 시 그대로 유지됨
  - src/:React 앱의 주요 코드가 위치하는 폴더
    - app.js : 메인 컴포넌트
    - index.css : 전역 스타일
    - index.js : react 앱의 진입점을 사용하여 app.js를 렌더링함.
  - gitignore : Git에 추가하지 않을 파일 목록을 정의.
  - package-lock : 설치된 패키지의 버전이 기록된 파일
  - package.json : 프로젝트의 의존성 목록과 실행 스크립트 포함된 파일
  - README.md : 프로젝트 설명문서