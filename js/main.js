

/*

http://pokeapi.co/docsv2

*/

// 1. Write an API call that gets all the berries and passes the response into a callback
function getAllBerries(){
	$.get("http://pokeapi.co/api/v2/berry/?limit=5&offset=20", function(response){
		 getAllBerriesCallback(response)
	});
}
// $.ajax({
// 				url: "https://pokeapi.co/api/v2/berry?limit=64",
// 				success: getAllBerriesCallback,
// 		});
// $.ajax({
// 				url: "https://pokeapi.co/api/v2/berry?limit=64",
// 				success: function(response){
// 						getAllBerriesCallback(response)
// 				}
// 		});
// $.get('https://pokeapi.co/api/v2/berry',  getAllBerriesCallback)
// $.get("http://pokeapi.co/api/v2/berry/?limit=20&offset=20", getAllBerriesCallback);

// 2. The call back should loop through the response and console.log every berry name
function getAllBerriesCallback(response){
	console.log(response.count);
	response.results.forEach(function(berry){
		console.log(berry.name);
	});
}

// 3. Write an API call that gets all the pokemon and passes the response into a callback
function getAllPokemon(){
	$.get("http://pokeapi.co/api/v2/pokemon/?limit=5", function(response){
		getAllPokemonCallback(response);
	});
}

// 4. The call back should loop through the response and console.log every pokemon name
function getAllPokemonCallback(response){
	response.results.forEach(function(pokemon){
		console.log(pokemon.name);
	});
}

// 5. Write an API call that gets all the Item and passes the response into a callback
function getAllItems(){
	$.get("http://pokeapi.co/api/v2/item/?limit=5", function(response){
		getAllItemsCallback(response)
	});
}

// 6. The call back should loop through the response and console.log every item name
function getAllItemsCallback(response){
	response.results.forEach(function(item){
		console.log(item.name);
	});
}

// 7. Write an API call that gets all the locations and passes the response into a callback
function getAllLocations(){
	$.get("http://pokeapi.co/api/v2/location/?limit=5", function(response){
		getAllLocationsCallback(response)
	});
}

// 8. The call back should loop through the response and console.log every Location name
function getAllLocationsCallback(response){
	response.results.forEach(function(location){
		console.log(location);
		console.log(location.name);
	});
}

// 9. Write an API call that gets a pokemon and passes the response into a callback
function getSinglePokemon(pokemonName){
	$.get("http://pokeapi.co/api/v2/pokemon/" + pokemonName, function(response){
		getSinglePokemonCallback(response);
	});
}

// 10. The call back should loop through the response and console.log the pokemon name
function getSinglePokemonCallback(response){
	// response.name.forEach(function(pokemonName){
	// 	console.log(pokemonName.name);
	// });
	var imageUrl = pokemonImage(response);
	console.log(imageUrl);
}

// 11.  Write a function that accepts a pokemon Object and returns the front_default sprite url
function pokemonImage(pokemon){
	return (pokemon.sprites.front_default);
}

getSinglePokemon("bulbasaur");

// 12.  Write a function that accepts a pokemon Object and returns an array of ability names
function pokemonAbilities(pokemon){
	var abilities = [];
	pokemon.abilities.forEach(function(ability){
		console.log(ability);
	});
}

pokemonAbilities("pikachu");

// 13.  Write a function that accepts a pokemon image url, pokemon name, and an array of abilities and adds to the page:
// - an <li> added to #pokemon-list
// - an <h1> witht their name
// - and <img> tag with their image url
// - an <ul> and <li> of abilities
function addPokemonToPage(pokemonName, pokemonImageUrl, abilities){

}

// 14.  When the getAllPokemonCallback is called it should now pass each pokemon into the getSinglePokemon function.  The getSinglePokemonCallback function should:
// - call gpokemonImage function
// - call pokemonAbilities function
// - call addPokemontoPage function

// 15.  Create a Pokemon object constructor that can accept a Pokemon's name, image url, and an array of abilities

// 16.  Create a global array of allPokemon to store pokemon in

// 17.  The getSinglePokemonCallback should
// - pass the necessary data to the Pokemon constructor
// - add it to the AllPokemon array
// - pass it to the addPokemonToPage function.

// 18.  Adjust the addPokemonToPage function to accept your Pokemon object instead of the 3 params.

// 19.  Restructure your app as an object literal POKEMONAPP
// - with all public methods
// -- so you can call POKEMONAPP.anymethod()
// --  make a property POKEMONAPP.allPokemon to hold the array of pokemon

// 20.  Change the getAllPokemon method to not make an API call and just return the array of pokemon if the API has already been called.

// 21.  Restructure your app as an object with
// - with only one public method
//	-- getAllPokemon

// 22.  Restructure your app as an object with public methods and private methods
// - (hint create an IIFE that returns an object with the public methods as closures)
// - public methods:
//	-- getAllBerries
//	-- getAllPokemon
// 	-- getAllItems
//	-- getAllLocations
// - and private methods:
//	-- getAllBerriesCallback
//  -- getAllPokemonCallback
// 	-- getAllItemsCallback
//  -- getAllLocationsCallback
//  -- getSinglePokemonCallback
//  -- pokemonImage
//  -- pokemonAbilities
//  -- addPokemonToPage

// 23.  Write an IIFE that accepts the $jquery object and window as parameters that wraps around your code to give it a private scope

// 24.  Make buttons and click events for each of the public methods

// 25.  Make form where you can enter a pokemon's name and submit the form to make an API call to show their info
