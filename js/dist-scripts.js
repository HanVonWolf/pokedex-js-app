let pokemonRepository=function(){let e=[];function t(t){e.push(t)}function n(){return e}function o(e){pokemonRepository.loadDetails(e).then(function(){var t,n,o;let i,r,l;t=e.name,n="Height: "+e.height,o=e.imageUrl,i=document.querySelector("#pokemonModalLabel"),document.querySelector(".modal-body"),r=document.querySelector("#pokemonHeight"),l=document.querySelector("#pokemonImage"),i.innerText=t,r.innerText=n,l.setAttribute("src",o),$("#pokemonModal").modal("show")})}return{getAll:n,add:t,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),i=document.createElement("li");i.classList.add("list-group-item");let r=document.createElement("button");r.innerText=t.name,r.classList.add("btn","btn-primary"),i.appendChild(r),n.appendChild(i),r.addEventListener("click",function(e){o(t)})},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function e(t){return fetch(t.detailsUrl).then(function(e){return e.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(e){console.error(e)})},showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});