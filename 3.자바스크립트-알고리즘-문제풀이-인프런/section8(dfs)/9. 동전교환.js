function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(level, sum) {
    if (sum > m) return;

    if (sum === m) answer = Math.min(answer, level);

    arr.forEach(coin => dfs(level + 1, sum + coin));
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
