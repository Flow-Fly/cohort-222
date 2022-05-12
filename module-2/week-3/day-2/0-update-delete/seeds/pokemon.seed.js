const pokemons = require('../data/pokemons');
const Pokemon = require('../models/Pokemon.model');
require('../db');


const pokemonSeed = async () => {
  try {
    await Pokemon.create(pokemons);
    console.log(`${pokemons.length} pokemons created`)
  } catch(error){
    console.log(error);
  }
}

pokemonSeed();