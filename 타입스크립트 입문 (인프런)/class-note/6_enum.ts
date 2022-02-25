enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

// 별도의 값을 지정하지 않으면 숫자형으로 지정됨
const myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 이넘 활용 사례
enum Answer {
  YES = 'Y',
  NO = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.YES) {
    console.log('정답');
  }

  if (answer === Answer.NO) {
    console.log('오답');
  }
}

askQuestion(Answer.YES);
askQuestion(Answer.NO);
// askQuestion('Y');
// askQuestion('Yes');
// askQuestion('예쓰');
