function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainSection = document.getElementById('main');

    fetch(url)
        .then(res => res.json())
        .then(data => {

            document.querySelector('.profile').remove();

            Object.values(data)
                .forEach(d => {
                    let profileDiv = createHTMLElement('div', undefined, ['profile']);
                    
                    profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
                    <label>Lock</label>
                    <input type="radio" name="user${d._id}Locked" value="lock" checked="">
                    <label>Unlock</label>
                    <input type="radio" name="user${d._id}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${d._id}Username" value=${d.username} disabled="" readonly="">
                    <div id="user${d._id}HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${d._id}Email" value=${d.email} disabled="" readonly="">
                    <label>Age:</label>
                    <input type="email" name="user${d._id}Age" value=${d.age} disabled="" readonly="">
                    </div>`;

                    let showMoreBtn = createHTMLElement('button', 'Show more');
                    profileDiv.appendChild(showMoreBtn);
                    mainSection.appendChild(profileDiv);

                    showMoreBtn.addEventListener('click', lockUserProfile);
                })
        });

    function lockUserProfile(e) {
        if (e.target.nodeName == 'BUTTON') {
            //ако на страницата елемента е от тип бутон тогава влизам в if-a

            let parent = e.target.parentNode; //взимам родителя на този елемент
            let divSectionElement = parent.querySelector('div');
            let radioButtonElement = parent.querySelector('input[type="radio"]:checked');

            if (radioButtonElement.value == 'unlock') {

                if (e.target.textContent == 'Show more') {
                    e.target.textContent = 'Hide it';
                    divSectionElement.style.display = 'block';
                } else {
                    e.target.textContent = 'Show more';
                    divSectionElement.style.display = 'none';
                }
            }
        }
    }

    function createHTMLElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.classList.add(...className);
        }

        return result;
    }
}