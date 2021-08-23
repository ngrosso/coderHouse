let sumResult = 0;
for (let i = 0; i < 5; i++) {
  let inputNumber = prompt("Ingrese un número. Iteracion: " + i+"/4");
  sumResult += parseInt(inputNumber);
  console.log("Resultado: " + sumResult);
}

let concatString = "";
let inputString = prompt("Ingrese una palabra");
while (inputString != "ESC") {
  if (inputString != "") {
    let formatedString = inputString.trim();
    console.log(formatedString);
    concatString += " " + formatedString;
    inputString = prompt("Ingrese una palabra");
  }
}
alert("Su texto concatenado fue: \n" + concatString);

let inputNumber = prompt("Ingrese un número");
for (let i = 0; i < inputNumber; i++) {
  console.log("Hola");
}