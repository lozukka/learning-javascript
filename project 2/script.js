//variables, submit button
let calculateBtn = document.getElementById("calculate");

//eventlistener, function
calculateBtn.addEventListener("click", (event) => {
  //switch input values to numbers
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operation").value;
  let result = 0;
  //do the math
  //remember not to divide by 0
  if (operator === "divide" && num2 == 0) {
    document.getElementById("error").innerHTML = "You can't divide by 0!";
  } else if (operator === "divide") {
    result = num1 / num2;
  } else if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  //show the result
  document.getElementById("result").innerHTML = result;
});
