let itemList = document.getElementById("item-list");
let sumDisplay = document.getElementById("sum-text");

let cart = [];
let sum = 0;

function addItem(name, price) {
  cart.push({ name, price });

  addToCart(name);
  addTotal(price);
  console.log(cart);
}

function addToCart(n) {
  const li = document.createElement("li");
  li.textContent = n;
  itemList.appendChild(li);
}

function addTotal(p) {
  sum = cart.reduce((total, item) => total + item.price, 0);
  sumDisplay.textContent = `Total: ${sum}€`;
}
