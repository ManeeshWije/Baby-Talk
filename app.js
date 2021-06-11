const fetch = require("node-fetch");
const prompt = require("prompt-sync")({ sigint: true });
const APIkey = "501889bf-4d9e-4ed7-beaa-b4b24cbf693c";

fetch(
  "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/process?key=APIkey"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newWord = data[0].meta.syns[0][0];
  });
