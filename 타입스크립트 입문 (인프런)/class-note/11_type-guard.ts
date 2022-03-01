// NOTE: 78강 타입 가드를 위한 초석
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'tony', age: 33, skill: '' };
}

const tony = introduce();
// console.log(tony.skill); // 안됨.
console.log(tony.name); // name만 사용할 수 있다. (공통적이라서)

if ((tony as Developer).skill) {
}
if ((tony as Person).age) {
}

// NOTE: 79강 타입 가드 정의
// "is" 를 써서 타입 가드를 구현한다.
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  // Developer로 추론
  tony.skill;
} else {
  // 자동으로 Person으로 추론
  tony.age;
}
