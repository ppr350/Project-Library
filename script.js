const bookDisplay = document.getElementById("book-display");

// Constructor invocation to add NEW BOOKS w//
function Book(title, author, pages, readIt) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.readIt = Boolean(readIt),
	this.description = function() {
		console.log(`${this.title} is written by ${this.author} and it has ${this.pages} pages.`)
		if (this.readIt === true) {
			console.log('I\'ve read it.')
		} else {
			console.log('I haven\'t read it yet.')
		}
	}
	return;
}

// Constructor invocation to change READING STATUS //
Book.prototype.changeReadingStatus = function() {

	this.readIt = !this.readIt;
	const bookTitleRegExed = this.title.replace(/\s/g, "");
	String(bookTitleRegExed);
	const thisBook = document.getElementById(bookTitleRegExed);
	const thisBookStatus = thisBook.getElementsByClassName('book-status')[0];
	if (thisBookStatus.getAttribute('data-status') === 'YES') {
		thisBookStatus.setAttribute('data-status', 'NO');
		thisBookStatus.innerText = 'NO';
	} else {
		thisBookStatus.setAttribute('data-status', 'YES');
		thisBookStatus.innerText = 'YES';
	}
}

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
	bookAuthor.innerText = this.author;
	thisBook.appendChild(bookAuthor);

	// Add BOOK PAGES to page //
	const bookPages = document.createElement('p');
	bookPages.classList.add('book-pages');
	bookPages.dataset.pages = this.pages;
	bookPages.innerText = this.pages;
	thisBook.appendChild(bookPages);

	// Add BOOK READING STATUS to page //
	const bookReadingStatus = document.createElement('p');
	bookReadingStatus.classList.add('book-status');
	bookReadingStatus.innerText = this.readIt === true ? "YES" : "NO";
	bookReadingStatus.dataset.status = this.readIt === true ? "YES" : "NO";
	thisBook.appendChild(bookReadingStatus);
}

const a = function addNewBook() {
	let newBook = new Book(this.titleValue, this.authorValue, this.pagesValue, this.statusValue);
	console.log(this)
}

// Constructor invocation to display the book on the page //

// Constructor invocation with "new" keyword to add BOOKS to the Book function above //
// const pythonCrashCourse = new Book("Python Crash Course", "Eric Matthes", "552", true);

// const motherfocloir = new Book("MotherFocloir", "Darach O Seaghdha", "222", true);

// const thinkLikeAProgrammer = new Book("Think Like A Programmer", "V. Anton Spraul", true);

// const irishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);
// console.log(irishMythsAndLegends);

// Test call //
// pythonCrashCourse.stackTheBookDisplay();
// pythonCrashCourse.changeReadingStatus();
// irishMythsAndLegends.stackTheBookDisplay();
// irishMythsAndLegends.description();

const form = document.querySelector('form');
const dialog = document.querySelector('#add-book-dialog')
const showDialog = document.querySelector('#show-dialog-button');
const addBookThenCloseDialog = document.querySelector('#add-now-button');
const cancelThenCloseDialog = document.querySelector('#cancel-button');

showDialog.addEventListener('click', () => {
	dialog.showModal();
})


form.addEventListener('submit', (e) => {
	e.preventDefault();
	getUserInputs();
	dialog.close();
});

cancelThenCloseDialog.addEventListener('click', (e) => {
	e.preventDefault()
	console.log("click CANCEL, and script to preventDefault")
	dialog.close();
	console.log(cancelThenCloseDialog.value)
});

function getUserInputs() {
	const titleValue = document.querySelector('#input-title').value;
	const authorValue = document.querySelector('#input-author').value;
	const pagesValue = document.querySelector('#input-pages').value;
	// const statusValue = document.querySelector('#input-read-it').value;
	// debugger
	let getStatus = document.querySelector('#input-read-it');
	let statusValue;
	if (getStatus.value === 'true') {
		statusValue = true;
	} else if (getStatus.value === 'false') {
		statusValue = false;
	};

	// addNewBook()

	// const statusValue = getStatus.value;
	// console.log(statusValue);
	let addNewBook = new Book(titleValue, authorValue, pagesValue, statusValue);
	console.log(addNewBook)
	addNewBook.stackTheBookDisplay();
	addNewBook.description();
	console.log(addNewBook.__proto__)



}


