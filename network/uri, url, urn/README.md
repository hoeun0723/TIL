# URI / URL / URN
3가지를 간단하게 설명하자면,
1. URL과 URN은 URI의 종류이다.
2. 모든 URL은 URI이고, 모든 URN은 URI이다.
3. URL과 URN은 다르다.
4. 모든 URI는 URL이라고 할 수 없다.
정도가 있다. 이에 대한 더 자세한 설명은 이제부터 이어가겠다.

## URI(Uniform Resource Identifier)
URI는 통합 자원 식별자를 의미한다. 다시 말해, 인터넷상의 "자원 자체"를 식별하는 고유한 문자열 시퀀스이다.

### URI와 URL, URN
URI는 두 가지 주요 부분집한인 URL과 URN으로 구성된 종합적인 개념이다. URN은 현 재 그 자원이 어디에 존재하던 상관없이 그 이름만으로 자원을 식별하는데 비해 URL은 자원이 어디 있는지 설명해서 자원을 식별한다.
나는 어떻게 이해했냐면, URI가 지도. 라고 생각하면 URL은 그 지도 상에서의 자원의 위치 이다 ! 핀셋으로 콕 집어서 나타낸 곳이라는 것이다. 그리고 그 핀셋으로 콕! 집어서 나타낸 URL 말고, 그 자원 자체의 이름을 나타내는 URN! 이 있는것이다. URL과 URN은 모두 URI가 될 수 있지만, 모든 URI가 URL은 될 수 없는것이다. URN으로만 이루어진 URI이 있을 수 있으므로! 이름만 적혀있는 지도가 있을 수 있으므로.

## URL(Uniform Resource Locator)
URL은 인터넷 자원을 가리키는 표준이름 이다. URL은 애플리케이션이 자원에 접근할 방법을 제공한다. 많은 사용자는 브라우저가 그들이 요청하는 자원을 가져오는 데 사용되는 프로토콜과 접근 방식을 모른다.
- 브라우저가 정보를 찾는데 필요한 자원의 위치를 가리킨다.
- URL을 통해 사람이 HTTP 및 다른 프로토콜을 통해 접근할 수 있다.

### URI와 URL 의 차이점
> URI = 식별자, URL = 식별자+위치
예시
- example.com 은 URI이다. 자원의 이름만 나타내기 때문.
- https://example.com 은 URL 이다. 이름과 더불어, 어떻게 도달할 수 있는지 위치까지 함께 나타내기 때문.(프로토콜 'https'포함)
***URL은 일종의 URI이다.***
- 하위 집합 개념
***URL은 프로토콜과 결합한 형태***
- 어떻게 위치를 찾고 도달할 수 있는지까지 포함되어야 하므로 URL은 프로토콜 + 이름(또는 번호)의 형태

### 구조
대부분의 URL 스킴의 문법은 9개의 구분으로 나뉜다.
```
<스킴>://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터>?<질의>#<프래그먼트>
```

- 이 모든 컴포넌트를 가지는 URL은 거의 없고, 스킴, 호스트, 경로가 가장 중요하다.
> 출처: https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_URL
***스킴***
![image](https://github.com/user-attachments/assets/b206142d-b368-4027-9f02-e2380dc73e8b)
- 브라우저가 어떤 규약을 사용해야 하는 지를 나타낸다.
- 프로토콜은 컴퓨터 네트워크에서 데이터를 교환하거나 전송하기 위한 방법들의 세트, 서버와 클라이언트 간에 어떤 방법으로 자원에 접근할지 알려주는 통신 규약 중 하나

***도메인(호스트)***
![image](https://github.com/user-attachments/assets/169352a9-0e8f-4b30-9a76-1936370e1dae)

- URL에서 웹서버의 위치를 지정하는 부분으로 어떤 웹 서버가 요구되는 것인 지를 가리킨다.
- IP주소를 직접 사용할 수도 있지만 도메인 주소가 편하기 때문에 도메인 주소를 주로 사용한다.

***포트***
![image](https://github.com/user-attachments/assets/82d474e4-dd9f-4a07-ba4c-335cbb56ed2a)
- 자원을 호스팅 하는 서버가 열어놓은 포트 번호.
- 만약 웹서버가 자원의 접근 하기 위해 표준 HTTP 포트 (HTTP를 위한 80, HTTPS를 위한 443)을 사용한다면, 포트번호는 보통 생략할 수 있다. 그렇지 않으면 포트 번호는 필수이다.

- ***경로***
- ![image](https://github.com/user-attachments/assets/3e616ba5-9b96-4393-9046-61aaef5ce996)
- 웹서버에서 자원에 대한 경로이다.

***파라미터***
![image](https://github.com/user-attachments/assets/ecdb6007-e5aa-417f-8134-f49f6b7532a0)
- 특정 스킴들에서 입력 파라미터를 기술하는 용도로 사용
- 이름/값의 쌍으로 표현
- 세미콜론(;)으로 구분하여 여러 개 기술 가능
 
***프래그먼트(Anchor)***
![image](https://github.com/user-attachments/assets/088bc6ff-6ab5-4022-a1c8-62ba5f7990ac)
- 자원의 일부를 가리키는 이름.
- 프래그먼트가 가리키는 지점에 위치된 내용을 보여주기 위해 브라우저에 방향을 알려준다.
 
## URN(Uniform Resource Name)
URN은 자원의 위치, 프로토콜, 호스트 등과는 상관없이 각 자원에 이름을 부여한 것이다. 즉, URL은 어떤 특정 서버에 있는 웹 문서를 가리키지만, URN은 웹 문서의 물리적인 위치와 상관없이 웹 문서 자체를 나타낸다. 실제로 그냥 그 자원의 이름 자체를 의미하는 것이다.

이처럼 개별 자원세 식별자를 부여하게 되면 해당 정보에 대한 URN은 일정하게 유지되며 자원의 위치,프로토콜, 호스트와 관계없이 위치를 파악할 수 있다는 장점이 있다. (ex. 웺 문서가 다른 웹 서버로 이동하거나 주소가 바뀌는 등 물리적 위치가 변경되더라도 해당 문서를 찾을 수 있다.)


### 참고자료
https://mygumi.tistory.com/139
https://www.elancer.co.kr/blog/view?seq=74
https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/network/uri.md
https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_URL
https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn
