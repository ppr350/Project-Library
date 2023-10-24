const bookDisplay = document.getElementById("book-display");

// Constructor function to add NEW BOOKS w//
function Book(title, author, pages, read) {

	this.title = title,
	this.author = author,
	this.pages = pages,
	this.status = Boolean(read),
	this.description = function() {
		console.log(`${this.title} is written by ${this.author} and it has ${this.pages} pages.`)
		if (this.status === true) {
			console.log('I\'ve read it.')
		} else {
			console.log('I haven\'t read it yet.')
		}
	}
	return;
}

// Prototype function of Book to change READING STATUS //
Book.prototype.changeReadingStatus = function() {

	this.status = !this.status;
	const bookTitleRegExed = this.title.replace(/\s/g, "");
	// String(bookTitleRegExed);
	const thisBook = document.getElementById(bookTitleRegExed);
	const thisBookStatus = thisBook.getElementsByClassName('book-status')[0];
	if (thisBookStatus.getAttribute('data-status') === 'YES') {
		thisBookStatus.setAttribute('data-status', 'NO');
		thisBookStatus.innerText = 'IN PROGRESS';
	} else {
		thisBookStatus.setAttribute('data-status', 'YES');
		thisBookStatus.innerText = 'COMPLETED';
	}
}

// New empty object to be ready to store new book info when Book.prototype.add() is called //
let newBook = {};

// Prototype function of Book to be get new Book info from user //
Book.prototype.add = function() {

	const title = document.querySelector('#input-title').value;

	// Check if user has entered a same book that exists in their collection //
	const getExistingBooks = document.querySelectorAll('.book-title');
		for (let i = 0; i < getExistingBooks.length; i++) {
			if (getExistingBooks[i].innerText === title) {
				warningDialog.showModal()				
				return;
			}
		}

	const author = document.querySelector('#input-author').value;
	const pages = document.querySelector('#input-pages').value;
	let readIt = document.querySelector('#input-read-it');
	let status;
	readIt.value === 'true' ? status = true : false;

	// Generate a new Book by using the processed data
	newBook = new Book(title, author, pages, status);

	// Display the new book using its 'sibling' prototype function //
	newBook.stackTheBookDisplay();
}

// Prototype function of Book to display Book instances to page //
Book.prototype.stackTheBookDisplay = function() {

	// Create a div for THIS BOOK and be adopted by bookDisplay //
	const thisBook = document.createElement('div');
	thisBook.setAttribute("id", this.title.replace(/\s/g, ""));
	bookDisplay.appendChild(thisBook);

	// Add BOOK TITLE to page //
	const bookTitle = document.createElement('p');
	bookTitle.classList.add('book-title');
	bookTitle.dataset.title = this.title;
	bookTitle.innerText = this.title;
	thisBook.appendChild(bookTitle);

	// Add BOOK AUTHOR to page //
	const bookAuthor = document.createElement('p');
	bookAuthor.classList.add('book-author');
	bookAuthor.dataset.author = this.author;
	bookAuthor.innerText = 'by '+ this.author;
	thisBook.appendChild(bookAuthor);

	// Add BOOK PAGES to page //
	const bookPages = document.createElement('p');
	bookPages.classList.add('book-pages');
	bookPages.dataset.pages = this.pages;
	bookPages.innerText = this.pages + ' pages';
	thisBook.appendChild(bookPages);

	// Add BOOK READING STATUS to page //
	const bookReadingStatus = document.createElement('p');
	bookReadingStatus.classList.add('book-status');
	bookReadingStatus.innerText = this.status === true ? "COMPLETED" : "IN PROGRESS";
	bookReadingStatus.dataset.status = this.status === true ? "YES" : "NO";
	thisBook.appendChild(bookReadingStatus);

	// Add a button to change STATUS //
	const statusButton = document.createElement('button');
	statusButton.classList.add('status-button');
	statusButton.setAttribute('id', this.title.replace(/\s/g, "-") + '-status-button')
	statusButton.innerText = 'CHANGE STATUS';
	thisBook.appendChild(statusButton);
	statusButton.addEventListener('click', () => {
		this.changeReadingStatus();
	});

	// Add a button to remove BOOK //
	const removeButton = document.createElement('button');
	removeButton.classList.add('remove-button', 'button');
	removeButton.innerText = 'REMOVE';
	thisBook.appendChild(removeButton);
	removeButton.addEventListener('click', () => {
		thisBook.remove();
	});
};

// INPUT DIALOG //
const form = document.querySelector('form');
const addBookDialog = document.querySelector('#add-book-dialog');
const showDialog = document.querySelector('#show-dialog-button');
const addBookThenCloseDialog = document.querySelector('#add-now-button');
const cancelThenCloseDialog = document.querySelector('#cancel-button');

// Add a button to show INPUT DIALOG //
showDialog.addEventListener('click', () => {
	addBookDialog.showModal();
});

// Add functionality to INPUT DIALOG //
form.addEventListener('submit', (e) => {
	// Prevent the default behavior of submitting form //
	e.preventDefault();
	// Call this prototype function to get newly inputted book info by user pass the info to become an instance of Book //
	Book.prototype.add();
	// Call this prototype function to add the Book instance to the display //
	addBookDialog.close();
});

// Add a button to close and cancel INPUT DIALOG //
cancelThenCloseDialog.addEventListener('click', (e) => {
	// Prevent the default behavior of submitting form //
	e.preventDefault()
	addBookDialog.close();
});

// WARNING DIALOG //
const warningDialog = document.querySelector('#warning-dialog');
const warningDialogButton = document.querySelector('#warning-button');

// Add a button to close the "It appears that you already have this book in your library" dialog //
warningDialogButton.addEventListener('click', (e) => {
	warningDialog.close();
	addBookDialog.showModal();
})



