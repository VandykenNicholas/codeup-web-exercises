// // Write a function that when passed an object will return the value of the object’s price property.
// // 	Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// // getPrice(obj); // returns “$7.89”
//
// const meat = {name: 'beef',
// 				quantity: 4,
// 				price: '$7.89'};
//
// function returnPrice(obj){
//
// 	let valueStr = obj.price.replace('$',"");
// 	console.log(parseFloat(valueStr));
// 	return parseFloat(valueStr);
//
// }
// // returnPrice(meat);
// let arr = [`Green`, `Blue`, `Periwinkle`];
//
// function getLongestString(arr){
// 	let large = '';
// 	for(let i=0; i < arr.length; i++){
// 		if(arr[i].length > large.length){
// 			large = arr[i];
// 		}
// 	}
// 	console.log(large);
// 	return large;
// 	//ary.forEach(string => console.log(string.length));
// }
// // getLongestString(arr);
//
// const hamsters = [
// 	{
// 		name: "Hamtaro",
// 		heightInMM: 86,
// 		fur: ['orange', 'white'],
// 		gender: "male",
// 		dateOfBirth: "August 6"
// 	} , {
// 		name: "Bijou",
// 		heightInMM: 75,
// 		fur: ['white'],
// 		gender: "female",
// 		dateOfBirth: "July 10"
// 	} , {
// 		name: "Oxnard",
// 		heightInMM: 100,
// 		fur: ['grey', 'white'],
// 		gender: "male",
// 		dateOfBirth: "May 3"
// 	} , {
// 		name: "Boss",
// 		heightInMM: 120,
// 		fur: ['brown', 'white'],
// 		gender: "male",
// 		dateOfBirth: "September 21"
// 	} , {
// 		name: "Snoozer",
// 		heightInMM: 85,
// 		fur: ['brown', 'white', "pink"],
// 		gender: "male",
// 		dateOfBirth: "January 14"
// 	}
// ];
//
// function getTallestHamster(arr){
// 	// let tallest = {};
// 	// let tall = 0;
// 	// obj.forEach(function (hamster){
// 	// 	let height = hamster.heightInMM;
// 	// 	if (height > tall){
// 	// 		tall = height
// 	// 		tallest = hamster;
// 	// 	}
// 	// });
// 	// console.log(tallest);
// 	// return tallest;
// 	let tallest = {heightInMM: 0};
// 	for (let el of arr){
// 		if(el.heightInMM > tallest.heightInMM){
// 			tallest = el;
// 		}
// 	}
// 	console.log(tallest);
//
// }
//
// getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.


// function fizzBuss(){
// 	for (let i = 1; i <= 100; i++){
// 		if (i%3 ===0 && i%5 ===0){
// 			console.log(`FizzBuzz`)
// 		}
// 		else if (i%3===0){
// 			console.log(`Fizz`)
// 		}
// 		else if (i%5===0){
// 			console.log(`Buzz`)
// 		}
// 		else {
// 			console.log(i);
// 		}
// 	}
// }
// fizzBuss();

