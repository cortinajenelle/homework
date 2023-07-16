// #1 Create an array of pizzaToppings with at least four different toppings

let pizzaToppings = ["a", "b", "c", "d", "e"];

// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  console.log("Welcome to Pizza House,");
  console.log("our toppings are:");

  for (let i = 0; i < pizzaToppings.length; i++) {
    console.log("- " + pizzaToppings[i]);
  }
}

// #3 Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as input
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`
  );
  return [size, crust, ...toppings];
}

// #4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");

  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

// #5 Create a servePizza function that has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } crust pizza with ${pizza.toppings}. Enjoy!`
  );
  return pizza;
}

// #6 Call each function and starting with preparePizza use the returned value from the previous function as its input

//greetCustomer

//let order = getPizzaOrder("large", "thick", "a", "b", "c");
//let pizza = preparePizza(getPizzaOrder);
//let servedPizza = servePizza(pizza);
//console.log(servedPizza);

greetCustomer("Cortina");
servePizza(preparePizza(getPizzaOrder("large", "thick", "a", "b", "c")));

// BONUS #9 Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct.
// You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// BONUS #10 In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like
// "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!").
// Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// BONUS #11 In getPizzaOrder, check the toppings the customer ordered against your list of available toppings.
// If they order a topping you don't offer, print a message that informs them you don't offer that topping
// and to order again.
