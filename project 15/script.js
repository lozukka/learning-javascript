let itemList = document.getElementById("item-list");
let sumDisplay = document.getElementById("sum-text");

let cart = [];
let sum = 0;
//cart.push({ name: "Apple", price: 2 });

//each button contains a name and a price

//eventlistener
function addApple() {
  cart.push({ name: "Apple", price: 1 });
  //function to add price
  //function to add list item
  addToCart("Apple");
  addTotal(1);
  console.log(cart);
}
function addJuice() {
  cart.push({ name: "Juice", price: 2 });
  //function to add price
  //function to add list item
  addToCart("Juice");
  addTotal(2);
  console.log(cart);
}
function addBread() {
  cart.push({ name: "Bread", price: 4 });
  //function to add price
  //function to add list item
  addToCart("Bread");
  addTotal(4);
  console.log(cart);
}
function addChicken() {
  cart.push({ name: "Chicken", price: 6 });
  //function to add price
  //function to add list item
  addToCart("Chicken");
  addTotal(6);
  console.log(cart);
}
//main function, triggered by add-button
//add item to cart, use push method
//show item in cart
function addToCart(n) {
  itemList.textContent = n;
}
//add price to total, use reduce method
function addTotal(p) {
  sum = sum + p;
  sumDisplay.textContent = sum;
}
//show new total
