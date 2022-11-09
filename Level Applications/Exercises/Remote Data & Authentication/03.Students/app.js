function solve() {
    const tableBody = document.getElementsByTagName('tbody')[0];
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const formElement = document.getElementById('form');

    window.onload = async () => {
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data)
            .forEach(d => createTableInfo(d));
    };


    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }

        const newData = {
            firstName, lastName, facultyNumber, grade
        };

        await addNewStudent(newData);
    });

    async function addNewStudent(newData) {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        const data = await request.json();

        createTableInfo(data);

        formElement.reset();
    }

    function createTableInfo({ firstName, lastName, facultyNumber, grade }) {
        let tr = HTMLcreator('tr');
        let fNameTd = HTMLcreator('td', firstName);
        let lNameTd = HTMLcreator('td', lastName);
        let fNumberTd = HTMLcreator('td', facultyNumber);
        let gradeTd = HTMLcreator('td', grade);

        tr.appendChild(fNameTd);
        tr.appendChild(lNameTd);
        tr.appendChild(fNumberTd);
        tr.appendChild(gradeTd);
        tableBody.appendChild(tr);
        
        return tableBody;
    }

    function HTMLcreator(type, content, className) {
        let result = document.createElement(type);
        result.textContent = content;

        if (className) {
            result.classList.add(className);
        }

        return result;
    }
}

solve();