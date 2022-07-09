# var 대신에 let을 쓰는 이유

## var
- var hoisting : 어디에 선언하냐에 관계없이 항상 제일 위로 선언을 끌어 올려주는 것

- no block scope : block{}을 무시한다.

## let (mutable data type)
- 예를 들어 block 안에서 변수를 선언하고 밖에서 출력하면 오류가 난다.