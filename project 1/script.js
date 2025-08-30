//declaire variables
const convertF = document.getElementById("convertFahrenheit");
const convertC = document.getElementById("convertCelsius");

//get the celsius value
convertF.addEventListener("click", (event) => {
  //declaire variables
  let celsiusToF = document.getElementById("celsiusInput").value;
  let fahrenheit = 0;
  //change temperature value
  fahrenheit = celsiusToF * 1.8 + 32;

  //show the farenheit value
  document.getElementById("resultF").innerHTML = fahrenheit;
});

//get the fahrenheit value
convertC.addEventListener("click", (event) => {
  //declaire variables
  let fahrenheitToC = document.getElementById("fahrenheitInput").value;
  let celsius = 0;
  //change temperature value
  celsius = (fahrenheitToC - 32) / 1.8;

  //show the farenheit value
  document.getElementById("resultC").innerHTML = celsius;
});
