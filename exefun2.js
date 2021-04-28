const altura = prompt ("Ingresa tu altura en mt");
const peso = prompt ("Ingresa tu peso en kg");

function imcCalculator(heigth, weigth) {
  const imc =  Number(weigth) / Math.pow(Number(heigth), 2);
  return imc;
}

const imc1 = imcCalculator(altura, peso);
const imc2 = imcCalculator(1.7, 80);
const imc3 = imcCalculator(1.4, 50);
console.log(imc1);
console.log(imc2);
console.log(imc3);
console.log(imcCalculator(2.8, 30));

export default imcCalculator;