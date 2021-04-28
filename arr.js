/*Imprime la matriz en la consola, el resultado final debe ser el siguiente:*/
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

const arr = [];
for (let i=0 ; i < mat.length ; i++) {
  arr[i]=mat[i][2];
}

console.log(arr);