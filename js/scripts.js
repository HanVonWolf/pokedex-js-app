let pokemonList = [
    {name:'Quaigsire', height: 1.4, type: ['water', 'ground']},
    {name: 'Phanpy', height: 0.5, type: ['ground']},
    {name: 'Bidoof', height:0.5, type: ['normal'] },
];

pokemonList.forEach(function(pokemon) {
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
//Previous loop but improved with a forEach loop

function divide (dividend, divisor) {
    if(divisor === 0) {
        return "You're trying to divide by zero"
}else{
    let result = dividend / divisor;
    return result;
}
}
