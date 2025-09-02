//variables
let guessBtn = document.getElementById("guess");
let result = document.getElementById("result");
let clearBtn = document.getElementById("clear");
let warning = document.getElementById("warning");
let secretNumber = getSecretNumber();
let attempt = 0;
//main function with event listener

guessBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const input = getUserInput();
    attempt++;
    if(validateInput(input)){
        compareNumbers(input, secretNumber);
    } else{
        showWarning("Invalid number");
    }

});

//helper functions
//compare numbers
function compareNumbers(input, secretNumber){
    if(input===secretNumber){
        result.textContent = `You guessed it with ${attempt} tries! ${secretNumber} was right!`;
    } else if (input<secretNumber){
        result.textContent = `${input} is too small. You have guessed ${attempt} times.`;
    }else {
        result.textContent = `${input} is too big. You have guessed ${attempt} times.`;
    }
}

//computer picks a number
function getSecretNumber(){
    return Math.floor(Math.random()*101)
}
//get user input
function getUserInput(){
    return Number(document.getElementById("userinput").value)
}
//validate user input
function validateInput(input){
    return !isNaN(input) && input >= 0 && input <= 100;
}
//clear game
clearBtn.addEventListener("click", (event)=>{
    result.textContent ="";
    warning.textContent ="";
    secretNumber = getSecretNumber();
})
//show warning message
function showWarning(message){
    warning.textContent = message;
}

