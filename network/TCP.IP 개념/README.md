HTTP 공부를 위해서는 프로토콜에 대한 이해가 필요하다. 그중에서도 인터넷을 포함한 네트쿼크에서 일반적으로 사용하고 있는 TCP/IP 프로토콜을 알아보도록 하겠다.
- 프로토콜 : 서로 다른 하드웨어와 운영체제 등을 가지고 서로 통신하기 위해서 필요한 규칙
TCP/IP 는 인터넷 상에서 데이터를 주고 받을 때 쓰는 독립적인 프로토콜의 집합이다.

# OSI 7계층
TCP/IP 를 공부하기 전 OSI 7계층에 대한 이해가 필요하다. 해당 프로토콜을 사용하는 계층이나 구조도에 대한 이해가 있어야지 이어서 이해가 편하기 때문이다.
![image](https://github.com/user-attachments/assets/1dc1fa33-1fc8-4c75-ad2d-3c23f32a51e2)
> 출처: https://www.guru99.com/difference-tcp-ip-vs-osi-model.html
- OSI 참조 모델은 말 그대로 참고 모델일 뿐 실제 사용되는 인터넷 프로토콜은 OSI 참조 모델 7계층 구조를 완전히 따르지는 않는다.
- 하지만, 어떤 계층에서 작동되어지고 있는지에 대한 개념 이해가 필요하기에 설명해보자면, 7개의 계층이 있고 난 이 계층을 외울때 물데네전세표응! 이렇게 외운다.
- 1계층 : 물리 계층(하드웨어에 가까운 계층입니다.가장 low level통신) / 데이터링크 계층(노드간의 전송 기술을 다룹니다. 이더넷이 대표적인 예이고, LAN에서 연결된 노드의 전송기술을 다룹니다.MAC주소가 필요합니다)/ 네트워크 계층(IP주소가 필요합니다. 호스트간 연결. 내 컴퓨터과 상대방 컴퓨터 사이를 고유하게 구별하고 연결) / 전송계층(TCP와 UDP 사용.프로세스 간 전송.포트번호가 필요합니다.) / 세션 계층(연결 세션에서 데이터 교환과 에러 발생 시 복구 관리) / 표현 계층(데이터 부호화 복호화 암호화, MIME인코딩 등) / 응용 계층(프로세스 간의 정보 교환을 담당, 사용자와 가장 밀접한 계층으로 인터페이스 역할,메일/인터넷/동영상)
- 인터넷 프로토콜 스택(Internet Protocol Stack)은 현재 대부분 TCP/IP 를 따른다.
- TCP/IP는 인터넷 프로토콜 중 가장 중요한 역할을 하는 TCP와 IP 의 합성어로 데이터의 흐름 관리, 정확성 확인, 패킷의 목적지 보장을 담당한다.
  - TCP: 데이터의 정확성 확인
  - IP: 패킷을 목적지까지 전송

# TCP/IP 4계층
TCP/IP는 4계층으로 구성된다.
TCP/IP가 계층적으로 구성되어 있음에 다음과 같은 장점이 있다.
- 독립적이다. (간섭이 적다.)
- 각 계층은 계층이 연결되어 있는 부분만 결정되어 있어, 각 계층의 내부는 자유롭게 설계 가능하다.
![image](https://github.com/user-attachments/assets/1d530210-09f1-4f6a-b3b8-59cc2ef64f25)
> 출처: https://cheapsslsecurity.com/blog/what-is-the-tcp-model-an-exploration-of-tcp-ip-layers/
### 애플리케이션 계층(application)
- 유저에게 제공되는 애플리케이션에서 사용하는 통신의 움직임을 결정
- http,dtp,dns,ssh,smtp 등등

### 전송 계층(transport)
- 애플리케이션 계층에 네트워크로 접속되어 있는 2대의 컴퓨터 사이의 데이터 흐름을 제공
- 애플리케이션 계층에서 받은 메세지를 기반으로 세그먼트 또는 데이터그램으로 데이터를 쪼개고 데이터의 오류가 없다면 순서대로 전달되도록 함
- TCP,UDP
### 인터넷 계층 (network)
- 네트워크 상의 패킷의 이동을 다룸
- 한 노드에서 다른 노드로 전송 계층에서 받은 세그먼트 또는 데이터 그램을 패킷화하여 목적지로 전송하는 역할
- 패킷: 전송하는 데이터의 최소 단위

### 링크 계층 (link, data link, network access, network interface)
- 네트워크에 접속하는 하드웨어적인 면을 다룬다.

# TCP/IP 통신 흐름
아래 그림과 같이 단계 별로 헤더(Message => segment/data gram => packet => frame/bit)를 붙여 전송하며 이를 데이터 캡슐화 라고 한다.

<img src="https://github.com/user-attachments/assets/8d844b54-ad9d-4c7e-a929-3c2e97cb1375" width="400"/>

- http 를 사용한 예시는 아래와 같다.
<img src="https://github.com/user-attachments/assets/ca2c8eb6-05cd-4c18-88a2-60f1bdec3864" width="400"/>

### 캡슐화
- 송신자가 수신자에게 데이터를 보낼 때 데이터가 각 계층의 특징들이 담긴 헤더들이 붙여지는 과정
- 예시: 전송계층은 TCP 헤더를 네트워크 계층은 IP주소 헤더를 추가
### 비캡슐화
- 캡슐화의 반대 과정, 수신측에서 각 계층을 거칠 때마다 해당 계층마다 사용한 헤더를 제거하는 과정

## 데이터 단위: PDU(protocol data unit)
- TCP/IP 4계층을 기반으로 설명했을 때 각 계층의 데이터 단위
- 애플리케이션 계층: 메세지
- 전송 계층: 세그먼트(TCP), 데이터 그램(UDP) => 의미는 같지만 사용하는 곳이 다름
- 인터넷 계층: 패킷 => 세그먼트에 SP와 DP가 포함된 IP헤더가 붙은 형태의 조각
- 링크 계층: 프레임(데이터 링크 계층), 비트(물리 계층)

# MTU와 MSS, PMTUD
참고 자료를 읽다가 발견한 흥미로운 문장이 있었는데,
TCP는 안전하지만 느리다. UDP 는 안전하진 않지만 빠르다. 라는 이해에 대한 설명보다는
TCP 는 조금 더 다양한 규칙이 담겨있다. UDP 는 간단한 한개의 규칙만이 존재한다. 라는 문장이었다.
UDP 는 TCP에 비해 확인해야하는 절차가 적고, 그렇기에 header의 구성요소가 간단하다. 하지만, TCP는 헤더가 복잡하고 확인하는 과정이 많이게 시간이 조금 더 소요된다는 특징을 가지고 있다.
그래서 HTTP/3 에서는 UDP를 활용한 새로운 방식이 탄생했다고도 한다. UDP가 더 간단하기에 뭔가를 더 추가하고 고치기에 확장성이 넓다는 것이다.(헤더의 구조는 참고자료 사진 참고하기.)
하지만 TCP 내부에서도 함수와 기능을 추가할 수 있는 부분이 조금은 존재하고 오늘날에는 그 니즈를 충족하는 다양한 기능들이 나오곤 한다. 그중 몇가지에 대한 설명이 바로 다음과 같다.
## MTU(Maximum Transimssion Unit)
- 네트워크에 연결된 장치가 받아드릴 수 있는 최대 데이터 패킷의 크기
- mtu를 기준으로 데이터는 쪼개져서 패킷화 된다.
- Ethernet Frame 을 제외한 IP Datagram 의 최대 크기

## MSS(Maximum Segment Size)
- 데이터의 크기(payload)만 가리킨다.
- MSS = MTU - IP Header 크기(최소 20 Byte) - TCP Header 크기 (최소 20 Byte)

## 전송계층에서 TCP와 UDP 비교
- TCP와 UDP 는 4계층인 전송 계층에서 동작
- 두 프로토콜은 모두 패킷을 한 컴퓨터에서 다른 컴퓨터로 전달해주는 IP 프로토콜을 기반으로 구현되어 있지만, 서로 다른 특징을 가지고 있다.

<img src="https://github.com/user-attachments/assets/d617ff51-0ffe-442e-87e4-06915adf57c8" width="400"/>
### TCP
  - 연결형 서비스로 가상 회선 방식을 제공
  - 데이터의 전송 순서 보장
  - 데이터의 경계를 구분하지 않음
  - 신뢰성 있는 데이터 전ㅅ오
  - UDP 보다 전송속도가 느림
  - 연결을 설정(3-way handshaking)과 해제(4-way handshaking)
### UDP
    - 비연결형 서비스롤 데이터그램 방식을 제공
    - 비신뢰성
    - 데이터의 경계를 구분
    - 패킷 오버해드가 적어 네트워크 부하 감소
    - 혼잡 제어를 하지 않기 때문에 TCP보다 빠름
    - TCP의 handshaking 같은 연결 설정이 없음

  ### 비교
  <table>
    <tr>
      <th scope="col">TCP</th>
      <th scope="col">UDP</th>
    </tr>
    <tr>
      <td>Connection-oriented protocol (연결지향형 프로토콜)</td>
      <td>Connection-less protocol (비 연결지향형 프로토콜)</td>
    </tr>
    <tr>
      <td>신뢰성 O</td>
      <td>신뢰성 X</td>
    </tr>
    <tr>
      <td>Connection by byte stream (바이트 스트림을 통한 연결)</td>
      <td>Connectino by message stream (메세지 스트림을 통한 연결)</td>
    </tr>
    <tr>
      <td>Congestion / Flow control (혼잡제어, 흐름제어)</td>
      <td>NO Congestion / Flow control (혼잡제어와 흐름제어 지원 X)</td>
    </tr>
    <tr>
      <td>Ordered, Lower speed(패킷의 순서 보장, 상대적으로 느림)</td>
      <td>Not ordered, Higher speed (패킷의 순서가 보장되지 않음, 상대적으로 빠름)</td>
    </tr>
    <tr>
      <td>Reliable data transmission (신뢰성 있는 데이터 전송 - 안정적)</td>
      <td>Unreliable data transmssion(데이터 전송 보장 X)</td>
    </tr>
    <tr>
      <td>TCP packet : Segment (세그먼트 TCP 패킷)</td>
      <td>UDP packet : Datagram (데이터그램 UDP 패킷)</td>
    </tr>
    <tr>
      <td>HTTP, Email, File tranfer에서 사용</td>
      <td>DNS, Broadcasting (도메인, 실시간 동영상 서비스에서 사용)</td>
    </tr>
  </table>

### 참고자료
- https://www.cloudflare.com/ko-kr/learning/ddos/glossary/user-datagram-protocol-udp/
- https://www.cloudflare.com/ko-kr/learning/ddos/glossary/tcp-ip/
- https://wormwlrm.github.io/2021/09/23/Overview-of-TCP-and-UDP.html#osi-7계층-맛보기
- https://evan-moon.github.io/2019/10/08/what-is-http3/
- https://evan-moon.github.io/2019/11/22/tcp-flow-control-error-control/

