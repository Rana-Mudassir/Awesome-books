/* eslint-disable max-classes-per-file */
/* eslint-disable */
const remove = document.getElementById('remove');
/* eslint-enable  */
const add = document.querySelector('#add');
const listNav = document.querySelector('.listNav');
const addNew = document.querySelector('.add-new');
const contactUS = document.querySelector('.contact');
const allBooks = document.querySelector('.bookSection1');
const addBooks = document.querySelector('.addSection');
const contactBooks = document.querySelector('.contact1');

let booksArray = [];

/* eslint-disable */ 
class bookApp {

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook() {
    const title = document.getElementById('inputTitle');
    const author = document.getElementById('inputAuthor');
    const newBook = {
      title: title.value,
      author: author.value,
    };
    booksArray.push(newBook);
    bookApp.displayBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    title.value = '';
    author.value = '';
  }

  static displayBook() {
    const section = document.getElementById('bookSection');
    section.innerHTML = '';
    for (let i = 0; i <= booksArray.length - 1; i++) { section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By </p> <p id="author">${booksArray[i].author}</p></div> <button id="remove" onclick="bookApp.removeBook(${i})">Remove</button></div>`; }
  }
  static removeBook(id) {
    booksArray.splice(id, 1);
    bookApp.displayBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
  }
}
/* eslint-enable  */

// Local Storage
window.onload = () => {
  if (localStorage.getItem('booksArray')) {
    booksArray = JSON.parse(localStorage.getItem('booksArray'));
  }
  bookApp.displayBook();
  allBooks.classList.add('show');
  addBooks.classList.add('hide');
  contactBooks.classList.add('hide');
};

if (add) {
  add.addEventListener('click', bookApp.addBook);
}

// Navigation

listNav.addEventListener('click', () => {
  allBooks.classList.replace('hide', 'show');
  addBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

addNew.addEventListener('click', () => {
  addBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

contactUS.addEventListener('click', () => {
  contactBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  addBooks.classList.replace('show', 'hide');
});
