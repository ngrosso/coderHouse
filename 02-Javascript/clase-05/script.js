//formas de inicializar un array
let arreglo = [];

arreglo[0] = "Ford";

let arreglo1 = new Array();

let shopping_list = ["Leche", "Pan", "Carne"];

console.log(shopping_list);
shopping_list.push("Agua"); // Lo pone en ultimo lugar
console.log(shopping_list);
shopping_list.unshift("Arroz"); // Lo pone en primer lugar
console.log(shopping_list);

shopping_list.pop(); // Elimina el ultimo elemento  del arreglo y lo devuelve "Agua"
shopping_list.shift(); // Elimina el primer elemento del arreglo y lo devuelve "Arroz" 

shopping_list.splice(1, 1); // Elimina el elemento en la posicion 1 y 1 elemento
shopping_list.splice(2, 2, "Pomelo"); // Elimina el elemento en la posicion 1 y lo reemplaza por "Pomelo"

shopping_list.sort(); // Ordena el arreglo alfabeticamente
shopping_list.reverse(); // Invierte el orden del arreglo

