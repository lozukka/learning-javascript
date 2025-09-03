let resultText = document.getElementById("result");

function checkAnswer() {
  
    const selected = [document.querySelector('input[name="q1"]:checked')?.value, document.querySelector('input[name="q2"]:checked')?.value, document.querySelector('input[name="q3"]:checked')?.value] ;
    const rightAnswers = ["4", "7", "8"]
  if (selected.every(answer => answer !== undefined)) {
    let score = checkScore(selected, rightAnswers);
    showResult(score);
  } else {
    resultText.textContent = "You didn't answer any questions."
  }
}

function checkScore(selected, rightAnswers) {
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