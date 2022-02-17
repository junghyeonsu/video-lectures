function solution(input, target) {
  return input.split("").filter((i) => i === target).length;
}

const input = "COMPUTERPROGRAMMING";

console.log(solution(input, "R"));
