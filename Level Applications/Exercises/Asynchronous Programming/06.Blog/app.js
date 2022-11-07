function attachEvents() {
    // function createHTMLElement(type, text, className) {
    //     let result = document.createElement(type);
    //     result.textContent = text;

    //     if (className) {
    //         result.classList.add(...className);
    //     }

    //     return result;
    // }

    // const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    // const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    // const postsSection = document.getElementById('posts');

    // function createOption({ id, title }) {
    //     let option = createHTMLElement('option', title);
    //     option.setAttribute('value', id);
    //     postsSection.appendChild(option);
    //     return postsSection;
    // }

    // document.getElementById('btnLoadPosts').addEventListener('click', async (e) => {
    //     const response = await fetch(postsUrl);
    //     const data = await response.json();
    //     console.log(data);
    //     Object.values(data)
    //         .forEach(d => createOption(d));
    // });

    // document.getElementById('btnViewPost').addEventListener('click', async (e) => {
    //     const response = await fetch(commentsUrl);
    //     const data = await response.json();
    //     console.log(data);
    // });

    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', getComments);

    async function getPosts(e) {
        const selectOp = document.getElementById('posts');
        const url = 'http://localhost:3030/jsonstore/blog/posts';
        selectOp.innerHTML = '';
        
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data)
            .forEach(post => {
                const option = document.createElement('option');
                option.value = post.id;
                option.textContent = post.title;
            });
    }

    async function getComments(e) {
        const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
        const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

        const titleElement = document.getElementById('post-title');
        const postBodyElement = document.getElementById('post-body');
        const postUlElement = document.getElementById('post-comments');
        postUlElement.innerHTML = '';

        const selectedOp = document.getElementById('posts').selectedOptions[0].value;
        //ще ми върне вмомента селектирания елемент

        const postResponse = await fetch(postsUrl);
        const postData = await postResponse.json();

        const commentsResponse = await fetch(commentsUrl);
        const commentsData = await commentsResponse.json();

        const selectedPost = Object.values(postData)
            .find(post => post.id == selectedOp);

        titleElement.textContent = selectedPost.title;
        postBodyElement.textContent = selectedPost.body;

        const comments = Object.values(commentsData)
            .filter(comment => comment.postId == selectedOp);

        comments.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c.text;
            postUlElement.appendChild(li);
        });
    }
}

attachEvents();