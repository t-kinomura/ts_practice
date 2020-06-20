const sum = (a: number, b: number): number => {
  return a * b;
}

let answer: number = sum(5, 2);
console.log(answer);



// ジェネリック

const addMark = <T>(message: T): string => {
  return ('■' + message);
}

console.log(addMark<string>('文字列を指定します'));
console.log(addMark<number>(10));



// Union Types

let tel: number | string;

tel = 1234567890;
tel = '123-456-7890';



// 型推論

let myname = 'tetsu';  // stringとして定義される
let height = 173;      // numberとして定義される

// error
myname = 100;          // Type '100' is not assignable to type 'string'.
height = '173';        // Type '"173"' is not assignable to type 'number'.