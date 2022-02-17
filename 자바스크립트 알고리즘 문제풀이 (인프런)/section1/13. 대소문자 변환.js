function solution(input) {
  return input
    .split("")
    .map((str) =>
      str.toUpperCase() === str ? str.toLowerCase() : str.toUpperCase()
    )
    .join("");
}

const input = "StuDY";

console.log(solution(input));
