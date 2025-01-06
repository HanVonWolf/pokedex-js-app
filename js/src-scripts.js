let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
      pokemonList.push(pokemon);
  }

function getAll() {
    return pokemonList;
}

function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    let pokemonButton = document.createElement("button");
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add("btn", "btn-primary");

    listItem.appendChild(pokemonButton);
    pokemonList.appendChild(listItem); 
    pokemonButton.addEventListener('click', function(event) {
        showDetails(pokemon);
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
      item.type = details.type;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(title, text, img) {
    let modalTitle = document.querySelector("#pokemonModalLabel");
    let modalBody = document.querySelector(".modal-body");
    let pokemonHeight = document.querySelector("#pokemonHeight");
    let pokemonImage = document.querySelector("#pokemonImage");
    let pokemonType = document.querySelector("#pokemonType");

    modalTitle.innerText = title;
    pokemonHeight.innerText = text;
    pokemonImage.setAttribute('src', img);
    pokemonType.innerText = text;
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(
      pokemon.name,
      "Height: " + pokemon.height,
      pokemon.imageUrl,
      pokemon.type,
      "Type: " + pokemon.type,
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
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });

  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }