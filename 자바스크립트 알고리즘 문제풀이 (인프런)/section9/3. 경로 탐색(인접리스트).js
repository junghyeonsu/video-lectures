// 노드 개수가 많을 때
function solution(n, arr) {
  const graph = Array.from({ length: n + 1 }, () => new Array());
  const visit = Array.from({ length: n + 1 }, () => false);
  const path = [];
  let answer = 0;

  for (let [start, end] of arr) {
    graph[start].push(end);
  }

  function dfs(v) {
    if (v === n) {
      console.log(path.join(' '));
      answer += 1;
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      const current = graph[v][i];
      if (!visit[current]) {
        visit[current] = true;
        path.push(current);
        dfs(current);
        path.pop();
        visit[current] = false;
      }
    }
  }

  path.push(1);
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
