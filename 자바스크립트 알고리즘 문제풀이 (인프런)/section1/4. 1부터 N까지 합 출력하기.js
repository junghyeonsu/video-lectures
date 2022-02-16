function solution(n) {
  return new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((acc, cur) => acc + cur);
}

function anotherSolution(n) {
  return n % 2 === 0 ? (n + 1) * (n / 2) : (n + 2) * ((n + 1) / 2) - (n + 1);
}

console.log(solution(6));
console.log(anotherSolution(5));
