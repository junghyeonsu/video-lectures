function solution(input) {
  return input
    .split("")
    .map((i) => i.toUpperCase())
    .join("");
}

const input = "ItisTimeToStudy";

console.log(solution(input));
