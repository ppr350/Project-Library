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
		thisBookStatus.innerText = 'NO';
	} else {
		thisBookStatus.setAttribute('data-status', 'YES');
		thisBookStatus.innerText = 'YES';
	}
}

// New empty object to be ready to store new book info when Book.prototype.add() is called //
let newBook = {};

// Prototype function of Book to be get new Book info from user //
Book.prototype.add = function() {
	const title = document.querySelector('#input-title').value;
	const author = document.querySelector('#input-author').value;
	const pages = document.querySelector('#input-pages').value;
	let readIt = document.querySelector('#input-read-it');
	let status;
	readIt.value === 'true' ? status = true : false;
	newBook = new Book(title, author, pages, status);
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
	bookReadingStatus.innerText = this.status === true ? "YES" : "NO";
	bookReadingStatus.dataset.status = this.status === true ? "YES" : "NO";
	thisBook.appendChild(bookReadingStatus);

	// Add a button to change STATUS //
	const statusButton = document.createElement('button');
	statusButton.classList.add('button');
	statusButton.setAttribute('id', this.title.replace(/\s/g, "-") + '-status-button')
	statusButton.innerText = 'CHANGE STATUS';
	thisBook.appendChild(statusButton);
	statusButton.addEventListener('click', function() {
		this.changeReadingStatus();
	})

	// Add a button to remove BOOK //
	const removeButton = document.createElement('button');
	removeButton.classList.add('remove-button', 'button');
	removeButton.innerText = 'REMOVE';
	thisBook.appendChild(removeButton);
	removeButton.addEventListener('click', function() {
		thisBook.remove();
	})
}


// Constructor invocation with "new" keyword to add BOOKS to the Book function above //
// const pythonCrashCourse = new Book("Python Crash Course", "Eric Matthes", "552", true);

// const motherfocloir = new Book("MotherFocloir", "Darach O Seaghdha", "222", true);

// const thinkLikeAProgrammer = new Book("Think Like A Programmer", "V. Anton Spraul", true);

const irishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);
console.log(irishMythsAndLegends);
console.log(Object.getPrototypeOf(irishMythsAndLegends));

// Test call //
// pythonCrashCourse.stackTheBookDisplay();
// pythonCrashCourse.changeReadingStatus();
irishMythsAndLegends.stackTheBookDisplay();
// irishMythsAndLegends.description();

const form = document.querySelector('form');
const dialog = document.querySelector('#add-book-dialog')
const showDialog = document.querySelector('#show-dialog-button');
const addBookThenCloseDialog = document.querySelector('#add-now-button');
const cancelThenCloseDialog = document.querySelector('#cancel-button');

showDialog.addEventListener('click', () => {
	dialog.showModal();
})

// Remove Book, link this function to book //

// const removeBook = bookDisplay.addEventListener('click', (e) => {
// 	// debugger
// 	// removeBook.classList.add('')
// 	console.log("clicked")
// })
// for (let i = 0; i < removeBook.length; i++) {
// 	const button = removeBook[i]
// 	button.addEventListener('click', (e) => {
// 		const buttonClicked = e.target
// 		console.log('clicked')
// 		buttonClicked.parentElement.remove()
// 	})
// }

form.addEventListener('submit', (e) => {
	// Prevent the default behavior of submitting form //
	e.preventDefault();
	// Call this prototype function to get newly inputted book info by user pass the info to become an instance of Book //
	Book.prototype.add();
	// Call this prototype function to add the Book instance to the display //
	newBook.stackTheBookDisplay();
	console.log(newBook);
	console.log(Object.getPrototypeOf(newBook));
	dialog.close();
});

cancelThenCloseDialog.addEventListener('click', (e) => {
	// Prevent the default behavior of submitting form //
	e.preventDefault()
	console.log("click CANCEL, and script to preventDefault")
	dialog.close();
});

