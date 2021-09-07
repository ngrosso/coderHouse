// Main del proyecto
function main() {

  // Declaracion de variables
  let listadoProductos = 'Lista de productos:'
  let precioProductos = 0;
  let precioProductosConIva = 0;

  // Ingreso de productos al array
  let arrayProductos = ingresarProductos();

  // Uso del sort para ordenar los productos por precio neto
  arrayProductos.sort((primerElemento, segundoElemento) => (primerElemento.getPrecioNeto() - segundoElemento.getPrecioNeto()));

  console.table(arrayProductos);

  // Manejo del array de productos
  arrayProductos.forEach(producto => {
    listadoProductos += agregarListaProductos(producto);
    precioProductos += producto.getPrecioNeto();
    precioProductosConIva += aplicarIva(producto.getPrecioNeto());
  });

  console.log('Valor total de productos sin Iva ' + precioProductos);
  console.log('Valor total de productos con Iva ' + precioProductosConIva);

  alert(listadoProductos + '\n\n Subtotal: ' + precioProductos.toFixed(2) + '\n IVA    +21% \n Total: ' + precioProductosConIva.toFixed(2));
}

// Funciones Auxiliares
function ingresarProductos() {
  let arrayProductos = [];
  while (confirm('Desea ingresar producto?')) {

    let producto = crearProducto();
    console.log(producto);
    //precioProductos += producto.precio;
    //precioProductosConIva += producto.aplicarIva();
    arrayProductos.push(producto);
    //agregarListaProductos(producto);
  }
  return arrayProductos;
}

function crearProducto() {
  let nombreProducto = prompt('Nombre del producto');
  let precioProducto = prompt('Precio del producto');
  let cantidadProducto = prompt('Cantidad del producto');

  alert('Se ingreso el producto: \nNombre: ' + nombreProducto + '\nPrecio: $' + precioProducto + '\nCantidad: ' + cantidadProducto);

  return new Producto(nombreProducto, precioProducto, cantidadProducto);
}

function agregarListaProductos(producto) {
  return '\n· ' + producto.nombre + '  --  Cant: ' + producto.cantidad + "  --  $" + producto.getPrecioNeto();
}

function aplicarIva(precio) {
  return precio * 1.21;
}

//Declaracion de la clase Producto
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precio = Number.parseFloat(precio);
    this.cantidad = Number.parseInt(cantidad);
  }
  getPrecioNeto() {
    return parseFloat(this.precio * this.cantidad);
  }
}

// Ejecucion del main
main();