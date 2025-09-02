// 1. Hae tarvittavat HTML-elementit talteen
//    - tekstialue, johon käyttäjä kirjoittaa
//    - elementti, johon merkkimäärä näytetään
let userInput = document.getElementById("userinput");
let count = document.getElementById("count");

// 2. Lisää tapahtumakuuntelija tekstialueelle
//    - käytä "input"-tapahtumaa, jotta reagointi on reaaliaikaista
userInput.addEventListener("input", (event) =>{
// 3. Tapahtumankäsittelijän sisällä:
//    - hae käyttäjän kirjoittaman tekstin pituus
//    - päivitä laskurin arvo näytölle
const length = userInput.value.length;
count.textContent = length;
});



// 4. (Valinnainen) Lisää lisälogiikkaa
//    - vaihda laskurin väri punaiseksi, jos merkkimäärä ylittää rajan
//    - näytä myös sanamäärä
//    - aseta maksimi­merkki­määrä ja estä kirjoittaminen sen jälkeen
