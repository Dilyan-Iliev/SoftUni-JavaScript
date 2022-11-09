function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const phonebookUl = document.getElementById('phonebook');
    const personInputField = document.getElementById('person');
    const phoneInputField = document.getElementById('phone');

    document.getElementById('btnLoad').addEventListener('click', showData);
    document.getElementById('btnCreate').addEventListener('click', createData);

    async function showData(e) {

        const response = await fetch(url);
        const data = await response.json();

        phonebookUl.innerHTML = '';
        Object.values(data)
            .forEach(d => createLiElement(d));
    }

    async function createData(e) {

        const newObj = {
            person: personInputField.value,
            phone: phoneInputField.value
        };

        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        });

        const data = await request.json();

        personInputField.value = '';
        phoneInputField.value = '';
        showData();

        return data;
    }

    function createLiElement({ _id, person, phone }) {
        let li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;
        let button = document.createElement('button');
        button.textContent = 'Delete';
        li.appendChild(button);
        phonebookUl.appendChild(li);

        button.addEventListener('click', async (e) => {
            const deleteUrl = `${url}/${_id}`;

            const objToDelete = {
                person, phone
            };

            const request = await fetch(deleteUrl, {
                method: 'DELETE',
                body: JSON.stringify(objToDelete)
            });

            li.remove();
        });
    }
}

attachEvents();