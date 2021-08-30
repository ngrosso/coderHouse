// Objeto literal
const persona1 = {
    nombre: 'Juan',
    edad: 20
}

//reasignar propiedades
persona1["nombre"] = 'Luis'
persona1.edad = 30

// Constructor pre ES20
function Persona(nombre,edad,calle){
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}

// Inicializacion de objetos por constructor
const persona2 = new Persona('Juan',20,'Calle 1')

// Constructor con funciones y literales
function Persona(literal){
  this.nombre = literal.nombre;
  this.edad = literal.edad;
  this.calle = literal.calle;
}

// Inicializacion de objetos por constructor y literal
const persona3 = new Persona({nombre:'Juan',edad:20,calle:'Calle 1'})


