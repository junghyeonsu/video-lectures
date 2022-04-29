function solution(arr) {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  let answer = 'NO';
  let isDone = false;

  function dfs(idx, sum) {
    if (isDone) return;

    if (idx === arr.length) {
      if (totalSum - sum === sum) {
        answer = 'YES';
        isDone = true;
      }

      return;
    }

    dfs(idx + 1, sum + arr[idx]);
    dfs(idx + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
