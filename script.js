const form = document.getElementById('form');
const remove = document.getElementById('remove');
const titleBook = document.getElementById('title');
const authorBook = document.getElementById('title');
const add = document.querySelector('#add');

let booksArray = [];
var books = {};
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

// Display Function
function displayBooksList() {
	
	const section = document.getElementById('bookSection');
	section.innerHTML = '';
	for (let i = 0; i <= booksArray.length - 1; i++) {
		section.innerHTML += `<p id="title">${booksArray[i].title}</p>	<p id="author">${booksArray[i].author}</p>	<button id="remove" onclick="removeBook(${booksArray[i].id})">Remove</button>
		<hr />`;
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

