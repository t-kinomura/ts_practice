"use strict";
var sum = function (a, b) {
    return a * b;
};
var answer = sum(5, 2);
console.log(answer);
// ジェネリック
var addMark = function (message) {
    return ('■' + message);
};
console.log(addMark('文字列を指定します'));
console.log(addMark(10));
// Union Types
var tel;
tel = 1234567890;
tel = '123-456-7890';
// 型推論
var myname = 'tetsu'; // stringとして定義される
var height = 173; // numberとして定義される
// error
myname = 100; // Type '100' is not assignable to type 'string'.
height = '173'; // Type '"173"' is not assignable to type 'number'.
