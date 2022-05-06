function solution(board) {
  let answer = 0;
  const visit = Array.from({ length: board.length }, () => new Array(board.length).fill(false));
  const path = [];
  const next = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(x, y) {
    if (x === 6 && y === 6) {
      console.table(visit);
      answer += 1;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + next[i][0];
      const ny = y + next[i][1];

      if (nx >= 0 && ny >= 0 && nx <= 6 && ny <= 6 && board[nx][ny] === 0 && !visit[nx][ny]) {
        visit[nx][ny] = '⭐';
        path.push([nx, ny]);
        dfs(nx, ny);
        path.pop();
        visit[nx][ny] = false;
      }
    }
  }

  visit[0][0] = '⭐';
  dfs(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
