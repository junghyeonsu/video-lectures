function logText1(text) {
  console.log(text);
  return text;
}

logText1('hi');
logText1(10);
logText1([]);

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

// // 인자를 넘기면서 타입을 지정한다.
logText2<number>(10);

function logText3(text: string) {
  console.log(text);
  // text.split('');
  return text;
}

function logNumber(text: number) {
  console.log(text);
  return text;
}

// 전체 받을 수 있는 이유는 타입을 정의하지 않아서 다 받을 수 있다.
logText3('a');
logNumber(10);

// 굳이 타입을 두 개 받기 위해서 함수를 두 개 작성한다?
// 유지보수 측면에서 안좋음
// 그럼 어떻게? = 유니온 타입으로 해결해보자.

function logText4(stringOrNumber: string | number) {
  console.log(stringOrNumber);
  // text.split('');
  return stringOrNumber;
}

const getLogText = logText4('0');
// 에러가 뜸 string | number 이기 때문에
// getLogText.split();

// logText4 함수안에서 stringOrNumber 변수가 접근할 수 있는 메소드는
// string | number라서, 접근할 때 메소드를 활용할 수가 없다.

// 그래서 제네릭을 사용해보자
// T는 함수를 사용하면서 받아보자 이 얘기임
function logText5<T>(text: T): T {
  console.log(text);
  return text;
}

// 문자열으로 인식해서 string 관련 메소드를 사용할 수 있다.
const stringText5 = logText5<string>('hi');
stringText5.includes('h');
// boolean으로 인식해서 boolean 관련 메소드를 사용할 수 있다.
const booleanText5 = logText5<boolean>(true);
booleanText5.valueOf();

// 기존 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

// 인터페이스 제네릭 선언하는 방법
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown2<number> = { value: 12, selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(text => console.log(text));
  return text;
}

logTextLength(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength2<string>('hi');
// logTextLength2<number>(10); // 제한이 생김

// keyof로 제네릭의 타입 제한하기
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// 불가능
// getShoppingItemOption(10);
// getShoppingItemOption('1');
// getShoppingItemOption(true);

// 가능
// getShoppingItemOption();
getShoppingItemOption('stock');
getShoppingItemOption('price');
