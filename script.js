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

// Esercizi extra

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    // create character map
    for (let char of str) {
      if (charMap[char]) {
        // increment the character's value if the character existed in the map
        charMap[char]++;
      } else {
        // Otherwise, the value of the character will be increamented by 1
        charMap[char] = 1;
      }
    }
  
    // find the most commonly used character
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }

console.log(maxChar("372637823"))

// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
//Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
//Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

function areAnagram(str1,str2)
{
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;
   
    // If length of both strings is not
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;
   
    // Sort both strings
    str1.sort();
    str2.sort()
   
    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;
   
    return true;
}
     
// Driver Code
let str1=['t', 'e', 's', 't'];
let str2=['t', 't', 'e', 'w'];
     
// Function Call
if (areAnagram(str1, str2))
    document.write(
    "The two strings are" +
    " anagram of each other<br>");
else
    document.write(
    "The two strings are not" +
    " anagram of each other<br>");

// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
//ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

const findAnagrammi = (array, word) => {
    const possible = []
    for (const anagramma of array) {
      if (anagramma(word, anagramma)) {
        possible.push(anagramma)
      }
    }
    return possible
  }