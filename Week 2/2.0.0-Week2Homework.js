// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.

let pizzaPlace = "Lupis Pizza";
let numberOfToppings = 7;

// Print the variables and their types.

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

console.log(
  `"When you order at·${pizzaPlace} they give you the option of ${numberOfToppings}·toppings."`
);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings,
// or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
}

// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

let x = 1;
while (x <= 10) {
  numberOfToppings = x;
  console.log(numberOfToppings);
  x++;
}

for (let x = 1; x <= numberOfToppings; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}
