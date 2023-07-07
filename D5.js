/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("2) ", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = 1; i <= pets.length; i++) {
  console.log(pets[pets.length - i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.splice(0, 1)[0]);
console.log("4) ", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  let licensePlate = "#######";
  cars[i].licensePlate = licensePlate;
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Lamborghini",
  model: "Aventador",
  color: "red",
  trims: ["titanium", "st", "active"],
  licensePlate: "#######",
};

cars.push(newCar);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
    */
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let index = 0;
while (numericArray[index] !== 32) {
  console.log(numericArray[index]);
  index++;
}
console.log(numericArray[index]);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charactersArrayPosition = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersArrayPosition.push(1);
      break;
    case "b":
      charactersArrayPosition.push(2);
      break;
    case "c":
      charactersArrayPosition.push(3);
      break;
    case "d":
      charactersArrayPosition.push(4);
      break;
    case "e":
      charactersArrayPosition.push(5);
      break;
    case "f":
      charactersArrayPosition.push(6);
      break;
    case "g":
      charactersArrayPosition.push(7);
      break;
    case "h":
      charactersArrayPosition.push(8);
      break;
    case "i":
      charactersArrayPosition.push(9);
      break;
    case "j":
      charactersArrayPosition.push(10);
      break;
    case "k":
      charactersArrayPosition.push(11);
      break;
    case "l":
      charactersArrayPosition.push(12);
      break;
    case "m":
      charactersArrayPosition.push(13);
      break;
    case "n":
      charactersArrayPosition.push(14);
      break;
    case "o":
      charactersArrayPosition.push(15);
      break;
    case "p":
      charactersArrayPosition.push(16);
      break;
    case "q":
      charactersArrayPosition.push(17);
      break;
    case "r":
      charactersArrayPosition.push(18);
      break;
    case "s":
      charactersArrayPosition.push(19);
      break;
    case "t":
      charactersArrayPosition.push(20);
      break;
    case "u":
      charactersArrayPosition.push(21);
      break;
    case "v":
      charactersArrayPosition.push(22);
      break;
    case "w":
      charactersArrayPosition.push(23);
      break;
    case "x":
      charactersArrayPosition.push(24);
      break;
    case "y":
      charactersArrayPosition.push(25);
      break;
    case "z":
      charactersArrayPosition.push(26);
      break;
  }
}
