const form = document.getElementById('form');
const remove = document.getElementById('remove');
// const titleBook = document.getElementById('title');
// const authorBook = document.getElementById('title');
const add = document.querySelector('#add');

let booksArray = [];

class bookApp {
	static addBook() {	
		const section = document.getElementById('bookSection');
		section.innerHTML = '';
		for (let i = 0; i <= booksArray.length - 1; i++) {
			section.innerHTML += `<div id="textHeading"><div><p id="title">"${booksArray[i].title}" By  </p>	<p id="author">${booksArray[i].author}</p></div>	<button id="remove" onclick="bookApp.removeBook(${i})">Remove</button></div>`;
			// title.value = '';
      // author.value = '';
		}
	}
	
	static removeBook(id) {
		booksArray.splice(id, 1);
		bookApp.addBook();
		localStorage.setItem('booksArray', JSON.stringify(booksArray));
	}
}

// Local Storage

