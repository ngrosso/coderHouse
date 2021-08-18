let numero = parseInt(prompt("Ingrese un numero"));
if (numero > 1000) {
  alert("El numero ingresado es mayor a 1000");
}

let saludo = prompt("Hola!");
if (saludo == "Hola") {
  console.log("Como te va?");
}

let numero2 = parseInt(prompt("Ingrese nuevamente un numero"));
let entre10y50 = numero2 >= 10 && numero2 <= 50;
if(entre10y50) {
  alert("El numero ingresado esta entre 10 y 50");
}