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
      
    </div>
</details>
<details>
  <summary>URI, URL, URN의 차이는?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>주소창에 google.com 을 치면 일어나는 일을 설명해보세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>Http 통신이란? HTTP가 뭔지 설명해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>HTTP request method 중 GET vs POST 를 비교 설명해주세요. (데이터를 조회하기 위한 용도로 POST 가 아닌 GET 방식을 사용하는 이유는 무엇인가요?)</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>HTTP request method 중 POST vs PUT vs PATCH를 비교 설명해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>HTTP status code에 대해서 설명ㅇ해 주세요</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>HTTP 프로토콜을 사용하여 개발한 경험이 있다면 말씀해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>비 연결성의 장점은 무엇인가요? 비 연결성의 단점은 무엇이고, 해결법은 무엇인가요?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>웹 애플리케이션 제작 시 조회/삭제/수정의 업무를 하려고 합니다. 각각을 어떤 방식으로 설계할 것인지 말해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>Http와 Https 통신 방식의 차이?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>DNS 서버는 무슨 역할을 하나요?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>DNS 서버는 무슨 역할을 하나요?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>도메인과 ip 주소에 대해서 설명해보세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>DNS 서버의 Recursive Query 과정을 설명해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summaryRoundRobin DNS에 대해 간략하게 설명해주세요.</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary>Round Robin DNS의 문제점은 무엇이 있을까요?</summary>
    <div markdown="1">
      
    </div>
</details>
<details>
  <summary이러한 문제점을 해결하기 위한 스케쥴링 알고리즘에 대해 설명해주실 수 있나요?</summary>
    <div markdown="1">
      
    </div>
</details>


## 참고자료
https://github.com/brave-people/brave-tech-interview/blob/main/contents/network.md
https://github.com/Seogeurim/CS-study/tree/main/contents/network
https://velog.io/@mardi2020/네트워크-면접-질문-정리
https://joontae-kim.github.io/2020/10/26/interview-question-network/
https://mangkyu.tistory.com/91
