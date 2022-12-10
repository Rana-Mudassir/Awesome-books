/* eslint-disable */
const remove = document.getElementById('remove');
/* eslint-enable  */
const add = document.querySelector('#add');

let booksArray = [];

/* eslint-disable */ 
class bookApp {
  static addBook() {
    const section = document.getElementById('bookSection');
    section.innerHTML = '';
    for (let i = 0; i <= booksArray.length - 1; i++) { section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By </p> <p id="author">${booksArray[i].author}</p></div> <button id="remove" onclick="bookApp.removeBook(${i})">Remove</button></div>`; }
  }
  static removeBook(id) {
    booksArray.splice(id, 1);
    bookApp.addBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
  }
}
/* eslint-enable  */

// Local Storage
window.onload = () => {
  if (localStorage.getItem('booksArray')) {
    booksArray = JSON.parse(localStorage.getItem('booksArray'));
  }
  bookApp.addBook();
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
    bookApp.addBook();
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    title.value = '';
    author.value = '';
  });
}
