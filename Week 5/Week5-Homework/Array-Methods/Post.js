// In the Post.js file, use the placeholder Post data at https://jsonplaceholder.typicode.com/posts?_limit=50 to:

// create a list of user 5's posts

const newArray = data.filter(task => {
    return task.userId == 5;
});

// then, create a list of title and body pairs

const concept = [];
data.forEach(posts => {
    let title = posts.title;
    let body = posts.body;

concept.push([title,body]);
});