//Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:
let ingPhrase = "Hola mundo";
let arrPhrase = ingPhrase.split(" ");

arrPhrase.forEach((word) => {
  console.log(word);
});
