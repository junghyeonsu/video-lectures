// 유니온 타입
const hyeonsu: string | number | boolean = 0;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }

  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('타입 에러에용');
}

logMessage('hello');
logMessage(12);

// 유니온 타입 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // someone에 접근할 때 뜨는 속성은 name 밖에 없음 = 겹치는 거라서
  // age, skill에 대해서 접근하고 싶으면 타입 가드를 사용해서 접근
  // 공통된 속성에만 접근 가능
}

askSomeone({ name: '', skill: '' });
askSomeone({ name: '', age: 1 });

// 인터섹션 타입 = 모두 만족해야 함
// const capt: string & number & boolean;
function askSomeone2(someone: Developer & Person) {
  // someone에 접근할 때 모든 특성을 접근 가능
}

// Developer과 Person 특성들을 모두 넘겨야 에러가 안남
// 의도가 조금 다름
askSomeone2({ name: '', age: 2, skill: '' });
