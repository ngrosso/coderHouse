/* 
Cada refresh o al abrir la pagina aparece un prompt para ingresar una persona 
y su edad, el alert avisa que usuario se agrego, luego aparece otro alert 
mostrando todas las personas y sus edades ingresadas
*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

let persona = new Persona(nombre, parseInt(edad));

alert("Nombre ingresado:" + persona.nombre + "\nEdad ingresada:" + persona.edad);

if (edad != null && nombre != null) {
  if (localStorage.getItem("arrayPersonas") != null) {
    let arrayPersonas = JSON.parse(localStorage.getItem("arrayPersonas"));
    arrayPersonas.push(persona);
    localStorage.setItem("arrayPersonas", JSON.stringify(arrayPersonas));
  } else {
    let arrayPersonas = [];
    arrayPersonas.push(persona);
    localStorage.setItem("arrayPersonas", JSON.stringify(arrayPersonas));
  }
}

console.log(localStorage.getItem("arrayPersonas"));

let personasIngresadas = "";

for (let persona of JSON.parse(localStorage.getItem("arrayPersonas"))) {
  personasIngresadas += persona.nombre + " tiene " +persona.edad + " años\n"
}

alert(personasIngresadas);