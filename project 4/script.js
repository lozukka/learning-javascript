//variables
let greetBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");
let nameInput = document.getElementById("name");
let messageOut = document.getElementById("message");

//cancel-button functionality
clearBtn.addEventListener("click", (event) => {
  document.getElementById("name").value = "";
});

//different greeting messages
function getGreetingByTime(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
//Trim, normalize spaces, capitalize first letters and hyphenated parts
function formatName(raw) {
  const trimmed = raw.trim();
  const singleSpaced = trimmed.replace(/\s+/g, " ");
  const parts = singleSpaced.split(" ").map((part) => {
    return part
      .split("-")
      .map(
        (piece) =>
          piece.charAt(0).toLocaleUpperCase("fi-FI") +
          piece.slice(1).toLocaleLowerCase("fi-FI")
      )
      .join("-");
  });
  return parts.join(" ");
}

//print message
function showMessage(text) {
  messageOut.textContent = text;
}

//greet-button functionality
greetBtn.addEventListener("click", (event) => {
  const greeting = `${getGreetingByTime()}, ${nameInput.value}!`;
  showMessage(greeting);
});
