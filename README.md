# 202130414 심민우
## 4월10일(6주차)
오늘 배운 내용
### props를 통해 데이터 전달하기
  - 재사용할 수 있는 component 만들기

  - Board component를 만들고 square component의 내용을 복사
  - square component의 button을 하나만 남기고 모두 삭제
  - board component의 button을 square component로 교체합니다.
  - App에서 호출하는 component를 square에서 Board로 바꿔줍니다.
  - 여기까지 하면 component는 깔끔하게 정리됐지만 , 숫자 출력이 1만 나오게 됩니다.
  - 이 문제를 해결하기위해 props를 사용하여 각 사각형이 가져야 할 값을 부모에서 자식으로 전달하겠습니다.
  - square component를 value prop을 전달 받을 수 있도록 수정합니다.
    ```javascript 
    function square({value}){
      return <button className="square">1</button>
    }
    ```
  - javascript 변수가 렌더링 되어야 합니다.
  - javascript로 탈출 하려면 중괄호가 필요합니다. JSX에서 value 주위에 중괄호를 추가합니다
    ```javascript 
    function square({value}){
      return <button className="square">{value}</button>
    }
    ```
### 사용자와 상호작용하는 컴포넌트 만들기
  - Square 컴포넌트를 클릭하면 x로 채워지게 코드수정

  - 먼저 Square 내부에 handleClick 함수를 선언
  - JSX 버튼의 props에 onClick을 추가
  - 사각형 클릭시 탭에 clicked 라는 로그가 표시됨.
  - 다음으로 사각형 컴포넌트가 클릭된 것을 기억 하고 X 표시로 채워보겠습니다.
  - 컴포넌트는 무언가 기억하기위해 state를 사용합니다.
  - react는 상태기억을 위해 useState라는 Hook을 제공합니다.
  - square의 현재 값을 state에 저장 하고 square가 클릭하면 값이 변경되도록 하겠습니다.
  - 파일 상단에서 useState를 import 합니다.
  - Square 컴포넌트에서 value prop 을 제거합니다. 대신 useState를 사용합니다.
  - Square 컴포넌트의 시작 부분에 useState를 호출하고, value라는 이름의 state변수를
  반환하도록 하세요.
    ```javascript
        import {useState} from 'react'
        function Square(){
          const [value,setValue]=useState(null);
          ...        
        }
    ```
  - value는 값을 저장하는 변수,setValue는 값을 변경하는 데 사용하는 함수입니다.
  - useState에 전달된 null은 이 state변수의 초기값입니다.
  - 앞에서 Square 컴포넌트는 더이상 props를 사용하지 않게 수정
  - 따라서 Board 컴포넌트가 생성한 9개의 컴포넌트에서 value prop을 제거합니다.
  - ![ex_screenshot](./file/사용자와%20상호작용.png)
### state 끌어올리기
  - 현재 각 Square 컴포넌트는 게임 state의 일부를 기억합니다.

  - 틱택토 게임에서 승자를 확인하려면 Board가 9개의 Square 컴포넌트 각각의 state를 기억
  - Board가 각각의 Square에 state를 요청하는것은 기술적으로는 가능하지만,
  코드가 이해하기 어렵고 버그에 취약하며 리팩토링하기 어렵기 때문에 권장하지 않습니다.
  - 가장 좋은 방법은 게임의 state를 각 Square가 가아닌 부모 컴포넌트인 Board 에 저장하는 것입니다.
  - 숫자를 전달햇을때와 같이 prop를 전달하여 각 Square에 표시할 내용을 정할 수 있습니다.
  - 여러 자식 컴포넌트에서 데이터를 수집하거나 두자식 컴포넌트가 서로 통신하도록 하려면, 부모 컴포넌트에서 공유 state를 선언해야 합니다.
  - 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달할 수 있습니다.
  - 이렇게하면 자식컴포넌트가 서로 동기화 되고, 부모 컴포넌트와도 동기화되도록 할 수 있습니다.
  - 부모컴포넌트로 state를 끌어올리는 것은 많이 사용하는 방법입니다.
  - Board 컴포넌트를 편집해서 9개 Square에 해당하는 9개의 null의 배열을 기본값으로 하는 state변수  squares 선언
    ```javascript
        const [squares,setSquares]-useState(Array(9).fill(null));
    ```
  - 배열의 각 항목은 각 Square 컴포넌트의 값에 해당합니다.
  - 보드를 채우면 squares 배열은 다음과 같은 모양이 됩니다.
    ```javascript
        ['o',null,'x','o',null,'x','o',null,'x']
    ```
### component 분리하기
  - Board component가 export default 로 선언된 것을 보면 component가 분리되었다는것을 알 수 있습니다.

  - 우리는 모두 분리해서 만듬.
  - [ 분리 순서 ]
    1. component이름과 동일한 파일을 만듭니다.
    2. 해당 파일에 코드를 복사하고 export default 키워드 추가
    3. 필요한 component와 useState를 추가
    4. App.js에서 해당 코드를 삭제하고, Board Component를 import 해줌
    5. App.js 에서 useState의 import를 제거합니다.
    6. 정상적으로 동작하는지 확인.
## 4월3일(5주차)
오늘 배운 내용
### 이벤트에 응답하기
  - component 내부에 event handler 함수를 선언하면 event에 응답 할 수 있습니다.

  - onClick ={handleClick}의 끝에 소괄호() 가 없는것을 주목
  - 함수를 호출하지 않고 전달만
  - 버튼을 클릭할때 이벤트 핸들러를 호출
  - 만들어보기
    ```javascript
    import logo from './logo.svg';
    import './App.css';

    export default  function MyButton(){
      function handleClick(){
        alert("You clicked me!");
      }
      return(
        <button onClick={handleClick}>I'm My button component</button>
      )
    }

    ```
    ```javascript
    import { useState } from 'react';
    import './App.css';

    function Board(){
      return (
        <div>
          <div className='board-row'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div className='board-row'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div className='board-row'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
        </div>
      )
    }

    function Square(){
      const [value,setValue]=useState(null);
      function handleClick(){
        setValue('X');
      }
      return (
        <div>
          <button className='square' onClick={handleClick}>{value}</button>
        </div>
      )
    }


    export default function App() {
      return (
        <div>
          <h1>Tic Tac Toe</h1>
          <Board></Board>
        </div>
      );
    }
    ```
### 화면 업데이트하기
  - 특정 정보를 기억해 두었다가 표시

  - 버튼이 클릭된 횟수
  - component에 state를 추가
  - useState를 import
  - 이코드를 보면 useState는 react 파일 안에 named Exports로 선언되어있는 여러개의 component 중 하나
  - ![ex_screenshot](./file/useState.png)
  - 이제 comonent내부에 state 변수를 선언
  - useState로부터 현재의 state를 저장할 수 있는 변수인 count와 이를 업데이트 할 수 있는 함수인 setCount를 얻을 수 있습니다.
  - 이름은 자유롭게 지정할 수 있지만[someting,setSomething]으로 작성하는 것이 일반적.
  - 변수 이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용
  - [실습]
    - 버튼이 처음 표시될 때는 useState()에 0을 전달했기때문에 count가 0이 됨.
    - state를 변경하고 싶다면 setCount()를 실행하고 새 값을 전달
    - 이 버튼을 클릭하면 카운터가 증가
    - ![ex_screenshot](./file/useState2.png)

### Hook 사용하기
  - use로 시작하는 함수를 Hook이라고 합니다.
  - useState는 React에서 제공하는 내장 Hook입니다.
  - 다른 내장 Hook은 API 참고서에서 찾아볼 수 있습니다.
  - 또한 기존의 것들을 조합하여 자신만의 Hook을 작성할 수도 있습니다.
  - Hook은 다른 함수보다 더 제한적입니다.
  예를 들면...
  - component 또는 다른 Hook의 상단에서만 Hook을 호출
  - 조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣으세요.

### Hook의 사용규칙
  - React 함수형 component 또는 사용자 Hook 내부에서만 사용가능
  - 일반적인 javascript 함수에서 useState,uesEffect 등의 Hook을 사용 할 수 없습니다.
  ```javascript
  function notAComponent(){
    useState(0); // 일반 함수에서 Hook 사용 불가
  }
  ```
  ```javascript
    const [count,setCount]=useState(0); // react 함수 컴포넌트에서 사용가능
  ```

### function component vs class component
  - 왜 요즘은 function형 component를 주로 사용할까

  - 인터넷 찾다보면 class가 많이 나옴
  - React의 역사
    - react 초창기  ( 2013~2014 )
      - 함수형 컴포넌트는 존재했지만 단순히 props를 받아 UI 반환하는 역할만 가능
      - 상태나 생명주기기능이 없었음
      - 그래서 주로 class형으로 사용함
    - React 16.8 (2019) -> Hooks 도입
      - useState,uesEffect 등의 Hook이 추가되면서 , 함수형 component에서도 상태관리 생명주기 기능을 구현할 수 있게 됨.
      - 이후 React 공식 문서에서도 함수형 컴포넌트와 hook 사용을 권장하게 됨

### component 간 데이터 공유
  - 공식문서에서는 MyButton과 MyApp을 계속 수정해가면서 설명중이라 이전 상태 확인이 어려움.

  - 물론 변경이 있을 때마다 꼼꼼히 commit을 해두면 checkout을 통해서 확인이 가능
  - 다만 이경우 checkout을 반복해야하기 때문에 확인하는데 불편
  - 따라서 실습은 별도의 component 만들어 사용
  - 하지만 데이터를 공유하고 항상 함께 업데이트 하기 위한 component가 필요한 경우가 많습니다.
  - 두개의 CountState2 component가 동일한 countd를 표시하고 함께 업데이트 하려면
  state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동해야 합니다.
  - 여기서 이야기하는 제일 가까운 component는 App component입니다.
  - ![ex_screenshot](./file/component간데이터공유.png)
  - 두 버튼중 하나를 클릭하면 App의 count가 변경되어 ,CountState2의 count가 모두변경되게 해보도록 하겠습니다.
  -먼저 App 안으로 useState를 이동하고, CountState2를 2개 이상 rendering 합니다.
  - ![ex_screenshot](./file/component간데이터공유2.png)
  - 다음으로 공유된 click handler와 count를 각 CountState2로 전달합니다.
  - JSX 중괄호를 사용하여 CountState2에 정보를 전달 할 수 있습니다.
  - 이렇게 component에 전달하는 정보를 props라고 합니다.
  - ![ex_screenshot](./file/component간데이터공유3.png)
  - 마지막으로 parent component인 App에서 전달한 props를 읽을 수 있도록 CounterState component를 변경합니다.
  - 동작 과정
    1. 버튼을 클리갛면 onClick 핸들러가 실행됨 왜냐면 각 버튼의 onClick prop은 App 내부의 handleClick 함수로 설정되어 있기 때문입니다.
    2. 이 코드는 setCount(count+1)을 실행시켜 countState변수를 증가시킵니다.
    3. 새로운 count 값은 각 버튼에 prop로 전달되기 때문에 모든 번튼에는 새로운 값이 
    표시됩니다.
    4. 이것을 state 끌어올리기 라고 합니다.
    5. state를 위로 이동함으로써 컴포넌트 간에 State를 공유하게 됩니다.
## 3월27일(4주차)
오늘 배운 내용
  - component는 고유한 로직과 모양을 가진 UI의 일부입니다.

  - component는 버튼처럼 작을 수도 있고 전체페이지처럼 클 수도 있음
  - component는 마크업을 반환 하는 javascript 함수
  - nesting은 css 선택자의 중첩 구조를 생각한다.
  - react 구동
    ```javascript
    npm start
    ```
  - 컴포넌트 중첩
    ```javascript
    import logo from './logo.svg';
    import './App.css';

    function MyButton(){
      return(
        <button>I'm My button component</button>
      )
    }

    export default function App() {
      return (
        <div>
          <h1>Hello React</h1>
          <MyButton></MyButton>
        </div>
      );
    }
    ```
  - export default 키워드는 기본 component 지정

  - JavaScript 문법임
  - Named Exports 
    - 하나의 파일안에 여러개의 component가 있을 때 사용
    - component 사용하는 쪽에서는 component 정확한 이름을 반드시 명시
  - Default Exports 
    - 하나의 파일안에서 하나의 component만 내보내는 경우 사용
    - 사용하는 쪽에서는 어떤 이름을 사용해도 상관없음.
  - export 와 import
    ```javascript
    export default  function MyButton(){
      return(
        <button>I'm My button component</button>
      )
    }
    import MyButton from './MyButton';
    ```
  - button lib
    ```javascript
      import logo from './logo.svg';
      import './App.css';

      function Button1(){
        return(
          <button>Button1</button>
        )
      }
      function Button2(){
        return(
          <button>Button2</button>
        )
      }
      function Button3(){
        return(
          <button>Button3</button>
        )
      }
      function Button4(){
        return(
          <button>Button4</button>
        )
      }

      export {Button1,Button2,Button3,Button4}
    ```
  - 앞에서 작성한 코드 JSX
  - React에서 편의성을 위해 JSX 사용.반드시는 안씀
  - JSX는 HTML보다 엄격한 문법
  - <br> 같은거도 태그 닫아야 함
  - 여러개의 component를 jsx로 반환 가능
  - 여러개의 component를 <div>...<div> 또는 빈<>...</> wrapping 해줘야 함
### 스타일 추가하기
  - React에서는 className으로 CSS 지정

  - className은 HTML 의 class 속성과 동일한 방식으로 동작
  - CSS 파일을 추가하는 방법을 규정하지는 않음

### 데이터 표시하기
  - JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있습니다.
  - JSX코드 내에서 Javascript로 탈출 하여 변수나 표현식을 사용하는것
  - 이방법을 Escape Back 이라고 합니다.
  - {} 중괄호를 사용하여 변수나 표현식 표현
  - src 속성에 user.imageUrl 변수를 설정하여 이미지 경로 설정 
  - ![ex_screenshot](./file/데이터표시하기.png)
  - 예제에는 App.js에 Profile component를 작성했지만, 별도의 component로 만들어 보겠습니다.
  - Profile component가 완성되면 App.js에서 호출하고, 출력을 확인합니다.
  - 예제에서 style={{}}은 특별한 문법이 아니라,style={}의 중괄호 안에 user 객체를 {}로 표시한 것입니다.
  - ![ex_screenshot](./file/데이터표시하기2.png)
  - profile 만들기    

    ```javascript
    import "./Profile.css";
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };
      
      export default function Profile() {
        return (
          <>
            <div className="main"> 
            <h1>{user.name}</h1>
            <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
            />
            </div>
          </>
        );
      }
    ```
### 조건부 렌더링

  - 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용

    ![ex_screenshot](./file/조건부렌더링.png)

### 리스트 렌더링하기
  - 컴포넌트 리스트를 렌더링 하기 위해서는 for문 및 map()함수 사용

  - <li>에 key속성 이있음
  - 목록을 사용할때는 각 항목에 대해
  고유하게 식별하는 문자열 또는 숫자전달해야함
  - 항목을 삽입,삭제 또는 재정렬할 때 key를 사용
  - 이것을 key props라고 함.
  ![ex_screenshot](./file/리스트렌더링.png)

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