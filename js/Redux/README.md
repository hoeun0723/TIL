# Redux 정리
redux 공식문서 번역 및 추가 공부내용 정리
- 목차
  1. Redux란
  2. Redux Terms and Concepts
  3. Terminology - 핵심 키워드
  4. 3가지 규칙
# Redux란
예측가능한 상태의 저장소 - A predicatable state container for JS apps.
- Application 의 복잡성을 획기적으로 낮추어 우리의 코드가 어떤 결과를 가져올지 예측가능하게 만들어주는 도구라고 할 수 있다.
# Redux Terms and Concepts
1. State Management(상태관리)
   - state: 앱을 구동하는 근원(source)
   - view: 현재 상태를 기반으로 하는 UI의 선언적 설명(declarative description)
   - actions: 사용자 입력에 따라 발생하는 이벤트 및 상태에서 업데이트를 트리거
2. One way data flow
   - state는 특정 시점의 앱 상태를 나타냄
   - UI는 해당 상태를 기반으로 렌더링
   - 사용자가 버튼을 클릭하는 것과 같은 이벤트가 발생하면 발생한 상황에 따라 업데이트
   - UI는 새 상태를 기반으로 렌더링
   - 아래 사진과 같은 단순한 구조는 동일한 상태를 공유하고 사용해야 하는 여러 구성 요소가 있는 경우 무너질 수 있다. 이를 해결하기 위한 방법 중 하나로 구성 요소에서 공유 상태를 추출하여 구성 요소 트리 외부의 중앙 위치에 두는 것이 있다.
![액션뷰상태흐름](액션뷰상태흐름.jpg)
![데이터흐름](데이터흐름.gif)
3. Immutability
- Js의 Object와 Array는 mutable(변화가능)하다. 메모리에 있는 동일한 object 또는 array를 참조하지만 내부 값은 변경될 수 있다.
- 값을 변경할 수 없도록 업데이트 하려면 코드에서 기존 object 또는 array의 복사본을 만든 다음 복사본을 수정해야한다.

```
const obj = {
    a: {
        // To safely update obj.a.c, we have to copy each piece
        c: 3,
    },
    b:2,
};

const obj2 = {
    // copy obj
    ...obj,
    //overwrite a
    a: {
        //copy obj.a
        ...obj.a,
        //overwrite c
        c: 42,
    },
};

const arr = ['a','b'];
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c');

// or, we can make a copy of the original array;
const arr3 = arr.slice();
// and mutate the copy:
arr3.push('c');
```

# Terminology - 용어(술어)
1. Actions
- 일반 JS object로 , application에서 발생한 일을 설명하는 이벤트라고 생각하면 된다.
- type: 해당 action에 대한 설명적인 이름을 제공
- payload: action object에서 발생한 상황에 대한 추가 정보가 들어 있음.

```
const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk',
};
```
2. Action Creators
- action object를 만들고, 리턴하는 함수
- 이 함수를 통해 해당 action 을 사용할 때마다 직접 작성할 필요가 없어짐.
```
const addTodo = (text) => {
    return {
        type: 'todos/todoAdded',
        payload: text,
    };
};
```
3. Reducers
- 현재 state와 action object를 받아서, 필요한 경우 state를 업데이트하고, 새로운  state를 반환하는 함수.
- 오직 state와 action인자 값을 기반으로 새로운 state를 다뤄야함.
- 현재 state를 직접 다루지 않고, 현재 state의 복사값을 다뤄 새로운 state를 리턴한다.
- 비동기 로직, 임의 값 계산 등 기타 side effect를 일으키지 않아야 한다.

```
const initialState = {value: 0};

function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if(action.type === 'counter/increment') {
        //If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1,
        };
    }
    //otherwise return the existing state unchanged
    return state;
}
```
4. Store
- redux의 state는 store이라는 객체가 있다.
- store는 reducer 를 전달하며, 현재 state를 반환하는 getState 메서드가 있다.
- 일종의 이벤트 트리거

```
import {configureStore} from '@reduxjs/toolkit;

const store = configureStore({reducer: counterReducer});

console.log(store.getState());
// {value: 0}

```

5. Dispatch
- redux 저장소 안의 메서드
- 상태를 변경하는 유일한 방법은 store.dispatch()를 호출하고, 작업 객체를 전달하는 것.
```
store.dispatch({type: 'counter/increment'});

console.log(store.getState());
// {value: 1}
```

6. Selectors
- redux 저장소에서 현재 state 값에 특정 정보를 추출하는 ㅎ마수

```
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
//2
```

# 3가지 규칙
1. 하나의 application 안에는 하나의 store
- 필수는 아니지만 여러개의 store를 만들면 개발 도구를 사용할 수 없기 때문에 권장하지 않는다.
2. state는 읽기 전용
- 불변성 유지
3. 변화를 일으키는 함수, reducer 는 순수함수여야 한다.
- 동일한 input에 대하여 동일한 output이 보자오디어야 한다.
- 불변성 유지와 관련

## 참고자료
![Redux 시작하기-redux.js.org](https://ko.redux.js.org/introduction/getting-started/)
![리덕스 - react.vlpt.us](https://react.vlpt.us/redux/)
