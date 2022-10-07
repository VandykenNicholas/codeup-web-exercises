"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// let colorChoice = prompt(`what color are you curious about?`)
// analyzeColor(colorChoice);
// function analyzeColor(color){
//     if (color === "blue") {
//         console.log(`The color of the sky is blue`)
//     }
//     else if (color === 'green'){
//         console.log(`Color of grass is green`)
//     }
//     else if (color === `red`){
//         console.log(`the color of fire is red`)
//     }
//     else {
//         console.log(`NO IDEA WHAT ${color.toUpperCase()} IS!!!!`)
//     }
// }
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//  analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(input){
    switch(input){
        case `red`:
            console.log(`${input} is the color or fire`)
            break;
        case `blue`:
            console.log(`${input} is the color of the sky`)
            break;
        case `green`:
            console.log(`${input} is the color of grass`)
            break;
        default:
            console.log(`${input} isnt a color i can see!`)
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// commented for testing
analyzeColor(prompt(`what color would you like to know about?`));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// let luckyNumber = Math.floor((Math.random() * 5) + 1);
// let totalInput = parseFloat(prompt(`how much is the product?`));
// function calculateTotal(luck,total){
//     let discount;
//     switch (luck){
//         case 0:
//             discount = 0;
//             break;
//         case 1:
//             discount = .1;
//             break;
//         case 2:
//             discount = .25;
//             break;
//         case 3:
//             discount = .35;
//             break;
//         case 4:
//             discount = .5;
//             break;
//         case 5:
//             discount = 1;
//             break;
//     }
//     alert(`you will owe $${total - (total * discount)}`);
// }
// calculateTotal(luckyNumber,totalInput);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// I LITERALLY DID THIS ON ACCIDENT TO MAKE THE CODE MORE FUN LAST QUESTION// I WILL COMMENT OUT AND CHANGE THE VARIABLES
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
//

let totalInput = parseFloat(prompt(`how much is the product?`));
function calculateTotal(luck,total){
    let discount;
    switch (luck){
        case 0:
            discount = 0;
            break;
        case 1:
            discount = .1;
            break;
        case 2:
            discount = .25;
            break;
        case 3:
            discount = .35;
            break;
        case 4:
            discount = .5;
            break;
        case 5:
            discount = 1;
            break;
    }
    alert(`You original bill was ${total}`);
    alert(`Your lucky number was ${luckyNumber}`)
    alert(`You discount is  ${discount}`);
    alert(`you NOW will owe $${total - (total * discount)}. CONGRATULATIONS!!!`);
}
calculateTotal(luckyNumber,totalInput);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function letsPlayAGame(){

    let letsPlay = confirm(`Would you like to enter a number?`);
    if (letsPlay){
        let userNumber = parseFloat(prompt(`Enter your number here`));
        if (!isNaN(userNumber)){
            if (Math.abs(userNumber)%2 > 0){
                alert(`your number was odd`);
            }
            else{

                alert(`your number is even`);
            }
            alert(`your number plus 100 is ${userNumber + 100}`);
            (userNumber < 0) ? alert(`your number is negative`) : alert(`your number is positive`);

        }
        else {
            alert(`you did not enter a number!`);
        }
    }
    else{

    }

}
letsPlayAGame();