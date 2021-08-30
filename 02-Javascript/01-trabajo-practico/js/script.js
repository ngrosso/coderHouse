let listadoProductos = 'Listado de productos:';

function main(){

  let precioProductos = 0;

  while(confirm("Desea ingresar producto?")){
    precioProductos += ingresarProducto();
  }

  console.log("Valor total de productos sin Iva "+precioProductos);
  console.log("Valor total de productos con Iva "+aplicarIva(precioProductos));

  alert(listadoProductos+ "\n\n Subtotal: "+precioProductos+"\n IVA    +21% \n Total: "+aplicarIva(precioProductos));
}


function ingresarProducto(){
 let nombreProducto = prompt("Ingrese el nombre del producto");
 let precioProducto = prompt("Precio del producto");
 let codigoProducto = prompt("Codigo del producto");

 precioProducto = parseFloat(precioProducto);
 codigoProducto = parseInt(codigoProducto);

 agregarListaProductos(nombreProducto);

 alert('Se ingreso el producto: \n Nombre: '+nombreProducto+'\n Precio: $'+precioProducto+'\n Codigo: '+codigoProducto);
 //TODO: return un objeto cuando se pueda aplicar con los datos del producto
 return precioProducto;
}

function aplicarIva(precio){
  return precio +(precio * 0.21);
}

function agregarListaProductos(producto){
  listadoProductos += '\n· '+producto;
}




main();