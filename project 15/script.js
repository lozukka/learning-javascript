let itemList = document.getElementById("item-list");
let sumDisplay = document.getElementById("sum-text");

let cart = [];
let sum = 0;

function addItem(name, price) {
  cart.push({ name, price });

  addToCart(name, price);
  saveCart();
  addTotal();
  console.log(cart);
}

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function addToCart(name, price) {
  const li = document.createElement("li");
  li.textContent = `${name} - ${price}€`;

  const removeBtn = document.createElement("span");
  removeBtn.textContent = " ❌";
  removeBtn.style.cursor = "pointer";
  removeBtn.style.color = "red";

  removeBtn.onclick = function () {
    // 1. Poista DOM:ista
    li.remove();

    // 2. Poista cart-taulukosta
    cart = cart.filter((item) => !(item.name === name && item.price === price));

    // 3. Tallenna uusi cart localStorageen
    saveCart();

    // 4. Päivitä summa
    addTotal();
  };

  li.appendChild(removeBtn);
  itemList.appendChild(li);
}

function addTotal() {
  sum = cart.reduce((total, item) => total + item.price, 0);
  sumDisplay.textContent = `Total: ${sum}€`;
}

function loadCart() {
  const saved = localStorage.getItem("cartItems");
  if (saved) {
    cart = JSON.parse(saved); // korvaa cart suoraan tallennetulla
    cart.forEach((cartItem) => addToCart(cartItem.name, cartItem.price));
    addTotal(); // laskee summan cartista
  }
}

window.onload = loadCart;
