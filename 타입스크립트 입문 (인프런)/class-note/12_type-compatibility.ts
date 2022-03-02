// NOTE: 81강: 인터페이스
interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
}

var developer: Developer;
var person: Person;

// 안됨
// developer = person;

// 됨
person = developer;

// NOTE: 82강: 함수
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

// 된다.
sum = add;

// 안된다.
// add = sum;

// 제네릭
// 호환이 됨
interface Empty<T> {
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

// 호환이 안됨
interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2; // 안된다.
