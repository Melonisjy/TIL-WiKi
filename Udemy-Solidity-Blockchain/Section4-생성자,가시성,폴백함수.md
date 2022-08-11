## Setter / Getter Functions

<스마트 계약의 값을 읽을 때 쓰이는 두 가지 함수>

- View function: 상태를 읽고 다른 view 함수를 호출할 수는 있지만 상태를 수정할 순 없다.

- Pure function: 상태를 읽거나 수정할 순 없지만 다른 pure함수와 상호 작용할 수 있다.
<hr>

## Function Visibility(가시성)

- Public

  - 스마트 계약 외부와 스마트 계약 내부에서 함수가 호출될 수 있다.

- Private

  - 스마트 계약 내에서만 가능하고 외부에서는 함수에 접근할 수 없다.

- External

  - 외부 혹은 스마트 계약에서 호출될 수 있지만 스마트 계약 내부 호출은 불가능하다. 특히 외부에 있는 함수와 상호 작용할 수 있다.

- Internal
  - Private 함수와 비슷하지만 파생(상속)된 스마트 계약에서도 사용 가능하다.

<hr>

## Constructor

- 배포 중 한 번만 호출 가능하다.
- 이때 생성자는 public 또는 internal이다.

<hr>

## Fallback Function

- 이름이 없는 함수이다. like "function ()"
- 함수와 상호 작용하지 않고 스마트 계약에 이더를 보내는 경우에 사용.
- 함수와 상호 작용하려고 하지만 함수 이름을 잘못 입력하여 스마트 계약이나 EVM이 소스 코드에서 해당 함수를 찾지 못했을 때 자동으로 실행된다.
- 반드시 외부여야 한다. public, internal, private-> xxxx
- 중요한 건 모든 payable 함수를 비활성화해도 이더를 수신할 수 있다는 것이다.
