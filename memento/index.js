const { Editor, History } = require("./memento");

// const editor = new Editor();
// const history = new History();

// editor.setContent("a");
// history.push(editor.createState());

// editor.setContent("b");
// history.push(editor.createState());

// editor.setContent("c");
// editor.restore(history.pop());
// editor.restore(history.pop());

// console.log(editor.getContent());

class Memo {
  #content = "";
  #history = [];

  setContent(string) {
    this.#content = string;
    this.#history.push(string);
  }

  getContent() {
    return this.#content;
  }

  restore() {
    this.#history.pop(); // pop current value
    this.#content = this.#history.pop(); // previous value
  }
}

const memo = new Memo();

memo.setContent("a");
memo.setContent("b");
memo.setContent("c");
memo.restore();
console.log(memo.getContent());
