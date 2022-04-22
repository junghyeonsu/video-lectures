// 해쉬 맵 사용
// 맵이 오브젝트보다 더 좋은 이유: https://erim1005.tistory.com/entry/Javascript-%EC%97%90%EC%84%9C-Object%EB%A5%BC-%ED%95%B4%EC%8B%9C%EB%A7%B5%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94
function solution(N, candidates) {
  const hashMap = new Map();

  for (let s of candidates) {
    if (hashMap.has(s)) hashMap.set(s, hashMap.get(s) + 1);
    else hashMap.set(s, 1);
  }

  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of hashMap) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

// Object 사용
// function solution(N, candidates) {
//   const vote = {};
//   const splitedCandidates = candidates.split('');

//   for (let i = 0; i < N; i++) {
//     if (vote[splitedCandidates[i]] === undefined) {
//       vote[splitedCandidates[i]] = 1;
//     } else {
//       vote[splitedCandidates[i]] += 1;
//     }
//   }

//   let max = Number.MIN_SAFE_INTEGER;
//   let answer = '';
//   for (let i in vote) {
//     if (vote[i] > max) {
//       max = vote[i];
//       answer = i;
//     }
//   }
//   return answer;
// }

console.log(solution(15, 'BACBACCACCBDEDE'));
