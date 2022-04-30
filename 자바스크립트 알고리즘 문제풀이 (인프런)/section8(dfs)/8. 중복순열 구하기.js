function solution(n, m) {
  const temp = Array.from({ length: m }, () => 0);
  let count = 0;

  function dfs(level) {
    if (level === m) {
      console.log(temp.join(' '));
      count += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      temp[level] = i + 1;
      dfs(level + 1);
    }
  }

  dfs(0);
  return count;
}

console.log(solution(3, 2));
