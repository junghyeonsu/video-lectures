interface Hero {
  name: string;
  skill: string;
}

const capt: Hero = {
  name: '',
  skill: '',
};

// type annotation (타입 단언)
// capt2는 Hero를 가질거다. 라고 타입스크립트한테 알려줌
// 타입적인 에러는 안나지만, 해당 프로퍼티들은 실제로 비어있어서 사용할 때 주의
const capt2 = {} as Hero;

// const a: string | null;

// 타입 단언은 사용시 주의해야 한다. 우리가 모르는 사각지대가 있을 수도 있음
