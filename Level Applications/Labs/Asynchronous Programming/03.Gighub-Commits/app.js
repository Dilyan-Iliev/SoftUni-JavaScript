function loadCommits() {

    const userNameInputField = document.getElementById('username');
    const repoNameInputField = document.getElementById('repo');
    const commitsUL = document.getElementById('commits');

    const url = `https://api.github.com/repos/${userNameInputField.value}/${repoNameInputField.value}/commits`;

    //With fetch API
    fetch(url)
        .then(response => response.json())
        .then(result => {
            Array.from(commitsUL.children)
                .forEach(ch => ch.remove());

            result.forEach(r => {
                let li = document.createElement('li');
                li.textContent = r.commit.message;
                commitsUL.appendChild(li);
            });
        })
        .catch(() => {
            Array.from(commitsUL.children)
                .forEach(ch => ch.remove());

            let li = document.createElement('li');
            li.textContent = 'Error: 404 (Not Found)';

            commitsUL.appendChild(li);
        });

    //with asyn/await

    async function getCommits(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    getCommits(url)
        .then(result => {
            Array.from(commitsUL.children)
                .forEach(ch => ch.remove());

            result.forEach(r => {
                let li = document.createElement('li');
                li.textContent = r.commit.message;
                commitsUL.appendChild(li);
            });
        })
        .catch(() => {
            Array.from(commitsUL.children)
                .forEach(ch => ch.remove());

            let li = document.createElement('li');
            li.textContent = 'Error: 404 (Not Found)';

            commitsUL.appendChild(li);
        })
}