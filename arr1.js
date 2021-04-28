//Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let count = 0;

for (let i=0 ; i < nums.length ; i++) {
  if (nums[i] === 1) {
    count = count + 1;
  }
}
console.log(count);

console.log("versión avanzada");

function filterNums(elem) {
  return elem === 1;
}

const numsFiltered = nums.filter(filterNums).length;

console.log(numsFiltered);

console.log("versión arrow number");

const numsFilteredV2 = nums.filter(num => num === 1).length;

console.log(numsFilteredV2);