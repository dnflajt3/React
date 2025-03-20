# 202130414 심민우
## 3월20일(3주차)
오늘 배운 내용
### 구조 및 역할
  - ![ex_screenshot](./file/화면%20캡처%202025-03-20%20143744.png)
  - node modules
    - 초기 node module 및 새로 설치하는 패키지가 저장됩니다.
    - 초기파일 37.352 / 폴더 4.597 / 용량은 200MB로 엄청난 양의 파일이 존재 합니다.
  - src/App.js
    - 메인 component로 필요한 sub component를 모아서 관리합니다.
    - 출력을 위해서 index.js로 전달됩니다.
  - src/App.css
    - App.js에 적용되는 스타일을 정의하는 스타일 파일입니다.
  - src/index.js
    - React 앱의 진입 점 으로 최종 렌더링의 되는 곳입니다.
    - ReactDOM.createRoot를 사용하여 App.js를 렌더링합니다.
  - src/index.css
    - 전역 스타일을 정의하는 스타일 파일입니다.
### 의존성 관리와 package.json
  - package.json은 패키지의 의존성을 관리하는 파일입니다.
  - 의존성(Dependency) 이란 , 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는 관계를 말합니다.
  - 즉, 어떤 프로젝트에 사용된 각종 패키지 등의 버전을 동일하게 유지하기 위한 것입니다.
  - 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 합니다.
  - [의존성을 관리하는 이유]
    - 손쉬운 설치 및 업데이트
    - 일관된 개발 환경 유지
    - 중복 설치 방지
  - [ package.json을 유지해야 하는 이유]
    1. 프로젝트의 의존성 정보 제공
      - 어떤 패키지 사용하는지 정의
      - 어떤 패키지 설치해야 하는 지 알 수 있는 기준이 됨.
    2. 버전 범위 설정 가능
      - 최신패치버전, 정확한 버전 고정 가능
      - 원하는 방식으로 유연하게 관리
    3. 스크립트와 메타데이터 저장
      - script 속성으로 빌드, 테스트, 실행 등의 명령어 저장
      - 프로젝트 실행
    4. 새로운 패키지 설치 및 관리
      - package.json에 추가되고 package-lock.json에는 정확한 버전이 기록됨.

  - node module의 재설치
    1. node modules 폴더와 package-lock.json 파일 삭제  
    ```rm -rf node_modules package-lock.json``` 
    2. npm 패키지의 임시 저장소인 cache를 초기화  
    ```npm cache clean --force``` 
    3. 패키지를 다시 설치합니다. 
    ```npm install```  
    - package-lock.json을 삭제하는 이유
      1. package-lock.json이 손상되었거나, 잘못된 의존성이 있을때
      2. 최신 버전의 패키지를 다시 받고 싶을 때
      3. 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트 했을때 
### 개요  
- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성합니다.
- component는 작은 기능을 실행할 수 있는 하나의 모듈입니다.
- 공식 사이트의 홈에는 component가 어떻게 사용되는지 설명하고 있습니다.
- component가 페이지로 변해가는 과정에 집중
- React 사이트에서 접속  

  ```javascript
  function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }

  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
  ```
### Component를 작성하는 JavaScript와 Markup
- React component는 JavaScript 함수입니다.
- 조건에 따라 화면을 표시 if문 사용
- 목록을 표시하고싶다면 map()함수 사용

### 필요한 곳에 상호작용 기능 추가
- React Component는 데이터를 수신 하고 화면에 표시해야 하는 내용을 반환 합니다.
- 사용자의 입력을 받아 새로운 데이터를 component에 전달할 수도 있습니다.
- 이때 리액트는 상호작용을 통해 얻은 새 데이터로 화면을 업데이트 합니다.

  ```javascript
  import React from 'react';

  class ParentComponent extends React.Component {
    render() {
      return <ChildComponent prop1="Mike" prop2="piza">
    }
  }

  function ChildComponent(props) {
    return <h2>This is prop1: {props.prop1}. This is prop2: {props.prop2}.</h2>
  }
  ```
### full-stack App 개발을 도와주는 React Framework
- React는 라이브러리기때문에 component 조합은 되지만, 라우팅 및 데이터 가져오기 방법 등을 규정하지는 않습니다.
- React로 전체앱을 빌드하려면 Next.js 또는 Remix 같은 full-stack React Framework를 사용하는 것이 좋습니다.
- 이를 구현하는 Framework를 사용하면, 서버에서 실행되거나 빌드 중에도 비동기 component에서 데이터를 가져올 수도 있습니다.
### 모든 플랫폼에서 최고의 성능을 발휘하는 React
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼 잘 어울리는 인터페이스 구현 가능
- [웹의 본질에 충실하기]
  - 빠르게 로드되기를 기대
  - 데이터를 가져오는 동안에도 html 스트림 시작 가능, javascript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있음
  - 클라이언트 측에서는 표준 웹API를 사용해서 렌더링 도중에도 UI를 반응하도록 할 수 있습니다.
  - 빠른 렌더링 도와줌
- [진정한 네이티브 UX를 실현]
  - 자신의 플랫폼과 같은 모양과 느낌
  - React Native 와 Expo를 사용하면 Android,IOS 등을 위한 앱을 React로 빌드 가능
  - 네이티브처럼 보이는 이유는 UI가 네이티브임
  - webview가 아니라 Android 및 IOS view를 사용하기 때문임.
  - React를 사용하면 웹 개발자도 네이티브 개발자도 될 수 있음
  - 사용자 경험의 희생 없이 다양한 플랫폼에 앱 출시 가능
  - 전체 기능 협업을 통해 개발 가능한 팀을 구성 가능
## 3월13일(2주차)
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