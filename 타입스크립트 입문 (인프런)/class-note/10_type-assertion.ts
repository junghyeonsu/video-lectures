// NOTE: 76강 타입 단언
var a; // a = any
a = 20;
a = 'a';
var b = a as string; // a를 string으로 변환했지만, any로 추정이 됨 그래서 as 를 쓴다.
// 타입스크립트 너는 가만히 있고, 내가 단언할게! 라는 느낌임.

// NOTE: 77강 타입 단언 예제: DOM API 조작
var div = document.querySelector('div'); // HTMLDivElement

// 밑에 코드는 div가 담겨 있을 것이다 라고 단언을 하고 사용하는 것.
// 그러면 div에 들어있는 특성 값들을 사용할 수 있다.
var div = document.querySelector('div') as HTMLDivElement;
