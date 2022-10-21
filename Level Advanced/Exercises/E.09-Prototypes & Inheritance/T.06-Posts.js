function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title} \nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);

            this.likes = likes;
            this.dislikes = dislikes;

            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let commentsStr = this.comments.map(p => ' * ' + p)
                .join('\n');
            let rating = this.likes - this.dislikes;

            if (this.comments.length > 0) {
                return super.toString() + `\nRating: ${rating} \nComments: \n${commentsStr}`;
            } else {
                return super.toString() + `\nRating: ${rating}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);

            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost('Title', 'Content', 1);
bp.view();
console.log(bp.views);
console.log(bp.toString());