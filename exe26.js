//Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:
let ingPhrase = prompt("Ingrese una frase");
let arrPhrase = ingPhrase.split(" ")
const arrResult = arrPhrase.map((word) => {
  const firstPart = word[0].toUpperCase();
  const secondPart = word.slice(1);
  const wordModified = firstPart + secondPart;
  return wordModified;
});

const strResult = arrResult.join(" ");
console.log(strResult);