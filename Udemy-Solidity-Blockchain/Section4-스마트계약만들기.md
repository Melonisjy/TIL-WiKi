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

**contract MyContract**

- 다른 프로그래밍 언어의 클래스와 같다.

**string public myString = 'hello world!'**

- 저장 변수로서 public하고 솔리디티에서 자동으로 getter 함수를 생성한다.
