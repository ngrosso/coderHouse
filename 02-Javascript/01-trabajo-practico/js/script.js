class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  aplicarIva() {
    return this.precio * 1.21;
  }

}

let listadoProductos = 'Listado de productos:';

function main() {

  let precioProductos = 0;
  let precioProductosConIva = 0;

  while (confirm("Desea ingresar producto?")) {

    let producto = ingresarProducto();
    console.log(producto);
    precioProductos += producto.precio;
    precioProductosConIva += producto.aplicarIva();
    agregarListaProductos(producto);
  }

  console.log("Valor total de productos sin Iva " + precioProductos);
  console.log("Valor total de productos con Iva " + precioProductosConIva);

  alert(listadoProductos + "\n\n Subtotal: " + precioProductos + "\n IVA    +21% \n Total: " + precioProductosConIva);
}


function ingresarProducto() {
  let nombreProducto = prompt("Nombre del producto");
  let precioProducto = prompt("Precio del producto");
  let codigoProducto = prompt("Codigo del producto");

  precioProducto = parseFloat(precioProducto);
  codigoProducto = parseInt(codigoProducto);

  alert('Se ingreso el producto: \n Nombre: ' + nombreProducto + '\n Precio: $' + precioProducto + '\n Codigo: ' + codigoProducto);

  return new Producto(nombreProducto, precioProducto, codigoProducto);
}

function agregarListaProductos(producto) {
  listadoProductos += '\n· ' + producto.nombre;
}

main();