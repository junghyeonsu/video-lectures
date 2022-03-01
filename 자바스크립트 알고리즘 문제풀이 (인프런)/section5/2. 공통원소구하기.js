function solution(input1, input2) {
  const sames = [];
  const sortedInput1 = input1.sort();
  const sortedInput2 = input2.sort();
  let p1 = 0;
  let p2 = 0;

  while (p1 < sortedInput1.length && p2 < sortedInput2.length) {
    if (sortedInput1[p1] === sortedInput2[p2]) {
      sames.push(sortedInput1[p1]);
      p1++;
      p2++;
    } else if (sortedInput1[p1] < sortedInput2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return sames.join(' ');
}

const input1 = [1, 3, 9, 5, 2];
const input2 = [3, 2, 5, 7, 8];

console.log(solution(input1, input2));
