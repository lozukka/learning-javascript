console.log("hellooo")
let resultText = document.getElementById("result");

function checkAnswer() {
  
  const selected = document.querySelector('input[name="q1"]:checked');

  if (selected) {
    console.log("Valitsit:", selected.value);
    
    if(selected.value === "4"){
        resultText.textContent = "You chose right!"
    } else {
        resultText.textContent = "You chose wrong!"
    }
  } else {
    console.log("Et valinnut mitään.");
  }
}