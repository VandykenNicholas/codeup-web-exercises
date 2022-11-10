const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

// let threeLanguages = users.filter(function(user){
// 	return user.languages.length >= 3;
// });

let threeLanguages = users.filter((u) => u.languages.length >= 3);

let emails = users.map(user => user.email);

let totalYears = users.reduce((years, person) => {
	return years + person.yearsOfExperience;
}, 0);

let averageYears = totalYears/users.length;

const longestEmail = users => {
	let emailList = users.map(u => u.email);
	return emailList.reduce((prev, current) => {
			return current.length > prev.length ? current : prev;
		}, ``);
}

const instructors = users => {
	let names = users.map(u => u.name);
	console.log(names);
	let count = 0;
	return names.reduce((prev, next) =>{
		count++;
		if (count === names.length){
			return `${prev} ${next}. Now report to class!`;
		}
		return `${prev} ${next},`;
	},`Your instructors are:`)
};

const language = users => {
	let list = users.map(u => u.languages).flat();
	return list.reduce((arr, next) => {
		if (!arr.includes(next)) {
			arr.push(next);
			return arr;
		} else {
			return arr;
		}
	}, []);
};
console.log(language(users));



	

