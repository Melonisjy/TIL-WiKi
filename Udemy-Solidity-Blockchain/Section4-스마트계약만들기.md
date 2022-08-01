### MyContract.sol

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.1;

contract MyContract {
    string public myString = "hello world!";
}
```

**// SPDX-License-Identifier: GPL-3.0**

- **SPDX(Software Package Data Exchange)** 는 솔리디티 파일을 사용할 수 있게 라이센스를 명확하게 전달해주는 것.

**pragma solidity ^0.8.1**

- **pragma**는 컴파일러가 특정 기능을 활성화하거나 특정 항목을 확인하는 것이다. **^0.8.1**은 >=0.8.1 및 <0.9.1을 의미한다.
  컴파일러 버전을 잠근다는 의미.

**contract MyContract**

- 다른 프로그래밍 언어의 클래스와 같다.

**string public myString = 'hello world!'**

- 저장 변수로서 public하고 솔리디티에서 자동으로 getter 함수를 생성한다.
<hr>

## 이론

EVM 바이트 코드: 실제 블록체인에 보내는 코드

### 스마트 계약에 사용하는 프로그램 언어

- 솔리디티(Solidity)
  - 가장 유명한 언어
  - 컴파일러의 기본 아키텍처가 ECMA 스크립트에서 파생됨.
  - 바이트코드로 컴파일 해야 된다.
  - 블록체인의 모든 노드가 블록체인의 사본을 갖고 있기 때문에 트랜잭션 유효성 검증이 가능하다.
- 바이퍼(Viper)
  - 연구 지향 언어

~~- 서펀트(Serpent)~~<br>
~~- Python과 유사~~
