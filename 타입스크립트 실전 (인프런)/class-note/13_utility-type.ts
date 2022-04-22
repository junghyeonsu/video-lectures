interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}
// 1.
// Pick
// Product interface에서 id, name, price만 Pick해서 가져오겠다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

// 2.
// Omit
// Product interface에서 id를 빼서 가져오겠다.
type ShoppingDetail = Omit<Product, 'id'>;

// 3.
// Partial 내부 코드
// 한 단계씩 진행하면서 어떻게 구현했는지 보기
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

// 모든 코드를 옵셔널 처리를 하는 것 = Partial
type UpdateProductByUtil = Partial<Product>;

// 4. 유틸리티 타입 직접 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// 꼭 이렇게 다시 선언해야할까?
interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

// #1
// 그대로 인덱스로 접근해서 선언 가능
// 그리고 전부 옵셔널
type UserProfileUpdateByUtilVersionOne = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2
// 이 방식은 "맵드 타입"이라고 일단 하고 있음
type UserProfileUpdateByUtilVersionTwo = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

// #3
type UserProfileKeys = keyof UserProfile;

type UserProfileUpdateByUtilVersionThree = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4 = Partial의 구현체
type Subset<T> = {
  [p in keyof T]?: T[p];
};

// 유틸리티 타입을 쓰면 코드들을 줄여가면서 사용할 수 있다.
// 무조건 써야하는 건 아님
