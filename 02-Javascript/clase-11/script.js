let array = [];

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Lista de JSON de nombres y edades
const nombres = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 40 },
  { nombre: 'Sara', edad: 50 },
  { nombre: 'Mario', edad: 60 },
]

array.push(new Persona("Juan", 28));
array.push(new Persona("Ana", 25));
array.push(new Persona("Pedro", 30));
array.push(new Persona("Sara", 20));

console.log(array);

nombres.forEach(persona => {
  $("#lista").append(`
    <li>
        ${persona.nombre} tiene ${persona.edad} años
    </li>
    `);
});