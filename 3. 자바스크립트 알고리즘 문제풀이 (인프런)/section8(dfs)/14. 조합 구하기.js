function solution(n, m) {
  const visit = Array.from({ lneght: n }, () => 0);
  let answer = 0;

  function dfs(level, slice) {
    if (level === m) {
      answer += 1;
      console.log(visit.join(' '));
      return;
    }

    for (let i = slice; i <= n; i++) {
      visit[level] = i;
      dfs(level + 1, i + 1);
    }
  }

  dfs(0, 1);
  return answer;
}

console.log(solution(4, 2));
