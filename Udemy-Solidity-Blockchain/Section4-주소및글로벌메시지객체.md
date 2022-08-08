## Address

모든 정보는 공개된다.

- 이더는 지갑이나 주소에 저장되는 것이 아닌 블록체인에 저장하는 것.

### EOA(Externally Owned Account) - 외부 소유 계정

- 비밀키가 있는 계정으로 자금을 송금하고 트랜잭션을 개시함.
- 이더리움 블록체인 바깥에 있어서 이더리움 블록체인에 접근할 수 있지만 코드를 배포할 수는 없다.

### Contract Account - 계약 계정

- 이더리움 블록체인 안에 있는 계정으로 직접 트랜잭션을 개시할 수 없다.
- 계정을 관리하기 위한 비밀키가 없고 코드가 있다.(이 코드를 통해 계정을 관리)

Address의 2가지 중요한 members:

- .balance
- .transfer(amount)

Address - Low-level calls

- .send()는 불리언 값을 반환.
  - 다른 스마트 계약이나 eoa로 송금할 수 있다.
  <hr>

## Global Objects(전역 객체)

- 전역 객체는 트랜잭션이 어디에서 왔고, 안에 어떤 일이 벌어졌는지 도와준다.

- 3가지 중요한 전역 객체:
  - msg.sender: 현재 함수를 호출한 사람(혹은 스마트 계약)의 주소를 가리킴.
  - msg.value: 보낸 이더의 값
  - now: 타임 스탬프

### Payable Functions Addresses

- 이더를 받으려면 함수를 payable로 표시해야 함.
