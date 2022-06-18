function solution(m, arr) {
  let answer = 0;
  const visit = Array.from({ length: arr.length }, () => false);
  const temp = Array.from({ length: m }, () => 0);

  function dfs(level) {
    if (level === m) {
      console.log(temp.join(' '));
      answer += 1;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!visit[i]) {
          visit[i] = true;
          temp[level] = arr[i];
          dfs(level + 1);
          visit[i] = false;
        }
      }
    }
  }

  dfs(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
