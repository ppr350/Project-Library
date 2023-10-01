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
	console.log(`Did I read ${this.title}? It is ${this.readIt}.`);
	this.readIt = !this.readIt;
	console.log(`Now it is ${this.readIt}.`);
	console.log(`The name of the book is "${this.title}".`);
	const bookTitleRegExed = this.title.replace(/\s/g, "");
	console.log(`The id of this book is "${bookTitleRegExed}".`);
	String(bookTitleRegExed);
	const thisBook = document.getElementById(bookTitleRegExed);
	const thisBookStatus = thisBook.getElementsByClassName('book-status')[0];
	console.log(thisBookStatus)

	// thisBookStatus.dataset.status = "NO"
	console.log(typeof(bookTitleRegExed));
	console.log(bookTitleRegExed);
	console.log(thisBook.dataset);
	console.log(thisBook);
	console.log(thisBookStatus.getAttribute('data-status'));
	console.log(thisBookStatus.setAttribute('data-status', 'NO'));
	// const getDataStatus = bookTitleRegExed.getAttribute('data-status');
	// getDataStatus = this.dataset === true ? "NO" : "YES";
	// bookTitleRegExed.dataset.status = this.readIt === true ? "YES" : "NO";

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

// Constructor invocation with "new" keyword to add BOOKS to the Book function above //
const pythonCrashCourse = new Book("Python Crash Course", "Eric Matthes", "552", true);

const motherfocloir = new Book("MotherFocloir", "Darach O Seaghdha", "222", true);

const thinkLikeAProgrammer = new Book("Think Like A Programmer", "V. Anton Spraul", true);

const irishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);

// Test call //
pythonCrashCourse.stackTheBookDisplay();
pythonCrashCourse.changeReadingStatus();

