let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
};
}) ();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});