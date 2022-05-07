function solution() {
  let answer = '';
  const queue = [];
  queue.push('1');

  while (queue.length) {
    const top = queue.shift();
    answer += top + ' ';

    if (top * 2 > 7) continue;
    queue.push(top * 2);
    queue.push(top * 2 + 1);
  }

  return answer;
}

console.log(solution());
