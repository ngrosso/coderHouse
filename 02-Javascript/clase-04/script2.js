const CURRENT_YEAR = new Date().getFullYear();

let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",

    drivingYears : function(){
        return CURRENT_YEAR - this.year;
    }
}

//se pueden agregar atributos a los objetos
car.fuel = "gasoline";

car.saleTitle = function(){
    return `${this.brand} ${this.model} ${this.year}`; 
}

function User(username,name,lastname,email){
    this.username = username;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = 1234;
}

let usuario = prompt("Ingrese su nombre de usuario");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let correo = prompt("Ingrese su correo");

let usuario3 = new User(usuario,nombre,apellido,correo);

console.log("name" in usuario3);

for( const propiedad in usuario3){
    console.log(usuario3[propiedad]);
}