function solution(input) {
  const reverses = input.map(i => Number(i.toString().split('').reverse().join('')));
  const primeNumbers = getPrimeNumbers(Math.max(...reverses));
  return reverses.filter(i => primeNumbers[i]);
}

function getPrimeNumbers(maxValueInReverses) {
  const primeNumbers = Array(maxValueInReverses + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i < primeNumbers.length; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j < primeNumbers.length; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  return primeNumbers;
}

const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(input));
