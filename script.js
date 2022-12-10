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


function removeBook(id) {
	console.log('array 1', booksArray)
	booksArray = booksArray.filter((obj) => obj.id !== id);
	console.log('array 2', booksArray)
	displayBooksList();
}

if (add) {
	add.addEventListener('click', addBook)
}

