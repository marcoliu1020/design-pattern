class Editor {
  #content = "";

  createState() {
    return new EditorState(this.#content);
  }

  /**
   * @param {EditorState} state
   */
  restore(state) {
    this.#content = state.getContent();
  }

  /**
   * @returns string
   */
  getContent() {
    return this.#content;
  }

  /**
   * @param {string} content
   */
  setContent(content) {
    this.#content = content;
  }
}

class EditorState {
  #content = "";

  /**
   * @param {string} content
   */
  constructor(content) {
    this.#content = content;
  }

  /**
   * @returns string
   */
  getContent() {
    return this.#content;
  }
}

class History {
  #states = [];

  /**
   * @param {EditorState} state
   */
  push(state) {
    this.#states.push(state);
  }

  /**
   * @returns EditorState
   */
  pop() {
    return this.#states.pop();
  }
}

module.exports = { Editor, History };
