// 노드 개수가 적을 때
function solution(n, arr) {
  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));
  const visit = Array.from({ length: n + 1 }, () => false);
  const route = [];
  let answer = 0;

  arr.forEach(([start, end]) => (graph[start][end] = true));

  function dfs(v) {
    if (v === n) {
      console.log(route.join(' '));
      answer += 1;
      return;
    }

    graph[v].forEach((isLinked, vol) => {
      if (isLinked && !visit[vol]) {
        route.push(vol);
        visit[vol] = true;
        dfs(vol);
        visit[vol] = false;
        route.pop();
      }
    });
  }

  route.push(1);
  visit[1] = true;
  dfs(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
