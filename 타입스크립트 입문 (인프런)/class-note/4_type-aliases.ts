// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

const hyeonsu: Person = {
  name: 'hyeonsu',
  age: 26,
};

type Mystring = string;
const str: Mystring = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  return todo;
}

// 타입과 인터페이스 차이
// 1. 타입 별칭은 확장이 불가능함.
// 2. 가능한 인터페이스로 선언해서 사용하는것이 좋음 (확장 가능)
