# Project: Library (#update 6th April 2024)

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

##### update 6th April 2024
Added JavaScript Constraint Validity API to the project. It checks validation as the user progresses through the form, when a user leaves a form field, and when user submits the form.

### CSS

As mentioned above, I want to make this site as accessible as possible, so I made efforts to make it fully responsive to all screen sizes. I opted for simpler layout for this project as the main focus is JavaScript. CSS GRID is the main backbone for the CSS file. The main container of the HTML file has is the parent of the grid-template-area. 

font-sizes are all controlled by the clamp() function. books are displayed in "card" style and it is written to be responsive to screen size.

### JavaScript

This project uses class to generate new book. The Book class takes four arguments - title, author, pages and status. It also has a method called "description".

I wrote three prototypes for this Book constuctor. The first one is "changeReadingStatus", as the name impplied, it changes the reading status. If the current status is "Work in Progress", calling this prototype fucntion changes the status to "Completed", or vice versa. When a book is added, a button called "CHANGE STATUS" will be generated to enable this functionality.

The second prototype function of Book constructor is called "add". Its roles is to take user inputs from the form, and use the processed data to construct a new Book object by calling the Book constructor. Lastly, it calls "stackTheBookDisplay" prototype function (more info below) in order to stack this new Book object to the site.

The "stackTheBookDisplay" prototype function roles is to process the book data and displays the book to the page. It generates new HTML divs and paragraphs, add classes, ids and innertexts for the new Book object. It also adds two buttons - "CHANGE STATUS" and "REMOVE". The former listens to click and change reading status accordingly by calling the Book prototype function "changeReadingStatus"


### Special Thanks

[The Odin Projects and its Discord community, thank you for providing such an amazing course](https://www.theodinproject.com/)

[Kevin Powell's video explaining on how to keep footer at the bottom, also all his videos about responsive design](https://youtu.be/yc2olxLgKLk?si=tfLgpOYTuWfgp74_)

[ColorCode.io's Youtube series "20 things JavaScript Developers should know, but probably don't" is really awesome](https://www.youtube.com/watch?v=jnME98ckDbQ&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP)

[This video about ARIA HTML by DesignCourse](https://www.youtube.com/watch?v=0hqhAIjE_8I&t=674s)

[MDN Web Docs for providing detailed guides](https://developer.mozilla.org/en-US/)

[Stack Overflow](https://stackoverflow.com/)

Discord users Mao && Don't rush learning! on TOP's Javascript-help-1