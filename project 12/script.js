console.log("hellooo")
let resultText = document.getElementById("result");

function checkAnswer() {
  
  const selected = [document.querySelector('input[name="q1"]:checked').value, document.querySelector('input[name="q2"]:checked').value, document.querySelector('input[name="q3"]:checked').value] ;
const rightAnswers = ["4", "7", "8"]
  if (selected) {
    console.log("Valitsit:", selected);
    let score = 0;

    checkAnswers(selected, rightAnswers);
    showResult(score);

  } else {
    console.log("Et valinnut mitään.");
    resultText.textContent = "You didn't answer any questions."
  }
}

function checkAnswers(selected, rightAnswers) {
  let score = 0;
  selected.forEach((element, index) => {
    if (element === rightAnswers[index]) {
      score++;
    }
  });
  return score;
}

function showResult(score){
    resultText.textContent = `Your score today is: ${score}!`

}