//IIFE 
let pokemonRepository = (function () {
  //pokemon array
  let pokemonList = [];
  //pokeApi
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  let searchInput = document.querySelector('#search-input');


  //getAll() function to get pokemonList
  function getAll() {
      return pokemonList;
  }

  //add() funtion to add item to pokemonList
  function add(pokemon){
      //Validation of proper data input
      if (
          typeof pokemon === "object" &&
          "name" in pokemon 
      ) {
          pokemonList.push(pokemon);
      }else{
          console.log("failed to add pokemon")
      }     
  }

  //add each pokemon to HMTL doc
  function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement("li");
      listPokemon.classList.add("list-item-group");
      
      let button = document.createElement("button"); 
     
      button.classList.add("btn");
      button.classList.add("btn-primary");
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#exampleModal');

      //click event to log pokemon details
      button.addEventListener("click", function(event) {
          showDetails(pokemon)
      });

      button.innerText = pokemon.name;

      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      
  };

  //function using promise to load name and details forEach Pokemon
  function loadList(){
      return fetch(apiUrl).then(function(response) {
          return response.json();
      }).then(function(json) {
          json.results.forEach(function (item){
              let pokemon = {
                  name: item.name,
                  detailsUrl : item.url,
                  types: item.types
              };
              add(pokemon);
          });
      }).catch(function (e) {
          console.error(e);
      })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(title, text, img) {
    let modalTitle = document.querySelector("#pokemonModalLabel");
    let modalBody = document.querySelector(".modal-body");
    let pokemonHeight = document.querySelector("#pokemonHeight");
    let pokemonImage = document.querySelector("#pokemonImage");

    modalTitle.innerText = title;
    pokemonHeight.innerText = text;
    pokemonImage.setAttribute('src', img);
  }

  /*function showModal(title, text, img) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerText = '';
    modalContainer.classList.add('is-visible');
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal)
  
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = title;
  
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = text;

    let pokemonImage = document.createElement('img');
    pokemonImage.setAttribute('src', img);
    pokemonImage.setAttribute('width', '50%');
    pokemonImage.setAttribute('height', '50%');
  
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }
  
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  }); */

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(
      pokemon.name,
      "Height: " + pokemon.height,
      pokemon.imageUrl
      );
      $('#pokemonModal').modal('show');
    });
  }

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};
}) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });

//console.log(pokemonRepository.getAll());//
