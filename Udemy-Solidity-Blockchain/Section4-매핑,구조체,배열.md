## Mapping (매핑)

ex) mapping(\_KeyType => \_ValueType) name;

- 매핑은 해시맵과 같다.
- \_KeyType은 어떤 유형이든 가능하다.
- \_ValueType도 어떤 유형이든 가능하고 다른 매핑도 값 유형으로 사용할 수 있다.

[주소가 불리언 값으로 매핑되었을 때의 예시]
ex) mapping(address => bool) addressAllowed;

### 특징

- 모든 값이 기본값으로 초기화되기 때문에 값의 유형과 매핑하는 값을 초기화할 필요가 없다.
- 길이가 없다. (배열은 있음.)
- 매핑을 public으로 돌리면 자동으로 매핑을 위한 getter 함수가 만들어짐.
- 라이브러리에 의해 반복할 수 있는 매핑이 있다.

## Structs (구조체)

ex) struct Funder {
address addr;
uint amount;
}

- 매핑과 조합하여 사용할 수 있다.

## Arrays (배열)

- 고정 길이의 배열과 동적 크기의 배열이 있다.
- 배열보다 매핑을 쓰는 것이 가스 소비량을 줄일 수 있다.

## Enum

- 솔리디티에서 사용자 정의 유형을 만드는 방식.
