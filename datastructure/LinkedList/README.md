작성중..
# 연결 리스트
연결리스트란?
- 물리적으로 흩어져 있는 자료들을 서로 연결하여 하나로 묶어 관리하는 데이터 구조이다.
- 노드 간의 연결을 이용해 리스트를 구현한 것이다.

## 구조


## 종류

## 시간 복잡도
### 접근

### 삽입

### 제거

### 탐색
데이터 검색 시 논리적 저장 순서와 물리적 저장 순서가 다르기 때문에 처음 노드부터 순회해야 한다. 메모리 공가나 상에서 각 노드들이 연속적으로 이루어져 있지 않고 흩어져 있고, 각각의 노드가 자신의 다음 노드 위치를 알고 있는 형태이다.
각 노드들이 메모리 공간 상의 어디에 위치하는지는 각각의 노드들만 알고 있고, 사용자는 제일 첫 번째 노드의 위치만 알고 있다. 그래서 그 원소를 찾기 위해 O(n) 시간이 발생한다.


## 배열(array)과 리스트(list) 비교
### 요약

### 구체적인 비교

***Array***

***Dynamic Array(ArrayList)***

***LinkedList***

## 참고자료
https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Data%20Structure/%5BData%20Structure%5D%20Array%20vs%20LinkedList.md
https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Data%20Structure/%5BData%20Sturcture%5D%20ArrayList%20vs%20LinkedList.md

## 구현과정에서 생긴 고민
