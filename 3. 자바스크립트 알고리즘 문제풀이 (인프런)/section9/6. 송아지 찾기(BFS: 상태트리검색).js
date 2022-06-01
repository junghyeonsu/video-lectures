function solution(s, e) {
  let level = 0;
  const queue = [{ pos: s, level }];
  const visit = Array.from({ length: 10001 }, () => false);
  const next = [-1, 1, 5];

  visit[s] = true;

  while (queue.length) {
    const { pos, level } = queue.shift();

    console.log({ pos, level });

    if (pos === e) {
      return level;
    }

    for (let i = 0; i < next.length; i++) {
      if (visit[pos + next[i]]) continue;

      queue.push({
        pos: pos + next[i],
        level: level + 1,
      });

      visit[pos + next[i]] = true;
    }
  }
}

console.log(solution(8, 3));
