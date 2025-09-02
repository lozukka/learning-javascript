let userInput = document.getElementById("userinput");
let counter = document.getElementById("count");
let clear = document.getElementById("clear");

userInput.addEventListener("input", (event) =>{

    const length = userInput.value.length;
    checkLength(length);
    counter.textContent = length;
});

function checkLength(length){
    if(length>20){
        counter.style.color= "red";
    }else{
        counter.style.color= "black";
    }
}

clear.addEventListener("click", () => {
    userInput.value = "";     
    counter.textContent = "0"; 
    counter.style.color = "black"; 
});



