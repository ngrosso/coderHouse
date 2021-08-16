console.log("-------------------------------------");
let numero = 93;
console.log(numero);
console.log("El tipo de "+numero+" es "+typeof(numero));
console.log("-------------------------------------");
let numero2 ="60";
console.log(numero2);
console.log("El tipo de " +numero2 +" es "+typeof(numero2));
console.log("-------------------------------------");
let booleano = true;
console.log(booleano);
console.log("Tipo del booleano es: "+typeof(booleano));
console.log("-------------------------------------");
let string2num = "123";
let string3num = "ab123";
let string4num = "123abc";
console.log("Es '123' pasado a numero NaN: "+isNaN(string2num));
console.log("Es 'ab123' pasado a numero NaN: "+isNaN(string3num));
console.log("Es '123abc' pasado a numero NaN: "+isNaN(string4num));
console.log("-------------------------------------");
let confirmacion = confirm("Acepta los terminos y condiciones?");
console.log("Valor de la confirmacion: "+confirmacion);
console.log("-------------------------------------");
let nombre = prompt("Por favor ingresa tu nombre");
console.log("Tu nombre es "+nombre);
console.log("-------------------------------------");
let age = 27
let hasDNI = true;
if (age > 18 && hasDNI) {
    console.log("Eres mayor de edad y tienes un DNI");
    alert("Podes pasar")
}else {
    console.log("Eres menor de edad y no tienes un DNI");
}
