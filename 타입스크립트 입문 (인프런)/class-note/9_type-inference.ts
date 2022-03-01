// NOTE: 71강 타입 추론
var a = 10;

// b가 number라서 리턴하는 값도 number로 추론한다.
function getB(b = 10) {
  return b;
}

// NOTE: 72강 인터페이스와 제네릭을 이용한 타입 추론 방식
interface Dropdown<T> {
  title: string;
  value: T;
}

// 제네릭에 string을 넣으면 타입 추론으로 안의 값들을 추론하고 있다.
const shoppingItem: Dropdown<string> = {
  value: 'hello.',
  title: 'title.',
};

// NOTE: 73강 복잡한 구조에서의 타입 추론 방식
interface Dropdown2<T> {
  title: string;
  value: T;
}

// DetailedDropdown의 제네릭이 Dropdown2의 제네릭으로도 들어간다.
interface DetailedDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
  // value 이 두개가 암묵적으로 들어온다. extends 때문에
  // title
}

const detailedItem: DetailedDropdown<string> = {
  description: '',
  tag: '',
  title: '',
  value: '',
  // value: 2, 안됨 << string으로 추론돼서 string이 들어와야 한다.
};

// NOTE: 74강 BEST Common type 추론 방식
const arr = [1, 2, 3, 'str', true]; // (string | number | boolean)[]
// 유니온으로 거의 묶어나감.
