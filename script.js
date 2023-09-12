// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

 let somma = function (a, b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true
    } else return false    
}

console.log(somma (50, 20));

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

/*let stringa = "ripasso"
let scomporre = stringa.split("")
console.log(scomporre)

let rimuovere = scomporre.splice(1)
console.log(rimuovere)

let unire = rimuovere.join("")
console.log(unire)*/

const rimuoviCarattere = (stringa, posizione) => {
    let scomporre = stringa.split("")
    scomporre.splice(posizione, 1)
    return scomporre.join("")
}

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
//Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

const dueNumeri = (a, b) => {
    if (
       (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
       (a >= 70 && a <= 100 && b >= 70 && b <= 100)
       ) {
        return true
       } else return false       
}

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

const citta = (nome) => {
    if ((nome.startsWith("Los")) || (nome.startsWith("New")))
    {
        return nome
    } else return false
}

console.log(citta("Dallas"))

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

let array1 = [5, 1, 3, 6]
const sommaArray = (array) => {
    return array.reduce((a, b) => (a + b))
}

console.log(sommaArray(array1))

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

const arrayInclude = (array) => {
    return !array.includes(1) && !array.includes(3)
}

console.log(arrayInclude(array1))

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

const angolo = (gradi) => {
    if (gradi < 90) return "acuto"
    if (gradi > 90 && deg < 180) return "ottuso"
    if (gradi === 90) return "retto"
    if (gradi === 180) return "piatto"
  }

  // 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

  let frase1 = "Fabbrica Italiana Automobili Torino"
  const acronimo = (frase) => {
    let scomporre = frase.split(" ")
    let temp = ""
  for (let i = 0; i < scomporre.length; i++) {
    const parola = scomporre[i]
    temp += parola.charAt(0)
  }
    return temp.toUpperCase()
}

console.log(acronimo(frase1))