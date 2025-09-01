//variabels
let flip = document.getElementById("flip");
let statsDiv = document.getElementById("stats");
let result = document.getElementById("result");

let heads = 0;
let tails = 0;
//flip the coin
flip.addEventListener("click", (event) =>{
let coin = Math.floor(Math.random() * 2);
let outcome;
    if(coin == 1){
        outcome = "It's heads!";
        heads++;
    } else {
    outcome = "It's tails!";
tails++;}
//show the result
    result.textContent = `Outcome: ${outcome}`;
    updateStats();
});
//statsit
function updateStats(){
    const total = heads + tails;
statsDiv.textContent = `Heads: ${heads}, Tails: ${tails} (total of ${total} coin flips)`;
}