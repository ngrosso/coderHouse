class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  hablar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
}

const persona1 = new Persona("Homero", 30, 1.80);
persona1.hablar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = precio
    this.vendido = false;
  }

  sumaIva() {
    this.precio = this.precio * 1.21;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("Camisa", 100);
const producto2 = new Producto("Pantalon", 200);
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();