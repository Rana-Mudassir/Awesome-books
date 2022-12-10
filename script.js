/* eslint-disable rule-you-want-to-disable */
const form = document.getElementById('form');
const remove = document.getElementById('remove');
const titleBook = document.getElementById('title');
const authorBook = document.getElementById('title');
const add = document.querySelector('#add');

let booksArray = [];
var books = {};
function addBook() {
  const section = document.getElementById('bookSection');
  section.innerHTML = '';
  for (let i = 0; i <= booksArray.length - 1; i++) {
    section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By  </p>	<p id="author">${booksArray[i].author}</p></div>	<button id="remove" onclick="removeBook(${i})">Remove</button></div> <hr />`;
  }
}

function removeBook(id) {
  booksArray.splice(id, 1);
  addBook();
  localStorage.setItem('booksArray', JSON.stringify(booksArray));
}

// Local Storage
window.onload = () => {
  if (localStorage.getItem('booksArray')) {
    booksArray = JSON.parse(localStorage.getItem('booksArray'));
  }
  addBook();
};

if (add) {
  add.addEventListener('click', () => {
    const title = document.getElementById('inputTitle');
    const author = document.getElementById('inputAuthor');
    const newBook = {
      title: title.value,
      author: author.value,
    };
    booksArray.push(newBook);
    addBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    title.value = '';
    author.value = '';
  });
}
