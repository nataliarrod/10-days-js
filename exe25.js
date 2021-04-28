/*Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0" */

let phrase = prompt("Ingrese una frase");
let phraseLowerCased = phrase.toLowerCase();
let phraseNoSpaces = phraseLowerCased.split(" ").join("");
let phraseNoA = phraseNoSpaces.replace(/([a])/g,"4");
let phraseNoE = phraseNoA.replace(/([e])/g,"3");
let phraseNoI = phraseNoE.replace(/([i])/g,"1");
let phraseNoO = phraseNoI.replace(/([o])/g,"0");
console.log(phraseNoO);
