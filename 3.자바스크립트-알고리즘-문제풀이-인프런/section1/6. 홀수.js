function solution(array) {
  const odds = array.filter((i) => i % 2 === 1);
  console.log(odds.reduce((acc, cur) => acc + cur));
  console.log(Math.min(...odds));
}

const input = [12, 77, 38, 41, 53, 92, 85];
solution(input);
