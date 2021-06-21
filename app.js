const fetch = require("node-fetch");
const prompt = require("prompt-sync")({ sigint: true });
// const APIkey = "501889bf-4d9e-4ed7-beaa-b4b24cbf693c";

let text = prompt("Enter piece of text: ");
let result = text.split(" ");

for (let i = 0; i < result.length; i++) {
  let word = result[i];
  if (word.length > 7) {
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/parameter?key=501889bf-4d9e-4ed7-beaa-b4b24cbf693c`
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}

// w
//
//
