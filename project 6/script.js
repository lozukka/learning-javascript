// ====== ELEMENTTIEN HAKU ======
const multiplyBtn = document.getElementById("multiply");
const resultTable = document.getElementById("result");
const warning = document.getElementById("warning");


// ====== PÄÄTAPAHTUMA ======
multiplyBtn.addEventListener("click", (event) => {
  event.preventDefault(); // estetään lomakkeen reload

  const input = getUserInput();

  if (validateInput(input)) {
    clearTable();
    buildTable(input);
  } else {
    showWarning("Invalid number");
  }
});


// ====== FUNKTIOT ======

// 1. Lue käyttäjän syöte
function getUserInput() {
  // palauttaa syötetyn luvun Number-muodossa
  return Number(document.getElementById("userInput").value);
}

// 2. Tarkista, että syöte on 0–10
function validateInput(input) {
  // palauttaa true tai false
  if(input <= 10 && input >=0){
    return true;
  } else {
    return false;
  }
}

// 3. Tyhjennä taulukko ennen uuden rakentamista
function clearTable() {
  // poistaa aiemmat rivit taulukosta
  resultTable.innerHTML = "";
}

// 4. Rakenna koko kertotaulukko
function buildTable(n) {
  buildHeaderRow(n);    // otsikkorivi
  buildContentRows(n);  // sisältörivit
}

// 5. Luo taulukon otsikkorivi
function buildHeaderRow(n) {
  // tekee yhden <tr>-rivin, jossa <th>-soluja 0...n
  const headerRow = document.createElement("tr");
  let headerCount = 0;
  for(let i = 0; i<=n; i++){
    const headerTableData = document.createElement("th");
    headerTableData.textContent = headerCount;
    headerRow.appendChild(headerTableData);
    headerCount++;
  }
  resultTable.appendChild(headerRow);
}

// 6. Luo taulukon sisältörivit (esim. kertolaskut)
function buildContentRows(n) {
  // jokaiselle riville <tr>
  // ensimmäinen solu = kerroin
  // seuraavat solut = kertolaskujen tulokset
  const tableRow = document.createElement("tr");

  for(let i=0; i<=n; i++){
    const tableData = document.createElement("td");
    tableData.textContent = i * n; 
    tableRow.appendChild(tableData);
  }
  resultTable.appendChild(tableRow);
}

// 7. Näytä varoitusviesti
function showWarning(message) {
  // laittaa tekstin warning-elementtiin
  warning.textContent = message;
}
