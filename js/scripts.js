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
    pokemonButton.addEventListener('click', function () {
        showDetails(pokemon);
    });
    listPokemonItem.appendChild(pokemonButton);
    pokemonList.appendChild(listPokemonItem); 
}

function showDetails(pokemon) {
    console.log(pokemon.name);
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
};
}) ();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Pikachu", height: 0.3, type: ['electric'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});