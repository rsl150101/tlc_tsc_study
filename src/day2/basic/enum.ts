//* enum (열거)
//- 멤버라 불리는 명명된 값의 집합을 이루는 자료형

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
// > 0
//- 열거된 각 멤버는 기본적으로 0 부터 시작함

enum Color1 {
  Red = 1,
  Green,
  Blue,
}

let c1: Color = Color.Green;
// > 2
//- 수동으로 번호를 매기면 매긴 번호부터 차레대로 매겨짐

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c2: Color = Color.Green;
// > 2
//- 모든 값을 수동으로 설정이 가능하다.

// enum 은 매겨진 숫자를 통해서 멤버의 이름을 가져올 수 도 있다.
enum Color3 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log(colorName);
//- 값이 2인 'Green'이 출력됩니다.
