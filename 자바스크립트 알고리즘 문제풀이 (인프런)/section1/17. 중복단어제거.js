function solution(input) {
  const set = new Set();
  input.forEach((i) => set.add(i));
  return Array.from(set);
}

const input = ["good", "time", "good", "time", "student"];

console.log(solution(input));
