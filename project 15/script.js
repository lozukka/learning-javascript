let itemList = document.getElementById("item-list")
let sumDisplay = document.getElementById("sum-text")

let cart = [];
//cart.push({ name: "Apple", price: 2 });

//each button contains a name and a price

//eventlistener
function addApple(){
    cart.push({name: "Apple", price: 1});
    //function to add price
    //function to add list item
    addToCart("Apple");
    console.log(cart);
}
//main function, triggered by add-button
//add item to cart, use push method
//show item in cart
function addToCart(n){
    itemList.textContent = n;
}
//add price to total, use reduce method
//show new total
