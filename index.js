// Write your solution in this file!

// Global scope - array with hamburger and cheeseburger
var burgerMenu = ["hamburger", "cheeseburger"];

// Global scope - featured drink string
var featuredDrink = "chocolate milkshake";

// Function scope - getFeaturedMilkshake
function getFeaturedMilkshake() {
  var featuredMilkshake = featuredDrink;
  featuredMilkshake = "strawberry milkshake";
  return featuredMilkshake;
}

// Block scope - addBurger
function addBurger() {
  if (true) {
    let newBurger = "veggie burger";
    burgerMenu.push(newBurger);
  }
  return burgerMenu;
}
