// 1. Hae tarvittavat HTML-elementit talteen
//    - tekstialue, johon käyttäjä kirjoittaa
//    - elementti, johon merkkimäärä näytetään
let userInput = document.getElementById("userinput");
let counter = document.getElementById("count");
let clear = document.getElementById("clear");

// 2. Lisää tapahtumakuuntelija tekstialueelle
//    - käytä "input"-tapahtumaa, jotta reagointi on reaaliaikaista
userInput.addEventListener("input", (event) =>{
// 3. Tapahtumankäsittelijän sisällä:
//    - hae käyttäjän kirjoittaman tekstin pituus
//    - päivitä laskurin arvo näytölle
    const length = userInput.value.length;
    checkLength(length);
    counter.textContent = length;
});

// 4. (Valinnainen) Lisää lisälogiikkaa
//    - vaihda laskurin väri punaiseksi, jos merkkimäärä ylittää rajan
function checkLength(length){
    if(length>20){
        counter.style.color= "red";
    }else{
        counter.style.color= "black";
    }
}

clear.addEventListener("click", () => {
    userInput.value = "";        // tyhjentää tekstialueen
    counter.textContent = "0";     // nollaa laskurin
    counter.style.color = "black"; // palauttaa värin
});



