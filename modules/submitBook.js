import AwesomeBook from './awesomeook.js';

const submitBook = () => {
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
};

export default submitBook;
