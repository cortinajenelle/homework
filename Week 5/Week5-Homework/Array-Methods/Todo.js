// In the Todo.js file, use the placeholder To-Do data at https://jsonplaceholder.typicode.com/todos?_limit=50 to:

// create a list of user 3's to-dos

const newArray = data.filter(task => {
    return task.userId == 3;
});

// then find the number of user 3's incomplete tasks

const incompleteTasks = data.filter(task => task.title == true);
console.log(incompleteTasks);