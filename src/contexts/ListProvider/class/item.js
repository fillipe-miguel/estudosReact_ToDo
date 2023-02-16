export class Item {
  //Isso é uma variável de classe ou seja pertence a classe e nao ao obj
  // static lastId = 0;

  constructor(text) {
    this.id = Math.floor(Math.random() * 999999) + text[0];
    this.text = text;
    this.done = false;
  }
}
