/*Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.*/
let num = Number(prompt("Ingrese un Número"));
let array = [];
for(let i = 1; i <= num ;i++) {
  array[i-1] = i;
}
array.splice(1,2);
console.log(array);