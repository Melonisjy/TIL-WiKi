# script async와 defer의 차이점
## script async
    - boolean type의 속성 값이므로 선언하는 것 만으로도 true로 설정된다.
    
    - 브라우저가 html을 다운받아서 파싱(parsing)하다가 async 선언된 부분을 병렬로 js파일을 다운(fetching)받자고 명령 해놓고 다시 파싱하다가 다운이 완료되면 파싱을 멈추고 다운받은 js파일을 실행(executing)하게 된다. 그리고 나머지 html을 파싱하게 된다.

- 장점
    - fetching이 parsing하는 동안 병렬적으로 일어나기 때문에 다운로드 받는 시간을 절약할 수 있다.

- 단점
    - js가 html이 파싱되기 전에 실행되기 때문에 만약 js에서 queryselector이용해서 DOM요소를 조작한다면 조작하려는 시점에 html이 우리가 원하는 요소가 아직 정의 되어 있지 않을 수가 있다.

    - html을 파싱하는 동안에 언제든지 js를 실행하기 위해 멈출 수가 있기 때문에 사용자가 페이지를 로드하는 시간이 늦춰질 수 있다. 

## script defer
    - html을 파싱하다가 defer 선언된 부분을 다운받자고 명령만 해놓고 나머지 html을 끝까지 파싱하게 된다.
    그리고 마지막에 다운받은 js를 실행하게 된다.