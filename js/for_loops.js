"use strict";


function showMultiplacationTable(input){
    console.log(input * 1);
    console.log(input * 2);
    console.log(input * 3);
    console.log(input * 4);
    console.log(input * 5);
    console.log(input * 6);
    console.log(input * 7);
    console.log(input * 8);
    console.log(input * 9);
    console.log(input * 10);
}

function randomEvenAndOddGen() {
    for (let i = 0; i < 10; i++) {
        let random = Math.floor((Math.random() * 200) + 20);
        let sign = (random % 2 > 0) ? `is odd` : `is even`;
        console.log(`${random} ${sign}`);
    }
}
/// Tried desperatly to find a simple solution based on the instruction material. and without some crazy loop within a loop. this code was stolen from a former student to see if there was something i could have missed. to my knowledge .repeat has never been taught, and or just forgotten.


function numberPyramid(){
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}



function byFiveLoop(){
    for (let i = 100; i >= 5; i -= 5){
        console.log(i);
    }
    
}
