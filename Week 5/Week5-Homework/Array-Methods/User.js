// In the User.js file, use the placeholder User data at https://jsonplaceholder.typicode.com/users to:

// create and print a list of phone numbers

data.forEach(user => console.log(user.phone));

// create and print a list of website and email pairs (pair them in a string, array, or object)

const about = [];
data.forEach(user => {
    let email = user.email;
    let website = user.website;

about.push([email,website]);
});
console.log(about);