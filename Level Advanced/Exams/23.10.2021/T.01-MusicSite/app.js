window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        genre: document.getElementById('genre'),
        songName: document.getElementById('name'),
        songAuthor: document.getElementById('author'),
        creationDate: document.getElementById('date'),
    };

    const sections = {
        songsContainer: document.querySelector('.all-hits-container'),
        totalLikes: document.querySelector('.likes'),
        savedSongs: document.querySelector('.saved-container'),
    };

    document.getElementById('add-btn').addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();

        let genreFieldValue = inputFields.genre.value;
        let songNameFieldValue = inputFields.songName.value;
        let songAuthorValue = inputFields.songAuthor.value;
        let creationDateValue = inputFields.creationDate.value;

        if (!genreFieldValue || !songNameFieldValue || !songAuthorValue || !creationDateValue) {
            return;
        }

        createSong(genreFieldValue, songNameFieldValue, songAuthorValue, creationDateValue);
        resetInputFields();
    }

    function createSong(genreFieldValue, songNameFieldValue, songAuthorValue, creationDateValue) {
        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = "./static/img/img.png";

        let genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genreFieldValue}`;

        let songNameH2 = document.createElement('h2');
        songNameH2.textContent = `Name: ${songNameFieldValue}`;

        let songAuthorH2 = document.createElement('h2');
        songAuthorH2.textContent = `Author: ${songAuthorValue}`;

        let creationDateH3 = document.createElement('h3');
        creationDateH3.textContent = `Date: ${creationDateValue}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        appendHTMLElements(div, img, genreH2, songNameH2,
            songAuthorH2, creationDateH3, saveBtn, likeBtn, deleteBtn);
    }

    function appendHTMLElements(div, img, genreH2, songNameH2, songAuthorH2, creationDateH3, saveBtn, likeBtn, deleteBtn) {
        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(songNameH2);
        div.appendChild(songAuthorH2);
        div.appendChild(creationDateH3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);
        sections.songsContainer.appendChild(div);
    }

    function resetInputFields() {
        inputFields.genre.value = '';
        inputFields.songName.value = '';
        inputFields.songAuthor.value = '';
        inputFields.creationDate.value = '';
    }

    function likeSong(e) {
        let divElChildren = sections.totalLikes.children;

        let totalLikes = divElChildren[0].textContent.replace('Total Likes: ', '');
        e.target.setAttribute('disabled', true);
        totalLikes++;

        divElChildren[0].textContent = `Total Likes: ${totalLikes}`;
    }

    function saveSong(e) {
        let childElements = e.target.parentElement.children;

        let div = document.createElement('div');
        div.classList.add('hits-info');

        debugger;
        let img = document.createElement('img');
        img.src = "./static/img/img.png";

        let genreH2 = document.createElement('h2');
        genreH2.textContent = childElements[1].textContent;

        let songNameH2 = document.createElement('h2');
        songNameH2.textContent = childElements[2].textContent;

        let songAuthorH2 = document.createElement('h2');
        songAuthorH2.textContent = childElements[3].textContent;

        let creationDateH3 = document.createElement('h3');
        creationDateH3.textContent = childElements[4].textContent;

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(songNameH2);
        div.appendChild(songAuthorH2);
        div.appendChild(creationDateH3);
        div.appendChild(deleteBtn);

        sections.savedSongs.appendChild(div);

        e.target.parentElement.remove();
    }

    function deleteSong(e) {
        e.target.parentElement.remove();
    }
}