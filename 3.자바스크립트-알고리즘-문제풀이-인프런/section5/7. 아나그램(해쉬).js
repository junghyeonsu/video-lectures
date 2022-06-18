function solution(str1, str2) {
  const hashMap = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (hashMap.get(str1[i])) hashMap.set(str1[i], hashMap.get(str1[i]) + 1);
    else hashMap.set(str1[i], 1);

    if (hashMap.get(str2[i])) hashMap.set(str2[i], hashMap.get(str2[i]) - 1);
    else hashMap.set(str2[i], -1);
  }

  return Array.from(hashMap).filter(val => val[1] !== 0).length ? 'NO' : 'YES';
}

const a = 'abaCC';
const b = 'Caaab';
console.log(solution(a, b));
