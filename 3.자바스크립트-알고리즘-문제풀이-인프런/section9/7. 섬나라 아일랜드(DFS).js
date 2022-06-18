function solution(board) {
  const dx = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
  const dy = [1, 1, 1, 0, 0, 0, -1, -1, -1];
  let answer = 0;

  function dfs(x, y) {
    board[x][y] = 0;

    for (let i = 0; i < dx.length; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (
        newX >= 0 &&
        newX < board[0].length &&
        newY >= 0 &&
        newY < board.length &&
        board[newX][newY] === 1
      ) {
        dfs(newX, newY);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        console.table(board);
        answer += 1;
        dfs(i, j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
