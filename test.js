//programa le pide al usuario el año de nacimiento, y yo le digo si es mayor o menor de edad o adulto mayor (mayor de 60)
const birthyear = prompt("Ingrese su año de nacimiento");
const numBirthyear = Number(birthyear);
let age = new Date().getFullYear() - numBirthyear;
console.log(age)
age > 60 ? console.log("Usted es adulto mayor") : age >= 18 ?console.log("Usted es mayor de edad") : console.log("Usted es menor de edad");

(age > 18) && ()