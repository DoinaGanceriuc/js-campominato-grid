/* Consegna: 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


/* Strumenti
-prompt
-querySelector/getElementById
-ciclo for
-eventListener
-if/else
*/

// inizializzazione delle variabili
const levelOne = "1";
const levelTwo = "2"; 
const levelThree = "3";

// selezionare elementi DOM
const containerElement = document.querySelector(".container");


//ciclo for
for (let i = 1; i <= 100; i++) {
    let cellaElement = document.createElement("div");
    cellaElement.className = "cella";
    cellaElement.innerHTML = i;
    containerElement.insertAdjacentElement("beforeend", cellaElement)
}