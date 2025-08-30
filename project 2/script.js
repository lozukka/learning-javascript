console.log("Hello World");
//variables, submit button
let calculateBtn = document.getElementById("calculate");

//do the math, eventlistener, function
//remember not to divide by 0
calculateBtn.addEventListener("click", (event) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operator = document.getElementById("operation").value;
  let result = 0;
  //show the result
  if (operator === "add") {
    result = 20;
  } else {
    result = 50;
  }
  document.getElementById("result").innerHTML = result;
});
