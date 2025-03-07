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
  <summary>OSI 7계층을 택하면 좋은점이 무엇일까요?</summary>
    <div markdown="1">
      OSI 7계층은 표준 프로토콜을 사용하여 다양한 통신 시스템이 통신할 수 있도록 하는 개념 모델이기에, 표준과 학습 도구, 모듈과 에서 장점이 있을 것이다. 표준화를 통해 이질적인 포트 문제나 프로토콜 등으로 인한 문제를 해결하여 비용을 절감하거나, 계층별의 기능과 통신음
    </div>
</details>
<details>
  <summary>TCP/IP에 대해 설명해주세요.</summary>
    <div markdown="1">
      
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
