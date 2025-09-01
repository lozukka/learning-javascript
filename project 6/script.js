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
}

// 2. Tarkista, että syöte on 0–10
function validateInput(value) {
  // palauttaa true tai false
}

// 3. Tyhjennä taulukko ennen uuden rakentamista
function clearTable() {
  // poistaa aiemmat rivit taulukosta
}

// 4. Rakenna koko kertotaulukko
function buildTable(n) {
  buildHeaderRow(n);    // otsikkorivi
  buildContentRows(n);  // sisältörivit
}

// 5. Luo taulukon otsikkorivi
function buildHeaderRow(n) {
  // tekee yhden <tr>-rivin, jossa <th>-soluja 0...n
}

// 6. Luo taulukon sisältörivit (esim. kertolaskut)
function buildContentRows(n) {
  // jokaiselle riville <tr>
  // ensimmäinen solu = kerroin
  // seuraavat solut = kertolaskujen tulokset
}

// 7. Näytä varoitusviesti
function showWarning(message) {
  // laittaa tekstin warning-elementtiin
}
