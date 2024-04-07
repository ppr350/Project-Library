const bookDisplay = document.getElementById("book-display");
const title = document.querySelector('#input-title')
const author = document.querySelector('#input-author')
const pages = document.querySelector('#input-pages')
const titleError = document.querySelector('#input-title + span.error')
const authorError = document.querySelector('#input-author + span.error')
const pagesError = document.querySelector('#input-pages + span.error')

// A collection of Mixins to later be assigned to class Book //
let prototypeMixin = {

	// Mixin function to change READING STATUS //
	changeReadingStatus() {
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
	},

	// Mixin function to be get new Book info from user //
	add() {
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
	},

	// Mixin function to display Book instances to page //
	stackTheBookDisplay() {

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
	}

};

// Constructor function to add NEW BOOKS w//
class Book {
	constructor(title, author, pages, read) {
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
	}
};

// Assign Mixins to class Book //
Object.assign(Book.prototype, prototypeMixin)

// New empty object to be ready to store new book info when Book.prototype.add() is called //
let newBook = {};

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

title.addEventListener('input', () => {
	validateTitle()
})

author.addEventListener('input', () => {
	validateAuthor()
})

pages.addEventListener('input', () => {
	validatePages()
})

// Add functionality to INPUT DIALOG //
form.addEventListener('submit', (e) => {
	// Prevent the default behavior of submitting form //
	
	if (!title.validity.valid) {
		showTitleError()
		e.preventDefault();
	}
	// Call this prototype function to get newly inputted book info by user pass the info to become an instance of Book //
	
	else {
		Book.prototype.add();
		// Call this prototype function to add the Book instance to the display //
		addBookDialog.close();
	}
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

// Form validation (Constraint Validation API)

// Validate book title
function validateTitle() {
	if (title.validity.valid) {
		titleError.textContent = ''
		titleError.className = 'error'
	} else {
		showTitleError()
	}
}

// Validate author name
function validateAuthor() {
	if (author.validity.valid) {
		authorError.textContent = ''
		authorError.className = 'error'
	} else {
		showAuthorError()
	}
}

// validate page number
function validatePages() {
	if (pages.validity.valid) {
		pagesError.textContent = ''
		pagesError.className = 'error'
	} else {
		showPagesError()
	}
}

// Error Messages
function showTitleError() {
	if (title.validity.valueMissing) {
		titleError.textContent = 'You need to enter a book title.'
	} else if (title.validity.tooShort) {
		titleError.textContent = `Book title should be at least ${title.minLength} characters long.`
	} else if (title.validity.tooLong) {
		titleError.textContent = `Book title should be no more than ${title.maxLength} characters long.`
	}
	titleError.className = 'error active'
}

function showAuthorError() {
	if (author.validity.valueMissing) {
		authorError.textContent = 'You need to enter a author name.'
	} else if (author.validity.tooShort) {
		authorError.textContent = `Book author should be at least ${author.minLength} characters long.`
	} else if (author.validity.tooLong) {
		authorError.textContent = `Book author should be no more than ${author.maxLength} characters long.`
	}
	authorError.className = 'error active'
}

function showPagesError() {
	if (pages.validity.tooShort || pages.validity.rangeUnderflow) {
		pagesError.textContent = `Book pages should be at least ${pages.minLength} pages.`
	} else if (pages.validity.tooLong || pages.validity.rangeOverflow) {
		pagesError.textContent = `Book pages should be no more than ${pages.maxLength} pages.`
	} else if (pages.validity.patternMismatch) {
		pagesError.textContent = `Book pages should be no more than ${pages.maxLength} pages, and please only use numeric,.`
	} else if (pages.validity.valueMissing) {
		pagesError.textContent = `Book pages should be at least ${pages.minLength} pages.`
	}
	pagesError.className = 'error active'
}



