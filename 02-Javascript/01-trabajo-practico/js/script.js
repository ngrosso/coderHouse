// Declaracion de la clase Producto
class Producto {
  constructor(nombre, precio, cantidad, id) {
    this.id = id || new Date().getTime();
    this.nombre = nombre.toUpperCase();
    this.precio = Number.parseFloat(precio);
    this.cantidad = Number.parseInt(cantidad);
  }

  getPrecioNeto() {
    return parseFloat(this.precio * this.cantidad);
  }
}

// Declaracion de variables globales
let precioProductos = 0;
let precioProductosConIva = 0;
let arrayProductos = [];
const MENSAJE_ERROR = 'Por favor, complete todos los campos';

// Funciones Auxiliares
function aplicarIva(precio) {
  return precio * 0.21;
}

function regenerarTicket(ticket) {
  // Borra el ticket anterior
  if (ticket.firstChild != null) {
    let child = ticket.lastElementChild;
    while (child) {
      ticket.removeChild(child);
      child = ticket.lastElementChild;
    }
  }
}

const precioFormatter = new Intl.NumberFormat('es-AR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function handleLocalStorage(arrayProductos) {
  let localStorage = window.localStorage;
  if (localStorage.getItem('productos') === null) {
    localStorage.setItem('productos', JSON.stringify(arrayProductos));
  } else {
    localStorage.removeItem('productos');
    localStorage.setItem('productos', JSON.stringify(arrayProductos));
  }
}
//FIN FUNCIONES AUXILIARES

// Inicializador usando localstorage
(() => {
  let arrayProductosLS = JSON.parse(localStorage.getItem('productos'));
  if (arrayProductosLS) {
    arrayProductosLS.forEach(producto => {
      let productObj = new Producto(producto.nombre, producto.precio, producto.cantidad, producto.id)
      arrayProductos.push(productObj);
      renderizarProducto(productObj);
    })
  }
  generarTicket();
})();

// Trigger del boton para agregar productos
$('#agregarProductoBtn').click(() => {
  let nombreProducto = $("#nombre").val();
  let precioProducto = $("#precio").val();
  let cantidadProducto = $("#cantidad").val();

  // Condiciones para validar campos
  if (nombreProducto === '' || precioProducto === '' || cantidadProducto === '') return alert(MENSAJE_ERROR);

  // Limpieza de campos
  $("#nombre").val('');
  $("#precio").val('');
  $("#cantidad").val('');

  // Creacion de objeto producto y agregado a array
  let producto = new Producto(nombreProducto, precioProducto, cantidadProducto);
  arrayProductos.push(producto);
  renderizarProducto(producto);
  generarTicket();
});

// Renderiza producto en el HTML
function renderizarProducto(producto) {
  $('#listaProductos').append(`
  <div class="productoContainer" id="container${producto.id}">
    <div class="productoContainer__nombre">${producto.nombre}</div>
    <div class="productoContainer__precio">${producto.precio}</div>
    <div class="productoContainer__cantidad">${producto.cantidad}</div>
    <div class="productoContainer__borrar">
      <button value="${producto.id}">X</button>
    </div>
  </div>
  `);

  estilizarProducto();
}

function estilizarProducto() {
  $('.productoContainer').css({
    "display": "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr",
    "grid-template-areas": '"nombre precio cantidad borrar"',
    "grid-template-rows": "1fr",
    "grid-gap": "10px",
    "border": "1px solid black",
    "padding": "10px"
  })

  $('.productoContainer__nombre').css({
    "grid-area": "nombre"
  })

  $('.productoContainer__precio').css({
    "grid-area": "precio"
  })

  $('.productoContainer__cantidad').css({
    "grid-area": "cantidad"
  })

  $('.productoContainer__borrar').css({
    "grid-area": "borrar",
  })

  $('.productoContainer__borrar button').css({
    "width": "100%",
    "height": "100%",
    "background-color": "red",
    "border": "2px solid black",
    "color": "white",
  })

  $('.productoContainer__borrar button').click((e) => {
    // Funcion para borrar un producto del array y del DOM
    e.preventDefault();
    let index = 0;
    let idBorrar = e.target.value;
    console.log($(`#${idBorrar}`).parent().parent());
    arrayProductos.forEach(producto => {
      if (producto.id == idBorrar) {
        $(`#container${idBorrar}`).remove()
        arrayProductos.splice(index, 1);
      }
      index++;
    })
    generarTicket();
  })
}

function generarTicket() {
  // Ordenamiento del array de productos por precio neto
  let ticket = document.getElementById('ticket');
  regenerarTicket(ticket);
  handleLocalStorage(arrayProductos);

  arrayProductos.sort((primerElemento, segundoElemento) => (primerElemento.getPrecioNeto() - segundoElemento.getPrecioNeto()));

  console.table(arrayProductos);

  // Revisa si existen productos en el array para generar ticket y crea o no los elementos li correspondientes
  if (arrayProductos.length > 0) {
    let ul = document.createElement('ul');
    arrayProductos.forEach(producto => {
      let li = document.createElement('li');
      li.innerText = `${producto.nombre} -------- Precio unitario: ${producto.precio} -------- Cantidad: ${producto.cantidad} -------- $${precioFormatter.format(producto.getPrecioNeto())}`
      ul.appendChild(li);
    });
    ticket.appendChild(ul);
  }

  // Calculo de precios subtotal, iva y total
  let subtotalElement = document.createElement('p');
  const subtotal = arrayProductos.reduce((total, producto) => total + producto.getPrecioNeto(), 0);
  subtotalElement.innerText = `Subtotal: $${subtotal}`;
  ticket.appendChild(subtotalElement);

  let ivaElement = document.createElement('p');
  ivaElement.innerText = `IVA +21%: $${precioFormatter.format(aplicarIva(subtotal))}`;
  ticket.appendChild(ivaElement);

  let totalElement = document.createElement('p');
  totalElement.innerText = `Total: $${precioFormatter.format(subtotal + aplicarIva(subtotal))}`;
  ticket.appendChild(totalElement);
}

