"use strict";

console.log(`Hello from exsternal JS!`);
alert(`Welcome to my first CodeUp website!!`);
let userFavColor = prompt(`what is your favorite color?`);
alert(`Amazing, my favorite color is ${userFavColor} as well!!!!`);
let startExercisesOne = confirm(`are you ready for your first exercise questions?`);
if (startExercisesOne === true){
    let movieOneTime = prompt(`how long have you had little mermaid?`)
    let movieTwoTime = prompt(`how long have you had brother bear?`)
    let movieThreeTime = prompt(`how long have you had hercules?`)
    let totalMovieMoney = (Number(movieTwoTime) + Number(movieOneTime) + Number(movieThreeTime)) * 3;
    alert(`You own blockbuster $${totalMovieMoney}, clicking ok tells me that YOU KNOW!`);
}
let startExercisesTwo = confirm(`are you ready for your Second exercise questions?`);
if (startExercisesTwo === true) {
    let google = prompt(`how long did you work for google?`)
    let amazon = prompt(`how long did you work for amazon?`)
    let facebook = prompt(`how long did you work for facebook?`)
    let totalMadeMoney = (Number(google) * 400) + (Number(amazon) * 380) + (Number(facebook) * 350);
    alert(`You made $${totalMadeMoney} this week, awesome!!!!!`);
}

