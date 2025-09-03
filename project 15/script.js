let itemList = document.getElementById("item-list");
let sumDisplay = document.getElementById("sum-text");

let cart = [];
let sum = 0;

function addItem(name, price) {
  cart.push({ name, price });

  addToCart(name);
  saveCartItem(name, price);
  addTotal(price);
  console.log(cart);
}

function saveCartItem(name, price) {
  const saved = localStorage.getItem("cartItems");
  const cartItems = saved ? JSON.parse(saved) : [];
  cartItems.push({ name, price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

function loadCart() {
  const saved = localStorage.getItem("cartItems");
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach((cartItem) => {
      cart.push(cartItem); // lisää takaisin cartiin
      addToCart(cartItem.name); // näytä listassa
    });
    addTotal(0); // laskee koko summan uudestaan cartista
  }
}

window.onload = loadCart;
