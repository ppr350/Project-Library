# Project: Library

## This project is part of The Odin Project's Full Stack JavaScript Course.

### The project

The aim of this project is to make a fully functional book library site that is able to take in user's inputs (books info), then add them to the book library.

When users click the "+ ADD BOOK" button, a dialog pops up and let the user to key in "Title", "Author", "Total Pages" and wether or not they have read it (It can be updated later). The user then can press the "ADD" button in the modal to add book, or press the "CANCEL" button or press "ESC" on their keyboard to cancel the operation and close the modal.

Once the user has inputted the new book and pressed "ADD", the book info will display on the page.

Users can change their reading status on the page. A delete button also available next to the book to allow users to delete the book.

### HTML

The HTML is very barebone in this project. It contains two dialogs, one of them has a form with two buttons; and the other one shows an error message and a button.

#### Accessibilty

When I was working on this project, I intended to make it as accessible to users as possible. I wanted to make sure that I use the right HTML tags, tried not to over-write default HTML functionality and made use of tags that enhance accessibility.

#### Form

The form is made to enable user to enter their book information and therefore has them display on the page. The form has three "input" elements and a "select" element, all three "input" have "minlength" and "maxlength" validations. whereas the "select" element defaults at "yes" option. All three "input" also have "required" attribute to prevent users from submitting an empty form.

The form can be dismissed by click the "CANCEL" button or pressing the "esc" key on keyboard. When the "ADD" button is pressed, JavaScript will it takeover.

### CSS

As mentioned above, I want to make this site as accessible as possible, so I made efforts to make it fully responsive to all screen sizes.

### JavaScript

This project uses Constructor function to generate new book. The "Book" constructor takes four arguments.

I wrote three prototypes for this Book constuctor. The first one is "changeReadingStatus", as the name impplied, it changes the reading status. If the current status is "Work in Progress", calling this prototype fucntion changes the status to "Completed", or vice versa. When a book is added, a button called "CHANGE STATUS" will be generated to enable this functionality.

The second prototype is called "add". Its roles is to take user inputs from the form, and use the processed data to construct a new Book by calling the Book constructor. Lastly, it calls "stackTheBookDisplay" prototype function (more info below) in order to stack this new Book object to the site.