const form = document.getElementById('form');
const remove = document.getElementById('remove');
const titleBook = document.getElementById('title');
const authorBook = document.getElementById('title');
const add = document.querySelector('#add');

let booksArray = [];
function addBook() {
	const inputTitle = document.getElementById('inputTitle');
	const inputAuthor = document.getElementById('inputAuthor');
	var title = inputTitle.value;
	var author = inputAuthor.value;
	
	booksArray.push({
		id: Date.now(),
		title: title,
		author: author
	})
	console.log('booksArray', booksArray)
	displayBooksList()
}

function displayBooksList() {	
	const section = document.getElementById('bookSection');
	section.innerHTML = '';
	for (let i = 0; i <= booksArray.length - 1; i++) {
		section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By  </p>	<p id="author">${booksArray[i].author}</p></div>	<button id="remove" onclick="removeBook(${booksArray[i].id})">Remove</button></div>`;
	}
}

function removeBook(id) {
	console.log('array 1', booksArray)
	booksArray = booksArray.filter((obj) => obj.id !== id);
	console.log('array 2', booksArray)
	displayBooksList();
}

if (add) {
	add.addEventListener('click', addBook)
}

// Local Storage

const title = document.getElementById('inputTitle');
const author = document.getElementById('inputAuthor');

function getFormInfo() {
  const formData = {
    title: title.value,
    author: author.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function storeData() {
  if (!localStorage.getItem('formData')) {
    getFormInfo();
  } else {
    const fetchData = JSON.parse(localStorage.getItem('formData'));
    title.setAttribute('value', fetchData.title);
    author.setAttribute('value', fetchData.author);
  }
}
window.onload = () => {
  storeData();
};
title.addEventListener('change', getFormInfo);
author.addEventListener('change', getFormInfo);
