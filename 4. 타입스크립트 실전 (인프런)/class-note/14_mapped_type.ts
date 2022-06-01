type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 33,
  Thor: 100,
};

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for (let key in arr) {
//   console.log(arr[key]);
// }
