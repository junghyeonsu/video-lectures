function solution(input) {
  return input.reduce((prev, cur) => (prev.length > cur.length ? prev : cur));
}

const input = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(input));
