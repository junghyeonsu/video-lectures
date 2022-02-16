function solution(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  return sum - max > max ? "YES" : "NO";
}

console.log(solution(14, 30, 17));
