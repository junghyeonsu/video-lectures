function solution(n) {
  if (n === 1) return n;

  return n * solution(n - 1);
}

console.log(solution(5));
