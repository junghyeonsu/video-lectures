function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(idx, sum) {
    if (sum > c) return;

    if (idx === arr.length) {
      answer = answer > sum ? answer : sum;
      return;
    }

    dfs(idx + 1, sum + arr[idx]);
    dfs(idx + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
