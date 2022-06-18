function solution(input1, input2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < input1.length && p2 < input2.length) {
    if (input1[p1] < input2[p2]) answer.push(input1[p1++]);
    else answer.push(input2[p2++]);
  }

  while (p1 < input1.length) answer.push(input1[p1++]);
  while (p2 < input2.length) answer.push(input2[p2++]);

  return answer.join(' ');
}

const input1 = [1, 3, 5];
const input2 = [2, 3, 6, 7, 9];

console.log(solution(input1, input2));
