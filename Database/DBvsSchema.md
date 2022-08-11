## 데이터베이스와 스키마의 차이점

DBMS마다 이 둘의 의미가 다르다.

- 오라클

  - 오라클에서 스키마는 사용자(USER)가 생성한 모든 오브젝트(테이블, 인덱스, 프로시저 등)를 의미한다.
  - 스키마와 사용자는 다르다.
  - 스키마에 각각의 사용자에게 선택적 권한을 준다.
  - 오라클에서 데이터베이스는 실제 물리적인 데이터베이스를 의미한다.

- Mysql/MariaDB

  - 데이터베이스와 스키마가 같은 의미로 테이블 등의 오브젝트 집합이다.

- PostgreSQL
  - Mysql의 데이터베이스가 PostgreSQL의 스키마이다. 데이터베이스는 스키마의 상위 개념이다.
  - PostgreSQL은 Mysql과 다르게 데이터베이스가 다르면 완전히 물리적인 분리로 보게 된다.