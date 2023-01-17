class AwesomeBook {
  /** @type {Book[]} */
  #bookCollection;

  constructor() {
    this.#bookCollection = JSON.parse(localStorage.getItem('books')) ?? [];
    this.#bookCollection.forEach((e) => this.#insertBookToDOM(e, 'beforeend'));
  }

  insert = (book) => {
    this.#bookCollection.unshift(book); // add new book on first index of the books array
    this.#insertBookToDOM(book);
    this.#save();
  };

  /**
   * Save bookCollection array into localStorage
   * */
  #save = () => {
    localStorage.setItem('books', JSON.stringify(this.#bookCollection));
  };

  #insertBookToDOM = (book, where = 'afterbegin') => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-container';

    const bookTitle = document.createElement('div');
    bookTitle.innerHTML = `${book.title} by ${book.author}`;

    const btn = document.createElement('button');
    btn.innerText = 'Remove';
    btn.onclick = () => this.#remove(btn);

    bookDiv.append(bookTitle, btn);

    document.getElementById('books').insertAdjacentElement(where, bookDiv);
  };

  /**
   * Remove parentNode - div.book-container from DOM and also remove from the bookCollection
   *
   * @param {Node} btn - Remove button node
   * */
  #remove = (btn) => {
    const root = btn.parentNode;
    const index = Array.from(root.parentNode.children).indexOf(root);
    root.parentNode.removeChild(root); // remove book element from #books Node

    this.#bookCollection.splice(index, 1); // remove book object from array
    this.#save();
  };
}

export default AwesomeBook;
