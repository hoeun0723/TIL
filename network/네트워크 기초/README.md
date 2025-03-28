# 네트워크란?
네트워크는 구조적으로 노드들이 링크로 서로 연결되어 있고, 자원을 공유하는 집합을 의미한다. (그림을 참고하면 이해가 편하다!)
- 노드 : 서버, 라우터, 스위치 등 네트워크 장치
- 링크 : 유선 또는 무선의 연결 매체
네트워크는 물리적인 전송 매체로 연결되어 데이터를 교환하는 시스템의 모임이다. 이 네트워크를 구성하는 시스템을 일반적으로 노드(node)라고 하고, 그중에서 컴퓨팅 기능이 있는 시스템은 호스트(host)라고 한다. 호스트는 다른 말로 종단(end system)이라고도 한다.
호스트는 역할에 따라 두 가지로 나눌 수 있다.
- 클라이언트(client) : 서버에게 서비스를 요청하고 응답받아 서비스 제공
- 서버(server) : 클라이언트의 요청을 대기하고 요청받아 서비스 
<img src="https://github.com/user-attachments/assets/fa85ba2f-9b64-4d59-8c48-f8c1f23ee267" width="350"/>

# 프로토콜이란?
쉽게 말해 규칙을 의미한다. 네트워크 통신을 위한 규칙이다.
네트워크를 통해서 데이터를 주고 받기 위해서는 네트워크 간 약속한 규칙을 지키며 데이터를 작은 조각으로 잘라서 보내야한다. 여기서 송신자와 수신자 간에 데이터를 전달하고 받는 절차나 데이터 양식 등을 프로토콜(protocol)이라고 한다. 프로토콜은 데이터를 교환할때 따르는 표준화된 통신 규칙이다.
(+ 패킷(packet) : 송신자와 수신자 간에 주고받는 데이터)
네트워크와 컴퓨팅 환경이 지금과 다르게 열악한 과거에는 효율적인 통신을 위해 비트(bit) 기반의 프로토콜이었다고 한다. 하지만, 현재 애플리케이션 레벨에서의 프로토콜은 비트 기반이 아닌 문자 기반의 프로토콜로 사용되어지고 있다. (ex. http, smtp) 문자 기반 포로토콜은 비트 기반 프로토콜에 비해 효율성은 떨어지지만 다양한 확장이 가능하다.

<img src="https://github.com/user-attachments/assets/09931a5f-f1ac-4076-90e8-3e67f9ade49e" width="350"/>

# 트래픽이란?
트래픽이란 특정 시점에 링크 내에 흐르는 데이터의 양을 의미한다. 웹 사이트에 트래픽이 많다는 것은 사용자 접속이 많아서 전송하는 데이터의 양이 많다는 것을 뜻한다.
단위는 일반적으로 bps(bit per second)로 표시한다.
```
트래픽 = 용량 * 사용자 수 * 개수
ex) 2GB 동영상 * 10명 * 10ro = 200GB
```
# 처리량이란?
처리량은 링크 내에서 성공적으로 전달된 데이터의 양을 의미한다. 많은 트래픽을 처리한다는 말은 많은 처리량을 가진다라는 말과 동일하다. 단위는 bps 초당 전송 또는 수신되는 비트 수로 표시한다.
처리량은 사용자들이 접속할때 트래픽이나 네트워크 장치 간 대역폭, 네트워크 중간 발생하는 에러, 장치의 하드웨어 에 영향을 받는다.

# 대역폭이란?
대역폭은 주어진 시간 동안 네트워크 연결을 통해 흐를 수 있는 최대 비트 수 를 마랗ㄴ다. (최대 트래픽) 쉽게 말해, 네트워크에서 전송되는 데이터의 범위로 허용할 수 있는 동시접속자 수와 같은 의미라고 할 수 있다.
예를 들어보면, 100Mbps 라는 대역폭을 가진 네트워크 장비가 있다고 할 때, 한 사람당 100kps 크기의 파일을 요청한다고 하면 100Mbps / 100kbps = 약 1,000명 정도의 요청을 처리할 수 있다.

# RTT
RTT(round trip time) 은 왕복 지연시간으로 신호를 전송하고 해당 신호의 수신확인까지 걸린 시간을 더한 값이자 어떤 메세지가 두 장치 사이를 왕복하는 데 걸린 시간을 의미한다.

# 네트워크 토폴로지
## 토폴로지의 필요성과 병목현상
병목(Bottle neck) 현상 이란 전체 시스템의 성능이나 용량이 하나의 구성 요소로 인해 제한받는 현상을 말한다.
네트워크 토폴로지가 중요한 이유는 이런 병목 현상을 발견할때, 중요한 기준이 되어주기 때문이다.
병목 현상이 일어났을 경우, 네트워크가 어떤 토폴로지를 갖는지, 또 어떠한 경로로 이루어졌는지 안다면, 병목 현상에 좀 더 효율적으로 대처할 수 있다.
네트워크 토폴로지가 어떻게 되어있나 확인 후 서버와 서버 간 그리고 게이트 웨이로 이어지는 회선을 추가해서 병목현상을 해결할 수 있다. 이처럼 토폴로지를 갖는지, 또한 어떠한 경로로 이루어져 있는지 알아야지 병목현상을 올바르게 해결할 수 있다.
## 종류
- 버스 토폴로지
- 스타 토폴로지
- 링 토폴로지
- 메시 토폴로지
- 트리 토폴리지
- 등등
<img src="https://github.com/user-attachments/assets/fda1f96a-848b-4beb-afc8-17c82f735ebc" width="300"/>

# 네트워크의 구분
네트워크는 호스트간의 거리를 기준으로 구분할 수 있다.
- LAN(Local Area Network)은 하나의 건물 같은 소규모 지역에서 물리적으로 연결된 호스트로 구성된 네트워크이다. 하나의 논리적 주소인 IP를 기반으로 여러 개의 물리적 주소인 MAC을 구별하는 네트워크
- MAN(Metropolitan Area Network)은 여러 대의 건물이나 하나의 도시 정도의 규모를 대상으로 하는 네트워크이다.
- WAN(Wide Area Network)은 국가 이상의 넓은 지역을 대상으로 하는 네트워크이다. 호스트 사이의 거리가 가장 멀다.

<img src="https://github.com/user-attachments/assets/2cba2d8b-2909-4fd0-b569-6c4637b0667a" width="300"/>

## 참고자료
https://aws.amazon.com/ko/what-is/computer-networking/?trk=faq_card
