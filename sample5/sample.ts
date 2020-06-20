// リテラル型
let color: '赤' | '青' | '黄';

color = '赤';
// color = '黒';   !!!  Type '"黒"' is not assignable to type '"赤" | "青" | "黄"'.

// クラス宣言
class Item {
  public tax: number;
  private price: number;

  constructor(price: number, tax?: number) {
    if (tax === undefined) {
      this.tax = 10;
    } else {
      this.tax = tax;
    }
    if (isFinite(price)) {
      this.price = price;
    } else {
      this.price = 0;
    }
  }

  public getTax(): number {
    return Math.round(this.price * (this.tax / 100));
  }
}

let apple: Item = new Item(180);
console.log(apple.tax);
// console.log(apple.price);  !!!  Property 'price' is private and only accessible within class 'Item'.


// setter, getter
class Book {
  private _name: string = '';

  set name(value: string) {
    if (value === '') {
      console.log('書籍名が設定されていません');
    } else {
      this._name = value;
    }
  }

  get name(): string {
    return this._name;
  }
}

let mybook: Book = new Book;
mybook.name = 'Typescript';

console.log(mybook.name);