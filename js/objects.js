(function() {
	"use strict";
	
	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
	let person = {
		firstName: `Nicholas`,
		lastName: `Van Dyken`
	};
	console.log(`${person.firstName} ${person.lastName}`);
	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
	person.sayHello = function (){ console.log(`Hello from ${person.firstName} ${person.lastName}`)};
	person.sayHello();
	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */
	let shoppers = [
		{name: 'Cameron',
			amount: 180},
		{name: 'Ryan',
			amount: 250},
		{name: 'George',
			amount: 320}
	];
	shoppers.forEach(function(person){
		let total = person.amount;
		let appliedD = total - (total*.12);
		(person.amount >200) ? console.log(`${person.name}, congratulations! With our promo: Your total was $${person.amount}, but now its ${appliedD}!!`) : console.log(`Sorry you dont qualify for the discount ${person.name}, your total is $${person.amount}`);
	});
	
	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */
	const books = [
		{
			title: `The Goofy Goober`,
			author:{
					firstName: `Jeffery`,
					lastName: `Epiloge`
					}
		},
		{
			title: `Jail House Rock`,
			author:{
				firstName: `Epstein`,
				lastName: `Lactose`
			}
		},
		{
			title: `The man on the Hill`,
			author:{
				firstName: `Dennis`,
				lastName: `Ropeinger`
			}
		},
		{
			title: `Collection of secrets`,
			author:{
				firstName: `Killian`,
				lastName: `Michales`
			}
		},
		{
			title: `Flights to island nowhere`,
			author:{
				firstName: `Henery`,
				lastName: `Conspacthy`
			}
		}
	];
	
	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
	books.forEach(function(book, i){
		console.log(
	`${book.title} #${i + 1}
Title: ${book.title}
Author: ${book.author.firstName} ${book.author.lastName}`);
	})
	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */
	let outBook = {};
	let userInput = prompt(`Please Enter book name / Authors first name/ last name. "please pay special attention to the "/" to separate your answers`)
	let split = userInput.split(`/`);
	// console.log(split[0], split[1], split[2]);
	createBook(split);
	function createBook(array){
		let newBook = {};
		newBook.title = array[0];
		newBook.author = {firstName: array[1], lastName:array[2]};
		outBook = newBook;
	}
function showBookinfo(book){
	console.log(`${book.title}
Title: ${book.title}
Author: ${book.author.firstName} ${book.author.lastName}`)
}
showBookinfo(outBook);
	// can not get a for loop to work on an object that doesnt have other nested
})();
