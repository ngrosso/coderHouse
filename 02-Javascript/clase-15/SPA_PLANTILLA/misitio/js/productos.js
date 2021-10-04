// CLASE PRODUCTO
class Producto {
    //CONSTRUCTOR DE CLASE PRODUCTO
    constructor(data) {
        this.id = data.id
        this.nombre = data.nombre.toUpperCase();
        this.precio = parseFloat(data.precio);
        this.vendido = false;
    }
    //MÉTODO PARA SUMAR IVA
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    //MÉTODO PARA VENDER EL PRODUCTO
    vender() {
        this.vendido = true;
    }
}
// MODELO PRODUCTO
class ProductoModel {
    //CONSTRUCTOR DEL MODELO PRODUCTO
    constructor() {
        //OBTENEMOS EL ARRAY DE PRODUCTOS PARSEANDO DESDE EL JSON SI EXISTE
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        //USAMOS MAP PARA CREAR UN NUEVO ARRAY DE OBJETOS DE TIPO PRODUCTO
        this.productos = productos.map(producto => new Producto(producto));
    }
    //MÈTODO PARA GUARDAR EL ARRAY DE PRODUCTOS EN STORAGE
    guardarProductos() {
        localStorage.setItem('productos', JSON.stringify(this.productos));
    }
    //MÊTODO PARA AGREGAR UN PRODUCTO AL ARRAY DE PRODUCTOS
    agregarProducto(producto) {
        this.productos.push(new Producto(producto));
        this.guardarProductos();
    }
    //MÊTODO PARA ELIMINAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
    eliminarProducto(id) {
        this.productos = this.productos.filter(producto => producto.id !== id);
        this.guardarProductos();
    }
    //MÊTODO PARA BUSCAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
    buscarProducto(id) {
        return this.productos.find(producto => producto.id === id);
    }
}

// VIEW PRODUCTO
class ProductoView {
    //MÊTODO PARA CREAR LA VISTA DE AGREGAR PRODUCTO
    agregarProducto(padre, callback) {
        $(padre).html(`
            <section>
                <h1>AGREGAR PRODUCTO</h1>
                <input type ="text"   placeholder="Nombre">
                <input type ="number" placeholder="Precio">
                <button id="btnEnviar">ENVIAR</button>
            </section>
        `);
        $("#btnEnviar").click(callback);
    }
    //MÊTODO PARA CREAR LA VISTA DE LISTADO DE PRODUCTOS
    listarProductos(padre, data, callback) {
        let html = '';
        for (const producto of data) {
            html += `<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`;
        }
        $(padre).html(html);
        $(".btnComprar").click(callback);
    }
    //MÊTODO PARA CREAR LA VISTA DE BUSQUEDA DE PRODUCTO
    buscarProducto(padre, callback) {
        $(padre).html(`
            <section>
                <h1>BUSCAR PRODUCTO</h1>
                <input type ="number">
                <button id="btnBuscar">Buscar</button>
            </section>
        `);
        $("#btnBuscar").click(callback);
    }
}
// CONTROLLER PRODUCTO
class ProductoController {
    //CONSTRUCTOR DEL CONTROLADOR ASOCIANDO UN MODELO Y VISTA
    constructor(productoModel, productoView) {
        this.productoModel = productoModel;
        this.productoView = productoView;
    }
    //MÊTODO PARA GENERAR CONSTROLAR LA VISTA, EL MODELO Y EL EVENTO AL AGREGAR UN PRODUCTO
    agregar(app) {
        this.productoView.agregarProducto(app, (event) => {
            let hijos = $(event.target).parent().children();
            this.productoModel.agregarProducto({
                id: this.productoModel.productos.length + 1,
                nombre: hijos[1].value,
                precio: hijos[2].value,
            });
        });
    }
    //MÊTODO PARA GENERAR CONSTROLAR LA VISTA, EL MODELO Y EL EVENTO AL LISTAR PRODUCTOS
    listar(app) {
        this.productoView.listarProductos(app,
            this.productoModel.productos,
            (event) => {
                let hijos = $(event.target).parent().children();
                console.log(hijos[0].value);
            });
    }
    //MÊTODO PARA GENERAR CONSTROLAR LA VISTA, EL MODELO Y EL EVENTO AL BUSCAR UN PRODUCTO
    buscar(app) {
        this.productoView.buscarProducto(app, (event) => {
            let hijos = $(event.target).parent().children();
            let id = parseInt(hijos[1].value);
            let encontrado = this.productoModel.buscarProducto(id);
            console.log(encontrado);
        });
    }
}
//COMPONENTE A EMPLEAR CUANDO NO SE ENCUENTRA LA PAGINA SOLICITADA
const ErrorComponent = (padre) => {
    $(padre).html("<h2>Error 404</h2>");
}