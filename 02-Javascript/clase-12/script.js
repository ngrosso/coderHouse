//objetos a mostrar
let pokemon1 = new Pokemon(46,"Machop","/images/46.png");
let pokemon2 = new Pokemon(66,"Paras","/images/66.png");
let pokemon3 = new Pokemon(72,"Tentacool","/images/72.png");

//arreglo que tiene los objetos
let arreglo_pokemon = new Array();
arreglo_pokemon.push(pokemon1);
arreglo_pokemon.push(pokemon2);
arreglo_pokemon.push(pokemon3);

//caja vacia donde voy a insertar las nuevas componentes
let pokeCtn = document.getElementById('pokeCtn');

//recorro el arreglo y agrego las nuevas componentes
for (let i = 0;i<arreglo_pokemon.length;i++){

    let objeto_pokemon = arreglo_pokemon[i];
    addToDOM(objeto_pokemon);

}


function addToDOM(pokemon){
    //creo una caja
    let ctn = document.createElement('div');

    //creo un titulo
    let name = document.createElement('h2');

    //le seteo el texto
    name.textContent = pokemon.getTitle();

    //creo una imagen
    let img = document.createElement('img');
    //seteo la ruta
    img.setAttribute('src', pokemon.image);

    //agrego el titulo a la caja nueva
    ctn.appendChild(name);

    //agrego la imagen a la caja nueva
    ctn.appendChild(img);
    
    //seteo evento para cuando paso por arriba de la caja 
    ctn.addEventListener('mouseover', () => {
        ctn.style.backgroundColor = "#ff4f4f";
    })    
   
     //seteo evento para cuando salgo  de la caja 
    ctn.addEventListener('mouseout', () => {
        ctn.style.backgroundColor = "#ffffff";
    })

    // agrego la nueva caja a la caja exitente en html
    pokeCtn.appendChild(ctn);
}