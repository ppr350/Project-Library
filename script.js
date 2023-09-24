const bookShelf = [];

function Book(title, author, pages, readIt) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.readIt = readIt
	this.description = function() {
		console.log(`${this.title} is written by ${this.author} and it has ${this.pages}.`)
		if (this.readIt === true) {
			console.log('I\'ve read it.')
		} else {
			console.log('I haven\'t read it yet.')
		}
	}
	const addBookToShelf = bookShelf.push(this.title, this.author, this.pages, this.readIt);
	return;
}

const pythonCrashCourse = new Book("Pyhton Crash Course", "Eric Matthes", "552", true)

function addBookToShelf() {

}

const changeStatus = {
	flipReadUnRead: function () {
		console.log("Read it or not")
		if (this.readIt === true) {
			readIt === false;
		} else if (this.readIt === false) {
			readIt === true;
		}
		console.log(readIt);

	}
}

const read = changeStatus.flipReadUnRead();