## NestJS로 API만들기 강의를 들으며 정리한 내용

- 다양한 디자인 패턴들이 적용되어 있고, 그 패턴에 맞도록 서버를 구성해주어야 한다.

- 데코레이터(@): 클래스에 함수 기능을 추가할 수 있음. 클래스 위의 함수이며, 클래스를 위해 움직임. 꾸며주는 함수나 클래스랑 붙어있어야 됨.(따라서 데코레이터랑 함수 사이에 빈칸을 두면 안됨)

  - @Put: 모든 리소스 업데이트
  - @Patch: 일부 리소스 업데이트

- 컨트롤러는 기본적으로 url을 가져오고 function을 return.

- app.module.ts에 이용하는 것들을 import 해야 함.

- ~~.spec.ts파일은 유닛 테스트용 파일이다.

- DTO(데이터 전송 객체(Data Transfer Object))

  - DB에서 데이터를 얻어 Service나 Controller로 보낼 때 사용하는 객체이다.

  - 코드를 간결하게 해주고, NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 해줌.

  - npm i @nestjs/mapped-types(cli 명령어): 타입을 변환시키고 사용할 수 있게 하는 패키지 설치 명령어.

  - 앱을 만들 때 module을 분리하는게 좋음.(가령 app.module에 다른 모듈을 import하는 형태)

  - package.json
    - "jest": 자바스크립트를 쉽게 테스팅하는 npm 패키지
  - 테스팅 종류:
    - UNIT 테스트: function 같은 하나의 유닛만을 테스트함.
    - E2E(end-to-end) 테스트: 전체 시스템을 테스트함.
