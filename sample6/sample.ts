// インターフェース

interface Item {
  name: string;
  price: number;
}

class Fruit implements Item {
  public name: string = '';
  public price: number = 0;
}

class Song implements Item {
  public name: string = '';
  public price: number = 0;
}

