// Added an empty array to store only BOOK TITLES //
const bookObi = [];

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
	const addBookToShelf = bookObi.push(this.title);
	return;
}

// Constructor invocation to change READING STATUS //
Book.prototype.changeReadingStatus = function() {
	console.log(`Did I read ${this.title}? It is ${this.readIt}.`);
	this.readIt = !this.readIt;
	console.log(`Now it is ${this.readIt}.`);
}

// Constructor invocation with "new" keyword to add BOOKS to the Book function above //
const pythonCrashCourse = new Book("Pyhton Crash Course", "Eric Matthes", "552", true);

const motherfocloir = new Book("MotherFocloir", "Darach O Seaghdha", "222", true);

const thinkLikeAProgrammer = new Book("Think Like A Programmer", "V. Anton Spraul", true);

const irishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);

// Test call //
motherfocloir.changeReadingStatus();


// Function invocation to loop through BOOKSHELF array and put them on the screen //
// Find book info and add them to the display too
const bookDisplay = document.getElementById("book-display");
function stackTheBookDisplay() {
	for (i = 0; i < bookObi.length; i++) {
		const bookTitle = document.createElement("p");
		bookTitle.classList.add("book-title");
		bookTitle.innerText = bookObi[i];
		bookDisplay.appendChild(bookTitle);

		const bookAuthor = document.createElement('p');
		bookAuthor.classList.add("book-author");
		bookAuthor.innerHTML = function addAuthor() {
			for (i = 0; i < bookObi.length; i++) {
				if (bookObi[i] = this.bookTitle) {
					console.log("found this")
				}
			}
		}
		bookDisplay.appendChild(bookAuthor);
	};
}

stackTheBookDisplay()