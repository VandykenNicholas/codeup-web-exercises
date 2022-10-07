"use strict";

function multiplier(){
		let i = 1;
		while (i < 65536) {
			i *= 2;
			console.log(i);
		}
	}
	
function iceCream(){
	let conesLeft =  Math.floor(Math.random() * 50) + 50;
	do {
		let order = Math.floor(Math.random() * 5) + 1;
		if (order > conesLeft){
			console.log(`Sorry, we only have ${conesLeft}, please make a smaller selection or come back tomorrow!`);
		}
		else{
			conesLeft -= order;
			console.log(`Congrats, you ordered ${order}, and we have ${conesLeft} cones left.`)
		}
	}
	while ( conesLeft > 0 );
	console.log(`We are sold out, please come back tomorrow!`)
}