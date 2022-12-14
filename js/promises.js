


function getLastEvent(){
	let username = prompt(`need username`);
	const url = ` https://api.github.com/users/${username}/events/public`
	fetch(url, {headers: {'Authorization': githubToken}})
		.then(data => { console.log (data); return data.json();})
		.then((data => {
			console.log(data);
			let result = data[0].created_at.slice(0,10)
			$(`#input`).append(`<div class="row"> ${username}, last commit was ${result} </div>`);
			wait();
		}))
}


getLastEvent();

function wait(input){
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			if (input > 0){
				resolve(`we started the process`);
			}
			else {
				reject(`not big enough, try again later`)
			}
		}, input)
	});
}
wait(5000).then(message => console.log(`its been 5 seconds, this is what we got back:`, message))
wait(7000).then(() => console.log(`Finally we are at 7 seconds.`))

