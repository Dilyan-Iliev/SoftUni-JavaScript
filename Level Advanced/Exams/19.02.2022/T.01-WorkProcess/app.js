function solve() {
    const inputFields = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        dateOfBirth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')
    };

    const sections = {
        tableContent: document.getElementById('tbody'),
        budgetContent: document.getElementById('sum')
    };

    let budget = 0;

    document.getElementById('add-worker').addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        let firstNameValue = inputFields.firstName.value;
        let lastNameValue = inputFields.lastName.value;
        let emailValue = inputFields.email.value;
        let birthValue = inputFields.dateOfBirth.value;
        let positionValue = inputFields.position.value;
        let salaryValue = inputFields.salary.value;

        if (!firstNameValue || !lastNameValue || !emailValue
            || !birthValue || !positionValue || !salaryValue) {
            return;
        }

        createWorker(firstNameValue, lastNameValue, emailValue, birthValue, positionValue, salaryValue);
        clearInputFields();
    }

    function clearInputFields() {
        inputFields.firstName.value = '';
        inputFields.lastName.value = '';
        inputFields.email.value = '';
        inputFields.dateOfBirth.value = '';
        inputFields.position.value = '';
        inputFields.salary.value = '';
    }

    function createWorker(firstNameValue, lastNameValue, emailValue,
        birthValue, positionValue, salaryValue) {

        let tr = document.createElement('tr');

        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstNameValue;

        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastNameValue;

        let emailTd = document.createElement('td');
        emailTd.textContent = emailValue;

        let birthTd = document.createElement('td');
        birthTd.textContent = birthValue;

        let positionTd = document.createElement('td');
        positionTd.textContent = positionValue;

        let salaryTd = document.createElement('td');
        salaryTd.textContent = salaryValue;

        let buttonsTd = document.createElement('td');
        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fireWorker);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editWorkerInfo);

        appendHTMLElements(buttonsTd, firedBtn, editBtn, tr,
            firstNameTd, lastNameTd, emailTd, birthTd, positionTd, salaryTd);

        budget += Number(salaryValue);
        sections.budgetContent.textContent = budget.toFixed(2);
    }

    function appendHTMLElements(buttonsTd, firedBtn, editBtn, tr,
        firstNameTd, lastNameTd, emailTd, birthTd, positionTd, salaryTd) {
        buttonsTd.appendChild(firedBtn);
        buttonsTd.appendChild(editBtn);

        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(birthTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        tr.appendChild(buttonsTd);

        sections.tableContent.appendChild(tr);
    }

    function editWorkerInfo(e) {
        let parent = e.target.parentElement.parentElement;
        let tdElements = parent.children;

        let fName = tdElements[0].textContent;
        let lName = tdElements[1].textContent;
        let email = tdElements[2].textContent;
        let birth = tdElements[3].textContent;
        let position = tdElements[4].textContent;
        let salary = tdElements[5].textContent;

        inputFields.firstName.value = fName;
        inputFields.lastName.value = lName;
        inputFields.email.value = email;
        inputFields.dateOfBirth.value = birth;
        inputFields.position.value = position;
        inputFields.salary.value = salary;

        budget -= Number(salary);
        sections.budgetContent.textContent = budget.toFixed(2);
        parent.remove();
    }

    function fireWorker(e) {
        let parent = e.target.parentElement.parentElement;
        let salary = parent.children[5].textContent;

        budget -= Number(salary);
        sections.budgetContent.textContent = budget.toFixed(2);
        parent.remove();
    }
}
solve()