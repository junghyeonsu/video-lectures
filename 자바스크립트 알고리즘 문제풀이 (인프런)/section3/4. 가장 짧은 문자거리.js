// 내 풀이: for문을 두 번 돌아서 시간 복잡도가 O(n^2)임

// function solution(input) {
//   const [string, target] = input.split(' ');
//   const splitString = string.split('');
//   const answer = [];

//   for (let i = 0; i < splitString.length; i++) {
//     let smallIndex = splitString.length;
//     for (let j = 0; j < splitString.length; j++) {
//       if (splitString[j] === target && smallIndex > Math.abs(j - i)) {
//         smallIndex = Math.abs(j - i);
//       }
//     }
//     answer.push(smallIndex);
//   }

//   return answer.join(' ');
// }

// 수정 풀이: for문을 두 번만 돌면됨. 시간 복잡도는 O(2n)
function solution(input) {
  const [string, target] = input.split(' ');
  const splitString = string.split('');
  const answer = [];

  let distance = splitString.length;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === target) {
      distance = 0;
      answer.push(distance);
    } else {
      distance += 1;
      answer.push(distance);
    }
  }

  distance = splitString.length;
  for (let i = splitString.length - 1; i >= 0; i--) {
    if (splitString[i] === target) {
      distance = 0;
    } else if (answer[i] > distance) {
      distance += 1;
      answer[i] = distance;
    } else {
      distance += 1;
    }
  }

  return answer.join(' ');
}

const input = 'teachermode e';

console.log(solution(input));
