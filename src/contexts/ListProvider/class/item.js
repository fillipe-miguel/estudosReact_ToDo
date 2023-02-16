export class Item {
  //Isso é uma variável de classe ou seja pertence a classe e nao ao obj
  // static lastId = 0;

  constructor(title, body) {
    this.id = Math.floor(Math.random() * 999999) + title[0];
    this.title = title;
    this.body = body;
    this.done = false;
  }
}
