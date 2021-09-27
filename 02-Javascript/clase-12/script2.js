//objetos a mostrar
let pokemon1 = new Pokemon(46, "Machop", "/images/46.png");
let pokemon2 = new Pokemon(66, "Paras", "/images/66.png");
let pokemon3 = new Pokemon(72, "Tentacool", "/images/72.png");

//arreglo que tiene los objetos
let arreglo_pokemon = new Array();
arreglo_pokemon.push(pokemon1);
arreglo_pokemon.push(pokemon2);
arreglo_pokemon.push(pokemon3);

$(document).ready(() => {

    for (let i = 0; i < arreglo_pokemon.length; i++) {
        let objeto_pokemon = arreglo_pokemon[i];
        $("#pokeCtn").append(`<div id="div${objeto_pokemon.id}">
                            <h2>  ${objeto_pokemon.getTitle()}</h2>
                            <image src = ${objeto_pokemon.image}> </image>                            
                            <button id="btn${objeto_pokemon.id}">Atrapalo</button>
                            </div>`);
        //Asociamos el evento a botón recién creado.
        $(`#btn${objeto_pokemon.id}`).on('click', function () {
            alert(`Atraste a  ${objeto_pokemon.name} !!!`);
            $(`#div${objeto_pokemon.id}`).fadeOut(1000);
        });

    }


})