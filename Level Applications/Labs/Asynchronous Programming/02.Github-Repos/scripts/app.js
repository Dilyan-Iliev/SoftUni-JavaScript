function loadRepos() {
	const userNameInputField = document.getElementById('username');
	const ul = document.getElementById('repos');

	const url = `https://api.github.com/users/${userNameInputField.value}/repos`;

	//with Promises
	fetch(url)
		.then(response => {
			return response.json();
		})
		.then(result => {
			Array.from(ul.children)
				.forEach(ch => ch.remove());

			result.forEach(r => {
				let htmlUrl = r.html_url;
				let liEl = document.createElement('li');
				let aEl = document.createElement('a');
				aEl.href = htmlUrl;
				aEl.textContent = r.full_name;

				liEl.appendChild(aEl);
				ul.appendChild(liEl);
			})
		})
		.catch(reason => {
			console.log(reason);
		});

	userNameInputField.value = '';

	async function getResponse(url) {
		let response = await fetch(url);
		let data = await response.json();

		return data;
	}


	//with async/await
	getResponse(url)
		.then(result => {
			Array.from(ul.children)
				.forEach(ch => ch.remove());

			result.forEach(r => {
				let htmlUrl = r.html_url;
				let liEl = document.createElement('li');
				let aEl = document.createElement('a');
				aEl.href = htmlUrl;
				aEl.textContent = r.full_name;

				liEl.appendChild(aEl);
				ul.appendChild(liEl);
			})
		})


	//решение от лектора
	fetch(url)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);
}

function handleData(data) {
	console.log(data);
}

function handleResponse(response) {
	//ключово за response-a е ok метода му.
	if (response.ok == false) {
		//когато не е ок трябва да хвърля грешка, която ще се хване от catch частта на fetch-a
		
		throw new Error(`Error: ${response.status} ${response.statusText}`)
	}
	return response.json
}

function handleError(err) {
	console.log(err);
}