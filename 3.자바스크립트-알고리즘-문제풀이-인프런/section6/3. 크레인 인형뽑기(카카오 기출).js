function solution(board, moves) {
  const stack = [];
  let answer = 0;

  moves.forEach(move => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        const pickItem = board[i][move - 1];
        const top = stack[stack.length - 1];

        if (top === pickItem) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
