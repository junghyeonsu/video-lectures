function solution(n) {
  return Number.isInteger(n / 12) ? n / 12 : Math.floor(n / 12) + 1;
}

console.log(solution(178));
