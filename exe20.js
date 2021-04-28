/*Imprime la matriz en la consola, el resultado final debe ser el siguiente:*/
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for (let i=0 ; i < mat.length ; i++) {
  for (let j=0 ; j < mat[0].length ; j++) {
    if (j===0){
      console.log(`Grupo ${i+1}:`);
      console.log(`   ${mat[i][j]}`);
    } else {
      console.log(`   ${mat[i][j]}`);
    }
  }
}
