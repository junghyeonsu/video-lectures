function solution(input) {
  let combo = 0;
  let sum = 0;

  for (let i of input) {
    combo = i === 1 ? combo + 1 : 0;
    sum += combo;
  }

  return sum;
}

const input = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(input));
