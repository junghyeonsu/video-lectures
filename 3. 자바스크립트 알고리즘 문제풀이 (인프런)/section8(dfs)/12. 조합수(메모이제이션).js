function solution(n, r) {
  const memo = Array.from({ length: n + 1 }, () => new Array(r + 1).fill(0));

  function dfs(n, r) {
    if (memo[n][r]) return memo[n][r];
    if (r === 0 || n === r) return 1;

    return (memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  }

  return dfs(n, r);
}

console.log(solution(33, 19));
