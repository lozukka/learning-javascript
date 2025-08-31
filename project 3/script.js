let click = document.getElementById("clickMe");

//eventlistener and function to add click count
click.addEventListener("click", (event) => {
  let count = Number(document.getElementById("displayCount").innerHTML);
  //add 1 to count
  count++;
  //show the count
  document.getElementById("displayCount").innerHTML = count;
});
