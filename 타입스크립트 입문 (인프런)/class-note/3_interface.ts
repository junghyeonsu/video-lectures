// 인터페이스 선언
interface User {
  age: number;
  name: string;
}

// 변수 인터페이스 활용
const hyeonsu: User = {
  age: 10,
  name: 'hi',
};

// 함수 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

getUser(hyeonsu);

// 함수 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인터페이스 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // something: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const Hyeonsu: Developer = {
  name: 'hyeonsu',
  age: 26,
  language: 'ts',
};
