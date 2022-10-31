"use strict";

$(function() {
	
	// alert(`the DOM has finished loading!`);
	$(`h1`).css(`background-color`, `yellow`)
	$(`li`).css(`font-size`, `20px`)
	$(`h1, p, li`).css(`background-color`, `yellow`)
	let text= $(`h1`).text();
	alert(text);
	
});