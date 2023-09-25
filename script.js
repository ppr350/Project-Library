const bookShelf = [];

function Book(title, author, pages, readIt) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.readIt = readIt
	this.description = function() {
		console.log(`${this.title} is written by ${this.author} and it has ${this.pages} pages.`)
		if (this.readIt === true) {
			console.log('I\'ve read it.')
		} else {
			console.log('I haven\'t read it yet.')
		}
	}
	const addBookToShelf = bookShelf.push(this.title);
	return;
}


// books //
const pythonCrashCourse = new Book("Pyhton Crash Course", "Eric Matthes", "552", true);

const motherfocloir = new Book("MotherFocloir", "Darach O Seaghdha", "222", true);

const thinkLikeAProgrammer = new Book("Think Like A Programmer", "V. Anton Spraul", true);

const IrishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);

function addBookToShelf() {

}

const changeStatus = {
	flipReadUnRead: function () {
		console.log("Read it or not")
		console.log(this.readIt)
		if (this.readIt === true) {
			this.readIt === false;
			console.log(this.description);
		} else if (this.readIt === false) {
			this.readIt === true;
			console.log(this.description);
		}
		console.log(`${this.description}`);

	}
}

const read = changeStatus.flipReadUnRead(pythonCrashCourse);

// let bookDisplay = document.getElementById("book-display")

function stackTheBookDisplay() {
	// let bookDisplay = document.getElementById("book-display")
	for (i = 0; i < bookShelf; i++) {
		document.getElementById("book-display").innerText = array[i];
	} 
}

stackTheBookDisplay()