function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const nameInput = document.getElementById('controls').children[1];
    const messageInput = document.getElementById('controls').children[4];
    const textAreaElement = document.getElementById('messages');

    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', showData);

    async function sendMessage(e) {
        const newObj = {
            author: nameInput.value,
            content: messageInput.value
        };

        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        });

        const data = await request.json();
        return data;
    }

    async function showData(e) {
        const request = await fetch(url);
        const data = await request.json();

        textAreaElement.textContent = Object.values(data)
            .map(x => `${x.author}: ${x.content}`).join('\n');
    }
}

attachEvents();