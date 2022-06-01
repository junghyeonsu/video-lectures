function solution(s) {
  const stack = [];

  for (let i of s) {
    if (i === ')') while (stack.pop() !== '(');
    else stack.push(i);
  }

  return stack.join('');
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
