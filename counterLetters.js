const frase = prompt("Ingrese una frase");

function numDuplicados(phrase) {
  const uniques = [...new Set(phrase.split(""))];
  
  const lettersCount = {};
    uniques.forEach((unique) => {
      const counter = phrase.split("").reduce((count, elem) => {
        return elem === unique ? count + 1 : count;
      }, 0);
      if (counter > 1) {
        lettersCount[unique] = counter;
      } 
  });

  return lettersCount;
}

console.log(numDuplicados(frase));