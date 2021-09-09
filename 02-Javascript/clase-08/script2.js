let parWithId = document.getElementById('parWithId');
parWithId.style.textTransform = 'uppercase';

let paragraph = document.getElementsByTagName('p');
console.log(paragraph);
for (let i = 0 ; i < paragraph.length ; i++ ){

    paragraph[i].style.color = 'red' ;

}

let parWithClass = document.getElementsByClassName('parWithClass');

for (let i = 0 ; i < parWithClass.length ; i++ ){

    parWithClass[i].style.textDecoration = 'underline';

}

let parQuery = document.querySelector("p #parSpan");
parQuery.style.backgroundColor = '#5a5ada';
parQuery.style.color = 'yellow';

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);





