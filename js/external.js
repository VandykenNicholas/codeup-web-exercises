"use strict";

console.log(`Hello from external JS!`);
alert(`Welcome to my first CodeUp website!!`);
let userFavColor = prompt(`what is your favorite color?`);
alert(`Amazing, my favorite color is ${userFavColor} as well!!!!`);
let startExercisesOne = confirm(`are you ready for your first exercise questions?`);
if (startExercisesOne === true){
    let movieOneTime = prompt(`how long have you had little mermaid?`);
    let movieTwoTime = prompt(`how long have you had brother bear?`);
    let movieThreeTime = prompt(`how long have you had hercules?`);
    let pricePerDay = prompt(`How much was it per day?`)
    let totalMovieMoney = (Number(movieTwoTime) + Number(movieOneTime) + Number(movieThreeTime)) * pricePerDay;
    alert(`You owe blockbuster $${totalMovieMoney}, clicking ok tells me that YOU KNOW!`);
}
let startExercisesTwo = confirm(`are you ready for your Second exercise questions?`);
if (startExercisesTwo === true) {
    let google = prompt(`how long did you work for google?`)
    let googleRate = prompt(`Whats Google's hourly rate?`)
    let amazon = prompt(`how long did you work for amazon?`)
    let amazonRate = prompt(`Whats Amazons hourly rate?`)
    let facebook = prompt(`how long did you work for facebook?`)
    let facebookRate = prompt(`Whats facebook's hourly rate?`)
    let totalMadeMoney = (Number(google) * googleRate) + (Number(amazon) * amazonRate) + (Number(facebook) * facebookRate);
    alert(`You made $${totalMadeMoney} this week, awesome!!!!!`);
}
let startExecsiseThree = confirm(`Ready to start the third exercise?`);
if (startExecsiseThree === true){
    let isClassFull = prompt(`Is the class full?  ::ONLY ANSWER WITH "Y" / "N"`);
    if (isClassFull === "Y"){
        isClassFull = true;
    }
    else if  (isClassFull === "N"){
        isClassFull = false;
    }
    let schedConflict = prompt(`Is the class in conflict with another class?  ::ONLY ANSWER WITH "Y" / "N"`);
    if (schedConflict === "Y"){
        schedConflict = true;
    }
    else if  (schedConflict === "N"){
        schedConflict = false;
    }
    if (!schedConflict && !isClassFull){
        alert(`YOU CAN ENROLL IN THE CLASS!!!`)
    }
    else if  (schedConflict || isClassFull) {
        alert(`Sorry, you can not enroll in the class.......`);
    }
}
let startExerciseFour = confirm(`Ready to start the forth exercise?`);
if (startExerciseFour){
    let offerValid = confirm(`is the offer still valid? Hit "OK"`);
    if (offerValid){
        let isMember = confirm(` If your a member, hit "ok"`);
        if (isMember){
            alert(`Lets give you that offer!`);
        }
        else {
            let boughtTwoItems =  confirm(`Are you buying more than 2 items?`);
            if (boughtTwoItems){
                alert(`Lets give you that offer!`);
            }
            else {
                alert(`NO OFFER FOR YOU!`);
            }
        }
    }
    else {
        alert(`NO OFFER FOR YOU!`);
    }
}


