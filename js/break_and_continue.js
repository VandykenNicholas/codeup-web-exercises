"use strict";

function loopSkip(){
	let input;
	while (true){
		input = parseFloat(prompt(`input a number 1-50, but is odd`))
			if (input % 2 !==0 && input >=1 && input <= 50){
				break;
			}
	}
	for (let i = 1; i < 50; i++){
		if (input === i){
			console.log(`Whoops, looks like were skipping: ${input}`)
			continue;
		}
		else if (i%2 ===0){
			continue;
		}
		else {
			console.log(`here is an odd number: ${i}`);
		}
	}
	
}
