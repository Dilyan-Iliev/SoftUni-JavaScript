function solve() {

    const inputFields = {
        recipientNameField: document.getElementById('recipientName'),
        titleField: document.getElementById('title'),
        messageArea: document.getElementById('message')
    };

    const sections = {
        addedMails: document.getElementById('list'),
        receivedMails: document.querySelector('.sent-list'),
        deleteMails: document.querySelector('.delete-list')
    };

    document.getElementById('add').addEventListener('click', addMail);
    document.getElementById('reset').addEventListener('click', resetInputFields);

    function addMail(e) {
        e.preventDefault();

        let recipientNameFieldValue = inputFields.recipientNameField.value;
        let titleFieldValue = inputFields.titleField.value;
        let messageAreaValue = inputFields.messageArea.value;

        if (!recipientNameFieldValue || !titleFieldValue || !messageAreaValue) {
            return;
        }

        createMail(recipientNameFieldValue, titleFieldValue, messageAreaValue);
    }

    function createMail(recipientNameFieldValue, titleFieldValue, messageAreaValue) {
        let li = document.createElement('li');

        let titleH4 = document.createElement('h4');
        titleH4.textContent = `Title: ${titleFieldValue}`;

        let recipientH4 = document.createElement('h4');
        recipientH4.textContent = `Recipient Name: ${recipientNameFieldValue}`;

        let messageSpan = document.createElement('span');
        messageSpan.textContent = messageAreaValue;

        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('list-action');

        let submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'send');
        submitBtn.textContent = 'Send';
        submitBtn.addEventListener('click', sentMail);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteMail);

        buttonsDiv.appendChild(submitBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(titleH4);
        li.appendChild(recipientH4);
        li.appendChild(messageSpan);
        li.appendChild(buttonsDiv);

        sections.addedMails.appendChild(li);
    }

    function resetInputFields(e) {
        e.preventDefault();

        inputFields.recipientNameField.value = '';
        inputFields.titleField.value = '';
        inputFields.messageArea.value = '';
    }

    function sentMail(e) {
        let liElement = e.target.parentElement.parentElement;

        extractMailInfo(liElement);

        liElement.remove();
    }

    function extractMailInfo(liElement) {
        let h4Elements = liElement.querySelectorAll('h4');

        let li = document.createElement('li');

        let recipientNameSpan = document.createElement('span');
        let recipientName = h4Elements[0].textContent.split(': ');
        recipientNameSpan.textContent = `To: ${recipientName[1]}`;

        let titleSpan = document.createElement('span');
        let title = h4Elements[1].textContent.split(': ');
        titleSpan.textContent = `Title: ${title[1]}`;

        let btnDiv = document.createElement('div');
        btnDiv.classList.add('btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteMail);

        btnDiv.appendChild(deleteBtn);
        li.appendChild(recipientNameSpan);
        li.appendChild(titleSpan);
        li.appendChild(btnDiv);

        sections.receivedMails.appendChild(li);
    }

    function deleteMail(e) {
        let li = e.target.parentElement.parentElement;
        let childElements = li.children;
        
        let liElement = document.createElement('li');
        let recipientNameSpan = document.createElement('span');
        let titleSpan = document.createElement('span');

        if (childElements.length == 3) {
            recipientNameSpan.textContent = childElements[0].textContent;
            titleSpan.textContent = childElements[1].textContent;
        } else {
            let recipientName = childElements[0].textContent.split(': ');
            recipientNameSpan.textContent = `To: ${recipientName[1]}`;

            let title = childElements[1].textContent.split(': ');
            titleSpan.textContent = `Title: ${title[1]}`;
        }

        liElement.appendChild(recipientNameSpan);
        liElement.appendChild(titleSpan);
        sections.deleteMails.appendChild(liElement);

        li.remove();
    }
}
solve()