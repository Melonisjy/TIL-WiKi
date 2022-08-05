### Value Types

- Boolean
- Int/Uint (정수/부호없는 정수)
- 부동소수점
- 고정 소수점 수
- Address (주소)
- 문자열 (동적 크기 바이트 배열)
<hr>

### All Variables

- 모든 변수는 기본값으로 초기화된다.

  - 기본값으로 초기화 된다는 것이 "null" 이나 "undefined"를 뜻하는 것은 아님.
  - 정수나 부호 없는 정수는 항상 0으로 초기화된다.
  - 불리언 값은 항상 false로 초기화 된다.
  - 문자열은 빈 문자열이다. -> ""

- Public 변수는 오류가 없고 자동으로 getter 함수를 생성한다.
  - getter 함수는 변수 자체와 똑같은 이름을 가져옴.

### Boolean

- True or False
- 선언: "bool myVar"
- 부정할 때: "myVar = !myVar"

### (Unsigned) Integer

- Uint8 to Uint256(범위), 8bit씩 증가
  - Uint8의 범위: 0 ~ 255
  - Int8의 범위: -128 ~ +127
  - uint는 uint256을 뜻함.

### Address

- 주소에서는 멤버와 호출할 수 있는 함수가 있다.
  - ex) .transfer(...) .send(...) . call.value()() .delegatecall()...

### String and Bytes

- 문자열은 바이트 배열과 같은데 바이트 배열은 길이와 인덱스가 있어서 바이트 배열의 특정 인덱스에 접근할 수 있다.
- 문자열은 저장하기에 비싸다.
