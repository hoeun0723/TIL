# 네트워크
- [네트워크 기초](https://github.com/hoeun0723/TIL/blob/main/network/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%EA%B8%B0%EC%B4%88/README.md)
- [라우팅, 라우터,게이트웨이](https://github.com/hoeun0723/TIL/blob/main/network/%EB%9D%BC%EC%9A%B0%ED%8C%85%2C%20%EB%9D%BC%EC%9A%B0%ED%84%B0%2C%20%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4/README.md)
- [IP주소,MAC주소,ARP,RARP](https://github.com/hoeun0723/TIL/tree/main/network/IP%EC%A3%BC%EC%86%8C%2CMAC%EC%A3%BC%EC%86%8C%2CARP%2CRARP)
- [IP주소체계](https://github.com/hoeun0723/TIL/blob/main/network/IP%EC%A3%BC%EC%86%8C%EC%B2%B4%EA%B3%84/README.md)
- [TCP.IP 개념](https://github.com/hoeun0723/TIL/tree/main/network/TCP.IP%20%EA%B0%9C%EB%85%90)
- [TCP.IP 연결 및 해제 과정](https://github.com/hoeun0723/TIL/tree/main/network/TCP.IP%EC%97%B0%EA%B2%B0%20%EB%B0%8F%20%ED%95%B4%EC%A0%9C%20%EA%B3%BC%EC%A0%95)
- [웹브라우저통신과정](https://github.com/hoeun0723/TIL/tree/main/network/%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%ED%86%B5%EC%8B%A0%EA%B3%BC%EC%A0%95)
- [http](https://github.com/hoeun0723/TIL/tree/main/network/http)
- [uri, url, urn](https://github.com/hoeun0723/TIL/tree/main/network/uri%2C%20url%2C%20urn)
- [dns](https://github.com/hoeun0723/TIL/tree/main/network/dns)

## 질의 응답
<details>
  <summary>프로토콜이란?</summary>
    <div markdown="1">
      데이터를 전송하는 과정 중에 상호간에 정해둔 규칙을 의미한다. 종류로는 http/smtp 등이 있고 각 프로토콜에 따라서 데이터 전송 방식이나 속도등이 제한된다. 네트워크를 통해 데이터를 주고받기 위해서는 데이터를 작은 조각으로 잘라서 보낸 뒤 네트워크 간 약속한 규칙에 따라 전송해야 한다. 여기서 송신자와 수신자 간에 데이터를 전달하고 전달받는 절차나 데이터 양식 따위를 프로토콜 이라고 한다.
      - 애플리케이션 계층 / 상위 계층 - 5 ~ 7 계층
      - 데이터 플로 계층 / 하위 계층 - 1 ~ 4 계층
    현재 애플리케이션 레벨의 프로토콜은 비트 기반이 아니라 문자 기반의 프로토콜이 많이 사용되고 있다. (http,smtp)
    </div>
</details>

<details>
  <summary>OSI 7계층이란? (TCP/IP 와 연관지어서)</summary>
    <div markdown="1">
      OSI 모델은 표준 프로토콜을 사용하여 다양한 통신 시스템이 통신할 수 있도록 하는 개념 모델이다. OSI 7계층 네트워크 프로토콜이 통신하는 구조를 7개의 계층으로 분리하여 각 계층간 상호작동 하는 방식을 정해 놓은 것이다.
      물리,데이터,네트워크,전송,세션,표현,응용 계층 이렇게 7개의 계층으로 나뉘어져 있는 단계를 의미한다. 현재는 OSI 7계층을 완전히 따르지는 않고, 인터넷 프로토콜 스택(Internet Protocol Stack)은 대부분 TCP/IP를 따른다. TCP/IP 4계층에는 1계층에서 네트워크 접근 계층(이더넷), 2계층에 인터넷 계층(IP), 3계층에 전송 계층(TCP,UDP, QUIC), 4계층에 응용계층(HTTP)가 있다.
    </div>
</details>

<details>
  <summary>OSI 7계층을 택하면 좋은 점이 무엇일까요?</summary>
  <div markdown="1">
    OSI 7계층은 이상적인 모델이기 떄문에 표준화된 구격이나 , 오류가 났을때 이를 탐별하기에 쉽다. 현재에는 다양한 이유 때문에 해당 모델을 엄격하게 따르지 않긴 하다.
    - 표준과 학습 도구 : 표준화를 통해 이질적인 포트 문제나 프로토콜 등으로 인한 문제를 해결하여 비용을 절감
    - 모듈화(계층화) : 계층별의 기능과 통신 과정을 단계별로 나누어서 쉽게 알 수 있고, 특정한 곳에 이상이 생기면 그 단계만 수정할 수 있다.
  </div>
</details>

<details>
  <summary>메일 통신 흐름을 OSI 모델을 통해 설명한다면?</summary>
  <div markdown="1">
    [OSI 모델 계층 설명 페이지를 참고](https://github.com/hoeun0723/TIL/tree/main/network/OSI%20%EB%AA%A8%EB%8D%B8)
  </div>
</details>

<details>
  <summary>이전에 저희 회사의 서비스를 제공받는 모든 고객의 pc에서 서비스 중단이 일어났습니다. OSI 7계층의 관점으로 몇 번째 계층의 문제임을 예상할 수 있을까요?</summary>
  <div markdown="1">
    1계층 혹은 3계층에서 일어난 것이라고 생각할수 있다.
    1계층은 물리적 장비(케이블, 스윛, 라우터,네트워크 카드, Wi-Fi 등)의 문제를 다루는데, 모든 고객이 동시에 서비스 중단을 겪었다면 ISP 가 광케이블 절단을 했고나 네트워크 장비 장애, 라우터 고장 등의 문제가 있을 가능성이 크다. 특히 광케이블 단선, 데이터 선터의 물리적 문제(정전, 장비 고장), 네트워크 스위치/라우터 장애가 발생하면, 전체 사용자가 영향을 받기 때문입니다. 그리고 3계층은 IP 주소 할당, 라우팅, 네트워크 경로 설정과 관련된 계층인데, 모든 고객에게 서비스가 중단되었다면 라우팅 문제, IP 충돌, BGP 설정 오류, 네트워크 방화벽 정책 문제 등이 의심된다. 특히 BGP오류나 ISP 의 라우팅 문제로 인해 특정 네트워크 구간이 단절되면 사용자는 PC 인터넷 연결이 유지되더라도 특정 서비스에 접근할 수 없게 된다.
 다른 계층이 아닌 이유는 
 1. 2계층은 데이터 링크 계층인데 개별 네트워크 장비 간의 통신 (ex. MAC 주소 기반) 문제를 다루므로 보통 특정 네트워크 장비에서만 문제가 발생한다. 모든 고객이 동시에 문제가 발생하는 경우에는 2계층일 가능성이 낮다.
 2. 4계층은 TCP/UDP 오류일건데 이 경우에는 특정 웹사이트에서만 문제가 발생해야 한다. 
 3. 5~7계층은 특정 웹사이트나 애플리케이션에서만 문제가 발생해야 한다. 하지만 모든 고객이 장애를 겪었다면 해당 계층 문제가 아닌 것이다. 예를 달어 DNS 서버 문제라면 특정 도메인 연결에서만 문제가 생기겠지만, 전체 네트워크 장애와 같은 광범위한 이슈는 발생하지 않는다.
  </div>
</details>

<details>
  <summary>도메인과 ip 주소에 대해서 설명해보세요.</summary>
  <div markdown="1">
    ip주소는 네트워크 통신을 할때 필요하다 현재는 ipv4로 사용하다가 부족한 문제가 생겨서 ipv6 가 생겨난 상황이고, 서브넷 마스크를 통해 네트워크 ID 와 호스트 ID 를 구분하고 있다. (이전에는 클래스로 구분했다.)
    ip 주소는 숫자로 되어 있기에 식별하기 어려워서 도메인 네임 즉, 기억하기 쉬운 google.com naver.com 이런 식의 이름으로 전환하여 사용되어 지고 있다.
  </div>
</details>

<details>
  <summary>Ip 주소와 MAC주소를 둘다 사용해야 하는 이유</summary>
  <div markdown="1">
    IP주소는 3계층인 네트워크 계층에서 MAC 주소는 2계층에서 사용되어 진다. 각 계층간의 간섭은 없기 때문에 각각의 주소가 필요하다. IP 주소는 택배를 보낼 때 사용하는 계층형 주소 원리와 유사한 느낌이라면, MAC 주소는 하드웨어의 고유한 식별 번호이기에 해당 고유한 하드웨어를 식별하려면 해당 주소가 필요하다. 유동 IP의 특징으로 인해 IP 자체가 변동 될 수 있기 때문이다.
  </div>
</details>

<details>
  <summary>서브넷팅이란?</summary>
  <div markdown="1">
    네트워크를 분할하는 것을 서브넷팅이라고 하고 분할된 네트워크를 서브넷이라고 한다. 서브네싱은 자원을 효율적으로 분배하기 위해 네트워크 영역과 호스트 영역을 쪼개는 작업으로 IP 주소를 효율적으로 나누어 사용하기 위한 방법으로 네트워크 성능을 보장하고 IP 할당 범위를 더 작은 단위로 나눌 수 있게 된다.

서브넷팅 하면 네트워크 ID, 서브넷ID 호스트 ID로 나뉘어 지게 되고 IP 주소를 서브넷팅하게 되면 어디까지나 네트워크 ID이고 호스트 ID인지 알기 위해 서브넷 마스크를 사용한다.
  </div>
</details>

<details>
  <summary>TCP 와 UDP는 무엇이며 차이점은 무엇인가요?</summary>
    <div markdown="1">
     많이 알려진 내용이 있는데 TCP는 신뢰성이 높고 느리다. UDP 는 신뢰성이 낮고 빠르다. 라는 마링 있다. 하지만 이 말에 대해서 조금 더 자세히 설명하자면, TCP 는 여러가지 규약을 가지고 있고, UDP는 한가지 규약을 가지고 있다. 이에 대한 증거는 헤더를 보면 알 수 있는데, TCP는 다양하고 여러가지의 규칙들을 가지고 있는데, UDP 그에비해 간단한 규칙을 가지고 있다. 그렇기에 커스텀이 더 쉬운건 UDP 이고 HTTP/3 에서는 UDP를 커스텀하여 사용하기도 했다. 하지만 최근에는 TCP에 추가적인 기능을 사용할 수 있는 것이 많이 나왔기에 TCP 를 많이 사용하곤 한다.
      TCP의 특징
      - 연결형 서비스로 가상 회선 방식을 제공
      - 데이터의 전송 순서 보장
      - 신뢰성 있는 데이터 전송
      - UDP보다 전송속도가 느림
      - 연결을 설정(3-way handshaking)과 해제(4-way handshaking)
    UDP의 특징
      - 비연결형 서비스로 데이터그램 방식을 제공
      - 비신뢰성
      - 데이터의 경계를 구분
      - 패킷 오버해드가 적어 네트워크 부하감소
      - 혼잡 제어를 하지 않기 때문에 TCP보다 빠름
      - TCP 의 handshaking 같은 연결 설정이 없음
    </div>
</details>

<details>
  <summary>TCP/IP에 대해 설명해주세요.</summary>
    <div markdown="1">
      TCP/IP 는 애플리케이션, 전송, 인터넷, 링크 계층으로 이루어져 있다. OSI 참조 모델은 말그대로 참고 모델일 뿐 실제 사용되는 인터넷 프로토콜은 OSI 참조 모델 7계층 구조를 완전히 따르지는 않는다. 인터넷 프로토콜 스택 (Internet Protocol Stack)은 현재 대부분 TCP/IP를 따른다.
      - TCP/IP 는 인터넷 프로토콜 중 가장 중요한 역할을 하는 TCP와 IP 의 합성어로 데이터의 흐름 관리, 정확성 확인, 패킷의 목적지 모장을 담당한다.
        - TCP: 데이터의 정확성 확인
        - IP: 패킷을 목적지까지 전송
      송신자가 수진자에게 데이터를 보낼 때 데이터가 각 계층을 지나며 각 계층의 특징들이 담긴 헤더들이 붙여지는 과정을 캠슐화라고 한다. 반대로 수신측에서 각 계층을 거칠 때마다 해당 계층마다 사용한 헤더를 제거하는 과정은 비캡슐화라고 한다. 예시로 전송계층은 TCP헤더를 네트워크 계층은 IP 주소 헤더를 추가한다.
    </div>
</details>
<details>
  <summary>3 way hand shake, 4 way hand shake에 대해서 설명하세요.</summary>
    <div markdown="1">
      3 way hand shaking 은 TCP 에서 실행하는 방식이고,그에 대한 방시은 다음과 같다.
      1. 클라이언트는 서버에 접속을 요청하는 SYN(a) 패킷을 보낸다.
      2. 서버는 클라이언트의 SYN 패킷에 대한 요청 수락 응답으로 ACK 패킷(a+1) 과 클라이언트도 포트를 열어달라는 SYN(b) 패킷을 보낸다.
      3. 마지막으로 클라이언트는 서버가 보낸 ACK(a+1)패킷과 SYN(b) 패킷을 받고 이에 대한 응답으로 ACK(b+1) 패킷을 보내며 연결이 성립된다.

4way hand shake 에서 클라이언트는 서버에게 FIN을 보내고 서버는 응답으로 ACK 를 보내고 모든 데이터를 다 전송했다면 FIN을 보낸다. 클라이언트는 응답으로 ACK를 보내고 서버는 소켓을 닫고 TIIME_WAIT 시간이 끝나면 클아이언트도 소켓을 닫아 연결을 종료한다.
    </div>
</details>

<details>
  <summary>URI, URL, URN의 차이는?</summary>
    <div markdown="1">
      URI는 인터낫 상의 자원 자체를 식별하는 고유한 문자열 시쿼스이다. URI는 두 가지 주요 부분집합인, URL과 URN으로 구성된 종합적인 개념이다. URN은 현재 그 자원이 어디에 존재하던 상관없이 그 이름만으로 자원을 식별하는데 비해 URL은 자원이 어디 있는지 설명해서 자원을 식별한다.

      URL은 인터넷 자원을 가리키는 표준이름이다. URL은 애플리케이션이 자원에 접근할 방법을 제공한다. 많은 사용자는 브라우저가 그들이 요청하는 자원을 가져오는데 사용되는 프로토콜과 접근 방식을 모른다. URL은 어떻게 위치를 찾고 도달할 수 있는지 까지 포함되어야 하므로 URL은 프로토콜 + 이름(또는 번호) 의 형태라고 할 수 있다.

      URN은 웹 문서의 물리적인 위치와 상관없이 웹 문서 자체를 나타낸다. 이처럼 개별 자원에 식별자를 부여하게 되면 해당 정보에 대한 URN은 잉ㄹ정하게 유지되며 자원의 위치, 프로토콜, 호스트와 관계없이 위치를 파악할 수 있다는 장점이 있다. (ec. 웹 문서가 다른 웹 서버로 이동하거나 주소가 바뀌는 등 물리적 위치가 변경되더라도 해당 문서를 찾을 수 있다.)
    </div>
</details>

<details>
  <summary>주소창에 google.com 을 치면 일어나는 일을 설명해보세요.</summary>
    <div markdown="1">
      웹 브라우저에 URL(도메인 이름만 입력해도 됨)을 입력하고 Enter 키를 누른다. 웹 브라우저가 도메인의 IP주소를 조회한다. (먼저 캐시를 찾고, 그 다음 DNS를 검색한다.)웹 브라우저가 찾은 IP주소를 기반으로 서버와의TCP 연결을 시작한다. 웹 브라우저가 HTTP요청을 서버로 전송한다. (필요한 경우, HTTPS 보안 통신이 진행된다.) 웹 서버가 요청을 처리하고 응답을 다시 웹 브라우저로 전송한다. 웹 브라우저가 전송 받은 콘텐츠를 렌더링한다.
    </div>
</details>

<details>
  <summary>Http 통신이란? HTTP가 뭔지 설명해주세요.</summary>
    <div markdown="1">
      HTTP 는 HyperText Transfer Protocol의 약자로 서버-클라이언트 모델을 따르면서 request/response 구조로 웹 상에서 정보를 주고받을 수 있는 프로토콜이다. TCP/IP 기반으로 작동하며, HTTP의 가장 큰 특징은 비-연결 지향(Connectionless)와 무상태성(Stateless) 이다. HTTP는 기본적으로 request 와 response의 구조를 띄는데, 클라이언트가 요청을 보내면 서버는 응답을 보내는 구조이다. 또한 요청 URI로 리소스를 식별한다.
      비 연결 지향이란 클라이언트가 서버에게 리소스를 요청한 후 응답을 받으면 연결을 끊어버리는 특징을 말한다.
      무상태성이란 각각의 요청이 독립적이라는 뜻으로 HTTP 프로토콜 레벨에서 이전에 보냈던 요청과 응답에 대해서 기억하지 않는 것을 의미한다.
    </div>
</details>

<details>
  <summary>HTTP request method 중 GET vs POST 를 비교 설명해주세요. (데이터를 조회하기 위한 용도로 POST 가 아닌 GET 방식을 사용하는 이유는 무엇인가요?)</summary>
    <div markdown="1">
      설계 원칙에 따라 GET 방식은 서버에게 여러 번 요청을 하더라도 동일한 응답이 와야 한다. GET 방식은 가져오는 것(Select)이므로, 서버의 데이터나 상태를 변경시키지 않아야 한다. (게시판의 리스트, 게시글 보기 기능, 예외: 방문자의 로그 남기지, 조회수 증가 기능)
      POST 방식은 수행하는 것으로, 서버의 값이나 상태를 바꾸기 위한 용도. (게시판 글 쓰기 기능)
      GET 요청의 경우 필요한 정보를 특정하기 위해 URL뒤에 Query String 을 추가하여 정보를 조회하고, POST 요청의 경우 전달할 데이터를 Body 부분에 포함하여 통신한다.
      GET 요청의 경우 URL 뒤의 Query String 까지 포함해서 브라우저 히스토리에 남게 되고 캐시가 가능하지만, POST 요청의 경우 브라우저 히스토리에 남지 않고 캐시도 불가능하다.
    </div>
</details>

<details>
  <summary>HTTP request method 중 POST vs PUT vs PATCH를 비교 설명해주세요.</summary>
    <div markdown="1">
      POST 과 PUT은 구분해서 사용해야한다. POST 는 새로운 데이터를 계속 생성하기 때문에 요청시마다 데이터를 생성하지만, PUT은 사용자가 데이터를 지정하고 수정하는 것이기 때문에 같은 요청을 계속하더라도 데이터가 계속 생성되지는 않는다.
      PUT은 지정한 데이터를 전부 수정하는 Method 지만 PATCH 는 정보의 일부분이 변경되는 방법이다. 그래서 PUT은 멱등하지만, PATCH는 어떻게 설계하느냐에 따라 멱등하다고 볼 수 있는게 달라진다.
    </div>
</details>

<details>
  <summary>HTTP status code에 대해서 설명ㅇ해 주세요</summary>
    <div markdown="1">
      HTTP status code 는 클라이언트가 보낸 HTTP 요청에 대한 서버의 응답 코드로, 상태 코드를 통해 요청의 성공/실패 여부를 판단할 수 있다. 100번대 부터 500번대까지 총 5개의 클래스로 구분되어 HTTP요청에 대한 상태를 알려줍니다.

      프로젝트를 하며 사용했던 상태코드로는 501 502 등과 같이 서버 오류가 났을때 상황에 대해 구분하여 message를 전달해줄 수 있도록 한 500번대 코드와 300~400번대로는 클라이언트 상에서 오류가 났을때 상황에 따른 message를 나타나게 하여 디버깅이 쉬워질 수 있도록 하였습니다. 카카오 로그인을 구현하면서 발견하게 됐던 상태코드들도 있습니다.
    </div>
</details>

<details>
  <summary>HTTP 프로토콜을 사용하여 개발한 경험이 있다면 말씀해주세요.</summary>
    <div markdown="1">
      클라이언트와 서버를 분리 시켜서 상호간의 데이터 전송을 진행할때 http 프로토콜을 사용하여 개발한 경험이 있다.
      1. RESTful API 
      서버 개발자로써 spring-boot 를 다룰때 GET,POST,DELETE 등 다양한 메서드들로 이용하며 api 를 설계하고 구현한 경험이 있다. 클라이언트와 서버 간의 통신을 처리했다.
      2. HTTP 상태 코드 관리
      클라이언트에게 적절한 HTTP 상태 코드를 반환하여 API 응답 상태를 명확히 전달하고자 했고, 서버 오류에서는 500번대를 주로 사용하였으며, 그 외에 클라이언트 상에서의 오류는 handler를 만들어서 300번대나 400번대로 message를 나타내게끔 했다.
      3. CORS 오류 처리
      서로 다른 도메인 간 HTTP 통신 시 발생하는 CORS 문제를 해결하기 위해 서버에서 CORS 설정을 적용했다.
      4. multipart/form-data 파일 업로드 및 다운로드
      파일을 서버로 전송하고 저장하고 관리하는 과정에서 HTTP 응답 헤더를 설정하여 파일 다운로드 기능을 구현했다.
      5. 보안
      HTTP 를 HTTPS로 certbot 을 활용하여 security를 설정해주었고, JWT 토큰을 사용하여 인증 및 권한 관리를 처리했다. 
      
    </div>
</details>

<details>
  <summary>비 연결성의 장점은 무엇인가요? 비 연결성의 단점은 무엇이고, 해결법은 무엇인가요?</summary>
    <div markdown="1">
      비 연결성은 클라이언트가 서버에게 리소스를 요청한 후 데이터 전송이 마무리 되면 연결을 유지하지 않고 끊어버린다는 특징을 가지고 있다. 
      이에 대한 장점은 서버의 부담을 줄일 수 있다가 있지만, 단점은 리소스를 요청할 때마다 연결해야 하는 오버헤드 비용이 발생한다. 이를 해결하기 위해선, 요청 헤더의 Connection: keep-alive 속성으로 지속적 연결 상태(Persistent connection)를 유지할 수 있다. 즉, 요청할 때마다 연결하지 않고 기존의 연결을 재사용 하는 방식이다.
      HTTP 1.1 부턴 지속적 연결 상태가 기본이며 이를 해제하기 위해선 명시적으로 요청 헤더를 수정해야 한다.
    </div>
</details>

<details>
  <summary>웹 애플리케이션 제작 시 조회/삭제/수정의 업무를 하려고 합니다. 각각을 어떤 방식으로 설계할 것인지 말해주세요.</summary>
    <div markdown="1">
      RESTful API에서 조회는 GET, 삭제는 DELETE 그리고 수정은 POST로 설계할 것이다. GET은 조회하기 위한 메서드로 멱등성을 만족하기 위해 데이터의 수정이 없어야 하며, POST 는 서버의 값 혹은 상태를 변경하기 위한 메서드로 수정하기 위해 사용하기 때문이다. POST는 지속적으로 새로운 데이터를 생성해 내는 특징이 있기에, 기존에 데이터가 있던 없던 오류가 나지 않을 가능성이 크다. 하지만, 개별 데이터가 중요해지고, 멱등성이 유지 되어야 하는 경우가 생긴다면 PUT이나 PATCH를 사용하게 될 거 같다.
    </div>
</details>

<details>
  <summary>Http와 Https 통신 방식의 차이?</summary>
    <div markdown="1">
      HTTP 에서 security를 추가하게 되면 HTTPS 가 된다. SS?이나 TSL이 추가 된 것이다. 해당 인증서가 필요하고, 그렇기에 데이터의 변조를 방지하여 무결성을 보장할 수 있다. 암호화,복호화 과정으로 인해 약간 느릴 수 있지만, seo 에 더 유리한 특징을 가지고 있다.
    </div>
</details>

<details>
  <summary>DNS 서버는 무슨 역할을 하나요?</summary>
    <div markdown="1">
      DNS는 ip 주소과 도메인 이름의 매핑을 관리한다. DNS 서버는 ip주소와 도메인 간의 변환 작업을 수행하며, 사용자가 도메인 이름을 웹 브라우저에 입력하면 해당 사용자를 어떤 서버에 연결할 것인지를 제어하는 역할을 한다.
    </div>
</details>

<details>
  <summary>도메인과 ip 주소에 대해서 설명해보세요.</summary>
    <div markdown="1">
      인터넷은 서버들을 유일하게 구분할 수 있는 ip 주소를 기본 체계로 이용한다. 하지만 ip 주소는 숫자로 이루어진 조합이라 인간이 기억하기엔 무리가 있다. 따라서 기억하기 편한 언어 체계의 도메인 네임을 통해 웹 서버에 접속하곤한다.
    </div>
</details>

<details>
  <summary>도메인의 구조에 대해서 설명해주세요</summary>
  <div markdown="1">
    도메인은 계층적으로 구성되어 있으며, 오른쪽에서 왼쪽으로 읽어가며 더 세부적인 범위로 나뉜다.
    도메인 구조 예시 : www.example.com (루트(.com) => 2차 도메인(example) => 서브도메인(www))
    1. 루트도메인.
    - 도메인의 가장 상위에 위치. 일반적으로 생략되어 표시되지는 않음.
    - 전 세계적으로 관리되는 최상위 네임서버가 존재.
    2. 최상위 도메인(TLD, Top Level Domain)
    - .com , .org, .net 등과 같은 도메인.
    - 국가 코드 도메인(Country Code TLD, ccTLD)도 있음 (.kr, .us)
    3. 2차 도메인 (Second Level Domain)
    - 사용자가 등록할 수 있는 고유한 이름 (예: example)
    4. 서브도메인
    - 2차 도메인 하위에서 나뉘는 영역 (예: www, blog, shop)
  </div>
</details>

<details>
  <summary>DNS 서버의 Recursive Query 과정을 설명해주세요.</summary>
    <div markdown="1">
      DNS는 도메인 이름을 IP 주소로 변환하는 역할을 한다. 이 과정에서 재귀적(Recursive) 쿼리가 사용된다.
      1. 클라이언트 요청 (사용자가 www.example.com)에 접속 요청
      2. 로컬 DNS 캐시 확인 (먼저 클라이언트의 로컬 DNS 캐시에 IP가 있는지 확인.)
      3. 로컬 DNS 서버(리졸버)에 요청 (캐시에 없다면, 로컬 DNS 서버에 요청.)
      4. 루트 네임서버로 요청 (로컬 DNS가 루트 서버에 www.example.com 에 대한 IP 요청.)
      5. TLD 네임서버로 안내 (루트 서버는 .com TLD 서버의 주소를 반환.)
      6. TLD 네임서버로 요청 (로컬 DNS가 .com TLD 서버에 다시 IP를 요청.)
      7. 권한 있는 네임서버(Authoritative DNS)로 안내 (TLD 서버가 example.com을 관리하는 권한있는 DNS서버의 주소를 반환)
      8. 권한 있는 네입서버로 요청 (권한 서버가 www.example.com에 대한 IP 주소를 반환)
      9. 응답 반환 (로컬 DNS는 클라이언트에게 IP 주소를 반환)
      10. 캐싱 (이 정보를 맂엉 시간 동안 캐싱하여 다음 요청을 빠르게 처리)
    </div>
</details>

<details>
  <summaryRoundRobin DNS에 대해 간략하게 설명해주세요.</summary>
    <div markdown="1">
      Round Robin DNS 는 하나의 도메인에 여러 IP 주소를 등록하고, 순차적으로 IP를 반환하는 방식의 로드밸런식 기법이다.
      예를 들면 example.com 에 3개의 서버 IP를 등록해두면 DNS 서버가 순차적으로 1번 2번 3번의 IP를 반환해주는 것이다.
    </div>
</details>

<details>
  <summary>Round Robin DNS의 문제점은 무엇이 있을까요?</summary>
    <div markdown="1">
      1. 서버 장애 인식 불가
      - DNS는 단순히 순차적으로 IP를 반환하므로, 특정 서버가 죽어 있어도 계속 해당 서버의 IP를 반환하게 됨.
      2. 부하 분산의 비효율성
      - 클라이언트 측 캐시가 적용되면 특정 서버로만 요청이 몰릴 수 있음.
      - 모든 서버가 동일한 성능과 처리량을 가지지 않을 경우, 불균형 발생.
      3. 지리적 문제
      - 사용자와 서버 간의 지리적 거리를 고려하지 않기 때문에, 응답 속도가 느려질 수 있음.
      4. DNS 캐싱 문제
      - 클라이언트가 받은 IP를 오랫동안 캐싱하면, 로드 밸런싱이 제대로 동작하지 않음.
      
    </div>
</details>

<details>
  <summary이러한 문제점을 해결하기 위한 스케쥴링 알고리즘에 대해 설명해주실 수 있나요?</summary>
    <div markdown="1">
      Round Robin DNS의 한계를 극복하기 위해, 지능형 로드밸런서와 다양한 스케쥴링 알고리즘이 사용된다.
      1. 최소 연결 방식
      - 가장 적은 연결을 유지하고 있는 서버로 트래픽을 전달.
      - 서버 간 부하가 균형적으로 유지됨.
      - 트래픽이 비슷한 서비스를 제공하는 경우 효과적.
      2. 가중치 라운드 로빈
      - 서버마다 가중치를 주어 트래픽을 분배.
      - 성능이 좋은 서버는 더 많은 요청을 처리하도록 설정.
      3. IP 기반 해시
      - 클라이언트의 IP 주소를 해시하여 특정 서버로 요청을 전달.
      - 세션 일관성을 유지하는 데 효과적 (같은 사용자가 항상 같은 서버로 연결)
      4. 최소 응답 시간
      - 응답 시간이 가장 빠른 서버로 요청을 전달.
      - 네트워크 지연을 줄이고 성능을 최적화.
      5. 지리적 기반 DNS
      - 사용자의 지리적 위치를 기반으로 가장 가까운 서버로 연결.
      - 글로벌 서비스에서 네트워크 지연을 줄이는 데 유용.

      다음과 같은 스케줄링 알고리즘을 고려하는 것이 서버 장애 대응과 부하 분산을 해결하는데 도움이 된다.
      클라우드 서비스에서는 AWS ELB, GCP Load Balancer 등 로드밸런서를 사용하여 효율적으로 관리하기도 한다.
    </div>
</details>


## 참고자료
https://github.com/brave-people/brave-tech-interview/blob/main/contents/network.md
https://github.com/Seogeurim/CS-study/tree/main/contents/network
https://velog.io/@mardi2020/네트워크-면접-질문-정리
https://joontae-kim.github.io/2020/10/26/interview-question-network/
https://mangkyu.tistory.com/91
