## Events and Return Values

- EVM은 로깅 기능이 있다.

### Events

- 함수 작성 시 return 변수가 필요하면 이벤트를 사용해야 한다. 이벤트를 통해 스마트 계약 내부에서 무슨 일이 일어나고 있는지 확인할 수 있기 때문.
- 데이터 저장소나 트리거(trigger)가 필요한 경우에도 이벤트를 사용하면 된다.
- 스마트 계약 내에서 이벤트를 검색할 수는 없다.
- 스마트 계약에 스트링이나 저렴한 정보를 저장해야 하는 경우 이벤트를 사용할 수 없다.
- index로 표시된 이벤트 인수는 최대 3개까지 검색할 수 있다.
- 트랜잭션을 실행하면 트랜잭션 해시를 반환한다.
