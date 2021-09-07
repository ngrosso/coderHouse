//  Objetivo del ejercicio:
//  Detectar si un usuario ya esta registrado o no. 
//  En caso negativo darle la posibilidad de que se registre. En caso afirmativo darle la bienvenida. 

class Usuario {
  constructor(usuario, nombre, apellido, edad) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let resp = confirm("Ya estas registrado ? ");
if (resp) {

  let usuario = prompt("Ingrese su usuario");
  let user = buscar_usuario(usuario);

  if (user != false) {

    alert("Bienvenido " + user.nombre + " " + user.apellido);

  } else {

    alert("El usuario no existe !");
  }

} else {

  let resp = confirm("Desea registrarse ?");
  if (resp) {

    let user = prompt("Ingrese usuario");
    let nombre = prompt("Ingrese nombre");
    let apellido = prompt("Ingrese apellido");
    let edad = prompt("Ingrese edad");

    let msj = checkear_datos(user, nombre, apellido, edad);

    if (msj == "") {

      let usuario_nuevo = new Usuario(user, nombre, apellido, parseInt(edad));

      guardar_usuario(usuario_nuevo);

      alert("Usuario registrado con exito");

    } else {

      alert(msj);

    }
  }
}

function checkear_datos(user, nombre, apellido, edad) {

  let msj = "";
  if ((user) && (nombre) && (apellido) && (edad)) {

    if (isNaN(parseInt(edad))) {

      msj = "No ingresate un numero en edad";

    }

    let dato = buscar_usuario(user);
    if (dato != false) {

      msj = "Ya existe el usuario";
    }

  }
  else {

    msj = "Debes ingresar todos los datos. ";

  }
  return msj;
}

function buscar_usuario(user) {

  if (!localStorage.getItem("listaUsuarios")) {
    return false;
  }

  let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
  let encontrado = false;
  let i = 0;

  while (!encontrado && i != almacenados.length) {

    if (almacenados[i].usuario == user) {

      encontrado = almacenados[i];

    }

    i++;

  }

  return encontrado;

}

function guardar_usuario(usuario_nuevo) {

  let item = localStorage.getItem("listaUsuarios");
  if (item) {

    let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    almacenados.push(usuario_nuevo);

    let almacenados_string = JSON.stringify(almacenados);
    localStorage.setItem("listaUsuarios", almacenados_string);

  } else {

    let almacenados = new Array();
    almacenados.push(usuario_nuevo);
    let almacenados_string = JSON.stringify(almacenados);
    localStorage.setItem("listaUsuarios", almacenados_string);
  }
}