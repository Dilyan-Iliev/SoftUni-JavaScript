function solution() {
    function createHTMLElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.classList.add(...className);
        }

        return result;
    }

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const mainSection = document.getElementById('main');

    function template({ _id, title }) {
        const articleUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;

        let accordionDiv = createHTMLElement('div', undefined, ['accordion']);
        let headDiv = createHTMLElement('div', undefined, ['head']);
        let availableInfoSpan = createHTMLElement('span', title);
        let btn = createHTMLElement('button', 'More', ['button']);
        btn.setAttribute('id', _id);

        let hiddenInfoDiv = createHTMLElement('div', undefined, 'extra');
        hiddenInfoDiv.style.display = 'none';
        let pInfo = createHTMLElement('p');

        headDiv.appendChild(availableInfoSpan);
        headDiv.appendChild(btn);

        hiddenInfoDiv.appendChild(pInfo);

        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(hiddenInfoDiv);
        mainSection.appendChild(accordionDiv);

        btn.addEventListener('click', async (e) => {
            if (hiddenInfoDiv.style.display == 'none') {
                let response = await fetch(articleUrl);
                let data = await response.json();

                btn.textContent = 'Less';
                hiddenInfoDiv.style.display = 'block';
                pInfo.textContent = data.content;
            } else {
                btn.textContent = 'More';
                hiddenInfoDiv.style.display = 'none';
            }
        });
    }

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(x => template(x));
        });
}
solution();