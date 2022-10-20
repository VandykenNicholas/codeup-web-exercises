// Write a function that when passed an object will return the value of the object’s price property.
// 	Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

const meat = {name: 'beef',
				quantity: 4,
				price: '$7.89'};

function returnPrice(obj){
	
	let valueStr = obj.price.replace('$',"");
	console.log(parseFloat(valueStr));
	return parseFloat(valueStr);
	
}
returnPrice(meat);