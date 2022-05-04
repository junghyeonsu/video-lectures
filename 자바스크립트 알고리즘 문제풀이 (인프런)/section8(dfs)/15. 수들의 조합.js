function solution(n, k, arr, m) {
  const visit = Array.from({ length: k });
  let answer = 0;

  function dfs(level, slice) {
    if (level === k) {
      const sum = visit.reduce((a, c) => a + c, 0);
      if (sum % m === 0) answer += 1;
      return;
    }

    for (let i = slice; i < n; i++) {
      visit[level] = arr[i];
      dfs(level + 1, i + 1);
    }
  }

  dfs(0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
