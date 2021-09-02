import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fetch = require("node-fetch");
const prompt = require("prompt-sync")({ sigint: true });

let text = prompt("Enter piece of text: ");
let result = text.split(" ");

function changeWord() {
  for (let i = 0; i < result.length; i++) {
    let word = result[i];
    if (word.length > 7) {
      fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "442d139cacmsh193c5fcc792d3b5p1007a0jsn6715d85ce4d3",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          word = data.synonyms[0];
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
}

for (let i = 0; i < text.length; i++) {}
