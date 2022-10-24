window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById('post-title');
  const categoryField = document.getElementById('post-category');
  const addContentField = document.getElementById('post-content');

  const reviewListUl = document.getElementById('review-list');
  const publishedListUl = document.getElementById('published-list');

  document.getElementById('clear-btn').addEventListener('click', clearPosts);

  document.getElementById('publish-btn').addEventListener('click', publishPost);

  function publishPost(e) {
    if (!titleField.value || !categoryField.value || !addContentField.value) {
      return;
    }

    createLiElement(titleField.value, categoryField.value, addContentField.value);

    titleField.value = '';
    categoryField.value = '';
    addContentField.value = '';
  }

  function createLiElement(titleField, categoryField, addContentField) {
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = titleField;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${categoryField}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${addContentField}`;

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', returnForEdit);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn', 'approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', approvePost);

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    reviewListUl.appendChild(li);
  }

  function returnForEdit(e) {
    let liElemenet = e.target.parentElement;
    // let titleFieldInfo = liElemenet.querySelector('h4').textContent;
    // let categoryFieldInfo = liElemenet.querySelectorAll('p')[0].textContent;
    // let addContentFieldInfo = liElemenet.querySelectorAll('p')[1].textContent;

    // let categoryIndex = categoryFieldInfo.indexOf(' ');
    // let addContentIndex = addContentFieldInfo.indexOf(' ');

    // titleField.value = titleFieldInfo;
    // categoryField.value = categoryFieldInfo.substring(categoryIndex);
    // addContentField.value = addContentFieldInfo.substring(addContentIndex);

    // liElemenet.remove();
    
    let articleContent = liElemenet.getElementsByTagName('article')[0].children;
    let titleValue = articleContent[0].textContent;
    let categoryValue = articleContent[1].textContent;
    let contentValue = articleContent[2].textContent;

    titleField.value = titleValue;
    categoryField.value = categoryValue.split(': ')[1];
    addContentField.value = contentValue.split(': ')[1];

    liElemenet.remove();
  }

  function approvePost(e) {
    let liElemenet = e.target.parentElement;
    publishedListUl.appendChild(liElemenet);
    Array.from(liElemenet.querySelectorAll('button')).forEach(b => b.remove());
  }

  function clearPosts(e) {
    Array.from(publishedListUl.children).forEach(li => li.remove());
  }
}
