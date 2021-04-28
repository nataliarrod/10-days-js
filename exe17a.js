/*Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.*/
let num = Number(prompt("Adivina el número que estoy pensando del 1-10"));
let num2 = Math.floor(Math.random()*10+1);
while (num !== num2) {
 num = Number(prompt("Intentalo de nuevo"));
}
console.log("Felicitaciones, el número es: " + num2);