# NestJS 란?

- NestJS는 Node.js 서버 어플리케이션을 구축하기 위해 제작된 프레임워크이며 Express위에서 움직인다.

  - Typescript 기반의 OOP(객체 지향 프로그래밍), FP(기능 프로그래밍), FPR(기능 반응형 프로그래밍)의 요소가 결합되었다.

<hr>

<h2>Controller 란?</h2>

Controller란 사용자(client)의 요청(request)을 처리하고, 응답(response)을 반환하는 역할을 한다. <br>
Controller가 없어도 웹 서버를 구축할 수 있지만, 엄청나게 긴 코드를 읽고 유지 및 보수를 해야하는 불편함이 생긴다. 따라서 해당 기준에 따라 해당 코드들을 나눠서 제어자 역할을 하는 controller라고 이름을 지어 관리하는 것이다. Controller는 디자인 패턴 중 하나인 **MVC(Model-View-Controller)패턴** 에서 자주 사용되는 개념이다.

<h5>MVC Pattern: <br>
1. Model- 데이터와 관련된 작업을 처리한다.<br>
2. View- 사용자에게 보여줄 방식을 정의한다.<br>
3. Controller- 사용자의 요청을 처리하고, 그에 관한 응답을 반환한다.</h5>
<hr>

<h2>Routing 이란?</h2>

Controller는 어플리케이션에 대한 특정 요청을 수신하는데, 프로그래머가 각 컨트롤러에서 어떤 요청을 수신할지를 정해주어야 한다. <br>
NestJS의 **@Controller()** 데코레이터는 이러한 역할을 수행하기 위해 경로를 지정할 수 있는데, 이것을 **라우팅**이라고 한다. <br>
따라서 @Controller() 데코레이터 안에 경로를 설정하는 경우에는 <br>
예를 들어 **localhost:3000/~~~** 이 되는 것이고, <br>
데코레이터에 어떠한 경로도 설정하지 않으면 해당 컨트롤러가 디폴트가 되는데, 이때는
**localhost:3000** 이 되는 것이다.
