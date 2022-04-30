function solution(limitTime, scores, times) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(index, accTime, accScore) {
    if (index > times.length) return;
    if (accTime > limitTime) return;

    answer = Math.max(answer, accScore);

    dfs(index + 1, accTime + times[index], accScore + scores[index]);
    dfs(index + 1, accTime, accScore);
  }

  dfs(0, 0, 0);
  return answer;
}

let scores = [10, 25, 15, 6, 7];
let times = [5, 12, 8, 3, 4];
console.log(solution(20, scores, times));
