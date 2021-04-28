//Escribe un programa que le pida al usuario ingresar un número. Si el número es múltiplo de 3 debe imprimir en la consola "bing".Si el número es múltiplo de 5 debe imprimir en la consola "bong".Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
let num = Number(prompt("Ingrese un número"));

function bingBong ( userNum ) {
  if ((userNum % 3 === 0) && (userNum % 5 ===0)) {
    return console.log("bingbong");
  } else if (userNum % 5 === 0) {
    return console.log("bong");
  } else if (userNum % 3 === 0) {
    return console.log("bing");
  } else {
    return console.log(userNum);
  }
}
bingBong(num);