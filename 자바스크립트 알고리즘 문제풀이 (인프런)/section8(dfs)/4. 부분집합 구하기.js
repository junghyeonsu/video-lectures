function solution(n) {
  const check = Array.from({ length: n + 1 }).fill(false);

  function dfs(L) {
    if (L === n + 1) {
      let temp = '';
      for (let i = 0; i < L; i++) {
        if (check[i]) temp += i;
      }
      console.log(temp);
      return;
    }

    check[L] = true;
    dfs(L + 1);

    check[L] = false;
    dfs(L + 1);
  }

  dfs(1);
}

console.log(solution(3));
