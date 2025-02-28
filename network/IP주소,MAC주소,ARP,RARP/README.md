# IP주소, MAC 주소, ARP, RARP
## IP주소는 IP(Internet Protocol)과 다르다.
- IP(Internet Protocol)는 네트워크층에 해당한다.
- 인터넷을 활용하는 거의 대부분의 시스템이 IP를 이용한다.
- TCP/IP에서의 IP
- IP의 역할 : 개개의 패킷을 상대방에게 전달하는 것
  - 전달하기 위해서 필요한 여러 요소 중 IP주소와 MAC 주소가 중요하다.

### IP주소(Internet Protocol Address)란?
컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신하기 위해 사용하는 특수한 번호이다. 논리적 주소이다.

### MAC(Meedia Access Control Address)주소란?
네트워크 인터페이스에 할당된 고유 식별자이다. 보통 장치의 NIC에 할당한다.

### IP주소와 MAC주소를 둘 다 사용해야하는 이유
주소가 두 종류나 있는 이유는,
1. IP주소와 MAC주소를 사용하는 계층이 다르다.
   - IP주소는 Network layer에서 사용
   - MAC 주소는 Data Link layer에서 사용
   - 계층을 나눠서 독립적인 프로토콜 사용 가능
2. MAC주소가 특별하게 필요한 경우
   - 내가 미국에서 서울에 살고 있는 친구의 컴퓨터와 통신을 한다고 가정하자. 친구가 알려준 IP주소가 그 친구의 컴퓨터라는 사실을 보증할 수가 없다. 유동 IP의 특징으로 인해 IP자체가 변동될 수 있기 떄문이다. 절대 변하지 않는 하드웨어의 고유 주소 번호가 필요한데, 그게 바로 MAC 주소이다.
3. IP주소가 특별하게 필요한 경우
   - MAC 주소는 데이터 링크 계층 프로토콜 이므로 통신할 상대방이 나와 가까운 곳에 있다면 괜찮지만, 한국에서 미국에 있는 A 컴퓨터에 데이터가 가기 위해서는 나와 연결된 어떤 컴퓨터에 데이터를 넘겨야 하는지 MAC 주소로 판단하기 어렵다. 이를 해결하기 위해 IP주소가 필요하다. IP주소는 전체적인 맵을 보고 방향성을 알려주는 역할을 한다고 생각하면된다. (forwarding: 데이터가 여러 스위치를 거쳐 도착지로 도달). IP 주소는 네트워크 주소와 호스트 주소로 나뉘므로 실생활에서 우편물이나 택배를 보낼 때 사용하는 계층형 주소 원리와 유사하다.

### IP주소와 MAC 주소비교
<table>
  <tr>
    <th scope="col">비교 대상</th>
    <th scope="col">맥 주소</th>
    <th scope="col">IP 주소</th>
  </tr>
  <tr>
    <td>전체 양식</td>
    <td>미디어 액세스 제어 주소</td>
    <td>인터넷 프로토콜 주소</td>
  </tr>
  <tr>
    <td>목적</td>
    <td>인터넷상의 컴퓨터의 실제 주소를 식별</td>
    <td>인터넷에서 컴퓨터의 연결을 식별</td>
  </tr>
  <tr>
    <td>비트</td>
    <td>48비트(6바이트)16진수 주소</td>
    <td>IP주소는 네트워크 관리자 또는 인터넷 서비스 공급자가 할당</td>
  </tr>
  <tr>
    <td>주소</td>
    <td>MAC 주소는 NIC카드 제조업체가 지정</td>
    <td>IP 주소는 네트워크 관리자 또는 인터넷 서비스 공급자가 할당</td>
  </tr>
  <tr>
    <td>주소 검색</td>
    <td>ARP 프로토콜은 장치의 MAC주소를 검색 가능</td>
    <td>RARP 프로토콜은 장치의 IP주소를 검색 가능</td>
  </tr>
</table>

### ARP와 RARP
***ARP***
- 논리적 주소인 IP주소를 물리적 주소인 MAC 주소로 변환
***RARP***
- 물리적 주소인 MAC주소를 논리적 주소인 IP주소로 변환

### 참고자료
https://terms.naver.com/entry.naver?docId=3571314&cid=59088&categoryId=59096
https://github.com/alstjgg/cs-study/blob/main/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/IP%20%26%20MAC.md#ip-%EC%A3%BC%EC%86%8C-vs-mac-%EC%A3%BC%EC%86%8C
