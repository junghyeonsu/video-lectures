function solution(input) {
  return input
    .split("")
    .filter((i, idx) => i.toUpperCase() === input.split("")[idx]).length;
}

const input = "KoreaTimeGood";

console.log(solution(input));
