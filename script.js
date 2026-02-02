/* Chilometri da percorrere */
/* età passeggero */
/* prezzo biglietto 0,21€ x km */
/* 20% discount minorenni */
/* 40% discount over 65 */

const km = parseFloat(prompt("quanti chilometri vuoi fare?"))
const anni = parseFloat(prompt("quanti anni hai?"))

let prezzo = km * 0.21;

if (anni <= 18) {
    prezzo = prezzo * 0.8;
    result =
} else if (anni >= 65) {
    prezzo = prezzo * 0.6;
    result =
}

console.log(result);
