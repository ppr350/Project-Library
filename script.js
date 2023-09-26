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

const irishMythsAndLegends = new Book("Irish Myths And Legend", "Lady Gregory", "456", false);

// function addBookToShelf() {

// }

const changeReadingStatus = {
	byFlipReadAndUnRead: function() {
		console.log(this);
		console.log("Read it or not")
		console.log(`Now it is ${this.readIt}`)
		this.readIt = !this.readIt;
		console.log(`Switched to ${this.readIt}`);
		

	}
}

const read = changeReadingStatus.byFlipReadAndUnRead(motherfocloir);


// let bookDisplay = document.getElementById("book-display")

// Create a function to loop through bookshelf's array contents (book title) and put them on the screen
function stackTheBookDisplay() {
	for (i = 0; i < bookShelf.length; i++) {
		const para = document.createElement("p");
		para.innerText = bookShelf[i];
		const element = document.getElementById("book-display");
		element.appendChild(para);
	};
}

stackTheBookDisplay()