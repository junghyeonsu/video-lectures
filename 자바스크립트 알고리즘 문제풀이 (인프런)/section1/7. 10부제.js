function solution(day, array) {
  return array.filter((num) => String(num).split("")[1] === String(day)).length;
}

const input = [25, 23, 11, 47, 53, 17, 33];
const input2 = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(3, input));
console.log(solution(0, input2));
