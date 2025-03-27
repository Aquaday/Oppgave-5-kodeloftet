//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen

// async function getData() {
//   return ['Katt', ' Hund', ' Marsvin', ' Hest'];
// }

// async function fetchData() {
//   const data = await getData();
//   console.log(data);
// }

// setTimeout(() => {
//   fetchData();
// }, 3000);

// setTimeout(fetchData, 5000);

// OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

// async function dataRecived() {
//   const siteData = await getData();
//   console.log(siteData);

//   let siteElement = document.createElement('h1');
//   siteElement.textContent = siteData;
//   document.body.appendChild(siteElement);
// }

// dataRecived();

//
//

// HER KODER VI SANNTID SAMMEN FOR CAT FACTS:

// API-link: https://catfact.ninja/facts

// Fetcher data fra catFact

const catListElement = document.querySelector('#displayCatFact');

async function fetchApi() {
  let data = await fetch('https://catfact.ninja/facts');
  const response = await data.json();

  const responseData = response.data;
  let time = 0;

  buttonElement.addEventListener('click', () => {
    responseData.forEach((item) => {
      const factItem = item.fact;
      const textElement = document.createElement('li');
      setTimeout(() => {
        textElement.textContent = factItem;
        catListElement.appendChild(textElement);
      }, time);
      time += 2000;
    });
  });
}

const buttonElement = document.querySelector('#showCats');

fetchApi();

// Parser til JSON
// Hele arrayet
// Vi finner data array, array med objects
// Vi velger et spesifikt array
// Vi finner fact

//Lagre array av objects i en variabel

//forEach for å få ut hver fact på siden

//VI LAGER EN CHUCK NORRIS KNAPP

//API-link: https://api.chucknorris.io/jokes/random

let chuckButton = document.querySelector("#ChuckBtn")
let jokeElement = document.querySelector("#ChuckText")

chuckButton.addEventListener("click", 
  getChuckApi
)

async function getChuckApi() {
  let chuckJoke = await fetch("https://api.chucknorris.io/jokes/random")
  let response = await chuckJoke.json()

  jokeElement.textContent = response.value
}


