// ES2015 (ES6)
class Person {
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

const Hyeonsu = new Person('현수', 26); // '생성되었습니다.';
console.log(Hyeonsu);

// 위 코드와 아래 코드는 같다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const hyeonsu = new Person('현수', 26);
