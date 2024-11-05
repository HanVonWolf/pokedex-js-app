let pokemonRepository = (function () {
let pokemonList = [
    {name:'Quaigsire', height: 1.4, type: ['water', 'ground']},
    {name: 'Phanpy', height: 0.5, type: ['ground']},
    {name: 'Bidoof', height:0.5, type: ['normal'] },
];

function getAll() {
    return pokemonList;
}
    
function add(pokemon) {
    pokemonList.push(pokemon);
}

function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemonItem = document.createElement("li");
    let pokemonButton = document.createElement("button");
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add("button-class");
return {
    getAll: getAll,
    add: add,
}
}) ();

pokemonRepository.getAll().forEach(function(pokemon) {
    console.log('name:', pokemon.name);
    console.log('height:', pokemon.height);
    document.write('<p>' + pokemon.name + ' | Height: ' + pokemon.height + '</p>');
    if (pokemon.height >= 1) {
        document.write('Wow, that is a big Pokemon!');
    }
})

/*for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    console.log('name:', pokemon.name);
    console.log('height:', pokemon.height);
    document.write('<p>' + pokemon.name + ' | Height: ' + pokemon.height + '</p>');
    if (pokemon.height >= 1) {
        document.write('Wow, that is a big Pokemon!');
    } 
} */
//Previous loop now improved with a forEach loop


