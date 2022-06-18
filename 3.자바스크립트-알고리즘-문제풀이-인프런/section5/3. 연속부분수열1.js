function solution(input, target) {
  let left = 0;
  let right = 0;
  let answer = 0;
  let sum = 0;

  while (right < input.length && left < input.length) {
    const addedSum = sum + input[right];

    if (addedSum > target) {
      sum -= input[left];
      left++;
    } else if (addedSum < target) {
      sum += input[right];
      right++;
    } else {
      sum -= input[left];
      left++;
      answer++;
    }
  }

  return answer;
}

// 내 풀이
// function solution(input, target) {
//   const cases = [];
//   let count = 0;
//   let p1 = 0;
//   let p2 = 0;

//   while (p1 < input.length) {
//     const oneCase = [];
//     let sum = 0;
//     p2 = p1;

//     while (p2 < input.length) {
//       if (sum + input[p2] === target) {
//         cases.push(oneCase);
//         oneCase.push(input[p2]);
//         count++;
//         break;
//       } else if (sum + input[p2] < target) {
//         oneCase.push(input[p2]);
//       } else if (sum + input[p2] > target) {
//         break;
//       }
//       sum += input[p2];
//       p2++;
//     }

//     p1++;
//   }

//   console.log(cases);
//   return count;
// }

const input = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(input, 6));
