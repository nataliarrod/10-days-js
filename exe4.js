//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase “Tienes X años”. Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

const num1 = prompt ("Ingrese su año de nacimiento");
const edad = new Date().getFullYear() - Number(num1) 
console.log("Tienes " + edad + " años");