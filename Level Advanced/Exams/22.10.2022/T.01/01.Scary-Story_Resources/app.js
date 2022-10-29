window.addEventListener("load", solve);

function solve() {

  const fName = document.getElementById('first-name');
  const lName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const storyText = document.getElementById('story');

  const previewUl = document.getElementById('preview-list');
  const main = document.getElementById('main');

  const publishBtn = document.getElementById('form-btn');

  document.getElementById('form-btn').addEventListener('click', addStory);

  function addStory(e) {

    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyTextValue = storyText.value;

    if (!fNameValue || !lNameValue || !ageValue || !storyTitleValue || !genreValue || !storyTextValue) {
      return;
    }
    
    resetInputFields();
    publishBtn.disabled = true;
    let li = createHTMLElement('li', undefined, 'story-info');
    let article = createHTMLElement('article');
    let nameH4 = createHTMLElement('h4', `Name: ${fNameValue} ${lNameValue}`);
    let ageP = createHTMLElement('p', `Age: ${ageValue}`);
    let titleP = createHTMLElement('p', `Title: ${storyTitleValue}`);
    let genreP = createHTMLElement('p', `Genre: ${genreValue}`);
    let storyTextP = createHTMLElement('p', storyTextValue);

    let saveBtn = createHTMLElement('button', 'Save Story', 'save-btn');
    saveBtn.addEventListener('click', saveStory);

    let editBtn = createHTMLElement('button', 'Edit Story', 'edit-btn');
    editBtn.addEventListener('click', editStory);

    let deleteBtn = createHTMLElement('button', 'Delete Story', 'delete-btn');
    deleteBtn.addEventListener('click', deleteStory);

    article.appendChild(nameH4);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyTextP);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewUl.appendChild(li);

  }

  function editStory(e) {
    publishBtn.disabled = false;
    let parentEl = e.target.parentElement;
    let articleInfo = parentEl.children[0].children;
    
    let h4 = articleInfo[0].textContent.split(': ');
    let firstName = h4[1].split(' ')[0];
    let lastName = h4[1].split(' ')[1];

    let ageP = articleInfo[1].textContent.split(': ');
    let ageInfo = ageP[1];

    let storyTitleP = articleInfo[2].textContent.split(': ');
    let storyTitleInfo = storyTitleP[1];

    let genreP = articleInfo[3].textContent.split(': ');
    let genreInfo = genreP[1];

    let storyTextInfo = articleInfo[4].textContent;
    
    fName.value = firstName;
    lName.value = lastName;
    age.value = ageInfo;
    storyTitle.value = storyTitleInfo;
    genre.value = genreInfo;
    storyText.value = storyTextInfo;

    parentEl.remove();
  }

  function saveStory(e) {
    let newMain = document.createElement('div');
    newMain.setAttribute('id', 'main');
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    newMain.appendChild(h1);
    document.querySelector('.body').appendChild(newMain);

    main.remove();
  }

  function deleteStory(e) {
    publishBtn.disabled = false;
    let parent = e.target.parentElement;
    parent.remove();
  }

  function createHTMLElement(type, text, className) {
    let result = document.createElement(type);
    result.textContent = text;

    if (className) {
      result.classList.add(className);
    }

    return result;
  }

  function resetInputFields() {
    fName.value = '';
    lName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    storyText.value = '';
  }
}
