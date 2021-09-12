//TODO: Agregar un array de elementos de tipo Producto predefinidos
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
    //Se saca la asignacion ya que solo se usa para el alert
    //listadoProductos += agregarListaProductos(producto);
    precioProductos += producto.getPrecioNeto();
    precioProductosConIva += aplicarIva(producto.getPrecioNeto());
  });

  console.log('Valor total de productos sin Iva ' + precioProductos);
  console.log('Valor total de productos con Iva ' + precioProductosConIva);

  /** TODO: Para la proxima entrega con el uso de eventos voy a hacer una 
   * refactorizacion importante usando forms y eventos por ahora busco solo 
   * usar el DOM para generar un ticket*/
  crearTicket(arrayProductos);

  //alert(listadoProductos + '\n\n Subtotal: ' + precioProductos.toFixed(2) + '\n IVA    +21% \n Total: ' + precioProductosConIva.toFixed(2));
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
  return precio * 0.21;
}

function crearTicket(arrayProductos) {
  let ticket = document.getElementById('ticket');

  if (arrayProductos.length > 0) {
    let ul = document.createElement('ul');
    arrayProductos.forEach(producto => {
      let li = document.createElement('li');
      li.innerText = `${producto.nombre} -------- Precio unitario: ${producto.precio} -------- Cantidad: ${producto.cantidad} -------- $${producto.getPrecioNeto()}`
      ul.appendChild(li);
    });
    ticket.appendChild(ul);
  } else{
    ticket.innerText = 'No hay productos';
  }

  let subtotalElement = document.createElement('p');
  const subtotal = arrayProductos.reduce((total, producto) => total + producto.getPrecioNeto(), 0);
  subtotalElement.innerText = `Subtotal: $${subtotal}`;
  ticket.appendChild(subtotalElement);

  let ivaElement = document.createElement('p');
  ivaElement.innerText = `IVA +21%: $${aplicarIva(subtotal)}`;
  ticket.appendChild(ivaElement);

  let totalElement = document.createElement('p');
  totalElement.innerText = `Total: $${subtotal + aplicarIva(subtotal)}`;
  ticket.appendChild(totalElement);
  

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