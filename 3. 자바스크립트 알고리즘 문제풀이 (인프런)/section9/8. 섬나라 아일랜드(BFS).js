function solution(board) {
  let answer = 0;
  const dx = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
  const dy = [1, 1, 1, 0, 0, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer += 1;

        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < board.length &&
              ny < board[0].length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
