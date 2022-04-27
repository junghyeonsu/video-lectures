function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      if (!stack.length) return 'NO';
      else stack.pop();
    }
  }

  return stack.length ? 'NO' : 'YES';
}

let a = '(()(()))(()';
console.log(solution(a));
