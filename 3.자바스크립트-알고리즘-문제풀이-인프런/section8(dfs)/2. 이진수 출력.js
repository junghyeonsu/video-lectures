function solution(n) {
  let answer = '';

  function dfs(n) {
    if (n === 0) return;
    dfs(Math.floor(n / 2));
    answer += n % 2;
  }

  dfs(n);
  return answer;
}

console.log(solution(20));
