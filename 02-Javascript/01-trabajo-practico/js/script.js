// Declaracion de variables globales
let precioProductos = 0;
let precioProductosConIva = 0;
let arrayProductos = [];
const MENSAJE_ERROR = 'Por favor, complete todos los campos';

// Trigger del boton para agregar productos
function agregarProducto() {
  let nombreProducto = document.getElementById("nombre").value;
  let precioProducto = document.getElementById("precio").value;
  let cantidadProducto = document.getElementById("cantidad").value;

  // Condiciones para validar campos
  if (nombreProducto === '' || precioProducto === '' || cantidadProducto === '') return alert(MENSAJE_ERROR);

  // Limpieza de campos
  document.getElementById("nombre").value = '';
  document.getElementById("precio").value = '';
  document.getElementById("cantidad").value = '';

  // Creacion de objeto producto y agregado a array
  let producto = new Producto(nombreProducto, precioProducto, cantidadProducto);
  console.log(producto);
  arrayProductos.push(producto);
  renderizarProducto(producto);
  generarTicket();
}

// Renderiza producto en el HTML
function renderizarProducto(producto) {
  let divListaProductos = document.getElementById('listaProductos');

  let divContenedor = document.createElement('div');
  divContenedor.style.display = 'grid';
  divContenedor.style.gridTemplateAreas = '"nombre precio cantidad borrar"';
  divContenedor.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  divContenedor.style.gridTemplateRows = '1fr';
  divContenedor.style.gridGap = '10px';
  divContenedor.style.border = '1px solid black';
  divContenedor.style.padding = '10px';

  let divNombre = document.createElement('div');
  divNombre.style.gridArea = 'nombre';
  divNombre.innerText = producto.nombre;

  let divPrecio = document.createElement('div');
  divPrecio.style.gridArea = 'precio';
  divPrecio.innerText = producto.precio;

  let divCantidad = document.createElement('div');
  divCantidad.style.gridArea = 'cantidad';
  divCantidad.innerText = producto.cantidad;

  let buttonBorrar = document.createElement('button');
  buttonBorrar.style.gridArea = 'borrar';
  buttonBorrar.innerText = 'X';
  buttonBorrar.addEventListener('click', () => {
    // Funcion para borrar un producto del array y del DOM
    divListaProductos.removeChild(divContenedor);
    let idBorrar = producto.id;
    let index = 0;
    arrayProductos.forEach(producto => {
      if (producto.id === idBorrar) {
        arrayProductos.splice(index, 1);
      }
      index++;
    })
    generarTicket();
  });

  divContenedor.appendChild(divNombre);
  divContenedor.appendChild(divPrecio);
  divContenedor.appendChild(divCantidad);
  divContenedor.appendChild(buttonBorrar);

  divListaProductos.appendChild(divContenedor);
}

function generarTicket() {
  // Ordenamiento del array de productos por precio neto
  arrayProductos.sort((primerElemento, segundoElemento) => (primerElemento.getPrecioNeto() - segundoElemento.getPrecioNeto()));

  console.table(arrayProductos);

  let ticket = document.getElementById('ticket');

  regeneraTicket(ticket);

  // Revisa si existen productos en el array para generar ticket y crea o no los elementos li correspondientes
  if (arrayProductos.length > 0) {
    let ul = document.createElement('ul');
    arrayProductos.forEach(producto => {
      let li = document.createElement('li');
      li.innerText = `${producto.nombre} -------- Precio unitario: ${producto.precio} -------- Cantidad: ${producto.cantidad} -------- $${producto.getPrecioNeto()}`
      ul.appendChild(li);
    });
    ticket.appendChild(ul);
  } else {
    ticket.innerText = 'No hay productos';
  }

  // Calculo de precios subtotal, iva y total
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

// Funciones Auxiliares
function aplicarIva(precio) {
  return precio * 0.21;
}

function regeneraTicket(ticket) {
  // Borra el ticket anterior
  if (ticket.firstChild != null) {
    let child = ticket.lastElementChild;
    while (child) {
      ticket.removeChild(child);
      child = ticket.lastElementChild;
    }
  }
}

// Declaracion de la clase Producto
class Producto {
  constructor(nombre, precio, cantidad) {
    this.id = new Date().getTime();
    this.nombre = nombre.toUpperCase();
    this.precio = Number.parseFloat(precio);
    this.cantidad = Number.parseInt(cantidad);
  }
  getPrecioNeto() {
    return parseFloat(this.precio * this.cantidad);
  }
}