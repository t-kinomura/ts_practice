"use strict";
// リテラル型
var color;
color = '赤';
// color = '黒';   !!!  Type '"黒"' is not assignable to type '"赤" | "青" | "黄"'.
// クラス宣言
var Item = /** @class */ (function () {
    function Item(price, tax) {
        if (tax === undefined) {
            this.tax = 10;
        }
        else {
            this.tax = tax;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    Item.prototype.getTax = function () {
        return Math.round(this.price * (this.tax / 100));
    };
    return Item;
}());
var apple = new Item(180);
console.log(apple.tax);
// console.log(apple.price);  !!!  Property 'price' is private and only accessible within class 'Item'.
// setter, getter
var Book = /** @class */ (function () {
    function Book() {
        this._name = '';
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value === '') {
                console.log('書籍名が設定されていません');
            }
            else {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var mybook = new Book;
mybook.name = 'Typescript';
console.log(mybook.name);
