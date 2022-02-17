function solution(input) {
  return input.length % 2 === 0
    ? input.substr(Math.floor(input.length / 2) - 1, 2)
    : input.substr(Math.floor(input.length / 2), 1);
}

const input = "study";

console.log(solution(input));
