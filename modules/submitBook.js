import AwesomeBook from './awesomeook.js';

function submitBook() {
  const form = document.querySelector('form');
  const awesomeBook = new AwesomeBook();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const [titleInput, authorInput] = e.target.elements;
    awesomeBook.insert({
      author: authorInput.value,
      title: titleInput.value,
    });
    e.target.reset();
  });
}

// eslint-disable-next-line import/prefer-default-export
export { submitBook };
